import { FeatureList, ServiceSection } from "@/components/services/ServiceBlocks";

const features: { title: string; desc: string }[] = [
  {
    title: "Connected through the marketplace's official API",
    desc: "Orders, items, inventory, prices, returns and payments sync from each store's own connection.",
  },
  {
    title: "Separate, encrypted connections",
    desc: "Every store has its own encrypted credentials. One store's data is not mixed with another's.",
  },
  {
    title: "Role-based access",
    desc: "Team members see only the stores and tasks assigned to them, and changes are recorded in an audit history.",
  },
  {
    title: "Profit and loss per order",
    desc: "Product cost, marketplace fees, shipping and prep are tracked per order, with a monthly statement for every store.",
  },
  {
    title: "Client dashboard",
    desc: "You see your own stores' performance, monthly statements and invoices in a private login.",
  },
  {
    title: "Account health checks",
    desc: "Performance metrics, listing issues and policy alerts are reviewed daily.",
  },
];

export default function TechnologySection() {
  return (
    <ServiceSection
      eyebrow="Our own software"
      title="Every store runs on the Gosellify Portal"
      lead={
        <>
          We built the Portal for our own stores first. It connects each store through the marketplace&apos;s
          official API, so our team and the store owner look at the same figures.
        </>
      }
    >
      <FeatureList items={features} cols={3} />
    </ServiceSection>
  );
}
