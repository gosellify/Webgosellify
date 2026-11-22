import type { Metadata } from "next";
import Hero from "@/components/v4/Hero";
import TrustMarquee from "@/components/v4/TrustMarquee";
import StatsBand from "@/components/v4/StatsBand";
import ServicesGrid from "@/components/v4/ServicesGrid";
import MarketplaceTabs from "@/components/v4/MarketplaceTabs";
import Handover from "@/components/v4/Handover";
import OrderJourney from "@/components/v4/OrderJourney";
import ProcessTimeline from "@/components/v4/ProcessTimeline";
import PortalShowcase from "@/components/v4/PortalShowcase";
import Results from "@/components/v4/Results";
import Comparison from "@/components/v4/Comparison";
import ProfitShare from "@/components/v4/ProfitShare";
import WhoFor from "@/components/v4/WhoFor";
import WarehouseBand from "@/components/v4/WarehouseBand";
import WhyUs from "@/components/v4/WhyUs";
import Affiliate from "@/components/v4/Affiliate";
import ToolsTeaser from "@/components/v4/ToolsTeaser";
import HomeFAQ from "@/components/v4/HomeFAQ";
import FinalCTA from "@/components/v4/FinalCTA";

export const metadata: Metadata = {
  title: { absolute: "Gosellify | Amazon, Walmart, eBay & Shopify Store Management Agency" },
  description:
    "Full-service ecommerce management for Amazon, Walmart, eBay, Shopify and Etsy sellers. Pay from profit, and see every order in your own dashboard.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatsBand />
      <ServicesGrid />
      <MarketplaceTabs />
      <Handover />
      <OrderJourney />
      <ProcessTimeline />
      <PortalShowcase />
      <Results />
      <Comparison />
      <ProfitShare />
      <WhoFor />
      <WarehouseBand />
      <WhyUs />
      <Affiliate />
      <ToolsTeaser />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
