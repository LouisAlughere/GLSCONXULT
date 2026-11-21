import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Mail, Star } from "lucide-react";
import {
  CHECKLIST,
  DESTINATIONS,
  EMAIL,
  FAQS,
  HOUSING,
  PHONE_DISPLAY,
  PROGRAMMES,
  SCHOLARSHIPS,
  STORIES,
  VISA_STEPS,
  WHATSAPP_URL,
} from "@/data/content";
import { Header, WhatsAppButton } from "./Header";
import { SiteFooter } from "./Footer";
import { BookingDialog } from "./BookingDialog";
import { ContactForm, FlightForm } from "./forms";
import { SectionIntro, EmailLink } from "./ui";

export function HomePage() {
  const [booking, setBooking] = useState(false);
  const [service, setService] = useState("Study Abroad Admissions");
  const [visaStep, setVisaStep] = useState(0);
  const [story, setStory] = useState(0);
  const [faq, setFaq] = useState(0);
  const [checks, setChecks] = useState<string[]>([]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const id = href.startsWith("#")
        ? href.slice(1)
        : href.startsWith("/#")
          ? href.slice(2)
          : "";
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    document.addEventListener("click", onClick, true);
    const initial = window.location.hash.slice(1);
    if (initial) document.getElementById(initial)?.scrollIntoView();
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("glsconxult-checklist") || "[]") as string[];
      if (Array.isArray(saved)) setChecks(saved);
    } catch {
      setChecks([]);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => setStory((n) => (n + 1) % STORIES.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  function enquire(next: string) {
    setService(next);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("ct-service")?.focus(), 450);
  }

  function toggleCheck(id: string) {
    setChecks((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem("glsconxult-checklist", JSON.stringify(next));
      return next;
    });
  }

  const activeStory = STORIES[story] ?? STORIES[0];

  return (
    <div className="pb-24">
      <Header onBook={() => setBooking(true)} />
      <main>
        <section id="home">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-6">
              <h1 className="font-display text-4xl leading-tight font-medium text-ink sm:text-6xl">
                Study Abroad, scholarships, admission and relocation services.
              </h1>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setBooking(true)} className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 font-semibold text-ink">
                  Book a consultation
                </button>
                <EmailLink className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-card px-6 font-semibold text-ink">
                  <Mail className="size-4" aria-hidden="true" />
                  Email us
                </EmailLink>
                <button type="button" onClick={() => enquire("Study Abroad Admissions")} className="inline-flex min-h-12 items-center justify-center rounded-full px-2 font-semibold text-brand-deep">
                  Submit enquiry
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"
                  alt="University campus building in daylight"
                  className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[5/4]"
                />
                <div className="absolute top-4 left-4 flex items-center gap-3 rounded-2xl bg-card/95 p-3 pr-4 shadow-lg">
                <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card">
                  <img src="/logo.jpg" alt="" className="size-full scale-150 object-cover" />
                </span>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-brand-deep uppercase">Official mark</p>
                    <p className="font-medium">Global Study Consultancy</p>
                  </div>
                </div>
                <div className="absolute right-4 bottom-4 left-4 rounded-2xl bg-ink p-4 text-paper sm:left-auto sm:max-w-xs">
                  <p className="font-display text-2xl font-medium">One file. Eight countries.</p>
                  <p className="mt-1 text-sm text-paper/80">Bachelor’s through PhD, plus diplomas and foundation routes.</p>
                </div>
              </div>
            </div>
          </div>
          <dl className="border-y border-line bg-card">
            <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
              {[
                ["08", "Study destinations"],
                ["05", "Programme levels"],
                ["45 min", "Strategy session"],
                ["01", "Counsellor, start to arrival"],
              ].map(([n, label]) => (
                <div key={label} className="border-line px-4 py-5 sm:border-l first:sm:border-l-0">
                  <dt className="font-display text-3xl font-medium text-ink tabular-nums">{n}</dt>
                  <dd className="mt-1 text-sm text-muted">{label}</dd>
                </div>
              ))}
            </div>
          </dl>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
              alt="Students working together on a campus lawn"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <SectionIntro
              kicker="About us"
              title="A consultancy that edits before it encourages."
              lede="Families come to GLSCONXULT when the brochures disagree. We read grades, money, and timing together, then recommend a route you can actually finish."
            />
            <ol className="mt-8 space-y-5">
              {[
                ["Listen first", "Grades, budget, dependants, and the month you can leave. No shortlist before that."],
                ["Name the constraint", "If funds, a subject gap, or a visa rule blocks a dream campus, we say which one."],
                ["Stay through arrival", "The same desk handles the offer, the visa file, the flight enquiry, and the room."],
              ].map(([title, copy], i) => (
                <li key={title} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-display text-2xl text-brand-deep tabular-nums">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium">{title}</h3>
                    <p className="mt-1 text-muted">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="services" className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <SectionIntro
              kicker="Our services"
              title="Seven pieces of the move, one desk."
              lede="Open a service to read how it works, or send an enquiry with that service already selected."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["01", "Study Abroad Admissions", "admissions", "Study Abroad Admissions"],
                ["02", "Student Visa Assistance", "visa", "Student Visa Processing"],
                ["03", "Educational Counselling", "counselling", "Educational & Career Counselling"],
                ["04", "Scholarships", "scholarships", "Scholarship Assistance"],
                ["05", "Flight Booking", "flights", "International Flight Bookings"],
                ["06", "Accommodation", "accommodation", "Student Accommodation"],
                ["07", "Pre-departure Support", "predeparture", "Pre-departure Support"],
              ].map(([n, title, id, enquiry]) => (
                <article
                  key={id}
                  className={`rounded-3xl border border-line p-5 ${
                    id === "admissions" || id === "predeparture" ? "sm:col-span-2" : ""
                  }`}
                >
                  <p className="font-display text-3xl text-brand tabular-nums">{n}</p>
                  <h3 className="mt-3 text-2xl font-medium">{title}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href={`#${id}`} className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-deep">
                      Read the brief <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                    </a>
                    <button type="button" onClick={() => enquire(enquiry)} className="inline-flex min-h-11 items-center text-sm font-semibold text-ink">
                      Enquire
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionIntro
                kicker="Study abroad admissions"
                title="Bachelor’s, master’s, PhD, diplomas, and foundation."
                lede="We build a shortlist of programmes that match the transcript you have, not the ranking you saw on a poster."
              />
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {PROGRAMMES.map((p) => (
                  <li key={p.title} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
                    <h3 className="font-medium">{p.title}</h3>
                    <p className="text-muted">{p.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80"
              alt="Lecture hall with students seated in tiered rows"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </div>
        </section>

        <section id="destinations" className="bg-ink py-16 text-paper lg:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-sm font-semibold tracking-widest text-brand uppercase">Study destinations</p>
            <h2 className="mt-2 max-w-xl font-display text-3xl font-medium sm:text-4xl">Eight countries we actually file for.</h2>
            <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
              {DESTINATIONS.map((d) => (
                <article key={d.code} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-auto">
                  <div className="relative">
                    <img src={d.image} alt={`${d.name} cityscape`} className="aspect-[4/5] w-full rounded-3xl object-cover" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-card px-2 py-1 text-xs font-semibold text-ink">
                      <img src={d.flag} alt="" className="h-4 w-6 rounded-sm object-cover" />
                      {d.code}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium">{d.name}</h3>
                  <p className="text-sm text-brand">{d.city}</p>
                  <p className="mt-1 text-sm text-paper/75">{d.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="visa" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <SectionIntro
            kicker="Student visa assistance"
            title="A file with six visible steps."
            lede="We prepare the application. The visa decision belongs to the embassy or immigration authority — we do not promise an outcome."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[16rem_1fr]">
            <div className="flex gap-2 overflow-x-auto lg:flex-col" role="tablist" aria-label="Visa steps">
              {VISA_STEPS.map((step, i) => (
                <button
                  key={step.n}
                  type="button"
                  role="tab"
                  aria-selected={visaStep === i}
                  onClick={() => setVisaStep(i)}
                  className={`min-h-12 shrink-0 rounded-full px-4 text-left text-sm font-semibold lg:rounded-2xl lg:px-4 ${
                    visaStep === i ? "bg-ink text-paper" : "bg-card text-ink"
                  }`}
                >
                  {step.n} {step.title}
                </button>
              ))}
            </div>
            <div className="rounded-3xl border border-line bg-card p-6 sm:p-10" role="tabpanel">
              <p className="font-display text-5xl text-brand tabular-nums">{VISA_STEPS[visaStep]?.n}</p>
              <h3 className="mt-3 text-3xl font-medium">{VISA_STEPS[visaStep]?.title}</h3>
              <p className="mt-3 max-w-xl text-lg text-muted">{VISA_STEPS[visaStep]?.copy}</p>
            </div>
          </div>
        </section>

        <section id="counselling" className="bg-brand-soft py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
            <figure>
              <img
                src="/counselling.jpg"
                alt="Gloria Chinweike, Director and Educational consultant"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
              <figcaption className="mt-4">
                <p className="font-display text-2xl font-medium text-ink">Gloria Chinweike</p>
                <p className="mt-1 text-sm font-medium text-brand-deep">Director/Educational consultant</p>
              </figcaption>
            </figure>
            <div>
              <SectionIntro
                kicker="Educational counselling"
                title="Career advice that survives a visa interview."
                lede="The course has to make sense to you and to the officer who reads the statement. We map subjects, work history, and the job you want in three years."
              />
              <ul className="mt-6 space-y-3 text-ink">
                {[
                  "A written profile: grades, gaps, budget, and dependants.",
                  "Three realistic programmes, with one we would not recommend and why.",
                  "A study plan you can say out loud without reading it.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-brand-deep" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => setBooking(true)} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-semibold text-paper">
                Book counselling
              </button>
            </div>
          </div>
        </section>

        <section id="scholarships" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <SectionIntro
              kicker="Scholarships"
              title="Funding we will only chase if you qualify."
              lede="Awards below are ones students commonly target with us. None are guaranteed. Eligibility is checked before an essay is drafted."
            />
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80"
              alt="Notebook and pen on a study desk"
              className="aspect-[16/8] w-full rounded-3xl object-cover"
            />
          </div>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {SCHOLARSHIPS.map((s) => (
              <li key={s.name} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <h3 className="text-xl font-medium">{s.name}</h3>
                  <p className="mt-1 max-w-2xl text-muted">{s.copy}</p>
                </div>
                <p className="text-sm font-semibold text-brand-deep">
                  {s.where} · {s.kind}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="flights" className="bg-card py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80"
                alt="Aircraft wing above the clouds"
                className="mb-6 aspect-[16/9] w-full rounded-3xl object-cover"
              />
              <SectionIntro
                kicker="International flight bookings"
                title="An enquiry, not a pretend airline."
                lede="Tell us the city you leave from, where the campus is, and whether you need a return. A coordinator replies with options that land before orientation."
              />
            </div>
            <FlightForm />
          </div>
        </section>

        <section id="accommodation" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <SectionIntro
                kicker="Accommodation assistance"
                title="A room you can move into, not a listing you hope is real."
                lede="We compare halls, private studios, and homestay on distance, deposit, contract length, and what happens if the visa is refused."
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=80"
              alt="Student bedroom with a made bed and desk"
              className="aspect-[16/10] w-full rounded-3xl object-cover"
            />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {HOUSING.map((h) => (
              <article key={h.title} className="rounded-3xl border border-line bg-card p-5">
                <h3 className="text-2xl font-medium">{h.title}</h3>
                <p className="mt-2 text-muted">{h.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="predeparture" className="bg-ink py-16 text-paper lg:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-sm font-semibold tracking-widest text-brand uppercase">Pre-departure support</p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-xl font-display text-3xl font-medium sm:text-4xl">A checklist you can tick before the flight.</h2>
              <p className="text-sm text-paper/70 tabular-nums">
                {checks.length} of {CHECKLIST.length} ready
              </p>
            </div>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {CHECKLIST.map((item, i) => {
                const on = checks.includes(item.id);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => toggleCheck(item.id)}
                      aria-pressed={on}
                      className={`flex min-h-16 w-full items-start gap-3 rounded-2xl px-4 py-3 text-left ${on ? "bg-brand text-ink" : "bg-inverse text-paper ring-1 ring-paper/15"}`}
                    >
                      <span className="mt-0.5 font-display text-lg tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1">{item.label}</span>
                      <span className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${on ? "bg-ink text-paper" : "border border-paper/40"}`}>
                        {on ? <Check className="size-3.5" /> : null}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="flex items-end justify-between gap-4">
            <SectionIntro kicker="Testimonials" title="Sample student stories." lede="Composite pathways, not named clients. Results vary by institution and by the visa authority." />
            <div className="hidden gap-2 sm:flex">
              <button type="button" aria-label="Previous story" className="inline-flex size-12 items-center justify-center rounded-full border border-line" onClick={() => setStory((n) => (n + STORIES.length - 1) % STORIES.length)}>
                <ChevronLeft />
              </button>
              <button type="button" aria-label="Next story" className="inline-flex size-12 items-center justify-center rounded-full border border-line" onClick={() => setStory((n) => (n + 1) % STORIES.length)}>
                <ChevronRight />
              </button>
            </div>
          </div>
          {activeStory ? (
            <figure className="mt-8 rounded-3xl bg-card p-6 sm:p-10">
              <div className="flex items-center gap-1 text-brand-deep" aria-label={`${activeStory.stars} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className={`size-4 ${i < activeStory.stars ? "fill-brand text-brand" : "text-line"}`} />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-2xl leading-snug font-medium sm:text-4xl">“{activeStory.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand font-semibold text-ink" aria-hidden="true">
                  {activeStory.name.slice(0, 1)}
                </span>
                <span>
                  <span className="block font-semibold">{activeStory.name}</span>
                  <span className="block text-sm text-muted">{activeStory.path}</span>
                </span>
              </figcaption>
            </figure>
          ) : null}
          <div className="mt-4 flex items-center justify-between sm:justify-start sm:gap-2">
            <div className="flex gap-2 sm:hidden">
              <button type="button" aria-label="Previous story" className="inline-flex size-12 items-center justify-center rounded-full border border-line" onClick={() => setStory((n) => (n + STORIES.length - 1) % STORIES.length)}>
                <ChevronLeft />
              </button>
              <button type="button" aria-label="Next story" className="inline-flex size-12 items-center justify-center rounded-full border border-line" onClick={() => setStory((n) => (n + 1) % STORIES.length)}>
                <ChevronRight />
              </button>
            </div>
            <div className="flex gap-2" role="tablist" aria-label="Choose a story">
              {STORIES.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  aria-label={`Story from ${s.name}`}
                  aria-selected={i === story}
                  onClick={() => setStory(i)}
                  className={`size-3 rounded-full ${i === story ? "bg-ink" : "bg-line"}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <SectionIntro kicker="FAQ" title="Straight answers before you book." />
            <div className="mt-8 divide-y divide-line border-y border-line">
              {FAQS.map((item, i) => {
                const open = faq === i;
                return (
                  <div key={item.q}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setFaq(open ? -1 : i)}
                        className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left text-lg font-medium"
                      >
                        {item.q}
                        <span className="text-brand-deep" aria-hidden="true">
                          {open ? "–" : "+"}
                        </span>
                      </button>
                    </h3>
                    {open ? <p className="pb-4 text-muted">{item.a}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <SectionIntro
              kicker="Contact us"
              title="Write to the desk that will answer."
              lede="Share the service you need. If you would rather talk first, book a session or email us directly."
            />
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Email</dt>
                <dd>
                  <EmailLink className="font-semibold text-brand-deep">{EMAIL}</EmailLink>
                </dd>
              </div>
              <div>
                <dt className="text-muted">WhatsApp</dt>
                <dd>
                  <a className="font-semibold" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Meetings</dt>
                <dd>Video, or in person by appointment. London, Toronto, and Sydney desks.</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <ContactForm service={service} setService={setService} />
          </div>
        </section>
      </main>

      <SiteFooter />

      <WhatsAppButton />
      <BookingDialog open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}
