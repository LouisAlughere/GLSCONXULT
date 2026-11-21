import { useEffect, useRef, useState, type ReactNode } from "react";
import { EMAIL } from "@/data/content";

export const fieldClass =
  "min-h-12 w-full rounded-xl border border-line bg-card px-3 py-2 text-base text-ink placeholder:text-muted/70";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-sm font-medium text-brand-deep" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-sm text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

export function SectionIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-widest text-brand-deep uppercase">{kicker}</p>
      <h2 className="mt-2 text-3xl font-medium tracking-tight text-ink sm:text-4xl">{title}</h2>
      {lede ? <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{lede}</p> : null}
    </div>
  );
}

const MAIL_SUBJECT = "Enquiry for GLSCONXULT";
const MAIL_BODY = "Hello GLSCONXULT,\n\n";

function mailOptions() {
  const to = encodeURIComponent(EMAIL);
  const subject = encodeURIComponent(MAIL_SUBJECT);
  const body = encodeURIComponent(MAIL_BODY);
  return [
    {
      label: "Gmail",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
      external: true,
    },
    {
      label: "Outlook",
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}&body=${body}`,
      external: true,
    },
    {
      label: "Yahoo Mail",
      href: `https://compose.mail.yahoo.com/?to=${to}&subject=${subject}&body=${body}`,
      external: true,
    },
    {
      label: "Your mail app",
      href: `mailto:${EMAIL}?subject=${subject}&body=${body}`,
      external: false,
    },
  ];
}

export function EmailLink({ className, children }: { className?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!box.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span ref={box} className="relative inline-flex">
      <button type="button" className={className} aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((value) => !value)}>
        {children}
      </button>
      {open ? (
        <span role="menu" aria-label="Choose an email service" className="absolute top-full left-0 z-50 mt-2 w-48 rounded-2xl border border-line bg-card p-1 shadow-lg">
          <span className="block px-3 py-2 text-xs text-muted">New message to {EMAIL}</span>
          {mailOptions().map((option) => (
            <a
              key={option.label}
              role="menuitem"
              href={option.href}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
              className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-ink hover:bg-paper"
              onClick={() => setOpen(false)}
            >
              {option.label}
            </a>
          ))}
        </span>
      ) : null}
    </span>
  );
}

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.3c.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4a9.2 9.2 0 0 0 3.5 3.1c1.3.6 1.6.5 2.1.4.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.2-.2-.2-.4-.3z" />
    </svg>
  );
}

export function SocialIcon({ name }: { name: "linkedin" | "facebook" | "instagram" | "x" }) {
  const common = { viewBox: "0 0 24 24", className: "size-5", fill: "currentColor", "aria-hidden": true as const };
  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg {...common}>
        <path d="M22 12.1C22 6.5 17.5 2 12 2S2 6.5 2 12.1C2 17.1 5.7 21.2 10.4 22v-7H7.6v-2.9h2.8V9.8c0-2.8 1.6-4.3 4.2-4.3 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.8v2.1h3.1l-.5 2.9h-2.6V22C18.3 21.2 22 17.1 22 12.1z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg {...common}>
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.8-.4.3-.6.6-.8 1.1-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.1.3.4.6.6 1.1.8.4.2 1 .3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.8.4-.3.6-.6.8-1.1.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.1-.3-.4-.6-.6-1.1-.8-.4-.2-1-.3-2-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm6.3-2.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M18.2 2H21l-6.5 7.4L22 22h-6.8l-4.7-7.2L5.3 22H2.5l7-8L2 2h7l4.2 6.6L18.2 2zm-1.2 18h1.8L7.1 3.9H5.2L17 20z" />
    </svg>
  );
}
