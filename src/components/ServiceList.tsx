import Link from "next/link";
import type { Service } from "@/content/site";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";
import styles from "./ServiceList.module.css";

/** Rows of service: text left, link middle, photo right (template: classes list). */
export default function ServiceList({ items }: { items: Service[] }) {
  return (
    <ul className={styles.list}>
      {items.map((s) => (
        <Reveal as="li" key={s.slug} className={styles.row}>
          <div className={styles.text}>
            <span className="eyebrow eyebrow--muted">{s.level}</span>
            <h3 className="h3">{s.name}</h3>
            <p className={styles.who}>{s.idealFor}</p>
            <p className="lead">{s.summary}</p>
          </div>
          <Link href={`/services/${s.slug}`} className={`link-arrow ${styles.link}`}>
            <ArrowRight /> View Service
          </Link>
          <Link href={`/services/${s.slug}`} className={`${styles.img} grain`} tabIndex={-1} aria-hidden="true">
            <img src={s.image} alt="" loading="lazy" />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
