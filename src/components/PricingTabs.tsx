"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { pricing } from "@/content/site";
import PlanCards from "./PlanCards";
import styles from "./PricingTabs.module.css";

type Tab = (typeof pricing.tabs)[number];

/** Segmented toggle + plan cards (template: Monthly / 6-month / Annual toggle). */
export default function PricingTabs() {
  const [tab, setTab] = useState<Tab>("Homeowners");
  return (
    <div className={styles.wrap}>
      <div className={styles.toggle} role="tablist" aria-label="Pricing for">
        {pricing.tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} className={styles.tab} onClick={() => setTab(t)}>
            {tab === t && <motion.span layoutId="pricing-pill" className={styles.pill} transition={{ type: "spring", bounce: 0.15, duration: 0.5 }} />}
            <span className={styles.label}>{t}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: "100%" }}
        >
          <PlanCards plans={pricing.plans[tab]} cta={tab === "Homeowners" ? "Get a Quote" : "Request Pricing"} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
