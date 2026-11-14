import type { Metadata } from "next";
import AreasTabs from "@/components/AreasTabs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import ImageHero from "@/components/ImageHero";

export const metadata: Metadata = {
  title: "Where We Work",
  description: "Painting across Melbourne, the Mornington Peninsula, Geelong and regional Victoria — from the inner east and bayside to the growth corridors.",
};

export default function AreasPage() {
  return (
    <>
      <ImageHero
        image="/images/wb-after.webp"
        eyebrow="Where We Work"
        title="Melbourne And Beyond"
        sub="The suburb is not an issue. From the inner suburbs to the growth corridors, the Peninsula, Geelong and regional Victoria."
      />
      <section className="section" style={{ paddingTop: 100, paddingBottom: 160 }}>
        <AreasTabs />
      </section>
      <Faq />
      <CtaBand />
    </>
  );
}
