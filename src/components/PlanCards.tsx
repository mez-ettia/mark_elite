import { CheckCircle } from "./Icons";
import ChatButton from "./ChatButton";
import Reveal from "./Reveal";
import styles from "./PlanCards.module.css";

type Plan = { name: string; price: string; unit: string; text: string; popular?: boolean };

/** Accent banner (template: "first class is free") above. */
export function PlanBanner({ title, text, checks }: { title: string; text: string; checks: string[] }) {
  return (
    <Reveal>
      <div className={styles.banner}>
        <div>
          <h4 className={styles.bannerTitle}>{title}</h4>
          <p className={styles.bannerText}>{text}</p>
        </div>
        <ul className={styles.checks}>
          {checks.map((c) => (
            <li key={c}>
              <CheckCircle /> {c}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/** Three plan cards; the "popular" one gets the accent border, badge and primary button. */
export default function PlanCards({ plans, cta = "Get a Quote" }: { plans: Plan[]; cta?: string }) {
  return (
    <div className={styles.grid}>
      {plans.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.08}>
          <div className={`card grain ${styles.card} ${p.popular ? styles.popular : ""}`}>
            {p.popular && <span className={styles.badge}>Most Popular</span>}
            <h5 className="h5">{p.name}</h5>
            <div>
              <p className={styles.price}>
                {p.price} <span>{p.unit}</span>
              </p>
              <p className="small">{p.text}</p>
            </div>
            <ChatButton label={cta} prompt={`Quote: ${p.name}`} variant={p.popular ? "primary" : "secondary"} block />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
