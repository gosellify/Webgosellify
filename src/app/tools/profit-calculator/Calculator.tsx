"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaChartLine, FaCoins, FaFlagCheckered, FaInfoCircle, FaPercent, FaUndo } from "react-icons/fa";
import { BrandName } from "@/components/brand/Logo";
import { ServiceSection, StepList } from "@/components/services/ServiceBlocks";
import type { TitledItem } from "@/components/services/ServiceBlocks";

type Marketplace = "Amazon" | "Walmart" | "eBay" | "Other";
type FieldKey = "price" | "cost" | "fee" | "ship" | "prep" | "units" | "ads";
type Values = Record<FieldKey, string>;

type FieldDef = {
  key: FieldKey;
  label: string;
  unit: "$" | "%" | "";
  step: number;
  sliderMax: number;
  sliderStep: number;
  max?: number;
  note?: string;
  optional?: boolean;
};

const MARKETPLACES: Marketplace[] = ["Amazon", "Walmart", "eBay", "Other"];

const DEFAULTS: Values = { price: "30", cost: "12", fee: "15", ship: "5", prep: "1", units: "300", ads: "0" };

type Segment = { key: string; label: string; amount: number; share: number; background: string; border: string };

const SWATCH: Record<string, { background: string; border: string }> = {
  cost: { background: "#0A1B4D", border: "#0A1B4D" },
  fee: { background: "#46557F", border: "#46557F" },
  ship: { background: "#1560FF", border: "#1560FF" },
  prep: { background: "#DFE4EE", border: "#46557F" },
  profit: { background: "#FFB21A", border: "#E89A00" },
};

const STEPS: { title: string; text: string }[] = [
  {
    title: "Enter what the product sells for and what it costs you",
    text: "Use the price a buyer pays and the price you pay your supplier for one unit.",
  },
  {
    title: "Add the fees and the cost to get it to the buyer",
    text: "Type the referral fee for your category, then your fulfillment or shipping cost and any prep cost per unit.",
  },
  {
    title: "Set your monthly units and ad spend",
    text: "The results update as you type. Change one number at a time to see what moves your profit most.",
  },
];

const DEFINITIONS: { term: string; formula: string; text: string }[] = [
  {
    term: "Profit per unit",
    formula: "Sale price − product cost − referral fee − shipping − prep",
    text: "The money left from one sale after every per-unit cost is paid. If it is below zero, each sale loses money.",
  },
  {
    term: "Margin",
    formula: "Profit per unit ÷ sale price",
    text: "The share of the sale price you keep as profit. A 20% margin means you keep $20 of every $100 in sales.",
  },
  {
    term: "ROI",
    formula: "Profit per unit ÷ (product cost + shipping + prep)",
    text: "Return on investment. It shows how much profit you make for each dollar you put into a unit. A 20% ROI means $100 spent brings back $120.",
  },
  {
    term: "Break-even units",
    formula: "Monthly ad spend ÷ profit per unit, rounded up",
    text: "The number of units you must sell in a month to cover your ad spend. Every unit after that adds to your monthly profit.",
  },
];

const STEP_ITEMS: TitledItem[] = STEPS.map((s) => ({ title: s.title, desc: s.text }));
const DEF_ICONS: React.ReactNode[] = [<FaCoins key="a" />, <FaPercent key="b" />, <FaChartLine key="c" />, <FaFlagCheckered key="d" />];
const DEF_TILES: string[] = ["icon-tile", "icon-tile amber", "icon-tile navy", "icon-tile"];

const CSS = `
.pcalc-input { width: 100%; min-width: 0; padding: 12px 14px; font-family: inherit; font-size: 16px; font-weight: 700; color: #0A1B4D; background: transparent; border: 0; outline: none; font-variant-numeric: tabular-nums; -moz-appearance: textfield; appearance: textfield; }
.pcalc-input::-webkit-outer-spin-button, .pcalc-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.pcalc-box { display: flex; align-items: center; background: #fff; border: 1px solid var(--color-line); border-radius: 12px; overflow: hidden; transition: border-color .15s; }
.pcalc-box:hover { border-color: var(--color-text-light); }
.pcalc-box:focus-within { border-color: var(--color-primary); box-shadow: inset 0 0 0 1px var(--color-primary); }
.pcalc-unit { align-self: stretch; display: flex; align-items: center; justify-content: center; min-width: 38px; padding: 0 10px; background: var(--color-light-gray); color: var(--color-text-light); font-weight: 700; font-size: 15px; }
.pcalc-range { width: 100%; margin: 8px 0 0; display: block; accent-color: #1560FF; cursor: pointer; }
.pcalc-mp { flex: 1 1 90px; min-width: 0; padding: 11px 12px; border-radius: 999px; border: 1px solid var(--color-line); background: #fff; color: var(--color-dark); font-family: inherit; font-size: 15px; font-weight: 700; line-height: 1.2; cursor: pointer; transition: border-color .15s; }
.pcalc-mp:hover { border-color: var(--color-primary); }
.pcalc-mp[aria-pressed="true"] { border-color: var(--color-primary); color: #fff; background: var(--color-primary); }
.pcalc-panel { background: #fff; border: 1px solid var(--color-line); border-radius: 16px; padding: clamp(18px, 2.6vw, 30px); min-width: 0; }
.pcalc-reset { display: inline-flex; align-items: center; gap: 8px; padding: 0; border: 0; background: none; color: var(--color-primary); font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; text-decoration: underline; text-underline-offset: 3px; }
.pcalc-seg { height: 100%; min-width: 0; }
`;

function num(text: string): number {
  const n = parseFloat(text);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function money(n: number): string {
  const abs = Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${n < -0.004 ? "−" : ""}$${abs}`;
}

function percent(n: number): string {
  const abs = Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return `${n < -0.04 ? "−" : ""}${abs}%`;
}

type NumberFieldProps = {
  def: FieldDef;
  value: string;
  onChange: (key: FieldKey, value: string) => void;
};

function NumberField({ def, value, onChange }: NumberFieldProps) {
  const id = `pcalc-${def.key}`;
  const n = num(value);
  const sliderValue = Math.min(def.sliderMax, n);
  return (
    <div style={{ minWidth: 0 }}>
      <label htmlFor={id} style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--color-dark)", marginBottom: 6 }}>
        {def.label}
        {def.optional ? <span style={{ fontWeight: 400, color: "var(--color-text-light)" }}> (optional)</span> : null}
      </label>
      <div className="pcalc-box">
        {def.unit === "$" ? (
          <span className="pcalc-unit" aria-hidden="true">
            $
          </span>
        ) : null}
        <input
          id={id}
          name={def.key}
          type="number"
          inputMode="decimal"
          className="pcalc-input"
          min={0}
          max={def.max}
          step={def.step}
          autoComplete="off"
          aria-describedby={def.note ? `${id}-note` : undefined}
          value={value}
          onChange={(e) => onChange(def.key, e.target.value)}
          onBlur={() => {
            if (value.trim() === "") onChange(def.key, "0");
          }}
        />
        {def.unit === "%" ? (
          <span className="pcalc-unit" aria-hidden="true">
            %
          </span>
        ) : null}
      </div>
      <input
        type="range"
        className="pcalc-range"
        aria-label={`${def.label} slider`}
        min={0}
        max={def.sliderMax}
        step={def.sliderStep}
        value={sliderValue}
        onChange={(e) => onChange(def.key, e.target.value)}
      />
      {def.note ? (
        <p id={`${id}-note`} className="typo-small" style={{ marginTop: 4 }}>
          {def.note}
        </p>
      ) : null}
    </div>
  );
}

type StatProps = { label: string; value: string; sub: string; big?: boolean; tag?: string };

function Stat({ label, value, sub, big = false, tag }: StatProps) {
  return (
    <div
      style={
        big
          ? { minWidth: 0, padding: "18px 20px", borderRadius: 14, background: "var(--color-primary-light)", gridColumn: "1 / -1", marginBottom: 4 }
          : { minWidth: 0, padding: "14px 0", borderBottom: "1px solid var(--color-line)" }
      }
    >
      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--color-dark)" }}>
        {label}
        {tag ? <span style={{ fontWeight: 400, color: "var(--color-text-light)" }}> ({tag.toLowerCase()})</span> : null}
      </p>
      <p
        style={{
          marginTop: 4,
          fontSize: big ? 32 : 22,
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          color: big && !tag ? "var(--color-primary)" : "var(--color-dark)",
          fontVariantNumeric: "tabular-nums",
          overflowWrap: "anywhere",
        }}
      >
        {value}
      </p>
      <p className="typo-small" style={{ marginTop: 4 }}>
        {sub}
      </p>
    </div>
  );
}

export default function Calculator() {
  const [marketplace, setMarketplace] = useState<Marketplace>("Amazon");
  const [values, setValues] = useState<Values>(DEFAULTS);

  const setValue = (key: FieldKey, value: string) => {
    // Keep inputs in range: no negative numbers, and a fee can never be above 100%.
    const n = parseFloat(value);
    let clean = value;
    if (Number.isFinite(n) && n < 0) clean = "0";
    if (key === "fee" && Number.isFinite(n) && n > 100) clean = "100";
    setValues((prev) => ({ ...prev, [key]: clean }));
  };

  const mpName = marketplace === "Other" ? "Marketplace" : marketplace;

  const fields: FieldDef[] = [
    { key: "price", label: "Sale price", unit: "$", step: 0.01, sliderMax: 200, sliderStep: 0.5 },
    { key: "cost", label: "Product cost", unit: "$", step: 0.01, sliderMax: 200, sliderStep: 0.5 },
    {
      key: "fee",
      label: `${mpName} referral fee %`,
      unit: "%",
      step: 0.1,
      sliderMax: 50,
      sliderStep: 0.5,
      max: 100,
      note: "Enter the fee for your category. Check your marketplace's current fee schedule.",
    },
    { key: "ship", label: "Fulfillment or shipping cost per unit", unit: "$", step: 0.01, sliderMax: 50, sliderStep: 0.25 },
    { key: "prep", label: "Prep or other cost per unit", unit: "$", step: 0.01, sliderMax: 20, sliderStep: 0.25 },
    { key: "units", label: "Units sold per month", unit: "", step: 1, sliderMax: 2000, sliderStep: 10 },
    { key: "ads", label: "Monthly ad spend", unit: "$", step: 1, sliderMax: 5000, sliderStep: 25, optional: true },
  ];

  // ----- the maths (every division is guarded) -----
  const price = num(values.price);
  const cost = num(values.cost);
  const feePct = Math.min(100, num(values.fee));
  const ship = num(values.ship);
  const prep = num(values.prep);
  const units = Math.floor(num(values.units));
  const ads = num(values.ads);

  const fee = (price * feePct) / 100;
  const totalCost = cost + fee + ship + prep;
  const profitUnit = price - totalCost;
  const invested = cost + ship + prep;
  const hasPrice = price > 0;
  const margin = hasPrice ? (profitUnit / price) * 100 : 0;
  const hasRoi = invested > 0;
  const roi = hasRoi ? (profitUnit / invested) * 100 : 0;
  const monthly = profitUnit * units - ads;
  const canBreakEven = profitUnit > 0.004;
  const breakEven = ads > 0 && canBreakEven ? Math.ceil(ads / profitUnit) : 0;
  const unitLoss = hasPrice && profitUnit < -0.004;
  const monthlyLoss = monthly < -0.004;


  // Where each dollar of the sale price goes. If costs are higher than the price, scale to the costs.
  const base = Math.max(price, totalCost);
  const share = (n: number): number => (base > 0 ? (n / base) * 100 : 0);
  const profitPart = Math.max(0, profitUnit);
  const segments: Segment[] = [
    { key: "cost", label: "Product cost", amount: cost, share: share(cost), ...SWATCH.cost },
    { key: "fee", label: "Referral fee", amount: fee, share: share(fee), ...SWATCH.fee },
    { key: "ship", label: "Fulfillment or shipping", amount: ship, share: share(ship), ...SWATCH.ship },
    { key: "prep", label: "Prep or other", amount: prep, share: share(prep), ...SWATCH.prep },
    { key: "profit", label: "Profit", amount: profitPart, share: share(profitPart), ...SWATCH.profit },
  ];
  const barSummary = segments.map((s) => `${s.label} ${percent(s.share)}`).join(", ");

  let breakValue = "0";
  let breakSub = "No ad spend to cover.";
  if (ads > 0 && canBreakEven) {
    breakValue = breakEven.toLocaleString("en-US");
    breakSub = units >= breakEven ? "Units to cover your ad spend. You are past this point." : "Units to cover your ad spend. You are below this point.";
  } else if (ads > 0) {
    breakValue = "None";
    breakSub = "Ad spend cannot be covered while a unit makes no profit.";
  }

  let note = "";
  if (!hasPrice) {
    note = "Enter a sale price above zero to see your results.";
  } else if (unitLoss) {
    note = `At these numbers each sale loses ${money(Math.abs(profitUnit))}. Try a higher sale price or lower costs.`;
  } else if (!canBreakEven) {
    note = "At these numbers a sale only covers its costs. There is no profit left per unit.";
  } else if (monthlyLoss) {
    note = "Each unit makes a profit, but your ad spend is higher than your monthly unit profit.";
  }

  return (
    <>
      <style>{CSS}</style>

      {/* intro */}
      <section style={{ background: "#fff", padding: "clamp(48px, 5vw, 72px) 0 clamp(36px, 4vw, 52px)" }}>
        <div className="container-main center">
          <span className="g-eyebrow">Free tool</span>
          <h1 className="g-h1" style={{ margin: "18px auto 0", maxWidth: 760 }}>
            Amazon and Walmart <span className="t-blue">profit calculator</span>
          </h1>
          <p className="g-lead" style={{ marginTop: 16, maxWidth: 680 }}>
            Type in your own numbers and see your profit per unit, margin, ROI and monthly profit right away. No sign-up. Nothing is saved or sent.
          </p>
        </div>
      </section>

      {/* calculator */}
      <section aria-label="Profit calculator" className="bg-tint" style={{ padding: "clamp(32px, 4vw, 56px) 0 clamp(48px, 6vw, 80px)" }}>
        <div className="container-main">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 24 }}>
            {/* inputs */}
            <div className="pcalc-panel" style={{ flex: "1.2 1 460px" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 14, flexWrap: "wrap", marginBottom: 18 }}>
                <h2 className="g-h3">Your numbers</h2>
                <button type="button" className="pcalc-reset" onClick={() => setValues(DEFAULTS)}>
                  <FaUndo aria-hidden="true" /> Reset
                </button>
              </div>

              <div role="group" aria-labelledby="pcalc-mp-label" style={{ marginBottom: 22 }}>
                <p id="pcalc-mp-label" style={{ fontSize: 15, fontWeight: 700, color: "var(--color-dark)", marginBottom: 6 }}>
                  Marketplace
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {MARKETPLACES.map((m) => (
                    <button key={m} type="button" className="pcalc-mp" aria-pressed={marketplace === m} onClick={() => setMarketplace(m)}>
                      {m}
                    </button>
                  ))}
                </div>
                <p className="typo-small" style={{ marginTop: 6 }}>
                  This only changes the labels. It does not fill in any fee for you.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "20px 24px" }}>
                {fields.map((f) => (
                  <NumberField key={f.key} def={f} value={values[f.key]} onChange={setValue} />
                ))}
              </div>
            </div>

            {/* results */}
            <div
              className="pcalc-panel"
              role="region"
              aria-label="Results"
              style={{ flex: "1 1 400px", borderColor: "var(--color-primary)" }}
            >
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
                <h2 className="g-h3">Your {marketplace === "Other" ? "" : `${marketplace} `}results</h2>
                <span className="typo-small">Updates as you type</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(170px, 100%), 1fr))", columnGap: 24 }}>
                <Stat
                  big
                  label={monthlyLoss ? "Monthly loss" : "Monthly profit"}
                  value={money(monthly)}
                  sub={`${units.toLocaleString("en-US")} units a month, after ${money(ads)} ad spend`}
                  tag={monthlyLoss ? "Loss" : undefined}
                />
                <Stat
                  label={unitLoss ? "Loss per unit" : "Profit per unit"}
                  value={money(profitUnit)}
                  sub="After product, fee, shipping and prep"
                  tag={unitLoss ? "Loss" : undefined}
                />
                <Stat label="Margin" value={hasPrice ? percent(margin) : "n/a"} sub={hasPrice ? "Profit as a share of the sale price" : "Needs a sale price above zero"} />
                <Stat label="ROI" value={hasRoi ? percent(roi) : "n/a"} sub={hasRoi ? "Profit ÷ (product + shipping + prep)" : "Needs a product, shipping or prep cost"} />
                <Stat label="Break-even units" value={breakValue} sub={breakSub} />
              </div>

              <div aria-live="polite">
                {note ? (
                  <p
                    style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 6, padding: "12px 14px", borderRadius: 12, border: "1px solid var(--color-accent)", background: "#fff", fontSize: 14, fontWeight: 700, lineHeight: 1.45, color: "var(--color-dark)" }}
                  >
                    <FaInfoCircle aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span>{note}</span>
                  </p>
                ) : null}
              </div>

              {/* where each dollar goes */}
              <div style={{ marginTop: 18 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700 }}>Where each dollar of the sale price goes</h3>
                {unitLoss ? (
                  <p className="typo-small" style={{ marginTop: 4 }}>
                    Costs are higher than the sale price
                  </p>
                ) : null}
                <div
                  role="img"
                  aria-label={base > 0 ? `Split of the sale price: ${barSummary}` : "No numbers entered yet"}
                  style={{ display: "flex", height: 22, borderRadius: 999, overflow: "hidden", marginTop: 12, background: "var(--color-light-gray)" }}
                >
                  {segments.map((s) => (
                    <span key={s.key} className="pcalc-seg" style={{ flexGrow: s.share, flexBasis: 0, background: s.background }} />
                  ))}
                </div>
                <ul style={{ listStyle: "none", marginTop: 12 }}>
                  {segments.map((s) => (
                    <li key={s.key} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, minWidth: 0, padding: "4px 0" }}>
                      <span aria-hidden="true" style={{ width: 14, height: 14, borderRadius: 3, flexShrink: 0, background: s.background, border: `1px solid ${s.border}` }} />
                      <span style={{ minWidth: 0 }}>{s.label}</span>
                      <span style={{ marginLeft: "auto", fontWeight: 700, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                        {money(s.amount)} <span style={{ fontWeight: 400, color: "var(--color-text-light)" }}>({percent(s.share)})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="typo-small" style={{ marginTop: 14 }}>
                This is an estimate from the numbers you entered. It is not a promise of results. Real fees, returns, storage and taxes can change your profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* how to use + definitions */}
      <ServiceSection eyebrow="How to use it" title="How to use this calculator">
        <StepList steps={STEP_ITEMS} />
      </ServiceSection>

      <ServiceSection
        eyebrow="The formulas"
        title="What the numbers mean"
        lead="Four numbers tell you if a product is worth selling. Here is how each one is worked out."
        tint
      >
        <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: 20, maxWidth: 1100 }}>
          {DEFINITIONS.map((d, i) => (
            <div key={d.term} className="g-card" style={{ padding: 24, minWidth: 0, display: "flex", gap: 18, alignItems: "flex-start" }}>
              <span className={DEF_TILES[i % DEF_TILES.length]} aria-hidden="true">{DEF_ICONS[i % DEF_ICONS.length]}</span>
              <div style={{ minWidth: 0 }}>
                <dt className="g-h3">{d.term}</dt>
                <dd>
                  <p style={{ marginTop: 8, display: "inline-block", fontSize: 14, fontWeight: 700, color: "var(--color-dark)", background: "var(--color-primary-light)", borderRadius: 8, padding: "6px 10px", lineHeight: 1.4 }}>{d.formula}</p>
                  <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.6, color: "var(--color-text-light)" }}>{d.text}</p>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </ServiceSection>

      {/* next step */}
      <section className="bg-navy on-dark" style={{ padding: "clamp(56px, 6vw, 84px) 0" }}>
        <div className="container-main center">
          <h2 className="g-h2" style={{ maxWidth: 720, margin: "0 auto" }}>
            Want a team to run the numbers and the store?
          </h2>
          <p className="g-lead" style={{ marginTop: 12, maxWidth: 640 }}>
            <BrandName dark /> manages Amazon and Walmart stores on a pay from profit model. No management fee until your store makes profit. No contract.
          </p>
          <div style={{ marginTop: 26 }}>
            <Link href="/profit-check" className="btn-accent">
              Start the 2-minute Profit Check <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
