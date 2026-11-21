import { useState, type ReactNode } from "react";
import { Header, WhatsAppButton } from "./Header";
import { SiteFooter } from "./Footer";
import { BookingDialog } from "./BookingDialog";

export function LegalLayout({
  kicker,
  title,
  updated,
  children,
}: {
  kicker: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const [booking, setBooking] = useState(false);

  return (
    <div className="pb-24">
      <Header onBook={() => setBooking(true)} />
      <main className="mx-auto max-w-3xl px-4 py-12 lg:py-16">
        <p className="text-sm font-semibold tracking-widest text-brand-deep uppercase">{kicker}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight font-medium text-ink sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">{updated}</p>
        <div className="mt-10 space-y-10">{children}</div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <BookingDialog open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-medium text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">{children}</div>
    </section>
  );
}
