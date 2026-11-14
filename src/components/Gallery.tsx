"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./Gallery.module.css";

const ITEMS = [
  { src: "/images/interiors.webp", cat: "Interiors", alt: "Period room in deep blue grey with white ornate plaster, Brighton" },
  { src: "/images/facade.webp", cat: "Exteriors", alt: "Victorian terrace with cast iron lace in oxide red, Carlton" },
  { src: "/images/office.webp", cat: "Commercial", alt: "Office building entrance repainted in graphite, Footscray" },
  { src: "/images/ornate.webp", cat: "Interiors", alt: "Period room with panelled ceiling and rose held in white" },
  { src: "/images/roofs.webp", cat: "Roofs & Floors", alt: "Tile roof resprayed in charcoal" },
  { src: "/images/wb-after.webp", cat: "Exteriors", alt: "Weatherboard home in cool grey with charcoal trim, Glen Iris" },
  { src: "/images/reno-kitchen.webp", cat: "Interiors", alt: "Renovated open plan kitchen painted throughout, Caulfield East" },
  { src: "/images/school.webp", cat: "Commercial", alt: "School entrance colonnade in a run of colours, Essendon" },
  { src: "/images/floor.webp", cat: "Roofs & Floors", alt: "Garage floor finished in floor-grade coating, Balwyn North" },
  { src: "/images/stairs.webp", cat: "Interiors", alt: "Floating hardwood staircase stained and sealed, Doncaster" },
  { src: "/images/deck-after.webp", cat: "Exteriors", alt: "Rooftop deck stripped back and recoated, Alphington" },
  { src: "/images/commercial.webp", cat: "Commercial", alt: "Commercial building facade" },
  { src: "/images/new-build.webp", cat: "Interiors", alt: "New home finished before move-in, Melton" },
  { src: "/images/real-estate.webp", cat: "Interiors", alt: "Apartment repainted throughout, Preston" },
  { src: "/images/blk-living.webp", cat: "Interiors", alt: "Vacant living room ready for the next tenant" },
];

const CATS = ["All", "Interiors", "Exteriors", "Roofs & Floors", "Commercial"];

/** Filterable work gallery with "Load more" (template: "Where the work happens"). */
export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [count, setCount] = useState(9);
  const list = ITEMS.filter((i) => cat === "All" || i.cat === cat);

  return (
    <div>
      <div className={styles.filters} role="tablist" aria-label="Filter work">
        {CATS.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            className={styles.filter}
            onClick={() => {
              setCat(c);
              setCount(9);
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.ul layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {list.slice(0, count).map((i) => (
            <motion.li
              layout
              key={i.src}
              className={`${styles.item} grain`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={i.src} alt={i.alt} loading="lazy" />
              <span className={styles.tag}>{i.cat}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {count < list.length && (
        <div className={styles.more}>
          <button className="btn btn--secondary" onClick={() => setCount((c) => c + 6)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
