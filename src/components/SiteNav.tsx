"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business, nav } from "@/content/site";
import { openChat } from "./ChatWidget";
import { Cross } from "./Icons";
import styles from "./SiteNav.module.css";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.bar}>
      {/* Wordmark: "EMP" set exactly like the template's logotype (Archivo 24 / 700 / uppercase / -0.72px). */}
      <Link href="/" className={styles.logo} aria-label={`${business.name} home`}>
        EMP
      </Link>

      <button
        className={styles.burger}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
      >
        {open ? (
          <Cross size={28} className={styles.close} />
        ) : (
          <span className={styles.lines} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-menu"
            className={styles.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <ul className={styles.links}>
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={item.href} className={pathname === item.href ? styles.active : undefined}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 + nav.length * 0.05 }}
              >
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    setOpen(false);
                    openChat("Get a quote");
                  }}
                >
                  Get a Quote
                </button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
