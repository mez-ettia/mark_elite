import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import ServiceList from "@/components/ServiceList";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Real estate and rent roll painting, interiors, exteriors, roofs and floors, and commercial painting across Melbourne.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Find Your <span className="accent">Finish</span>
          </>
        }
        sub="Five services, one painter. Start with the one closest to your job — most clients end up booking more than one."
      />
      <section className="section" style={{ paddingTop: 112 }}>
        <div className="container">
          <ServiceList items={services} />
        </div>
      </section>
      <Faq />
      <CtaBand />
    </>
  );
}
