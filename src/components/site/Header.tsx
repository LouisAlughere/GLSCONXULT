import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import { MOBILE_NAV, PRIMARY_NAV, WHATSAPP_URL, type NavLink } from "@/data/content";
import { EmailLink } from "./ui";

export function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(id: string) {
    setOpen(false);
    setServicesOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.assign(`/#${id}`);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-card/95 backdrop-blur">
      <div className="bg-ink text-paper">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">
          September 2027 intake files are open.{" "}
          <button type="button" onClick={onBook} className="font-semibold text-brand underline-offset-2 hover:underline">
            Book a strategy session
          </button>
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a
          href="/#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          aria-label="GLSCONXULT home"
          className="flex min-w-0 items-center gap-2"
        >
          <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card">
            <img src="/logo.jpg" alt="" className="size-full scale-150 object-cover" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-medium tracking-tight text-ink">GLSCONXULT</span>
            <span className="block truncate text-xs font-medium tracking-wide text-muted uppercase">
              Global Study Consultancy
            </span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 xl:flex" aria-label="Primary">
          {PRIMARY_NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-medium text-ink"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown className="size-4" aria-hidden="true" />
                </button>
                {servicesOpen ? (
                  <div className="absolute top-full left-0 z-40 w-72 rounded-2xl border border-line bg-card p-2 shadow-lg">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        type="button"
                        onClick={() => go(child.id)}
                        className="block w-full rounded-xl px-3 py-2.5 text-left text-sm text-ink hover:bg-brand-soft"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <button
                key={item.id + item.label}
                type="button"
                onClick={() => go(item.id)}
                className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-ink hover:bg-paper"
              >
                {item.label}
              </button>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-3">
          <EmailLink className="hidden min-h-11 items-center gap-2 rounded-full border border-line bg-card px-3 text-sm font-semibold text-ink sm:inline-flex">
            <Mail className="size-4" aria-hidden="true" />
            Email us
          </EmailLink>
          <button
            type="button"
            onClick={onBook}
            className="inline-flex min-h-11 items-center rounded-full bg-brand px-4 text-sm font-semibold text-ink"
          >
            Book
          </button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="max-h-[calc(100dvh-7.5rem)] overflow-y-auto border-t border-line bg-card xl:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 pb-28">
            {MOBILE_NAV.map((item) => (
              <MobileItem
                key={item.label}
                item={item}
                servicesOpen={mobileServices}
                onToggleServices={() => setMobileServices((v) => !v)}
                onGo={go}
              />
            ))}
            <li className="mt-2 flex flex-col gap-2 pb-4 sm:hidden">
              <EmailLink className="inline-flex min-h-12 items-center justify-center rounded-full border border-line font-semibold">
                Email us
              </EmailLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function MobileItem({
  item,
  servicesOpen,
  onToggleServices,
  onGo,
}: {
  item: NavLink;
  servicesOpen: boolean;
  onToggleServices: () => void;
  onGo: (id: string) => void;
}) {
  if (!item.children) {
    return (
      <li>
        <button type="button" onClick={() => onGo(item.id)} className="flex min-h-12 w-full items-center text-left text-base font-medium">
          {item.label}
        </button>
      </li>
    );
  }
  return (
    <li className="border-y border-line py-1">
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-between text-left text-base font-medium"
        aria-expanded={servicesOpen}
        onClick={onToggleServices}
      >
        {item.label}
        <ChevronDown className={`size-4 transition ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {servicesOpen ? (
        <ul className="pb-2 pl-3">
          {item.children.map((child) => (
            <li key={child.id}>
              <button
                type="button"
                onClick={() => onGo(child.id)}
                className="flex min-h-11 w-full items-center text-left text-sm text-muted"
              >
                {child.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-paper shadow-lg"
    >
      <span className="text-brand">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.3c.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4a9.2 9.2 0 0 0 3.5 3.1c1.3.6 1.6.5 2.1.4.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.2-.2-.2-.4-.3z" />
        </svg>
      </span>
      WhatsApp
    </a>
  );
}
