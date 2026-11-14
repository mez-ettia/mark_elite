import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import { PlanBanner } from "@/components/PlanCards";
import PricingTabs from "@/components/PricingTabs";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { pricing } from "@/content/site";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "What It Costs",
  description: "House painting costs in Melbourne: single rooms $450–$1,200, three-bedroom interiors $4,500–$9,000, single-storey exteriors $5,500–$12,000. Rent roll and commercial pricing on request.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero center eyebrow="What It Costs" title="Price Ranges" sub="Pick the setup that fits you." />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={styles.banner}>
          <PlanBanner
            title="Your quote is free. And fixed."
            text="Where a job sits inside its range comes down to the surfaces and the preparation, not your postcode. Once you have the price, it does not move."
            checks={["No Obligation", "No Surprises", "Usually Within A Day"]}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 80 }}>
        <PricingTabs />
      </section>

      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container--narrow">
          <SectionHead center eyebrow="Side By Side" title="Compare Every Option" sub="Everything each type of job includes, side by side." />
          <Reveal>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    {pricing.compare.columns.map((c) => (
                      <th scope="col" key={c}>
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                {pricing.compare.groups.map((g) => (
                  <tbody key={g.name}>
                    <tr className={styles.group}>
                      <th scope="rowgroup" colSpan={4}>
                        {g.name}
                      </th>
                    </tr>
                    {g.rows.map(([label, ...cells]) => (
                      <tr key={label}>
                        <th scope="row">{label}</th>
                        {cells.map((c, i) => (
                          <td key={i} className={c === "✓" ? styles.tick : c === "—" ? styles.dash : undefined}>
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
