/** Applied on every page. Inline scripts stay allowed because the app shell boots with them. */
export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://js.stripe.com https://js.paystack.co https://checkout.flutterwave.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.tailwindcss.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://images.unsplash.com https://flagcdn.com",
  "connect-src 'self' https://api.web3forms.com https://api.stripe.com https://api.paystack.co https://api.flutterwave.com",
  "frame-src https://js.stripe.com https://checkout.stripe.com https://checkout.flutterwave.com https://checkout.paystack.com",
  "form-action 'self' https://api.web3forms.com",
].join("; ");

export const CONTENT_SECURITY_POLICY_HEADER = `${CONTENT_SECURITY_POLICY}; frame-ancestors 'none'`;
