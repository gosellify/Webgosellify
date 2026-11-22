import type { Metadata } from "next";
import ProfitCheckForm from "./ProfitCheckForm";

export const metadata: Metadata = {
  title: "Profit Check: get a plan for your store",
  description:
    "Answer 7 short questions about where you want to sell, your capital and your goal. The Gosellify team reviews your answers and comes back with a plan for your Amazon, Walmart, eBay, Shopify or Etsy store. No payment details asked.",
};

export default function ProfitCheckPage() {
  return <ProfitCheckForm />;
}
