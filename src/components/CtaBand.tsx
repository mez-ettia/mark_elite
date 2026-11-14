import Link from "next/link";
import ChatButton from "./ChatButton";
import Reveal from "./Reveal";
import styles from "./CtaBand.module.css";

/** Closing call to action over a darkened photo (template: "Talk is cheap / Start training"). */
export default function CtaBand() {
  return (
    <section className={styles.band}>
      <img src="/images/interiors.webp" alt="" className={styles.bg} loading="lazy" />
      <div className={styles.shade} />
      <Reveal className={styles.inner}>
        <span className="eyebrow">Your Quote Is Waiting</span>
        <h2 className={styles.title}>
          Talk Is Cheap
          <br />
          <span className="accent">Quotes Are Free</span>
        </h2>
        <p className="lead">Send the address. We&apos;ll come back with a fixed price, usually within a day.</p>
        <div className={styles.actions}>
          <ChatButton label="Get a Quote" prompt="Get a quote" />
          <Link href="/services" className="btn btn--secondary">
            View Services
          </Link>
        </div>
        <ul className={styles.bullets}>
          <li>• Fixed Quotes</li>
          <li>• Fully Insured</li>
          <li>• No Surprises</li>
        </ul>
      </Reveal>
    </section>
  );
}
