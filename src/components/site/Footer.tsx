import { INSTAGRAM_URL } from "@/data/content";
import { SocialIcon } from "./ui";

const SOCIALS = [
  { name: "linkedin" as const, href: "https://www.linkedin.com/", label: "LinkedIn" },
  { name: "facebook" as const, href: "https://www.facebook.com/", label: "Facebook" },
  { name: "instagram" as const, href: INSTAGRAM_URL, label: "Instagram" },
  { name: "x" as const, href: "https://x.com/", label: "X" },
];

const VISIT = [
  ["/#about", "About"],
  ["/#services", "Services"],
  ["/#destinations", "Destinations"],
  ["/#contact", "Contact"],
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card">
              <img src="/logo.jpg" alt="" className="size-full scale-150 object-cover" />
            </span>
            <div>
              <p className="font-display text-xl">GLSCONXULT</p>
              <p className="text-sm text-paper/70">Global Study Consultancy</p>
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-paper">GLSCONXULT (CAC Reg No: 7794209)</p>
          <p className="mt-3 max-w-sm text-sm text-paper/75">
            Admissions, visas, scholarships, flights, and housing for students who want the paperwork to match the plan.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-widest text-brand uppercase">Visit</p>
          <ul className="mt-3 space-y-2 text-sm">
            {VISIT.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="inline-flex min-h-10 items-center text-paper/80 hover:text-paper">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-widest text-brand uppercase">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/privacy-policy.html" className="inline-flex min-h-10 items-center text-paper/80 hover:text-paper">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service.html" className="inline-flex min-h-10 items-center text-paper/80 hover:text-paper">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-widest text-brand uppercase">Social</p>
          <ul className="mt-3 flex gap-2">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-11 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-brand hover:text-ink"
                >
                  <SocialIcon name={s.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-paper/60">
          © {new Date().getFullYear()} GLSCONXULT (CAC Reg No: 7794209). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
