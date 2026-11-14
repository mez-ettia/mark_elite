"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import reviews from "@/content/reviews.json";
import { business } from "@/content/site";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "./Icons";
import Reveal from "./Reveal";
import styles from "./ReviewsCarousel.module.css";

type Review = { name: string; rating: number; text: string; source?: string; date?: string };
const items = reviews as Review[];
const INTERVAL_MS = 7000;

const initials = (n: string) =>
  n
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

/** Google reviews carousel — reads src/content/reviews.json. */
export default function ReviewsCarousel() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((step: number) => {
    setState(([i]) => [(i + step + items.length) % items.length, step]);
  }, []);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setInterval(() => go(1), INTERVAL_MS);
    return () => clearInterval(t);
  }, [paused, go]);

  if (items.length === 0) return null;
  const r = items[index];

  return (
    <section className="section" aria-roledescription="carousel" aria-label="Google reviews">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.left}>
          <div className={styles.head}>
            <span className="eyebrow">What Clients Say</span>
            <h2 className="h2">
              Real Work. Real Homes.
              <br />
              Real Reviews.
            </h2>
            <p className="lead">
              {business.rating} from {business.reviewCount} Google reviews. Here&apos;s what they&apos;ll tell you about it.
            </p>
            <a href={business.googleReviews} target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ marginTop: 12 }}>
              <ArrowRight /> See More Reviews On Google
            </a>
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={() => go(-1)} aria-label="Previous review">
              <ChevronLeft />
            </button>
            <button className={styles.arrow} onClick={() => go(1)} aria-label="Next review">
              <ChevronRight />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className={styles.card}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className={styles.body}>
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.figure
                  key={index}
                  className={styles.slide}
                  initial={{ opacity: 0, y: dir * 24, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: dir * -24, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) go(1);
                    else if (info.offset.x > 60) go(-1);
                  }}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${items.length}`}
                >
                  <div className={styles.stars} aria-label={`${r.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className={s < r.rating ? undefined : styles.starOff} />
                    ))}
                  </div>
                  <blockquote className={styles.text}>&quot;{r.text}&quot;</blockquote>
                  <hr className={styles.rule} />
                  <figcaption className={styles.who}>
                    <span className={styles.avatar} aria-hidden="true">
                      {initials(r.name)}
                    </span>
                    <span>
                      <span className={styles.name}>{r.name}</span>
                      <span className={styles.src}>{r.source ?? "Google review"}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <div className={styles.dots}>
              {items.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
                  onClick={() => setState([i, i >= index ? 1 : -1])}
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
