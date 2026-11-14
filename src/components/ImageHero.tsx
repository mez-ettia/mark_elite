import Reveal from "./Reveal";
import styles from "./ImageHero.module.css";

type Props = { image: string; eyebrow: string; title: React.ReactNode; sub?: string; muted?: boolean };

/** Full-bleed photo hero with headline bottom-left (template: class detail & schedule heroes). */
export default function ImageHero({ image, eyebrow, title, sub, muted }: Props) {
  return (
    <section className={styles.hero}>
      <img src={image} alt="" className={styles.bg} />
      <div className={`${styles.shade} grain`} />
      <Reveal className={styles.content}>
        <span className={`eyebrow${muted ? " eyebrow--muted" : ""}`}>{eyebrow}</span>
        <h1 className="h-hero">{title}</h1>
        {sub && <p className="lead" style={{ maxWidth: 760 }}>{sub}</p>}
      </Reveal>
    </section>
  );
}
