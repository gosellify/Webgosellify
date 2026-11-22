import type { Metadata } from "next";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Amazon and Walmart profit calculator",
  description:
    "Free profit calculator for Amazon, Walmart and eBay sellers. Enter your sale price, product cost, referral fee and shipping to see profit per unit, margin, ROI, monthly profit and break-even units.",
};

export default function ProfitCalculatorPage() {
  return <Calculator />;
}
