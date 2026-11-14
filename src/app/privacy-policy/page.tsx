import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { business } from "@/content/site";
import styles from "./privacy.module.css";

export const metadata: Metadata = { title: "Privacy Policy" };

// Adapted from the client's existing policy (elitemasterpainting.com.au/privacy) to reflect this
// build: quote form + chat go to GoHighLevel; no analytics/advertising cookies are loaded.
// REVIEW: have the client confirm the processors listed below before launch.
const sections: { h: string; p: (string | React.ReactNode)[] }[] = [
  {
    h: "Who we are",
    p: [
      `${business.name} is a painting business operating across Melbourne and regional Victoria. ABN ${business.abn}. You can reach us on ${business.phone} or at ${business.email}.`,
    ],
  },
  {
    h: "What we collect",
    p: [
      "When you fill in the quote form or use the chat on this site we collect your name, your email address, your phone number if you give one, the property address if you give one, and whatever you write in the message. That is all we ask for and we do not ask for anything more sensitive.",
    ],
  },
  {
    h: "Why we collect it",
    p: [
      "To answer your enquiry, to work out a price for the job, to book the work, and to keep in touch about that job. If you ask us to quote, we may keep your details so we can follow up later or come back to you if you contact us again.",
      "We do not sell your information, we do not rent it, and we do not pass it to anyone for marketing.",
    ],
  },
  {
    h: "Who else sees it",
    p: [
      "A few services handle parts of this for us. GoHighLevel is the customer system that receives quote requests and chat conversations. The chat on this site is answered by an automated assistant connected to that system, which can pass your enquiry to Mark. Our website host keeps standard server logs, as every website host does.",
      "Some of these providers store data outside Australia. We only use them for the purposes described above.",
    ],
  },
  {
    h: "Cookies",
    p: ["This site does not use analytics or advertising cookies, and we do not track you across other websites."],
  },
  {
    h: "How long we keep it",
    p: [
      "Enquiries are kept for as long as they are useful, usually for a few years, in case you come back to us or a warranty question comes up on work we have done. You can ask us to delete yours at any time.",
    ],
  },
  {
    h: "Seeing or correcting your information",
    p: [
      "You can ask us what we hold about you, ask us to fix anything that is wrong, or ask us to delete it. Ring or email using the details at the top of this page and we will sort it out. There is no charge.",
    ],
  },
  {
    h: "If you are not happy",
    p: [
      "Tell us first and we will try to put it right. If you would rather take it further, the Office of the Australian Information Commissioner handles privacy complaints and can be reached at oaic.gov.au.",
    ],
  },
  {
    h: "Changes to this page",
    p: ["If we change how any of this works, we will update this page and change the date at the top."],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" sub="What we do with the details you send us, in plain language." />
      <section className="section" style={{ paddingTop: 40, paddingBottom: 160 }}>
        <article className={styles.body}>
          {sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </section>
          ))}
        </article>
      </section>
    </>
  );
}
