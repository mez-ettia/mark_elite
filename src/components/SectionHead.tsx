import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  action?: React.ReactNode;
  center?: boolean;
  ink?: boolean;
};

/** Eyebrow + Anton H2 + lead, with an optional action aligned bottom-right (template pattern). */
export default function SectionHead({ eyebrow, title, sub, action, center, ink }: Props) {
  return (
    <Reveal>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: center ? "center" : "space-between",
          gap: 24,
          textAlign: center ? "center" : "left",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: center ? "center" : "flex-start", maxWidth: 680 }}>
          <span className={`eyebrow${ink ? " eyebrow--ink" : ""}`}>{eyebrow}</span>
          <h2 className="h2">{title}</h2>
          {sub && <p className="lead">{sub}</p>}
        </div>
        {action}
      </div>
    </Reveal>
  );
}
