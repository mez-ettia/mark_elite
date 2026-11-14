import Link from "next/link";
import { services, type Project } from "@/content/site";
import Reveal from "./Reveal";
import styles from "./ProjectCards.module.css";

/** Project cards (template: blog cards — date / read time / title). */
export default function ProjectCards({ items }: { items: Project[] }) {
  return (
    <ul className={styles.grid}>
      {items.map((p, i) => {
        const svc = services.find((s) => s.slug === p.service);
        return (
          <Reveal as="li" key={p.suburb + p.title} delay={(i % 3) * 0.08}>
            <Link href={`/services/${p.service}`} className={`card ${styles.card}`}>
              <div className={`${styles.img} grain`}>
                <img src={p.image} alt={`${p.title}, ${p.suburb}`} loading="lazy" />
              </div>
              <div className={styles.meta}>
                <span>{p.suburb}</span>
                <span>{svc?.short}</span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className="small">{p.text}</p>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
