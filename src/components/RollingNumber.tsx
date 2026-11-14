"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./RollingNumber.module.css";

/** Odometer-style counter: each digit rolls up into place when scrolled into view (template effect). */
export default function RollingNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const digits = String(value).split("").map(Number);

  return (
    <span ref={ref} className={styles.num} aria-label={`${prefix}${value}${suffix}`}>
      {prefix && <span aria-hidden="true">{prefix}</span>}
      {digits.map((d, i) => (
        <span key={i} className={styles.col} aria-hidden="true">
          <span className={styles.sizer}>{d}</span>
          <motion.span
            className={styles.strip}
            initial={{ y: "0em" }}
            animate={{ y: inView ? `${-(d + 10)}em` : "0em" }}
            transition={{ duration: 1.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {[...Array(20)].map((_, n) => (
              <span key={n}>{n % 10}</span>
            ))}
          </motion.span>
        </span>
      ))}
      {suffix && <span aria-hidden="true" className={styles.suffix}>{suffix}</span>}
    </span>
  );
}
