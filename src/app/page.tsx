import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Hero from "@/components/home/Hero";
import ServiceStrip from "@/components/home/ServiceStrip";
import { ArrowRight, Quote } from "@/components/Icons";
import Marquee from "@/components/Marquee";
import PlanCards, { PlanBanner } from "@/components/PlanCards";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import RollingNumber from "@/components/RollingNumber";
import SectionHead from "@/components/SectionHead";
import { ownerQuote, rentRollPrograms, stats, whyAgencies } from "@/content/site";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee items={["Real Estate", "Rent Rolls", "Interiors", "Exteriors", "Roofs & Floors", "Commercial"]} />

      {/* By the numbers */}
      <section className={`section ${styles.numbers}`}>
        <div className={`container--narrow ${styles.numbersGrid}`}>
          <Reveal>
            <span className="eyebrow">By The Numbers</span>
          </Reveal>
          <div className={styles.numbersBody}>
            <Reveal>
              <p className={styles.statement}>
                Fifteen years painting across Melbourne, built on the preparation nobody sees.{" "}
                <span className="accent">Now set up for agencies and rent rolls</span>, with digital quotes, photo
                reporting and a first-response promise.
              </p>
            </Reveal>
            <ul className={styles.stats}>
              {stats.map((s, i) => (
                <Reveal as="li" key={s.label} delay={i * 0.08} className={styles.stat}>
                  <RollingNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  <span className={styles.statLabel}>{s.label}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What We Paint"
            title="Pick Your Project"
            sub="From a single vacancy to a whole rent roll — five services, one painter."
            action={
              <Link href="/services" className="btn btn--secondary">
                View All Services
              </Link>
            }
          />
          <ServiceStrip />
        </div>
      </section>

      {/* Why agencies choose us */}
      <section className="section" style={{ paddingBottom: 80 }}>
        <div className="container">
          <SectionHead
            eyebrow="Built For Real Estate"
            title="Why Agencies Choose Us"
            sub="Rent roll ready, digitally quoted, clearly reported — and first to respond."
            action={
              <Link href="/services/real-estate-rent-rolls" className="btn btn--secondary">
                Rent Roll Painting
              </Link>
            }
          />
          <ul className={styles.why}>
            {whyAgencies.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 0.08} className={`card grain ${styles.whyCard}`}>
                <span className={styles.whyNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.whyRule} />
                <div className={styles.whyText}>
                  <h5 className="h5">{w.title}</h5>
                  <p className="small">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* From the owner */}
      <section className="section section--light">
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow--ink">From The Owner</span>
          </Reveal>
          <div className={styles.owner}>
            <Reveal className={`${styles.ownerImg} grain`}>
              <img src={ownerQuote.image} alt="Mark, owner of Elite Master Painting, on site with a brush and a tin of Dulux" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1} className={styles.ownerQuote}>
              <Quote />
              <blockquote>{ownerQuote.text}</blockquote>
              <Quote flip className={styles.quoteEnd} />
              <div className={styles.ownerWho}>
                <span className="h5" style={{ color: "var(--color-ink)" }}>
                  {ownerQuote.name}
                </span>
                <span className="small" style={{ color: "var(--color-ink-2)" }}>
                  {ownerQuote.role}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      {/* Rent roll programs (template: membership plans) */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container--narrow">
          <SectionHead
            center
            eyebrow="For Property Managers"
            title="Rent Roll Programs"
            sub="Pick the setup that fits your portfolio."
          />
          <div className={styles.plans}>
            <PlanBanner {...rentRollPrograms.banner} />
            <PlanCards plans={rentRollPrograms.tiers} cta="Request Pricing" />
          </div>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
              <Link href="/pricing" className="link-arrow">
                <ArrowRight /> See All Price Ranges, Packages And Inclusions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
