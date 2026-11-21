import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, c as ChevronDown, i as Menu, l as Check, o as ChevronRight, r as Star, s as ChevronLeft, t as X, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uDOuQVwL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMAIL = "admissions@glsconxult.com";
var PHONE_DISPLAY = "+1 (555) 014-2280";
var PHONE_TEL = "+15550142280";
"" + encodeURIComponent("Hello GLSCONXULT, I would like to enquire about studying abroad.");
var PRIMARY_NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "services",
		label: "Services",
		children: [
			{
				id: "admissions",
				label: "Study Abroad Admissions"
			},
			{
				id: "visa",
				label: "Student Visa Assistance"
			},
			{
				id: "counselling",
				label: "Educational Counselling"
			},
			{
				id: "scholarships",
				label: "Scholarships"
			},
			{
				id: "flights",
				label: "Flight Booking"
			},
			{
				id: "accommodation",
				label: "Accommodation Assistance"
			},
			{
				id: "predeparture",
				label: "Pre-departure Support"
			}
		]
	},
	{
		id: "destinations",
		label: "Destinations"
	},
	{
		id: "visa",
		label: "Visas"
	},
	{
		id: "testimonials",
		label: "Stories"
	},
	{
		id: "faq",
		label: "FAQ"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var MOBILE_NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About Us"
	},
	{
		id: "services",
		label: "Our Services",
		children: [
			{
				id: "admissions",
				label: "Study Abroad Admissions"
			},
			{
				id: "visa",
				label: "Student Visa Assistance"
			},
			{
				id: "counselling",
				label: "Educational Counselling"
			},
			{
				id: "scholarships",
				label: "Scholarships"
			},
			{
				id: "flights",
				label: "Flight Booking"
			},
			{
				id: "accommodation",
				label: "Accommodation Assistance"
			},
			{
				id: "predeparture",
				label: "Pre-departure Support"
			}
		]
	},
	{
		id: "destinations",
		label: "Study Destinations"
	},
	{
		id: "visa",
		label: "Student Visa Assistance"
	},
	{
		id: "counselling",
		label: "Educational Counselling"
	},
	{
		id: "flights",
		label: "Flight Booking"
	},
	{
		id: "scholarships",
		label: "Scholarships"
	},
	{
		id: "accommodation",
		label: "Accommodation Assistance"
	},
	{
		id: "testimonials",
		label: "Testimonials"
	},
	{
		id: "faq",
		label: "FAQ"
	},
	{
		id: "contact",
		label: "Contact Us"
	}
];
var SERVICES = [
	"Study Abroad Admissions",
	"Student Visa Processing",
	"Educational & Career Counselling",
	"Scholarship Assistance",
	"International Flight Bookings",
	"Student Accommodation",
	"Pre-departure Support"
];
var PROGRAMMES = [
	{
		title: "Bachelor’s",
		copy: "Direct entry and foundation routes matched to your grades, not a generic ranking list."
	},
	{
		title: "Master’s",
		copy: "Taught and research degrees, with a realistic read on deposits, intakes, and scholarships."
	},
	{
		title: "PhD",
		copy: "Supervisor fit, proposal shape, and funding timelines before you write to a department."
	},
	{
		title: "Diplomas",
		copy: "Shorter professional qualifications when a full degree is not the right first step."
	},
	{
		title: "Foundation",
		copy: "Pathway programmes that repair subject gaps and lead into year one of a degree."
	}
];
var DESTINATIONS = [
	{
		code: "GBR",
		name: "United Kingdom",
		flag: "https://flagcdn.com/w80/gb.png",
		city: "London, Manchester, Edinburgh",
		image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
		note: "One-year master’s degrees and a clear student-route visa file."
	},
	{
		code: "CAN",
		name: "Canada",
		flag: "https://flagcdn.com/w80/ca.png",
		city: "Toronto, Vancouver, Montreal",
		image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1400&q=80",
		note: "Colleges and universities with co-op options and a study-permit checklist."
	},
	{
		code: "AUS",
		name: "Australia",
		flag: "https://flagcdn.com/w80/au.png",
		city: "Sydney, Melbourne, Brisbane",
		image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=80",
		note: "February and July intakes, with GTE-style statements prepared early."
	},
	{
		code: "USA",
		name: "United States",
		flag: "https://flagcdn.com/w80/us.png",
		city: "Boston, New York, California",
		image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80",
		note: "I-20 timing, SEVIS, and a funding story an officer can follow."
	},
	{
		code: "DEU",
		name: "Germany",
		flag: "https://flagcdn.com/w80/de.png",
		city: "Berlin, Munich, Aachen",
		image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
		note: "Low or no tuition at public universities, plus a blocked-account plan."
	},
	{
		code: "IRL",
		name: "Ireland",
		flag: "https://flagcdn.com/w80/ie.png",
		city: "Dublin, Cork, Galway",
		image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1400&q=80",
		note: "English-speaking EU campus life and a compact set of visa documents."
	},
	{
		code: "NLD",
		name: "Netherlands",
		flag: "https://flagcdn.com/w80/nl.png",
		city: "Amsterdam, Delft, Utrecht",
		image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1400&q=80",
		note: "English-taught degrees with a housing search that starts at offer stage."
	},
	{
		code: "NZL",
		name: "New Zealand",
		flag: "https://flagcdn.com/w80/nz.png",
		city: "Auckland, Wellington",
		image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1400&q=80",
		note: "Smaller campuses, practical programmes, and a straightforward funds check."
	}
];
var VISA_STEPS = [
	{
		n: "01",
		title: "Offer in hand",
		copy: "We confirm the intake, deposit, and the exact immigration category before any form is opened."
	},
	{
		n: "02",
		title: "Document audit",
		copy: "Passport, transcripts, translations, and financial evidence are checked against that country’s current list."
	},
	{
		n: "03",
		title: "Forms and statement",
		copy: "Application answers and your study plan are written so they match the offer, not a template."
	},
	{
		n: "04",
		title: "Biometrics & medicals",
		copy: "We book what the route requires and tell you what to carry on the day."
	},
	{
		n: "05",
		title: "Submission",
		copy: "The file goes in only when every page is labelled. You keep a copy of what was sent."
	},
	{
		n: "06",
		title: "Decision & arrival",
		copy: "We track the file and, once a decision lands, fold it into flights and housing. The decision itself belongs to the authority."
	}
];
var SCHOLARSHIPS = [
	{
		name: "Chevening",
		where: "United Kingdom",
		kind: "Competitive full funding",
		copy: "Leadership-focused. We start the narrative months before the official window."
	},
	{
		name: "Commonwealth",
		where: "Eligible countries",
		kind: "Master’s & PhD",
		copy: "Strict eligibility. We check it first so you do not spend a season on the wrong award."
	},
	{
		name: "DAAD",
		where: "Germany",
		kind: "Study & research grants",
		copy: "Useful alongside public-university applications with low tuition."
	},
	{
		name: "Erasmus Mundus",
		where: "Europe",
		kind: "Joint master’s",
		copy: "Multi-country degrees. The scholarship and the admission file are prepared together."
	},
	{
		name: "Australia Awards",
		where: "Australia",
		kind: "Development-focused",
		copy: "Country-specific. We only proceed when your profile fits the current round."
	},
	{
		name: "University merit",
		where: "All destinations",
		kind: "Partial tuition",
		copy: "Automatic and competitive awards, often 10–50% of tuition, modelled into your budget."
	}
];
var HOUSING = [
	{
		title: "University halls",
		copy: "Catered or self-catered rooms on or near campus. Best when you want a contract the university already understands."
	},
	{
		title: "Private studios",
		copy: "Independent apartments near campus. We read the deposit, the break clause, and the distance before you pay."
	},
	{
		title: "Homestay",
		copy: "A room with a host family. Useful for a first term, foundation students, and anyone who wants meals included."
	}
];
var CHECKLIST = [
	{
		id: "passport",
		label: "Passport valid for at least six months after your course start"
	},
	{
		id: "visa",
		label: "Visa vignette or e-visa saved offline, plus a printed copy"
	},
	{
		id: "tuition",
		label: "Tuition deposit receipt and the university offer letter"
	},
	{
		id: "housing",
		label: "Housing confirmation, address, and move-in instructions"
	},
	{
		id: "insurance",
		label: "Health and travel insurance that covers the first weeks"
	},
	{
		id: "funds",
		label: "Forex plan and a card that works in the destination country"
	},
	{
		id: "flight",
		label: "Flight that lands before orientation, with baggage within the allowance"
	},
	{
		id: "enrol",
		label: "Enrolment, CAS or equivalent, and emergency contacts shared with family"
	}
];
var STORIES = [
	{
		name: "Amira K.",
		path: "MSc Public Health · United Kingdom",
		stars: 5,
		quote: "They refused two universities I liked because the deposit timeline did not match my savings. The offer I accepted was less famous and much more possible."
	},
	{
		name: "Daniel O.",
		path: "Bachelor of Engineering · Canada",
		stars: 5,
		quote: "The study-permit file was a folder, not a mood. Every bank letter had a date, a translation, and a reason it was there."
	},
	{
		name: "Sofia M.",
		path: "Foundation → Business · Australia",
		stars: 5,
		quote: "I needed a pathway, not a pep talk. GLSCONXULT mapped the foundation grades to three degree offers before I left home."
	},
	{
		name: "Jonas P.",
		path: "PhD Materials · Germany",
		stars: 4,
		quote: "Finding a supervisor took longer than the brochure suggested. They stayed with the emails until a chair replied with a funded seat."
	},
	{
		name: "Leila R.",
		path: "Master’s Data Science · Ireland",
		stars: 5,
		quote: "Housing was the part I feared. They flagged a contract that asked for six months up front and found a hall place instead."
	}
];
var FAQS = [
	{
		q: "Is the first conversation a sales call?",
		a: "The strategy session is a working hour: grades, budget, intake, and whether study abroad is the right move. If it is not, we say so."
	},
	{
		q: "Which programmes do you handle?",
		a: "Bachelor’s, master’s, PhD, diplomas, and foundation pathways. We do not place students into programmes we cannot document."
	},
	{
		q: "Do you guarantee a visa?",
		a: "No. We prepare a complete file. The decision sits with the embassy, high commission, or immigration authority."
	},
	{
		q: "How do scholarships work with you?",
		a: "We shortlist awards you are actually eligible for, then build the application beside the admission file. Awards are competitive."
	},
	{
		q: "Can you book my flight?",
		a: "Send a flight enquiry with city, date, and one-way or round trip. A coordinator replies with options. This page does not issue tickets itself."
	},
	{
		q: "When should I look for housing?",
		a: "As soon as an offer is likely. In the Netherlands, Ireland, and Canada the good rooms go before the visa stamp."
	},
	{
		q: "What does the consultation fee cover?",
		a: "A 45-minute strategy session. If you continue with a service package, the fee is credited. The checkout on this site is a demonstration and does not charge a real card."
	},
	{
		q: "How do I reach a person?",
		a: "Email admissions@glsconxult.com, use the contact form, or message the WhatsApp desk. We reply on business days."
	}
];
var TIMES = [
	"09:00",
	"10:30",
	"12:00",
	"14:00",
	"15:30",
	"17:00"
];
var CITIES = [
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
	"Auckland"
];
function scrollToId(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function Header({ onBook }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	const [mobileServices, setMobileServices] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	function go(id) {
		setOpen(false);
		setServicesOpen(false);
		scrollToId(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-line bg-card/95 backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-ink text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto max-w-6xl px-4 py-2 text-center text-sm",
					children: [
						"September 2027 intake files are open.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onBook,
							className: "font-semibold text-brand underline-offset-2 hover:underline",
							children: "Book a strategy session"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						onClick: (e) => {
							e.preventDefault();
							go("home");
						},
						"aria-label": "GLSCONXULT home",
						className: "flex min-w-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.jpg",
								alt: "",
								className: "size-full scale-150 object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-display text-lg font-medium tracking-tight text-ink",
								children: "GLSCONXULT"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-xs font-medium tracking-wide text-muted uppercase",
								children: "Global Study Consultancy"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-auto hidden items-center gap-1 xl:flex",
						"aria-label": "Primary",
						children: PRIMARY_NAV.map((item) => item.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setServicesOpen(true),
							onMouseLeave: () => setServicesOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-medium text-ink",
								"aria-expanded": servicesOpen,
								"aria-haspopup": "true",
								onClick: () => setServicesOpen((v) => !v),
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							}), servicesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-full left-0 z-40 w-72 rounded-2xl border border-line bg-card p-2 shadow-lg",
								children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => go(child.id),
									className: "block w-full rounded-xl px-3 py-2.5 text-left text-sm text-ink hover:bg-brand-soft",
									children: child.label
								}, child.id))
							}) : null]
						}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(item.id),
							className: "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-ink hover:bg-paper",
							children: item.label
						}, item.id + item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2 xl:ml-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${EMAIL}`,
								className: "hidden min-h-11 items-center gap-2 rounded-full border border-line bg-card px-3 text-sm font-semibold text-ink sm:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Email us"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onBook,
								className: "inline-flex min-h-11 items-center rounded-full bg-brand px-4 text-sm font-semibold text-ink",
								children: "Book"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line xl:hidden",
								"aria-expanded": open,
								"aria-controls": "mobile-nav",
								"aria-label": open ? "Close menu" : "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				id: "mobile-nav",
				className: "max-h-[calc(100dvh-7.5rem)] overflow-y-auto border-t border-line bg-card xl:hidden",
				"aria-label": "Mobile",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mx-auto flex max-w-6xl flex-col px-4 py-3 pb-28",
					children: [MOBILE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileItem, {
						item,
						servicesOpen: mobileServices,
						onToggleServices: () => setMobileServices((v) => !v),
						onGo: go
					}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "mt-2 flex flex-col gap-2 pb-4 sm:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${EMAIL}`,
							className: "inline-flex min-h-12 items-center justify-center rounded-full border border-line font-semibold",
							children: "Email us"
						})
					})]
				})
			}) : null
		]
	});
}
function MobileItem({ item, servicesOpen, onToggleServices, onGo }) {
	if (!item.children) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onGo(item.id),
		className: "flex min-h-12 w-full items-center text-left text-base font-medium",
		children: item.label
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-y border-line py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex min-h-12 w-full items-center justify-between text-left text-base font-medium",
			"aria-expanded": servicesOpen,
			onClick: onToggleServices,
			children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				className: `size-4 transition ${servicesOpen ? "rotate-180" : ""}`,
				"aria-hidden": "true"
			})]
		}), servicesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "pb-2 pl-3",
			children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onGo(child.id),
				className: "flex min-h-11 w-full items-center text-left text-sm text-muted",
				children: child.label
			}) }, child.id))
		}) : null]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "https://wa.me/15551234567?text=Hello%20GLSCONXULT%2C%20I%20would%20like%20to%20enquire%20about%20studying%20abroad.",
		target: "_blank",
		rel: "noreferrer",
		className: "fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-paper shadow-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-brand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "size-5",
				"aria-hidden": "true",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.3c.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4a9.2 9.2 0 0 0 3.5 3.1c1.3.6 1.6.5 2.1.4.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.2-.2-.2-.4-.3z" })
			})
		}), "WhatsApp"]
	});
}
var fieldClass = "min-h-12 w-full rounded-xl border border-line bg-card px-3 py-2 text-base text-ink placeholder:text-muted/70";
function Field({ label, htmlFor, error, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor,
				className: "text-sm font-medium text-ink",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-brand-deep",
				role: "alert",
				children: error
			}) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: hint
			}) : null
		]
	});
}
function SectionIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-brand-deep uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl font-medium tracking-tight text-ink sm:text-4xl",
				children: title
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-muted sm:text-lg",
				children: lede
			}) : null
		]
	});
}
function SocialIcon({ name }) {
	const common = {
		viewBox: "0 0 24 24",
		className: "size-5",
		fill: "currentColor",
		"aria-hidden": true
	};
	if (name === "linkedin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...common,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z" })
	});
	if (name === "facebook") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...common,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 12.1C22 6.5 17.5 2 12 2S2 6.5 2 12.1C2 17.1 5.7 21.2 10.4 22v-7H7.6v-2.9h2.8V9.8c0-2.8 1.6-4.3 4.2-4.3 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.8v2.1h3.1l-.5 2.9h-2.6V22C18.3 21.2 22 17.1 22 12.1z" })
	});
	if (name === "instagram") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...common,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.8-.4.3-.6.6-.8 1.1-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.1.3.4.6.6 1.1.8.4.2 1 .3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.8.4-.3.6-.6.8-1.1.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.1-.3-.4-.6-.6-1.1-.8-.4-.2-1-.3-2-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm6.3-2.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...common,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.2 2H21l-6.5 7.4L22 22h-6.8l-4.7-7.2L5.3 22H2.5l7-8L2 2h7l4.2 6.6L18.2 2zm-1.2 18h1.8L7.1 3.9H5.2L17 20z" })
	});
}
var STEPS = [
	{
		id: "date",
		label: "Date"
	},
	{
		id: "time",
		label: "Time"
	},
	{
		id: "details",
		label: "Details"
	},
	{
		id: "pay",
		label: "Payment"
	}
];
function startOfDay(d) {
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function isSelectable(date) {
	const day = date.getDay();
	if (day === 0 || day === 6) return false;
	const diff = Math.round((startOfDay(date).getTime() - startOfDay(/* @__PURE__ */ new Date()).getTime()) / 864e5);
	return diff >= 1 && diff <= 42;
}
function takenSlots(iso) {
	let h = 0;
	for (const c of iso) h = h * 33 + c.charCodeAt(0) >>> 0;
	const a = TIMES[h % TIMES.length] ?? TIMES[0];
	const b = TIMES[(h >> 3) % TIMES.length] ?? TIMES[1];
	return new Set(a === b ? [a] : [a, b]);
}
function luhn(raw) {
	const s = raw.replace(/\s/g, "");
	if (!/^\d{15,16}$/.test(s)) return false;
	let sum = 0;
	let alt = false;
	for (let i = s.length - 1; i >= 0; i -= 1) {
		let n = Number(s[i]);
		if (alt) {
			n *= 2;
			if (n > 9) n -= 9;
		}
		sum += n;
		alt = !alt;
	}
	return sum % 10 === 0;
}
function refCode$1() {
	return `GLS-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
function BookingDialog({ open, onClose }) {
	const [cursor, setCursor] = (0, import_react.useState)(() => {
		const now = /* @__PURE__ */ new Date();
		return {
			y: now.getFullYear(),
			m: now.getMonth()
		};
	});
	const [step, setStep] = (0, import_react.useState)("date");
	const [date, setDate] = (0, import_react.useState)(null);
	const [time, setTime] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [interest, setInterest] = (0, import_react.useState)(SERVICES[0]);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [method, setMethod] = (0, import_react.useState)("card");
	const [cardName, setCardName] = (0, import_react.useState)("");
	const [cardNumber, setCardNumber] = (0, import_react.useState)("");
	const [expiry, setExpiry] = (0, import_react.useState)("");
	const [cvc, setCvc] = (0, import_react.useState)("");
	const [paypalEmail, setPaypalEmail] = (0, import_react.useState)("");
	const [booking, setBooking] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [open, onClose]);
	const cells = (0, import_react.useMemo)(() => {
		const pad = (new Date(cursor.y, cursor.m, 1).getDay() + 6) % 7;
		const count = new Date(cursor.y, cursor.m + 1, 0).getDate();
		const days = Array.from({ length: pad }, () => null);
		for (let d = 1; d <= count; d += 1) days.push(new Date(cursor.y, cursor.m, d));
		return days;
	}, [cursor]);
	if (!open) return null;
	const iso = date ? format(date, "yyyy-MM-dd") : "";
	const blocked = iso ? takenSlots(iso) : /* @__PURE__ */ new Set();
	function shiftMonth(delta) {
		const next = new Date(cursor.y, cursor.m + delta, 1);
		setCursor({
			y: next.getFullYear(),
			m: next.getMonth()
		});
	}
	function continueDetails() {
		const next = {};
		if (name.trim().length < 2) next.name = "Enter your full name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
		if (phone.replace(/\D/g, "").length < 8) next.phone = "Enter a phone number we can reach.";
		setErrors(next);
		if (Object.keys(next).length === 0) setStep("pay");
	}
	function pay() {
		const next = {};
		if (method === "card") {
			if (cardName.trim().length < 2) next.cardName = "Name on card is required.";
			if (!luhn(cardNumber)) next.cardNumber = "Use a valid test card, for example 4242 4242 4242 4242.";
			if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) next.expiry = "Use MM/YY.";
			else {
				const [mm, yy] = expiry.split("/");
				if (new Date(2e3 + Number(yy), Number(mm), 0) < startOfDay(/* @__PURE__ */ new Date())) next.expiry = "This card is expired.";
			}
			if (!/^\d{3,4}$/.test(cvc)) next.cvc = "CVC is 3 or 4 digits.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail)) next.paypalEmail = "Enter the email on the PayPal account.";
		setErrors(next);
		if (Object.keys(next).length || !date || !time) return;
		const record = {
			id: refCode$1(),
			date: iso,
			time,
			name: name.trim(),
			email: email.trim(),
			phone: phone.trim(),
			interest,
			method,
			last4: method === "card" ? cardNumber.replace(/\s/g, "").slice(-4) : void 0,
			amount: 49
		};
		const existing = JSON.parse(localStorage.getItem("glsconxult-bookings") || "[]");
		localStorage.setItem("glsconxult-bookings", JSON.stringify([record, ...existing].slice(0, 20)));
		setBooking(record);
		setCardNumber("");
		setCvc("");
		setStep("done");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
		role: "presentation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/50",
			"aria-label": "Close booking",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "booking-title",
			className: "relative z-10 flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-card shadow-xl sm:rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 border-b border-line px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-brand-deep uppercase",
							children: "Consultation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "booking-title",
							className: "font-display text-2xl font-medium text-ink",
							children: "Strategy session"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"45 minutes · $",
								49,
								" deposit, credited if you continue"
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "inline-flex size-11 items-center justify-center rounded-full border border-line",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				step !== "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid grid-cols-4 gap-1 px-5 pt-4",
					children: STEPS.map((s, i) => {
						const active = STEPS.findIndex((x) => x.id === step);
						const done = i < active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mx-auto flex size-8 items-center justify-center rounded-full text-sm font-semibold ${i === active ? "bg-brand text-ink" : done ? "bg-ink text-paper" : "bg-paper text-muted"}`,
								children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-muted",
								children: s.label
							})]
						}, s.id);
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-y-auto px-5 py-4",
					children: [
						step === "date" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-11 items-center justify-center rounded-full border border-line",
										"aria-label": "Previous month",
										onClick: () => shiftMonth(-1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium tabular-nums",
										children: format(new Date(cursor.y, cursor.m, 1), "MMMM yyyy")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-11 items-center justify-center rounded-full border border-line",
										"aria-label": "Next month",
										onClick: () => shiftMonth(1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted",
								children: [
									"Mo",
									"Tu",
									"We",
									"Th",
									"Fr",
									"Sa",
									"Su"
								].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "py-1",
									children: d
								}, d))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-7 gap-1",
								children: cells.map((day, i) => {
									if (!day) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}, `e-${i}`);
									const selectable = isSelectable(day);
									const selected = date && startOfDay(date).getTime() === startOfDay(day).getTime();
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: !selectable,
										onClick: () => {
											setDate(day);
											setTime(null);
										},
										className: `min-h-11 rounded-xl text-sm tabular-nums ${selected ? "bg-brand font-semibold text-ink" : selectable ? "bg-paper text-ink" : "text-muted/40"}`,
										children: day.getDate()
									}, day.toISOString());
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "Weekdays for the next six weeks. Weekends are closed."
							})
						] }) : null,
						step === "time" && date ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-sm text-muted",
							children: format(date, "EEEE, d MMMM yyyy")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: TIMES.map((slot) => {
								const off = blocked.has(slot);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: off,
									onClick: () => setTime(slot),
									className: `min-h-12 rounded-xl border text-sm font-medium tabular-nums ${time === slot ? "border-ink bg-ink text-paper" : off ? "border-line text-muted/50" : "border-line bg-card text-ink"}`,
									children: [slot, off ? " · taken" : ""]
								}, slot);
							})
						})] }) : null,
						step === "details" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									htmlFor: "bk-name",
									error: errors.name,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "bk-name",
										className: fieldClass,
										autoComplete: "name",
										value: name,
										onChange: (e) => setName(e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									htmlFor: "bk-email",
									error: errors.email,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "bk-email",
										type: "email",
										inputMode: "email",
										autoComplete: "email",
										className: fieldClass,
										value: email,
										onChange: (e) => setEmail(e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									htmlFor: "bk-phone",
									error: errors.phone,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "bk-phone",
										type: "tel",
										inputMode: "tel",
										autoComplete: "tel",
										className: fieldClass,
										value: phone,
										onChange: (e) => setPhone(e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "What should we prepare?",
									htmlFor: "bk-interest",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "bk-interest",
										className: fieldClass,
										value: interest,
										onChange: (e) => setInterest(e.target.value),
										children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
									})
								})
							]
						}) : null,
						step === "pay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-2xl bg-paper px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: "Strategy session deposit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-medium",
										children: [
											date ? format(date, "d MMM") : "",
											" · ",
											time
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-3xl font-medium tabular-nums",
										children: ["$", 49]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-2",
									role: "tablist",
									"aria-label": "Payment method",
									children: ["card", "paypal"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										role: "tab",
										"aria-selected": method === m,
										onClick: () => {
											setMethod(m);
											setErrors({});
										},
										className: `min-h-12 rounded-xl border text-sm font-semibold ${method === m ? "border-ink bg-ink text-paper" : "border-line"}`,
										children: m === "card" ? "Card" : "PayPal"
									}, m))
								}),
								method === "card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 rounded-2xl border border-line p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Name on card",
											htmlFor: "card-name",
											error: errors.cardName,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "card-name",
												autoComplete: "cc-name",
												className: fieldClass,
												value: cardName,
												onChange: (e) => setCardName(e.target.value)
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Card number",
											htmlFor: "card-number",
											error: errors.cardNumber,
											hint: "Demo only. Try 4242 4242 4242 4242. Nothing is charged.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "card-number",
												inputMode: "numeric",
												autoComplete: "cc-number",
												className: fieldClass,
												placeholder: "1234 1234 1234 1234",
												value: cardNumber,
												onChange: (e) => {
													const digits = e.target.value.replace(/\D/g, "").slice(0, 16);
													setCardNumber(digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim());
												}
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Expiry",
												htmlFor: "card-exp",
												error: errors.expiry,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "card-exp",
													inputMode: "numeric",
													autoComplete: "cc-exp",
													placeholder: "MM/YY",
													className: fieldClass,
													value: expiry,
													onChange: (e) => {
														const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
														setExpiry(digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits);
													}
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "CVC",
												htmlFor: "card-cvc",
												error: errors.cvc,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "card-cvc",
													inputMode: "numeric",
													autoComplete: "cc-csc",
													className: fieldClass,
													value: cvc,
													onChange: (e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
												})
											})]
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 rounded-2xl border border-line p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: "A styled PayPal step. You stay on this page. No PayPal account is contacted."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "PayPal email",
										htmlFor: "pp-email",
										error: errors.paypalEmail,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "pp-email",
											type: "email",
											inputMode: "email",
											className: fieldClass,
											value: paypalEmail,
											onChange: (e) => setPaypalEmail(e.target.value)
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs leading-relaxed text-muted",
									children: "Demonstration checkout. Card numbers are checked in your browser and are not stored or sent to a payment processor."
								})
							]
						}) : null,
						step === "done" && booking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-auto flex size-14 items-center justify-center rounded-full bg-brand text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-3xl font-medium",
									children: "You are booked"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-muted",
									children: [
										booking.name,
										", a counsellor will write to ",
										booking.email,
										". Reference",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-ink tabular-nums",
											children: booking.id
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mx-auto mt-5 max-w-xs space-y-2 text-left text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-3 border-b border-line py-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: "When"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "font-medium",
												children: [
													format(new Date(booking.date), "d MMM yyyy"),
													" · ",
													booking.time
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-3 border-b border-line py-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: "Focus"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-right font-medium",
												children: booking.interest
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-3 py-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: "Deposit"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "font-medium tabular-nums",
												children: [
													"$",
													booking.amount,
													" · ",
													booking.method === "card" ? `card ··${booking.last4}` : "PayPal",
													" (demo)"
												]
											})]
										})
									]
								})
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 border-t border-line px-5 py-4",
					children: [
						step === "time" || step === "details" || step === "pay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-12 flex-1 rounded-full border border-line font-semibold",
							onClick: () => setStep(step === "time" ? "date" : step === "details" ? "time" : "details"),
							children: "Back"
						}) : null,
						step === "date" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: !date,
							onClick: () => setStep("time"),
							className: "min-h-12 flex-1 rounded-full bg-brand font-semibold text-ink disabled:opacity-40",
							children: "Choose a time"
						}) : null,
						step === "time" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: !time,
							onClick: () => setStep("details"),
							className: "min-h-12 flex-1 rounded-full bg-brand font-semibold text-ink disabled:opacity-40",
							children: "Your details"
						}) : null,
						step === "details" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: continueDetails,
							className: "min-h-12 flex-1 rounded-full bg-brand font-semibold text-ink",
							children: "Continue to payment"
						}) : null,
						step === "pay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: pay,
							className: "min-h-12 flex-1 rounded-full bg-ink font-semibold text-paper",
							children: method === "card" ? `Pay $49` : `Continue with PayPal`
						}) : null,
						step === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "min-h-12 flex-1 rounded-full bg-ink font-semibold text-paper",
							children: "Close"
						}) : null
					]
				})
			]
		})]
	});
}
function validEmail(v) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function refCode(prefix) {
	return `${prefix}-${Math.floor(1e3 + Math.random() * 9e3)}`;
}
function FlightForm() {
	const [departure, setDeparture] = (0, import_react.useState)("");
	const [arrival, setArrival] = (0, import_react.useState)(CITIES[0] ?? "London");
	const [date, setDate] = (0, import_react.useState)("");
	const [ret, setRet] = (0, import_react.useState)("");
	const [trip, setTrip] = (0, import_react.useState)("round");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(null);
	function submit(e) {
		e.preventDefault();
		const next = {};
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
		const payload = {
			id,
			departure,
			arrival,
			date,
			ret: trip === "round" ? ret : "",
			trip,
			name,
			email,
			phone
		};
		const existing = JSON.parse(localStorage.getItem("glsconxult-flights") || "[]");
		localStorage.setItem("glsconxult-flights", JSON.stringify([payload, ...existing].slice(0, 20)));
		setDone(id);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-card p-6",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-brand-deep uppercase",
				children: "Enquiry received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-3xl font-medium",
				children: "We have your route"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [
					"Reference ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-ink",
						children: done
					}),
					". A coordinator will reply with fare options. This form does not issue a ticket."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-5 min-h-12 rounded-full border border-line px-5 font-semibold",
				onClick: () => setDone(null),
				children: "Send another enquiry"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "flex flex-col gap-4 rounded-3xl border border-line bg-card p-5 sm:p-6",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				role: "radiogroup",
				"aria-label": "Trip type",
				children: [["round", "Round trip"], ["oneway", "One way"]].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "radio",
					"aria-checked": trip === value,
					onClick: () => setTrip(value),
					className: `min-h-12 rounded-xl text-sm font-semibold ${trip === value ? "bg-ink text-paper" : "bg-paper text-ink"}`,
					children: label
				}, value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Departure city",
						htmlFor: "fl-from",
						error: errors.departure,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "fl-from",
							className: fieldClass,
							autoComplete: "address-level2",
							value: departure,
							onChange: (e) => setDeparture(e.target.value),
							placeholder: "Lagos, Accra, Delhi…"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Arrival destination",
						htmlFor: "fl-to",
						error: errors.arrival,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "fl-to",
							className: fieldClass,
							value: arrival,
							onChange: (e) => setArrival(e.target.value),
							children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred date",
						htmlFor: "fl-date",
						error: errors.date,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "fl-date",
							type: "date",
							className: fieldClass,
							value: date,
							onChange: (e) => setDate(e.target.value)
						})
					}),
					trip === "round" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Return date",
						htmlFor: "fl-ret",
						error: errors.ret,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "fl-ret",
							type: "date",
							className: fieldClass,
							value: ret,
							onChange: (e) => setRet(e.target.value)
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						htmlFor: "fl-name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "fl-name",
							className: fieldClass,
							autoComplete: "name",
							value: name,
							onChange: (e) => setName(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						htmlFor: "fl-email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "fl-email",
							type: "email",
							inputMode: "email",
							autoComplete: "email",
							className: fieldClass,
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						htmlFor: "fl-phone",
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "fl-phone",
							type: "tel",
							inputMode: "tel",
							autoComplete: "tel",
							className: fieldClass,
							value: phone,
							onChange: (e) => setPhone(e.target.value)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-12 rounded-full bg-brand font-semibold text-ink",
				children: "Submit flight enquiry"
			})
		]
	});
}
function ContactForm({ service, setService }) {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(null);
	function submit(e) {
		e.preventDefault();
		const next = {};
		if (name.trim().length < 2) next.name = "Enter your full name.";
		if (!validEmail(email)) next.email = "Enter a valid email.";
		if (phone.replace(/\D/g, "").length < 8) next.phone = "Enter a phone number.";
		if (!service) next.service = "Choose a service.";
		if (message.trim().length < 12) next.message = "Tell us a little more — at least a sentence.";
		setErrors(next);
		if (Object.keys(next).length) return;
		const id = refCode("ENQ");
		const payload = {
			id,
			name,
			email,
			phone,
			service,
			message,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const existing = JSON.parse(localStorage.getItem("glsconxult-enquiries") || "[]");
		localStorage.setItem("glsconxult-enquiries", JSON.stringify([payload, ...existing].slice(0, 30)));
		setDone(id);
		setMessage("");
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-card p-6",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-brand-deep uppercase",
				children: "Enquiry sent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "mt-2 font-display text-3xl font-medium",
				children: ["Thank you, ", name.split(" ")[0]]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [
					"Reference ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-ink",
						children: done
					}),
					". We reply by email on business days. Nothing was sent to an outside server — this preview keeps your note on this device."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-5 min-h-12 rounded-full bg-ink px-5 font-semibold text-paper",
				onClick: () => setDone(null),
				children: "Write another note"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		id: "enquiry-form",
		onSubmit: submit,
		className: "flex flex-col gap-4",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				htmlFor: "ct-name",
				error: errors.name,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "ct-name",
					className: fieldClass,
					autoComplete: "name",
					value: name,
					onChange: (e) => setName(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					htmlFor: "ct-email",
					error: errors.email,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "ct-email",
						type: "email",
						inputMode: "email",
						autoComplete: "email",
						className: fieldClass,
						value: email,
						onChange: (e) => setEmail(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone number",
					htmlFor: "ct-phone",
					error: errors.phone,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "ct-phone",
						type: "tel",
						inputMode: "tel",
						autoComplete: "tel",
						className: fieldClass,
						value: phone,
						onChange: (e) => setPhone(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Selected service",
				htmlFor: "ct-service",
				error: errors.service,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: "ct-service",
					className: fieldClass,
					value: service,
					onChange: (e) => setService(e.target.value),
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message",
				htmlFor: "ct-message",
				error: errors.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "ct-message",
					rows: 5,
					className: `${fieldClass} min-h-32 resize-y`,
					value: message,
					onChange: (e) => setMessage(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-12 rounded-full bg-brand font-semibold text-ink",
				children: "Submit enquiry"
			})
		]
	});
}
var SOCIALS = [
	{
		name: "linkedin",
		href: "https://www.linkedin.com/",
		label: "LinkedIn"
	},
	{
		name: "facebook",
		href: "https://www.facebook.com/",
		label: "Facebook"
	},
	{
		name: "instagram",
		href: "https://www.instagram.com/",
		label: "Instagram"
	},
	{
		name: "x",
		href: "https://x.com/",
		label: "X"
	}
];
function HomePage() {
	const [booking, setBooking] = (0, import_react.useState)(false);
	const [service, setService] = (0, import_react.useState)("Study Abroad Admissions");
	const [visaStep, setVisaStep] = (0, import_react.useState)(0);
	const [story, setStory] = (0, import_react.useState)(0);
	const [faq, setFaq] = (0, import_react.useState)(0);
	const [checks, setChecks] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		function onClick(event) {
			const target = event.target;
			if (!(target instanceof Element)) return;
			const anchor = target.closest("a");
			if (!anchor) return;
			const href = anchor.getAttribute("href");
			if (!href || !href.startsWith("#") || href.length < 2) return;
			const el = document.getElementById(href.slice(1));
			if (!el) return;
			event.preventDefault();
			el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
		document.addEventListener("click", onClick, true);
		const initial = window.location.hash.slice(1);
		if (initial) document.getElementById(initial)?.scrollIntoView();
		return () => document.removeEventListener("click", onClick, true);
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			const saved = JSON.parse(localStorage.getItem("glsconxult-checklist") || "[]");
			if (Array.isArray(saved)) setChecks(saved);
		} catch {
			setChecks([]);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => setStory((n) => (n + 1) % STORIES.length), 7e3);
		return () => window.clearInterval(id);
	}, []);
	function enquire(next) {
		setService(next);
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
		window.setTimeout(() => document.getElementById("ct-service")?.focus(), 450);
	}
	function toggleCheck(id) {
		setChecks((prev) => {
			const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
			localStorage.setItem("glsconxult-checklist", JSON.stringify(next));
			return next;
		});
	}
	const activeStory = STORIES[story] ?? STORIES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { onBook: () => setBooking(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-12 lg:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold tracking-widest text-brand-deep uppercase",
									children: "International education desk"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-3 font-display text-4xl leading-tight font-medium text-ink sm:text-6xl",
									children: "Study abroad, with the file already in order."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-lg leading-relaxed text-muted",
									children: "GLSCONXULT is the student desk of Global Study Consultancy. Admissions, visas, scholarships, flights, and a room — one counsellor from the first shortlist to arrival."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setBooking(true),
											className: "inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 font-semibold text-ink",
											children: "Book a consultation"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `mailto:${EMAIL}`,
											className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-card px-6 font-semibold text-ink",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
												className: "size-4",
												"aria-hidden": "true"
											}), "Email us"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => enquire("Study Abroad Admissions"),
											className: "inline-flex min-h-12 items-center justify-center rounded-full px-2 font-semibold text-brand-deep",
											children: "Submit enquiry"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80",
										alt: "University campus building in daylight",
										className: "aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[5/4]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-4 left-4 flex items-center gap-3 rounded-2xl bg-card/95 p-3 pr-4 shadow-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/logo.jpg",
												alt: "",
												className: "size-full scale-150 object-cover"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold tracking-widest text-brand-deep uppercase",
											children: "Official mark"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: "Global Study Consultancy"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute right-4 bottom-4 left-4 rounded-2xl bg-ink p-4 text-paper sm:left-auto sm:max-w-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl font-medium",
											children: "One file. Eight countries."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-paper/80",
											children: "Bachelor’s through PhD, plus diplomas and foundation routes."
										})]
									})
								]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "border-y border-line bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4",
							children: [
								["08", "Study destinations"],
								["05", "Programme levels"],
								["45 min", "Strategy session"],
								["01", "Counsellor, start to arrival"]
							].map(([n, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-line px-4 py-5 sm:border-l first:sm:border-l-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-display text-3xl font-medium text-ink tabular-nums",
									children: n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-muted",
									children: label
								})]
							}, label))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-12 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
							alt: "Students working together on a campus lawn",
							className: "aspect-[4/5] w-full rounded-3xl object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 lg:pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							kicker: "About us",
							title: "A consultancy that edits before it encourages.",
							lede: "Families come to GLSCONXULT when the brochures disagree. We read grades, money, and timing together, then recommend a route you can actually finish."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 space-y-5",
							children: [
								["Listen first", "Grades, budget, dependants, and the month you can leave. No shortlist before that."],
								["Name the constraint", "If funds, a subject gap, or a visa rule blocks a dream campus, we say which one."],
								["Stay through arrival", "The same desk handles the offer, the visa file, the flight enquiry, and the room."]
							].map(([title, copy], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[auto_1fr] gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-2xl text-brand-deep tabular-nums",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-medium",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-muted",
									children: copy
								})] })]
							}, title))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "services",
					className: "bg-card py-16 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							kicker: "Our services",
							title: "Seven pieces of the move, one desk.",
							lede: "Open a service to read how it works, or send an enquiry with that service already selected."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: [
								[
									"01",
									"Study Abroad Admissions",
									"admissions",
									"Study Abroad Admissions"
								],
								[
									"02",
									"Student Visa Assistance",
									"visa",
									"Student Visa Processing"
								],
								[
									"03",
									"Educational Counselling",
									"counselling",
									"Educational & Career Counselling"
								],
								[
									"04",
									"Scholarships",
									"scholarships",
									"Scholarship Assistance"
								],
								[
									"05",
									"Flight Booking",
									"flights",
									"International Flight Bookings"
								],
								[
									"06",
									"Accommodation",
									"accommodation",
									"Student Accommodation"
								],
								[
									"07",
									"Pre-departure Support",
									"predeparture",
									"Pre-departure Support"
								]
							].map(([n, title, id, enquiry]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `rounded-3xl border border-line p-5 ${id === "admissions" || id === "predeparture" ? "sm:col-span-2" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl text-brand tabular-nums",
										children: n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-2xl font-medium",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `#${id}`,
											className: "inline-flex min-h-11 items-center text-sm font-semibold text-brand-deep",
											children: ["Read the brief ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "ml-1 size-4",
												"aria-hidden": "true"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => enquire(enquiry),
											className: "inline-flex min-h-11 items-center text-sm font-semibold text-ink",
											children: "Enquire"
										})]
									})
								]
							}, id))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "admissions",
					className: "mx-auto max-w-6xl px-4 py-16 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							kicker: "Study abroad admissions",
							title: "Bachelor’s, master’s, PhD, diplomas, and foundation.",
							lede: "We build a shortlist of programmes that match the transcript you have, not the ranking you saw on a poster."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 divide-y divide-line border-y border-line",
							children: PROGRAMMES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-1 py-4 sm:grid-cols-[9rem_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: p.copy
								})]
							}, p.title))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
							alt: "Lecture hall with students seated in tiered rows",
							className: "aspect-[4/3] w-full rounded-3xl object-cover"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "destinations",
					className: "bg-ink py-16 text-paper lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-brand uppercase",
								children: "Study destinations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 max-w-xl font-display text-3xl font-medium sm:text-4xl",
								children: "Eight countries we actually file for."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0",
								children: DESTINATIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-auto",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: d.image,
												alt: `${d.name} cityscape`,
												className: "aspect-[4/5] w-full rounded-3xl object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-card px-2 py-1 text-xs font-semibold text-ink",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: d.flag,
													alt: "",
													className: "h-4 w-6 rounded-sm object-cover"
												}), d.code]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 text-xl font-medium",
											children: d.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-brand",
											children: d.city
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-paper/75",
											children: d.note
										})
									]
								}, d.code))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "visa",
					className: "mx-auto max-w-6xl px-4 py-16 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
						kicker: "Student visa assistance",
						title: "A file with six visible steps.",
						lede: "We prepare the application. The visa decision belongs to the embassy or immigration authority — we do not promise an outcome."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 lg:grid-cols-[16rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 overflow-x-auto lg:flex-col",
							role: "tablist",
							"aria-label": "Visa steps",
							children: VISA_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": visaStep === i,
								onClick: () => setVisaStep(i),
								className: `min-h-12 shrink-0 rounded-full px-4 text-left text-sm font-semibold lg:rounded-2xl lg:px-4 ${visaStep === i ? "bg-ink text-paper" : "bg-card text-ink"}`,
								children: [
									step.n,
									" ",
									step.title
								]
							}, step.n))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-line bg-card p-6 sm:p-10",
							role: "tabpanel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-5xl text-brand tabular-nums",
									children: VISA_STEPS[visaStep]?.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-3xl font-medium",
									children: VISA_STEPS[visaStep]?.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl text-lg text-muted",
									children: VISA_STEPS[visaStep]?.copy
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "counselling",
					className: "bg-brand-soft py-16 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80",
							alt: "Advisor speaking with a student across a table",
							className: "aspect-[4/3] w-full rounded-3xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
								kicker: "Educational counselling",
								title: "Career advice that survives a visa interview.",
								lede: "The course has to make sense to you and to the officer who reads the statement. We map subjects, work history, and the job you want in three years."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3 text-ink",
								children: [
									"A written profile: grades, gaps, budget, and dependants.",
									"Three realistic programmes, with one we would not recommend and why.",
									"A study plan you can say out loud without reading it."
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-1 size-4 shrink-0 text-brand-deep",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setBooking(true),
								className: "mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-semibold text-paper",
								children: "Book counselling"
							})
						] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "scholarships",
					className: "mx-auto max-w-6xl px-4 py-16 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							kicker: "Scholarships",
							title: "Funding we will only chase if you qualify.",
							lede: "Awards below are ones students commonly target with us. None are guaranteed. Eligibility is checked before an essay is drafted."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80",
							alt: "Notebook and pen on a study desk",
							className: "aspect-[16/8] w-full rounded-3xl object-cover"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 divide-y divide-line border-y border-line",
						children: SCHOLARSHIPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-medium",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-2xl text-muted",
								children: s.copy
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold text-brand-deep",
								children: [
									s.where,
									" · ",
									s.kind
								]
							})]
						}, s.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "flights",
					className: "bg-card py-16 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
							alt: "Aircraft wing above the clouds",
							className: "mb-6 aspect-[16/9] w-full rounded-3xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							kicker: "International flight bookings",
							title: "An enquiry, not a pretend airline.",
							lede: "Tell us the city you leave from, where the campus is, and whether you need a return. A coordinator replies with options that land before orientation."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlightForm, {})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "accommodation",
					className: "mx-auto max-w-6xl px-4 py-16 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							kicker: "Accommodation assistance",
							title: "A room you can move into, not a listing you hope is real.",
							lede: "We compare halls, private studios, and homestay on distance, deposit, contract length, and what happens if the visa is refused."
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=80",
							alt: "Student bedroom with a made bed and desk",
							className: "aspect-[16/10] w-full rounded-3xl object-cover"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-3",
						children: HOUSING.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-3xl border border-line bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-medium",
								children: h.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: h.copy
							})]
						}, h.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "predeparture",
					className: "bg-ink py-16 text-paper lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-brand uppercase",
								children: "Pre-departure support"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "max-w-xl font-display text-3xl font-medium sm:text-4xl",
									children: "A checklist you can tick before the flight."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-paper/70 tabular-nums",
									children: [
										checks.length,
										" of ",
										CHECKLIST.length,
										" ready"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 grid gap-3 md:grid-cols-2",
								children: CHECKLIST.map((item, i) => {
									const on = checks.includes(item.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleCheck(item.id),
										"aria-pressed": on,
										className: `flex min-h-16 w-full items-start gap-3 rounded-2xl px-4 py-3 text-left ${on ? "bg-brand text-ink" : "bg-inverse text-paper ring-1 ring-paper/15"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 font-display text-lg tabular-nums",
												children: String(i + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1",
												children: item.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${on ? "bg-ink text-paper" : "border border-paper/40"}`,
												children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : null
											})
										]
									}) }, item.id);
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "testimonials",
					className: "mx-auto max-w-6xl px-4 py-16 lg:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
								kicker: "Testimonials",
								title: "Sample student stories.",
								lede: "Composite pathways, not named clients. Results vary by institution and by the visa authority."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden gap-2 sm:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Previous story",
									className: "inline-flex size-12 items-center justify-center rounded-full border border-line",
									onClick: () => setStory((n) => (n + STORIES.length - 1) % STORIES.length),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Next story",
									className: "inline-flex size-12 items-center justify-center rounded-full border border-line",
									onClick: () => setStory((n) => (n + 1) % STORIES.length),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
								})]
							})]
						}),
						activeStory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "mt-8 rounded-3xl bg-card p-6 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 text-brand-deep",
									"aria-label": `${activeStory.stars} out of 5 stars`,
									children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${i < activeStory.stars ? "fill-brand text-brand" : "text-line"}` }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-4 font-display text-2xl leading-snug font-medium sm:text-4xl",
									children: [
										"“",
										activeStory.quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-6 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-12 items-center justify-center rounded-full bg-brand font-semibold text-ink",
										"aria-hidden": "true",
										children: activeStory.name.slice(0, 1)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: activeStory.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm text-muted",
										children: activeStory.path
									})] })]
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between sm:justify-start sm:gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 sm:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Previous story",
									className: "inline-flex size-12 items-center justify-center rounded-full border border-line",
									onClick: () => setStory((n) => (n + STORIES.length - 1) % STORIES.length),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Next story",
									className: "inline-flex size-12 items-center justify-center rounded-full border border-line",
									onClick: () => setStory((n) => (n + 1) % STORIES.length),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								role: "tablist",
								"aria-label": "Choose a story",
								children: STORIES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `Story from ${s.name}`,
									"aria-selected": i === story,
									onClick: () => setStory(i),
									className: `size-3 rounded-full ${i === story ? "bg-ink" : "bg-line"}`
								}, s.name))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "faq",
					className: "bg-card py-16 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							kicker: "FAQ",
							title: "Straight answers before you book."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 divide-y divide-line border-y border-line",
							children: FAQS.map((item, i) => {
								const open = faq === i;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-expanded": open,
									onClick: () => setFaq(open ? -1 : i),
									className: "flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left text-lg font-medium",
									children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand-deep",
										"aria-hidden": "true",
										children: open ? "–" : "+"
									})]
								}) }), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pb-4 text-muted",
									children: item.a
								}) : null] }, item.q);
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "contact",
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
						kicker: "Contact us",
						title: "Write to the desk that will answer.",
						lede: "Share the service you need. If you would rather talk first, book a session or email us directly."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold text-brand-deep",
								href: `mailto:${EMAIL}`,
								children: EMAIL
							}) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold",
								href: `tel:${PHONE_TEL}`,
								children: PHONE_DISPLAY
							}) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Meetings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Video, or in person by appointment. London, Toronto, and Sydney desks." })] })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl border border-line bg-card p-5 sm:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {
							service,
							setService
						})
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-inverse text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/logo.jpg",
										alt: "",
										className: "size-full scale-150 object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl",
									children: "GLSCONXULT"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-paper/70",
									children: "Global Study Consultancy"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-sm text-paper/75",
								children: "Admissions, visas, scholarships, flights, and housing for students who want the paperwork to match the plan."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-brand uppercase",
							children: "Visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								["about", "About"],
								["services", "Services"],
								["destinations", "Destinations"],
								["contact", "Contact"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${id}`,
								className: "inline-flex min-h-10 items-center text-paper/80 hover:text-paper",
								children: label
							}) }, id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-brand uppercase",
							children: "Social"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex gap-2",
							children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": s.label,
								className: "inline-flex size-11 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-brand hover:text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, { name: s.name })
							}) }, s.name))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-paper/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto max-w-6xl px-4 py-4 text-xs text-paper/60",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" GLSCONXULT · Global Study Consultancy. Sample stories are composites. Visa decisions are made by the relevant authority. The payment step is a demonstration and does not charge a card."
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDialog, {
				open: booking,
				onClose: () => setBooking(false)
			})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
