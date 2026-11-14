"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/content/site";
import { Plus } from "./Icons";
import Reveal from "./Reveal";
import styles from "./Faq.module.css";

/** "Before you ask" — light section, heading left, accordion right. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section section--light">
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div className={styles.head}>
            <span className="eyebrow eyebrow--ink">Common Questions</span>
            <h2 className="h2">Before You Ask</h2>
            <p className="lead">Everything people usually want to know before booking a quote.</p>
          </div>
        </Reveal>
        <ul className={styles.list}>
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={q} delay={i * 0.04} className={styles.item}>
                <button className={styles.q} onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{q}</span>
                  <Plus size={22} className={isOpen ? `${styles.icon} ${styles.iconOpen}` : styles.icon} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className={styles.a}>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
