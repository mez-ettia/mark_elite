import Link from "next/link";
import { business } from "@/content/site";
import ChatButton from "../ChatButton";
import styles from "./Hero.module.css";

/** Split a word into letters for the staggered rise. `start` offsets the stagger index. */
function Letters({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <span className={styles.word} aria-hidden="true">
      {text.split("").map((ch, i) => (
        <span key={i} className={styles.letter} style={{ "--i": start + i } as React.CSSProperties}>
          {ch}
        </span>
      ))}
    </span>
  );
}

/**
 * Cinematic hero (pure CSS animation so it also runs in the static export):
 * photo fades up from black with a slow push-in → "ELITE MASTER" rises letter by letter →
 * "PAINTING" lands as a Tiffany outline and is filled left-to-right like a roller → actions fade in.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/images/exteriors.webp" alt="" className={styles.bg} />
      <div className={`${styles.shade} grain`} />

      <div className={styles.center}>
        <h1 className={styles.title} aria-label={`${business.name} — house painters in ${business.location}`}>
          <span className={styles.line}>
            <Letters text="Elite" />
            <span className={styles.space} aria-hidden="true" />
            <Letters text="Master" start={5} />
          </span>
          <span className={styles.space} aria-hidden="true" />
          <span className={`${styles.line} ${styles.paintWrap}`}>
            <span className={styles.paint} aria-hidden="true">
              Painting
            </span>
          </span>
        </h1>

        <div className={styles.actions}>
          <ChatButton label="Get a Quote" prompt="Get a quote" />
          <Link href="/services" className="btn btn--secondary">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
