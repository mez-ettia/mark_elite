import Reveal from "./Reveal";

type Props = { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean; children?: React.ReactNode };

/** Inner-page hero: eyebrow, 132px Anton headline, lead (template: padding-top 160). */
export default function PageHero({ eyebrow, title, sub, center, children }: Props) {
  return (
    <section className="section" style={{ paddingTop: 160, paddingBottom: 48 }}>
      <div className="container">
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: center ? "center" : "flex-start", textAlign: center ? "center" : "left" }}>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="h-hero">{title}</h1>
            {sub && <p className="lead" style={{ maxWidth: 960, marginTop: 4 }}>{sub}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
