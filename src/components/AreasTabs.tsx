"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { areas } from "@/content/site";
import styles from "./AreasTabs.module.css";

/** Region tabs + suburb rows (template: weekly class schedule). */
export default function AreasTabs() {
  const [i, setI] = useState(0);
  const a = areas[i];
  return (
    <div className={styles.wrap}>
      <div className={styles.tabs} role="tablist" aria-label="Region">
        {areas.map((r, n) => (
          <button key={r.region} role="tab" aria-selected={n === i} className={styles.tab} onClick={() => setI(n)}>
            {r.region}
            {n === i && <motion.span layoutId="areas-underline" className={styles.underline} />}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ul
          key={a.region}
          className={styles.rows}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {a.suburbs.map((s, n) => (
            <li key={s.name} className={styles.row}>
              <div className={styles.idx}>
                <span className={styles.num}>{String(n + 1).padStart(2, "0")}</span>
                <span className={styles.sub}>Suburb</span>
              </div>
              <div>
                <span className={styles.name}>{s.name}</span>
                <span className={styles.text}>{s.text}</span>
              </div>
              <span className="eyebrow eyebrow--muted">{a.note}</span>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
      <p className={styles.note}>
        Your suburb is not on the list? That is not a problem at all. If it is within reach we will come and look, and the quote costs nothing either
        way.
      </p>
    </div>
  );
}
