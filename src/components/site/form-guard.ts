export const NAME_PATTERN = "^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ .'-]{1,79}$";
export const PHONE_PATTERN = "^[+]?[0-9][0-9\\s().-]{7,22}$";
export const COOLDOWN_MS = 10_000;

export function sanitizeText(value: string) {
  return value
    .replace(/<\s*\/?\s*script\b[^>]*>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .replace(/javascript\s*:/gi, "")
    .trim();
}

export function honeypotTripped(form: HTMLFormElement | null) {
  if (!form) return false;
  const field = form.elements.namedItem("company_website");
  return field instanceof HTMLInputElement && field.value.trim().length > 0;
}
