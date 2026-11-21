import { useEffect, useMemo, useRef, useState } from "react";
import { format } from "date-fns";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { SERVICES, TIMES } from "@/data/content";
import { COOLDOWN_MS, NAME_PATTERN, PHONE_PATTERN, sanitizeText } from "./form-guard";
import { Field, fieldClass } from "./ui";

type Step = "date" | "time" | "details" | "done";

type Booking = {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
};

const STEPS: { id: Step; label: string }[] = [
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  { id: "details", label: "Details" },
];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function isSelectable(date: Date) {
  const day = date.getDay();
  if (day === 0 || day === 6) return false;
  const diff = Math.round((startOfDay(date).getTime() - startOfDay(new Date()).getTime()) / 86400000);
  return diff >= 1 && diff <= 42;
}

function takenSlots(iso: string) {
  let h = 0;
  for (const c of iso) h = (h * 33 + c.charCodeAt(0)) >>> 0;
  const a = TIMES[h % TIMES.length] ?? TIMES[0];
  const b = TIMES[(h >> 3) % TIMES.length] ?? TIMES[1];
  return new Set(a === b ? [a] : [a, b]);
}

function refCode() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `GLS-${n}`;
}

export function BookingDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [cursor, setCursor] = useState(() => {
    const now = new Date();
    return { y: now.getFullYear(), m: now.getMonth() };
  });
  const [step, setStep] = useState<Step>("date");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<string>(SERVICES[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [booking, setBooking] = useState<Booking | null>(null);
  const [locked, setLocked] = useState(false);
  const trap = useRef<HTMLInputElement>(null);
  const busy = useRef(false);

  useEffect(() => {
    if (!open) return;
    busy.current = false;
    setLocked(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const cells = useMemo(() => {
    const first = new Date(cursor.y, cursor.m, 1);
    const pad = (first.getDay() + 6) % 7;
    const count = new Date(cursor.y, cursor.m + 1, 0).getDate();
    const days: Array<Date | null> = Array.from({ length: pad }, () => null);
    for (let d = 1; d <= count; d += 1) days.push(new Date(cursor.y, cursor.m, d));
    return days;
  }, [cursor]);

  if (!open) return null;

  const iso = date ? format(date, "yyyy-MM-dd") : "";
  const blocked = iso ? takenSlots(iso) : new Set<string>();

  function shiftMonth(delta: number) {
    const next = new Date(cursor.y, cursor.m + delta, 1);
    setCursor({ y: next.getFullYear(), m: next.getMonth() });
  }

  function confirm() {
    if (locked || busy.current) return;
    if (trap.current && trap.current.value.trim()) return;
    const cleanName = sanitizeText(name);
    const cleanEmail = sanitizeText(email);
    const cleanPhone = sanitizeText(phone);
    const cleanInterest = sanitizeText(interest);
    const next: Record<string, string> = {};
    if (!new RegExp(NAME_PATTERN).test(cleanName)) next.name = "Enter your full name using letters only.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) next.email = "Enter a valid email address.";
    if (!new RegExp(PHONE_PATTERN).test(cleanPhone)) next.phone = "Enter a phone number we can reach.";
    setErrors(next);
    if (Object.keys(next).length || !date || !time) return;
    // No card data is collected here. When checkout is added, redirect to the
    // gateway's hosted page and use only a public key (Paystack pk_…,
    // Flutterwave FLWPUBK_…, or Stripe pk_…). Never put a secret key in this file.
    busy.current = true;
    setLocked(true);
    window.setTimeout(() => setLocked(false), COOLDOWN_MS);
    const record: Booking = {
      id: refCode(),
      date: iso,
      time,
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      interest: cleanInterest,
    };
    const existing = JSON.parse(localStorage.getItem("glsconxult-bookings") || "[]") as Booking[];
    localStorage.setItem("glsconxult-bookings", JSON.stringify([record, ...existing].slice(0, 20)));
    setBooking(record);
    setStep("done");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="presentation">
      <button type="button" className="absolute inset-0 bg-ink/50" aria-label="Close booking" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative z-10 flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-card shadow-xl sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-brand-deep uppercase">Consultation</p>
            <h2 id="booking-title" className="font-display text-2xl font-medium text-ink">
              Strategy session
            </h2>
            <p className="text-sm text-muted">45 minutes with a counsellor</p>
          </div>
          <button type="button" onClick={onClose} className="inline-flex size-11 items-center justify-center rounded-full border border-line" aria-label="Close">
            <X className="size-5" />
          </button>
        </div>

        {step !== "done" ? (
          <ol className="grid grid-cols-3 gap-1 px-5 pt-4">
            {STEPS.map((s, i) => {
              const active = STEPS.findIndex((x) => x.id === step);
              const done = i < active;
              return (
                <li key={s.id} className="text-center">
                  <span
                    className={`mx-auto flex size-8 items-center justify-center rounded-full text-sm font-semibold ${
                      i === active ? "bg-brand text-ink" : done ? "bg-ink text-paper" : "bg-paper text-muted"
                    }`}
                  >
                    {done ? <Check className="size-4" /> : i + 1}
                  </span>
                  <span className="mt-1 block text-xs text-muted">{s.label}</span>
                </li>
              );
            })}
          </ol>
        ) : null}

        <div className="overflow-y-auto px-5 py-4">
          {step === "date" ? (
            <div>
              <div className="mb-3 flex items-center justify-between">
                <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-line" aria-label="Previous month" onClick={() => shiftMonth(-1)}>
                  <ChevronLeft className="size-5" />
                </button>
                <p className="font-medium tabular-nums">{format(new Date(cursor.y, cursor.m, 1), "MMMM yyyy")}</p>
                <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-line" aria-label="Next month" onClick={() => shiftMonth(1)}>
                  <ChevronRight className="size-5" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                  <span key={d} className="py-1">
                    {d}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {cells.map((day, i) => {
                  if (!day) return <span key={`e-${i}`} />;
                  const selectable = isSelectable(day);
                  const selected = date && startOfDay(date).getTime() === startOfDay(day).getTime();
                  return (
                    <button
                      key={day.toISOString()}
                      type="button"
                      disabled={!selectable}
                      onClick={() => {
                        setDate(day);
                        setTime(null);
                      }}
                      className={`min-h-11 rounded-xl text-sm tabular-nums ${
                        selected ? "bg-brand font-semibold text-ink" : selectable ? "bg-paper text-ink" : "text-muted/40"
                      }`}
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-sm text-muted">Weekdays for the next six weeks. Weekends are closed.</p>
            </div>
          ) : null}

          {step === "time" && date ? (
            <div>
              <p className="mb-3 text-sm text-muted">{format(date, "EEEE, d MMMM yyyy")}</p>
              <div className="grid grid-cols-2 gap-2">
                {TIMES.map((slot) => {
                  const off = blocked.has(slot);
                  const selected = time === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={off}
                      onClick={() => setTime(slot)}
                      className={`min-h-12 rounded-xl border text-sm font-medium tabular-nums ${
                        selected ? "border-ink bg-ink text-paper" : off ? "border-line text-muted/50" : "border-line bg-card text-ink"
                      }`}
                    >
                      {slot}
                      {off ? " · taken" : ""}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {step === "details" ? (
            <form
              className="flex flex-col gap-3"
              onSubmit={(event) => {
                event.preventDefault();
                confirm();
              }}
            >
              <input ref={trap} type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <Field label="Full name" htmlFor="bk-name" error={errors.name}>
                <input id="bk-name" name="name" required maxLength={80} pattern={NAME_PATTERN} className={fieldClass} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field label="Email" htmlFor="bk-email" error={errors.email}>
                <input id="bk-email" name="email" type="email" required maxLength={120} inputMode="email" autoComplete="email" className={fieldClass} value={email} onChange={(e) => setEmail(e.target.value)} />
              </Field>
              <Field label="Phone" htmlFor="bk-phone" error={errors.phone}>
                <input id="bk-phone" name="phone" type="tel" required maxLength={24} pattern={PHONE_PATTERN} inputMode="tel" autoComplete="tel" className={fieldClass} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </Field>
              <Field label="What should we prepare?" htmlFor="bk-interest">
                <select id="bk-interest" name="interest" required className={fieldClass} value={interest} onChange={(e) => setInterest(e.target.value)}>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <button type="submit" disabled={locked} className="min-h-12 rounded-full bg-ink font-semibold text-paper disabled:opacity-60">
                {locked ? "Please wait…" : "Confirm booking"}
              </button>
            </form>
          ) : null}

          {step === "done" && booking ? (
            <div className="py-4 text-center">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand text-ink">
                <Check className="size-7" />
              </span>
              <h3 className="mt-4 font-display text-3xl font-medium">You are booked</h3>
              <p className="mt-2 text-muted">
                {booking.name}, a counsellor will write to {booking.email}. Reference{" "}
                <span className="font-semibold text-ink tabular-nums">{booking.id}</span>.
              </p>
              <dl className="mx-auto mt-5 max-w-xs space-y-2 text-left text-sm">
                <div className="flex justify-between gap-3 border-b border-line py-2">
                  <dt className="text-muted">When</dt>
                  <dd className="font-medium">{format(new Date(booking.date), "d MMM yyyy")} · {booking.time}</dd>
                </div>
                <div className="flex justify-between gap-3 py-2">
                  <dt className="text-muted">Focus</dt>
                  <dd className="text-right font-medium">{booking.interest}</dd>
                </div>
              </dl>
            </div>
          ) : null}
        </div>

        <div className="flex gap-2 border-t border-line px-5 py-4">
          {step === "time" || step === "details" ? (
            <button
              type="button"
              className="min-h-12 flex-1 rounded-full border border-line font-semibold"
              onClick={() => setStep(step === "time" ? "date" : "time")}
            >
              Back
            </button>
          ) : null}
          {step === "date" ? (
            <button type="button" disabled={!date} onClick={() => setStep("time")} className="min-h-12 flex-1 rounded-full bg-brand font-semibold text-ink disabled:opacity-40">
              Choose a time
            </button>
          ) : null}
          {step === "time" ? (
            <button type="button" disabled={!time} onClick={() => setStep("details")} className="min-h-12 flex-1 rounded-full bg-brand font-semibold text-ink disabled:opacity-40">
              Your details
            </button>
          ) : null}
          {step === "done" ? (
            <button type="button" onClick={onClose} className="min-h-12 flex-1 rounded-full bg-ink font-semibold text-paper">
              Close
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
