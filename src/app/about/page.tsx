import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import ProjectCards from "@/components/ProjectCards";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { process, projects } from "@/content/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Mark",
  description: "Fifteen years painting across Melbourne, built on preparation and referrals — now set up for real estate agencies and rent rolls.",
};

const story = [
  {
    when: "Day One",
    title: "From The Bottom",
    text: "Mark arrived in Melbourne without a word of English and started at the very bottom, learning the trade on site from people who had been doing it their whole working lives. Something that came to him almost by chance became the work he's proudest of.",
  },
  {
    when: "Early Years",
    title: "The Inspection",
    text: "Two painters side by side, one window each. Mark's was sanded back, cleaned and prepared; the other went straight over the old coat. When the inspector walked in, the difference spoke for itself — and the standard he holds today became second nature.",
  },
  {
    when: "Today",
    title: "Built For Agencies",
    text: "Fifteen years on, most work still comes through referrals. Elite Master Painting now looks after homes, builders, commercial sites and real estate rent rolls — with digital quoting, photo reporting and a first-response approach built in.",
  },
];

const clients = ["Real Estate Agencies", "Property Managers", "Landlords", "Homeowners", "Builders", "Heritage Homes", "Schools", "Commercial Sites"];
const standards = ["Dulux & Trusted Brands", "$20M Public Liability", "7-Year Warranty", "Boom & Scissor Lift Licensed"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Elite"
        title={
          <>
            Every Great Finish
            <br />
            Starts <span className="accent">Underneath</span>
          </>
        }
        sub="This business wasn't built on hype. It was built on fifteen years of filling every crack, sanding it back, clearing the dust — and only then picking up the brush."
      />

      <section className={`${styles.banner} grain`}>
        <img src="/images/new-build.webp" alt="" />
        <div className={styles.bannerStats}>
          <div>
            <strong>15+</strong>
            <span>
              Years
              <br />
              Painting
            </span>
          </div>
          <div>
            <strong>$20M</strong>
            <span>
              Public
              <br />
              Liability
            </span>
          </div>
          <div>
            <strong>7 YR</strong>
            <span>
              Workmanship
              <br />
              Warranty
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.story}`}>
          <Reveal className={styles.storyLeft}>
            <span className="eyebrow">Our Story</span>
            <h2 className="h2">
              Built On The Prep
              <br />
              <span className="accent">Nobody Sees</span>
            </h2>
            <div className={`${styles.storyImg} grain`}>
              <img src="/images/mark.webp" alt="Mark, owner of Elite Master Painting, on site" loading="lazy" />
            </div>
            <p className={styles.caption}>
              <strong>Mark</strong> — Owner &amp; painter. Fifteen years across Melbourne, and every job finished as if it carries his name, because it does.
            </p>
          </Reveal>
          <ol className={styles.timeline}>
            {story.map((s) => (
              <Reveal as="li" key={s.when} className={styles.step}>
                <span className={styles.when}>{s.when}</span>
                <span className={styles.marker} aria-hidden="true" />
                <div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className="small">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="How A Project Runs" title="Our Process" sub="The same six steps on every job, whether it's one room or a whole rent roll." />
          <ol className={styles.process}>
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={(i % 3) * 0.08} className={`card grain ${styles.processCard}`}>
                <span className={styles.processNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h5">{p.title}</h3>
                <p className="small">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our Work" title="Where The Work Happens" sub="Every job has a story. Here's a look at a few." />
          <Gallery />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="From The Job Site"
            title="Recent Projects"
            sub="A few jobs worth knowing about before you book — straight from the site."
            action={
              <Link href="/projects" className="btn btn--secondary">
                See All Projects
              </Link>
            }
          />
          <div style={{ marginTop: 48 }}>
            <ProjectCards items={projects.slice(0, 3)} />
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHead center ink eyebrow="Clients & Standards" title="Who We Work With" />
          <Reveal>
            <h3 className={styles.groupTitle}>Clients</h3>
            <ul className={styles.names}>
              {clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h3 className={styles.groupTitle}>Standards</h3>
            <ul className={styles.names}>
              {standards.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
