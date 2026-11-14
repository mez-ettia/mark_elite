import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { business } from "@/content/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Request A Free Quote",
  description: "Tell us about your project and we'll get back to you, usually within a day, with a fixed, no-surprises quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Request A Free Quote"
        sub="Tell us about your project — one room, one property or a whole rent roll — and we'll get back to you, usually within a day, with a fixed, no-surprises quote."
      />
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container--narrow">
          <Reveal>
            <div className={`card grain ${styles.formCard}`}>
              <h2 className="h2" style={{ marginBottom: 48 }}>
                Send Us The Details
              </h2>
              <QuoteForm />
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.info}>
              <div>
                <h3>Service Area</h3>
                <p>Melbourne wide, from the bayside suburbs to the outer east. Happy to travel further for larger projects.</p>
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </p>
              </div>
              <div>
                <h3>Call</h3>
                <p>
                  <a href={business.phoneHref}>{business.phone}</a>
                </p>
              </div>
              <div>
                <h3>WhatsApp</h3>
                <p>
                  <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                </p>
              </div>
              <div>
                <h3>Response</h3>
                <p>
                  First response is the standard. If we don&apos;t pick up straight away, we&apos;re on site — we always call back as soon as we&apos;re
                  free.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Faq />
      <CtaBand />
    </>
  );
}
