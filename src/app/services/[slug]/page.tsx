import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChatButton from "@/components/ChatButton";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import ImageHero from "@/components/ImageHero";
import Reveal from "@/components/Reveal";
import ServiceList from "@/components/ServiceList";
import { services } from "@/content/site";
import styles from "./detail.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: `${s.name} Painting Melbourne`, description: s.summary } : {};
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 2);

  const facts = [
    { label: "Typical Timeframe", value: s.facts.timeframe },
    { label: "Ideal For", value: s.facts.idealFor },
    { label: "What's Included", value: s.facts.included, wide: true },
    { label: "Price Guide", value: s.facts.price },
    { label: "Disruption", value: s.facts.disruption },
  ];

  return (
    <>
      <ImageHero image={s.image} eyebrow={s.level} title={s.name} muted />

      <section className="section" style={{ paddingTop: 100 }}>
        <div className="container">
          <Reveal>
            <dl className={`card grain ${styles.facts}`}>
              {facts.map((f) => (
                <div key={f.label} className={f.wide ? styles.wide : undefined}>
                  <dt className={styles.factLabel}>{f.label}</dt>
                  <dd className="lead">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 80 }}>
        <div className={`container ${styles.blocks}`}>
          {s.blocks.map((b, i) => (
            <Reveal key={b.title} className={`${styles.block} ${i % 2 ? styles.right : ""}`}>
              <div className={`${styles.photo} grain`}>
                <img src={b.image} alt="" loading="lazy" />
              </div>
              <div className={styles.panel}>
                <h3 className={styles.panelTitle}>{b.title}</h3>
                <p className="lead">{b.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className={styles.ctaRow}>
              <ChatButton label={`Quote: ${s.short}`} prompt={`Get a quote for ${s.name.toLowerCase()}`} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 48 }}>
              Check Out More Services
            </h2>
          </Reveal>
          <ServiceList items={others} />
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
