import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import ProjectCards from "@/components/ProjectCards";
import Reveal from "@/components/Reveal";
import { projects } from "@/content/site";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Recent Projects",
  description: "Recent painting jobs across Melbourne, suburb by suburb — period homes, apartments, rent roll properties, offices and schools.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className={styles.hero}>
        <img src="/images/facade.webp" alt="" className={styles.bg} />
        <div className={`${styles.shade} grain`} />
        <Reveal className={styles.content}>
          <span className="eyebrow">Our Work</span>
          <h1 className="h-hero">From The Job Site</h1>
          <p className="lead" style={{ color: "var(--color-text)" }}>
            Fifteen years across Melbourne, suburb by suburb. Pick the kind of work closest to yours.
          </p>
        </Reveal>
      </section>
      <section className="section" style={{ paddingTop: 0, paddingBottom: 120, marginTop: -260, position: "relative" }}>
        <div className="container">
          <ProjectCards items={projects} />
        </div>
      </section>
      <Faq />
      <CtaBand />
    </>
  );
}
