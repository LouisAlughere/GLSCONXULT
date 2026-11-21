import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, PHONE_DISPLAY } from "@/data/content";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/privacy-policy.html")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GLSCONXULT" },
      {
        name: "description",
        content:
          "How GLSCONXULT, CAC Registration Number 7794209, collects and protects personal data under the Nigeria Data Protection Act and the NDPR.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalLayout kicker="Legal" title="Privacy Policy" updated="Last updated 21 November 2026">
      <p className="text-base leading-relaxed text-muted">
        This policy explains how GLSCONXULT handles personal data when you use this website or ask us to work on a study-abroad file. It is written for the Nigeria Data Protection Act 2023 (NDPA) and the Nigeria Data Protection Regulation 2019 (NDPR).
      </p>

      <LegalSection title="Data controller">
        <p>
          The data controller is <strong className="font-semibold text-ink">GLSCONXULT</strong>, a business registered in Nigeria with the Corporate Affairs Commission (CAC Registration Number: <strong className="font-semibold text-ink">7794209</strong>).
        </p>
        <p>
          For access requests, corrections, or any question about this policy, email{" "}
          <a className="font-semibold text-brand-deep" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>{" "}
          or message WhatsApp on {PHONE_DISPLAY}. Put “Data request” in the subject line.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>What we collect depends on the service you ask for. It can include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Personal identification and contact data: your name, email address, phone number, and country.</li>
          <li>Consultation details: the service you select, your message, and a preferred date and time.</li>
          <li>Academic records you send us: transcripts, certificates, test scores, personal statements, and references.</li>
          <li>Passport and visa documentation you send us: biodata page, application forms, previous decisions, and supporting letters.</li>
          <li>Financial documents you choose to share for a visa or scholarship file.</li>
          <li>Flight and accommodation preferences: cities, dates, one-way or round trip, and the kind of room you want.</li>
        </ul>
        <p>
          The contact form, flight enquiry, and consultation booking send the fields you type. A booking reference and the pre-departure checklist may also be stored in your own browser. We do not ask you to type a card number into this website.
        </p>
      </LegalSection>

      <LegalSection title="Purpose and lawful basis">
        <p>We process personal data only for a stated purpose, and only on a basis the NDPA and NDPR allow.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold text-ink">Contract, or steps you ask us to take before a contract.</strong> Study-abroad admissions, educational counselling, scholarship files, accommodation enquiries, flight enquiries, and consultation bookings.
          </li>
          <li>
            <strong className="font-semibold text-ink">Consent.</strong> When you submit a form, or when you send passport, visa, or financial documents for a file. You can withdraw that consent. Withdrawal does not undo processing that has already happened, and it may mean we cannot continue the application.
          </li>
          <li>
            <strong className="font-semibold text-ink">Legal obligation.</strong> Records we must keep for tax, accounting, or a lawful request from a Nigerian authority.
          </li>
          <li>
            <strong className="font-semibold text-ink">Legitimate interest.</strong> Replying to an enquiry, keeping the website secure, and keeping a record of advice we gave, where that interest is not overridden by your rights.
          </li>
        </ul>
        <p>We do not sell personal data, and we do not use it for automated decisions that produce a legal effect.</p>
      </LegalSection>

      <LegalSection title="Data sharing and international transfers">
        <p>We share only the information a task needs, and only with people who have a reason to see it:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Universities and colleges you ask us to approach.</li>
          <li>Embassies, high commissions, visa application centres, and immigration authorities handling a visa you asked us to prepare.</li>
          <li>Airlines, ticket agents, and accommodation providers when you ask us to enquire.</li>
          <li>A payment processor, if you later pay a fee that was agreed in writing. We receive a confirmation, not your full card number.</li>
          <li>Professional advisers, or a regulator, when Nigerian law requires it.</li>
        </ul>
        <p>
          Many of those recipients are outside Nigeria. Under the NDPA and the NDPR, a cross-border transfer is made only when at least one of the following is true: you have given informed consent after we tell you the destination and the risk; the transfer is necessary to perform the contract you asked for, such as an application, a visa file, a flight enquiry, or a housing enquiry; or we have a written safeguard that requires the recipient to protect the data to a standard comparable to the NDPA. We do not move a file “just in case”.
        </p>
      </LegalSection>

      <LegalSection title="Your rights under the NDPA and NDPR">
        <p>You may ask us to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold text-ink">Access</strong> the personal data we hold about you, and receive a copy.
          </li>
          <li>
            <strong className="font-semibold text-ink">Rectify</strong> information that is inaccurate or incomplete.
          </li>
          <li>
            <strong className="font-semibold text-ink">Erase</strong> data we no longer need, or that we hold only because you consented.
          </li>
          <li>
            <strong className="font-semibold text-ink">Restrict</strong> processing while we check a correction or a dispute.
          </li>
          <li>
            <strong className="font-semibold text-ink">Withdraw consent</strong> where consent was the reason we were processing.
          </li>
          <li>
            <strong className="font-semibold text-ink">Object</strong> to processing that is based on legitimate interest.
          </li>
        </ul>
        <p>
          Email{" "}
          <a className="font-semibold text-brand-deep" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>{" "}
          with the subject “Data request”. We aim to answer within one month. We may ask you to confirm your identity before we release a file. You may also complain to the Nigeria Data Protection Commission.
        </p>
      </LegalSection>

      <LegalSection title="Data security and retention">
        <p>
          Client records are limited to the counsellors working on the file. We do not publish your documents on this website. No method of storage is perfect; if we learn of a breach that is likely to risk your rights, we will notify you and the Nigeria Data Protection Commission where the NDPA requires it.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Enquiry and consultation records: up to six years after our last contact, so a later dispute can be answered.</li>
          <li>Application, visa, and financial documents: for the life of the application and for 24 months after the decision, then deleted unless a complaint, audit, or legal hold is open.</li>
          <li>Accounting records, if a fee is paid: for as long as Nigerian tax law requires.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          We do not market this website to children. If a student is under 18, a parent or guardian should send the enquiry and may be asked to confirm consent before we open a file.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          If we change this policy, we will update the date at the top of this page. The version on the website is the one that applies.
        </p>
        <p>
          See also our <a className="font-semibold text-brand-deep" href="/terms-of-service.html">Terms of Service</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
