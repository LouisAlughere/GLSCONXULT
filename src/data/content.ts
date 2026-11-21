export const EMAIL = "Glsconxult@outlook.com";
export const PHONE_DISPLAY = "+44 7471 004953";
export const PHONE_TEL = "+447471004953";
export const INSTAGRAM_URL = "https://www.instagram.com/glx_consult?cplk=bHJpYnBrNzN5bGJv";
export const WHATSAPP_URL = "https://wa.me/447471004953";


export type NavLink = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

export const PRIMARY_NAV: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  {
    id: "services",
    label: "Services",
    children: [
      { id: "admissions", label: "Study Abroad Admissions" },
      { id: "visa", label: "Student Visa Assistance" },
      { id: "counselling", label: "Educational Counselling" },
      { id: "scholarships", label: "Scholarships" },
      { id: "flights", label: "Flight Booking" },
      { id: "accommodation", label: "Accommodation Assistance" },
      { id: "predeparture", label: "Pre-departure Support" },
    ],
  },
  { id: "destinations", label: "Destinations" },
  { id: "visa", label: "Visas" },
  { id: "testimonials", label: "Stories" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const MOBILE_NAV: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  {
    id: "services",
    label: "Our Services",
    children: [
      { id: "admissions", label: "Study Abroad Admissions" },
      { id: "visa", label: "Student Visa Assistance" },
      { id: "counselling", label: "Educational Counselling" },
      { id: "scholarships", label: "Scholarships" },
      { id: "flights", label: "Flight Booking" },
      { id: "accommodation", label: "Accommodation Assistance" },
      { id: "predeparture", label: "Pre-departure Support" },
    ],
  },
  { id: "destinations", label: "Study Destinations" },
  { id: "visa", label: "Student Visa Assistance" },
  { id: "counselling", label: "Educational Counselling" },
  { id: "flights", label: "Flight Booking" },
  { id: "scholarships", label: "Scholarships" },
  { id: "accommodation", label: "Accommodation Assistance" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact Us" },
];

export const SERVICES = [
  "Study Abroad Admissions",
  "Student Visa Processing",
  "Educational & Career Counselling",
  "Scholarship Assistance",
  "International Flight Bookings",
  "Student Accommodation",
  "Pre-departure Support",
] as const;

export const PROGRAMMES = [
  {
    title: "Bachelor’s",
    copy: "Direct entry and foundation routes matched to your grades, not a generic ranking list.",
  },
  {
    title: "Master’s",
    copy: "Taught and research degrees, with a realistic read on deposits, intakes, and scholarships.",
  },
  {
    title: "PhD",
    copy: "Supervisor fit, proposal shape, and funding timelines before you write to a department.",
  },
  {
    title: "Diplomas",
    copy: "Shorter professional qualifications when a full degree is not the right first step.",
  },
  {
    title: "Foundation",
    copy: "Pathway programmes that repair subject gaps and lead into year one of a degree.",
  },
];

export const DESTINATIONS = [
  {
    code: "GBR",
    name: "United Kingdom",
    flag: "https://flagcdn.com/w80/gb.png",
    city: "London, Manchester, Edinburgh",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
    note: "One-year master’s degrees and a clear student-route visa file.",
  },
  {
    code: "CAN",
    name: "Canada",
    flag: "https://flagcdn.com/w80/ca.png",
    city: "Toronto, Vancouver, Montreal",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1400&q=80",
    note: "Colleges and universities with co-op options and a study-permit checklist.",
  },
  {
    code: "AUS",
    name: "Australia",
    flag: "https://flagcdn.com/w80/au.png",
    city: "Sydney, Melbourne, Brisbane",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=80",
    note: "February and July intakes, with GTE-style statements prepared early.",
  },
  {
    code: "USA",
    name: "United States",
    flag: "https://flagcdn.com/w80/us.png",
    city: "Boston, New York, California",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80",
    note: "I-20 timing, SEVIS, and a funding story an officer can follow.",
  },
  {
    code: "DEU",
    name: "Germany",
    flag: "https://flagcdn.com/w80/de.png",
    city: "Berlin, Munich, Aachen",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
    note: "Low or no tuition at public universities, plus a blocked-account plan.",
  },
  {
    code: "IRL",
    name: "Ireland",
    flag: "https://flagcdn.com/w80/ie.png",
    city: "Dublin, Cork, Galway",
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1400&q=80",
    note: "English-speaking EU campus life and a compact set of visa documents.",
  },
  {
    code: "NLD",
    name: "Netherlands",
    flag: "https://flagcdn.com/w80/nl.png",
    city: "Amsterdam, Delft, Utrecht",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1400&q=80",
    note: "English-taught degrees with a housing search that starts at offer stage.",
  },
  {
    code: "NZL",
    name: "New Zealand",
    flag: "https://flagcdn.com/w80/nz.png",
    city: "Auckland, Wellington",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1400&q=80",
    note: "Smaller campuses, practical programmes, and a straightforward funds check.",
  },
];

export const VISA_STEPS = [
  {
    n: "01",
    title: "Offer in hand",
    copy: "We confirm the intake, deposit, and the exact immigration category before any form is opened.",
  },
  {
    n: "02",
    title: "Document audit",
    copy: "Passport, transcripts, translations, and financial evidence are checked against that country’s current list.",
  },
  {
    n: "03",
    title: "Forms and statement",
    copy: "Application answers and your study plan are written so they match the offer, not a template.",
  },
  {
    n: "04",
    title: "Biometrics & medicals",
    copy: "We book what the route requires and tell you what to carry on the day.",
  },
  {
    n: "05",
    title: "Submission",
    copy: "The file goes in only when every page is labelled. You keep a copy of what was sent.",
  },
  {
    n: "06",
    title: "Decision & arrival",
    copy: "We track the file and, once a decision lands, fold it into flights and housing. The decision itself belongs to the authority.",
  },
];

export const SCHOLARSHIPS = [
  {
    name: "Chevening",
    where: "United Kingdom",
    kind: "Competitive full funding",
    copy: "Leadership-focused. We start the narrative months before the official window.",
  },
  {
    name: "Commonwealth",
    where: "Eligible countries",
    kind: "Master’s & PhD",
    copy: "Strict eligibility. We check it first so you do not spend a season on the wrong award.",
  },
  {
    name: "DAAD",
    where: "Germany",
    kind: "Study & research grants",
    copy: "Useful alongside public-university applications with low tuition.",
  },
  {
    name: "Erasmus Mundus",
    where: "Europe",
    kind: "Joint master’s",
    copy: "Multi-country degrees. The scholarship and the admission file are prepared together.",
  },
  {
    name: "Australia Awards",
    where: "Australia",
    kind: "Development-focused",
    copy: "Country-specific. We only proceed when your profile fits the current round.",
  },
  {
    name: "University merit",
    where: "All destinations",
    kind: "Partial tuition",
    copy: "Automatic and competitive awards, often 10–50% of tuition, modelled into your budget.",
  },
];

export const HOUSING = [
  {
    title: "University halls",
    copy: "Catered or self-catered rooms on or near campus. Best when you want a contract the university already understands.",
  },
  {
    title: "Private studios",
    copy: "Independent apartments near campus. We read the deposit, the break clause, and the distance before you pay.",
  },
  {
    title: "Homestay",
    copy: "A room with a host family. Useful for a first term, foundation students, and anyone who wants meals included.",
  },
];

export const CHECKLIST = [
  { id: "passport", label: "Passport valid for at least six months after your course start" },
  { id: "visa", label: "Visa vignette or e-visa saved offline, plus a printed copy" },
  { id: "tuition", label: "Tuition deposit receipt and the university offer letter" },
  { id: "housing", label: "Housing confirmation, address, and move-in instructions" },
  { id: "insurance", label: "Health and travel insurance that covers the first weeks" },
  { id: "funds", label: "Forex plan and a card that works in the destination country" },
  { id: "flight", label: "Flight that lands before orientation, with baggage within the allowance" },
  { id: "enrol", label: "Enrolment, CAS or equivalent, and emergency contacts shared with family" },
];

export const STORIES = [
  {
    name: "Amira K.",
    path: "MSc Public Health · United Kingdom",
    stars: 5,
    quote:
      "They refused two universities I liked because the deposit timeline did not match my savings. The offer I accepted was less famous and much more possible.",
  },
  {
    name: "Daniel O.",
    path: "Bachelor of Engineering · Canada",
    stars: 5,
    quote:
      "The study-permit file was a folder, not a mood. Every bank letter had a date, a translation, and a reason it was there.",
  },
  {
    name: "Sofia M.",
    path: "Foundation → Business · Australia",
    stars: 5,
    quote:
      "I needed a pathway, not a pep talk. GLSCONXULT mapped the foundation grades to three degree offers before I left home.",
  },
  {
    name: "Jonas P.",
    path: "PhD Materials · Germany",
    stars: 4,
    quote:
      "Finding a supervisor took longer than the brochure suggested. They stayed with the emails until a chair replied with a funded seat.",
  },
  {
    name: "Leila R.",
    path: "Master’s Data Science · Ireland",
    stars: 5,
    quote:
      "Housing was the part I feared. They flagged a contract that asked for six months up front and found a hall place instead.",
  },
];

export const FAQS = [
  {
    q: "Is the first conversation a sales call?",
    a: "The strategy session is a working hour: grades, budget, intake, and whether study abroad is the right move. If it is not, we say so.",
  },
  {
    q: "Which programmes do you handle?",
    a: "Bachelor’s, master’s, PhD, diplomas, and foundation pathways. We do not place students into programmes we cannot document.",
  },
  {
    q: "Do you guarantee a visa?",
    a: "No. We prepare a complete file. The decision sits with the embassy, high commission, or immigration authority.",
  },
  {
    q: "How do scholarships work with you?",
    a: "We shortlist awards you are actually eligible for, then build the application beside the admission file. Awards are competitive.",
  },
  {
    q: "Can you book my flight?",
    a: "Send a flight enquiry with city, date, and one-way or round trip. A coordinator replies with options. This page does not issue tickets itself.",
  },
  {
    q: "When should I look for housing?",
    a: "As soon as an offer is likely. In the Netherlands, Ireland, and Canada the good rooms go before the visa stamp.",
  },
  {
    q: "What happens in the consultation?",
    a: "A 45-minute strategy session on grades, budget, and intake. There is no payment on this page. A counsellor confirms the time with you.",
  },
  {
    q: "How do I reach a person?",
    a: "Email Glsconxult@outlook.com, use the contact form, or message WhatsApp on +44 7471 004953. We reply on business days.",
  },
];

export const TIMES = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

export const CITIES = [
  "London",
  "Manchester",
  "Edinburgh",
  "Toronto",
  "Vancouver",
  "Montreal",
  "Sydney",
  "Melbourne",
  "Boston",
  "New York",
  "Berlin",
  "Munich",
  "Dublin",
  "Amsterdam",
  "Auckland",
];
