import Link from "next/link";
import { services } from "@/content/site";
import styles from "./ServiceStrip.module.css";

/** Five photo cards that widen on hover (template: "Pick your discipline"). */
export default function ServiceStrip() {
  return (
    <div className={styles.strip}>
      {services.map((s) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className={`${styles.card} grain`}>
          <img src={s.image} alt={s.name} loading="lazy" />
          <span className={styles.label}>{s.short}</span>
          <span className={styles.more}>{s.level}</span>
        </Link>
      ))}
    </div>
  );
}
