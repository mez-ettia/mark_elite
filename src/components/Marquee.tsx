import { Cross } from "./Icons";
import styles from "./Marquee.module.css";

/** Infinite accent band (template: lime band of disciplines with × separators). */
export default function Marquee({ items }: { items: string[] }) {
  const row = (
    <div className={styles.row} aria-hidden="true">
      {items.map((t) => (
        <span key={t} className={styles.group}>
          <span className={styles.item}>{t}</span>
          <Cross size={22} className={styles.sep} />
        </span>
      ))}
    </div>
  );
  return (
    <div className={styles.band}>
      <span className="visually-hidden">{items.join(", ")}</span>
      <div className={styles.track}>
        {row}
        {row}
      </div>
    </div>
  );
}
