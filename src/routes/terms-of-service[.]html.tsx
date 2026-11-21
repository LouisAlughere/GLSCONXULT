import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, PHONE_DISPLAY } from "@/data/content";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/terms-of-service.html")({
  head: () => ({
    meta: [
      { title: "Terms of Service — GLSCONXULT" },
      {
        name: "description",
        content:
          "Terms for GLSCONXULT study-abroad, visa, scholarship, accommodation, and flight services. CAC Registration Number 7794209. Governed by Nigerian law.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout kicker="Legal" title="Terms of Service" updated="Last updated 21 November 2026">
      <p className="text-base leading-relaxed text-muted">
        These terms apply when you use this website or instruct GLSCONXULT. If you do not agree, do not send an enquiry or book a consultation.
      </p>

      <LegalSection title="Company registration and governing law">
        <p>
          <strong className="font-semibold text-ink">GLSCONXULT</strong> is duly registered under the Corporate Affairs Commission (CAC) of Nigeria with Registration Number <strong className="font-semibold text-ink">7794209</strong>.
        </p>
        <p>
          These terms are governed by the laws of the Federal Republic of Nigeria. The courts of Nigeria have jurisdiction, without limiting any right you have under a Nigerian consumer-protection statute that cannot be waived.
        </p>
      </LegalSection>

      <LegalSection title="Scope of services">
        <p>Depending on what you instruct us to do, our work may include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Study-abroad admissions for bachelor’s, master’s, PhD, diploma, and foundation programmes.</li>
          <li>Educational and career counselling.</li>
          <li>Student visa guidance and file preparation.</li>
          <li>Scholarship assistance.</li>
          <li>Accommodation assistance.</li>
          <li>Flight booking enquiries.</li>
          <li>Pre-departure guidance.</li>
        </ul>
        <p>
          A form on this website is a request. It is not, by itself, a confirmed university place, a visa, a ticket, or a tenancy. We confirm the scope, the fee if any, and the next step in writing before paid processing begins.
        </p>
      </LegalSection>

      <LegalSection title="No guarantee of admission or a visa">
        <p>
          GLSCONXULT gives guidance based on the documents and facts you provide. Final admission decisions rest only with the institution. Visa approvals rest only with the relevant embassy, high commission, consulate, or immigration authority. We do not guarantee an offer, a scholarship, or the issue of a visa.
        </p>
        <p>
          A flight enquiry is not a ticket, and an accommodation shortlist is not a lease, until the airline, agent, or landlord confirms it in their own system.
        </p>
      </LegalSection>

      <LegalSection title="Consultation fees and payments">
        <p>
          Requesting a strategy session on this website holds a preferred time. It does not, by itself, take a payment. Where a consultation or a service package is paid, the amount, what it covers, and how to pay are confirmed in writing before we start.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>You may reschedule a booked consultation once, with at least 24 hours’ notice, if another slot is open.</li>
          <li>A cancellation inside 24 hours, or a missed session, may forfeit a consultation fee that has already been paid.</li>
          <li>
            Once processing of a paid service has begun — for example an application review, a visa file, or a submission you asked us to make — that service fee is not refundable, except where the Federal Competition and Consumer Protection Act or another Nigerian law requires a refund.
          </li>
          <li>University deposits, visa fees, tickets, and rent are charged by those organisations. They are not our fees, and their refund rules are theirs.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Your responsibilities">
        <p>You agree that:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Academic transcripts, financial statements, passport details, and every other document you give us are accurate and authentic.</li>
          <li>You will tell us about a previous refusal, a gap in study, a name change, or any fact an institution or embassy would expect to see.</li>
          <li>You will send documents in time for the deadline we flag. A late file is at your risk.</li>
          <li>If a student is under 18, a parent or guardian instructs us and confirms they may share the student’s information.</li>
        </ul>
        <p>
          If we reasonably believe a document is forged or misleading, we will stop work. We may decline to submit the file, and we may tell the institution or authority where the law requires it. Fees for work already done are not refunded in that case.
        </p>
      </LegalSection>

      <LegalSection title="Our responsibilities">
        <p>
          We will act with reasonable care, keep you informed of the step we are on, and not submit an application you have not asked us to submit. We are not liable for a decision made by a university, an embassy, an airline, or a landlord, or for a loss caused by information you withheld or a deadline you missed after we warned you.
        </p>
      </LegalSection>

      <LegalSection title="Website">
        <p>
          The pages on this site are general information. Programme rules, visa categories, and fares change. Check the latest position with us before you rely on a date or a fee shown here.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms:{" "}
          <a className="font-semibold text-brand-deep" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>{" "}
          or WhatsApp {PHONE_DISPLAY}.
        </p>
        <p>
          See also our <a className="font-semibold text-brand-deep" href="/privacy-policy.html">Privacy Policy</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
