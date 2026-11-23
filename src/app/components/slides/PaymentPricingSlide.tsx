import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { BedDouble, CalendarDays, Coins, Maximize, ShieldCheck, Sprout, Waves } from "lucide-react";
import { backgrounds } from "@/app/data/renders";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationTree } from "@/i18n/translations";

const paymentBg = backgrounds.payment;

/**
 * Fiyat kartları (Kasım 2026, Ege'nin paylaştığı TR/EN görseller).
 * Fiyat değişirse yalnızca bu tabloyu güncelleyin.
 */
const VILLA_PRICES = [
  { key: "prime21", area: 175, price: 185000, reservation: 2000, initial: 63000, remaining: 120000, monthly: 13300, accent: "#9CC48A" },
  { key: "prime31", area: 175, price: 205000, reservation: 2000, initial: 70000, remaining: 133000, monthly: 14770, accent: "#8FB4E3" },
  { key: "premium31", area: 205, price: 235000, reservation: 2000, initial: 80000, remaining: 153000, monthly: 17000, accent: "#C9A96E" },
] as const;

type Pricing = TranslationTree["slides"]["pricingPdf"];

function usd(n: number, locale: "tr" | "en") {
  return "$" + n.toLocaleString(locale === "tr" ? "de-DE" : "en-US");
}

function Step({
  n,
  accent,
  icon: Icon,
  title,
  big,
  amount,
  note,
}: {
  n: number;
  accent: string;
  icon: typeof Coins;
  title: string;
  big?: string;
  amount: string;
  note: string;
}) {
  return (
    <div className="relative flex flex-col items-center gap-0.5 rounded-lg border border-white/10 bg-white/[0.04] px-2 pb-2 pt-2.5 text-center">
      <div className="flex items-center gap-1.5">
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold text-black"
          style={{ backgroundColor: accent }}
        >
          {n}
        </span>
        {big ? (
          <span style={{ fontFamily: "'Playfair Display', serif", color: accent }} className="text-xl leading-none lg:text-[22px]">
            {big}
          </span>
        ) : (
          <Icon className="h-4 w-4" style={{ color: accent }} />
        )}
      </div>
      <span style={{ fontFamily: "'Inter', sans-serif" }} className="mt-0.5 text-[11px] font-medium text-white/80 lg:text-xs">
        {title}
      </span>
      <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-lg text-white lg:text-xl">
        {amount}
      </span>
      <p style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }} className="text-[10px] text-white/45 lg:text-[11px]">
        {note}
      </p>
    </div>
  );
}

function VillaPriceCard({
  villa,
  pp,
  locale,
  delay,
}: {
  villa: (typeof VILLA_PRICES)[number];
  pp: Pricing;
  locale: "tr" | "en";
  delay: number;
}) {
  const text = pp.villas[villa.key];
  const a = villa.accent;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col gap-2.5 rounded-2xl border bg-black/35 p-3 text-left backdrop-blur-md sm:p-4 lg:gap-2 lg:p-3.5"
      style={{ borderColor: `${a}40` }}
    >
      {/* Başlık */}
      <div className="flex items-end justify-between gap-2 border-b pb-2" style={{ borderColor: `${a}30` }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: a }} className="text-[26px] leading-none lg:text-[30px]">
            {text.name}
          </div>
          <div
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.12em" }}
            className="mt-1 text-[13px] uppercase text-white/60 lg:text-sm"
          >
            {text.tagline}
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-white/75" style={{ fontFamily: "'Inter', sans-serif" }}>
        <span className="flex items-center gap-1.5 text-[11px] lg:text-xs">
          <Maximize className="h-3.5 w-3.5 shrink-0" style={{ color: a }} />
          {pp.totalArea} <b className="font-semibold text-white">{villa.area} m²</b>
        </span>
        <span className="flex items-center gap-1.5 text-[11px] lg:text-xs">
          <BedDouble className="h-3.5 w-3.5 shrink-0" style={{ color: a }} />
          {text.rooms}
        </span>
        <span className="flex items-center gap-1.5 text-[11px] lg:text-xs">
          <Waves className="h-3.5 w-3.5 shrink-0" style={{ color: a }} />
          {pp.privatePool}
        </span>
        <span className="flex items-center gap-1.5 text-[11px] lg:text-xs">
          <Sprout className="h-3.5 w-3.5 shrink-0" style={{ color: a }} />
          {pp.tropicalGarden}
        </span>
      </div>

      {/* Fiyat */}
      <div className="rounded-xl border px-3 py-2 text-center" style={{ borderColor: `${a}35`, backgroundColor: `${a}12` }}>
        <div style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }} className="text-[10px] uppercase text-white/55 lg:text-[11px]">
          {pp.salesPrice}
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", color: a }} className="text-[34px] leading-tight lg:text-[38px]">
          {usd(villa.price, locale)}
        </div>
      </div>

      {/* Ödeme planı */}
      <div>
        <div
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
          className="mb-1.5 flex items-center gap-2 text-[10px] uppercase text-white/55 lg:text-[11px]"
        >
          <span>{pp.paymentPlan}</span>
          <span className="h-px flex-1" style={{ backgroundColor: `${a}35` }} />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <Step n={1} accent={a} icon={CalendarDays} title={pp.reservation} amount={usd(villa.reservation, locale)} note={pp.reservationNote} />
          <Step n={2} accent={a} icon={Coins} big={locale === "tr" ? "%35" : "35%"} title={pp.initial} amount={usd(villa.initial, locale)} note={pp.initialNote} />
          <Step n={3} accent={a} icon={Coins} big={locale === "tr" ? "%65" : "65%"} title={pp.installments} amount={usd(villa.remaining, locale)} note={pp.installmentsNote} />
        </div>
      </div>

      {/* Aylık taksit */}
      <div
        className="mt-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 rounded-lg px-3 py-2 text-center"
        style={{ backgroundColor: `${a}1f` }}
      >
        <CalendarDays className="h-4 w-4" style={{ color: a }} />
        <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[12px] text-white/75 lg:text-[13px]">
          {pp.monthly}:
        </span>
        <span style={{ fontFamily: "'Playfair Display', serif", color: a }} className="text-lg lg:text-xl">
          {usd(villa.monthly, locale)}
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[11px] text-white/50">
          {pp.monthlySuffix}
        </span>
      </div>
    </motion.div>
  );
}

export function PaymentPricingSlide() {
  const { t, locale } = useI18n();
  const p = t.slides.payment;
  const pp = t.slides.pricingPdf;

  return (
    <SlideLayout bgImage={paymentBg} overlay="darker" slideNumber={1} totalSlides={1}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 py-6 text-center sm:gap-4 lg:gap-2 lg:py-0">
        <SlideSubtitle>{pp.subtitle}</SlideSubtitle>
        <SlideTitle>
          {pp.titleBefore} <span className="italic text-[#C9A96E]">{pp.titleAccent}</span>
        </SlideTitle>
        <GoldDivider />

        <div className="mt-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:mt-1 lg:grid-cols-3 lg:gap-4">
          {VILLA_PRICES.map((v, i) => (
            <VillaPriceCard key={v.key} villa={v} pp={pp} locale={locale} delay={0.3 + i * 0.15} />
          ))}
        </div>

        <div className="mt-1 flex w-full flex-col items-center gap-1.5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex w-full max-w-2xl items-center justify-center gap-2 rounded-lg border border-[#2D6A4F]/30 bg-[#2D6A4F]/15 p-2.5 backdrop-blur-sm"
          >
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#7DCEA0]" />
            <span
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em" }}
              className="text-[12px] font-semibold uppercase text-[#7DCEA0] lg:text-[13px]"
            >
              {p.riskNote}
            </span>
          </motion.div>
          <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[11px] text-white/55 lg:text-xs">
            {p.notaryNote}
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
