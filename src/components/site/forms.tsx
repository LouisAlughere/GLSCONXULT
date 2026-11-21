import { useState, type FormEvent } from "react";
import { CITIES, SERVICES } from "@/data/content";
import { Field, fieldClass } from "./ui";

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function refCode(prefix: string) {
  return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function FlightForm() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState(CITIES[0] ?? "London");
  const [date, setDate] = useState("");
  const [ret, setRet] = useState("");
  const [trip, setTrip] = useState<"oneway" | "round">("round");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState<string | null>(null);

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (departure.trim().length < 2) next.departure = "Enter a departure city.";
    if (!arrival) next.arrival = "Choose an arrival destination.";
    if (!date) next.date = "Choose a preferred date.";
    if (trip === "round" && !ret) next.ret = "Choose a return date.";
    if (trip === "round" && date && ret && ret < date) next.ret = "Return must be on or after departure.";
    if (name.trim().length < 2) next.name = "Enter your name.";
    if (!validEmail(email)) next.email = "Enter a valid email.";
    if (phone.replace(/\D/g, "").length < 8) next.phone = "Enter a reachable phone number.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const id = refCode("FLT");
    const payload = { id, departure, arrival, date, ret: trip === "round" ? ret : "", trip, name, email, phone };
    const existing = JSON.parse(localStorage.getItem("glsconxult-flights") || "[]") as unknown[];
    localStorage.setItem("glsconxult-flights", JSON.stringify([payload, ...existing].slice(0, 20)));
    setDone(id);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-line bg-card p-6" role="status">
        <p className="text-sm font-semibold tracking-widest text-brand-deep uppercase">Enquiry received</p>
        <h3 className="mt-2 font-display text-3xl font-medium">We have your route</h3>
        <p className="mt-2 text-muted">
          Reference <span className="font-semibold text-ink">{done}</span>. A coordinator will reply with fare options. This form does not issue a ticket.
        </p>
        <button type="button" className="mt-5 min-h-12 rounded-full border border-line px-5 font-semibold" onClick={() => setDone(null)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 rounded-3xl border border-line bg-card p-5 sm:p-6" noValidate>
      <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Trip type">
        {(
          [
            ["round", "Round trip"],
            ["oneway", "One way"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={trip === value}
            onClick={() => setTrip(value)}
            className={`min-h-12 rounded-xl text-sm font-semibold ${trip === value ? "bg-ink text-paper" : "bg-paper text-ink"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Departure city" htmlFor="fl-from" error={errors.departure}>
          <input id="fl-from" className={fieldClass} autoComplete="address-level2" value={departure} onChange={(e) => setDeparture(e.target.value)} placeholder="Lagos, Accra, Delhi…" />
        </Field>
        <Field label="Arrival destination" htmlFor="fl-to" error={errors.arrival}>
          <select id="fl-to" className={fieldClass} value={arrival} onChange={(e) => setArrival(e.target.value)}>
            {CITIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date" htmlFor="fl-date" error={errors.date}>
          <input id="fl-date" type="date" className={fieldClass} value={date} onChange={(e) => setDate(e.target.value)} />
        </Field>
        {trip === "round" ? (
          <Field label="Return date" htmlFor="fl-ret" error={errors.ret}>
            <input id="fl-ret" type="date" className={fieldClass} value={ret} onChange={(e) => setRet(e.target.value)} />
          </Field>
        ) : (
          <div className="hidden sm:block" />
        )}
        <Field label="Full name" htmlFor="fl-name" error={errors.name}>
          <input id="fl-name" className={fieldClass} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Email" htmlFor="fl-email" error={errors.email}>
          <input id="fl-email" type="email" inputMode="email" autoComplete="email" className={fieldClass} value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="Phone" htmlFor="fl-phone" error={errors.phone}>
          <input id="fl-phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
      </div>
      <button type="submit" className="min-h-12 rounded-full bg-brand font-semibold text-ink">
        Submit flight enquiry
      </button>
    </form>
  );
}

export function ContactForm({ service, setService }: { service: string; setService: (s: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState<string | null>(null);

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Enter your full name.";
    if (!validEmail(email)) next.email = "Enter a valid email.";
    if (phone.replace(/\D/g, "").length < 8) next.phone = "Enter a phone number.";
    if (!service) next.service = "Choose a service.";
    if (message.trim().length < 12) next.message = "Tell us a little more — at least a sentence.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const id = refCode("ENQ");
    const payload = { id, name, email, phone, service, message, at: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("glsconxult-enquiries") || "[]") as unknown[];
    localStorage.setItem("glsconxult-enquiries", JSON.stringify([payload, ...existing].slice(0, 30)));
    setDone(id);
    setMessage("");
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-line bg-card p-6" role="status">
        <p className="text-sm font-semibold tracking-widest text-brand-deep uppercase">Enquiry sent</p>
        <h3 className="mt-2 font-display text-3xl font-medium">Thank you, {name.split(" ")[0]}</h3>
        <p className="mt-2 text-muted">
          Reference <span className="font-semibold text-ink">{done}</span>. We reply by email on business days. Nothing was sent to an outside server — this preview keeps your note on this device.
        </p>
        <button type="button" className="mt-5 min-h-12 rounded-full bg-ink px-5 font-semibold text-paper" onClick={() => setDone(null)}>
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form id="enquiry-form" onSubmit={submit} className="flex flex-col gap-4" noValidate>
      <Field label="Full name" htmlFor="ct-name" error={errors.name}>
        <input id="ct-name" className={fieldClass} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" htmlFor="ct-email" error={errors.email}>
          <input id="ct-email" type="email" inputMode="email" autoComplete="email" className={fieldClass} value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="Phone number" htmlFor="ct-phone" error={errors.phone}>
          <input id="ct-phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
      </div>
      <Field label="Selected service" htmlFor="ct-service" error={errors.service}>
        <select id="ct-service" className={fieldClass} value={service} onChange={(e) => setService(e.target.value)}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field label="Message" htmlFor="ct-message" error={errors.message}>
        <textarea id="ct-message" rows={5} className={`${fieldClass} min-h-32 resize-y`} value={message} onChange={(e) => setMessage(e.target.value)} />
      </Field>
      <button type="submit" className="min-h-12 rounded-full bg-brand font-semibold text-ink">
        Submit enquiry
      </button>
    </form>
  );
}
