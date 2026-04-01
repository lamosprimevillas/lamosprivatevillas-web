import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { Home, CalendarClock, ShieldCheck } from "lucide-react";
import paymentBg from "figma:asset/0ec89edbc1b48cea234b8d4bdae1ab86d23da1fa.png";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationTree } from "@/i18n/translations";

interface VillaData {
  name: string;
  total: string;
  ilkOdeme: string;
  kalan: string;
  taksit: string;
}

const primeVilla: VillaData = {
  name: "Prime Villa",
  total: "$170.000",
  ilkOdeme: "$85.000",
  kalan: "$85.000",
  taksit: "$9.444",
};

const premiumVilla: VillaData = {
  name: "Premium Villa",
  total: "$195.000",
  ilkOdeme: "$97.500",
  kalan: "$97.500",
  taksit: "$10.833",
};

type PaymentSlice = TranslationTree["slides"]["payment"];
type PricingPdfSlice = TranslationTree["slides"]["pricingPdf"];

function VillaPricingBlock({
  villa,
  accent,
  delay,
  p,
  pp,
}: {
  villa: VillaData;
  accent: string;
  delay: number;
  p: PaymentSlice;
  pp: PricingPdfSlice;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col gap-3 sm:gap-4 lg:gap-2.5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accent }} />
          <span
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-[24px] lg-lock-26"
          >
            {villa.name}
          </span>
        </div>
        <div className="text-right">
          <span
            style={{ fontFamily: "'Playfair Display', serif", color: accent }}
            className="text-[32px] lg-lock-40"
          >
            {villa.total}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-3">
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 pt-6 sm:p-5 sm:pt-7 lg:p-4 lg:pt-6 flex flex-col items-center text-center gap-1.5 lg:gap-1">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="bg-black/90 border border-white/15 text-white/50 text-[12px] lg:text-[14px] px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap"
            >
              {p.step1}
            </span>
          </div>
          <Home className="w-5 h-5 lg:w-5 lg:h-5" style={{ color: accent }} />
          <div
            style={{ fontFamily: "'Playfair Display', serif", color: accent }}
            className="text-[36px] lg-lock-40"
          >
            {villa.ilkOdeme}
          </div>
          <div
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-[22px] lg-lock-24"
          >
            {p.firstPayment}
          </div>
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/40 text-[16px] lg-lock-18"
          >
            {pp.step1Short}
          </p>
        </div>

        <div
          className="relative bg-white/5 backdrop-blur-sm border rounded-xl p-4 pt-6 sm:p-5 sm:pt-7 lg:p-4 lg:pt-6 flex flex-col items-center text-center gap-1.5 lg:gap-1"
          style={{ borderColor: `${accent}30` }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="bg-black/90 border border-white/15 text-white/50 text-[12px] lg:text-[14px] px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap"
            >
              {p.step2}
            </span>
          </div>
          <CalendarClock className="w-5 h-5 lg:w-5 lg:h-5" style={{ color: accent }} />
          <div
            style={{ fontFamily: "'Playfair Display', serif", color: accent }}
            className="text-[36px] lg-lock-40"
          >
            {villa.kalan}
          </div>
          <div
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-[22px] lg-lock-24"
          >
            {p.secondPayment}
          </div>
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/40 text-[16px] lg-lock-18"
          >
            {pp.step2Short}
          </p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 lg:p-3">
        <div className="flex items-center gap-2 mb-2 lg:mb-1.5">
          <div className="flex-1 h-[1px] bg-white/10" />
          <span
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/40 uppercase tracking-wider text-[14px] lg-lock-20"
          >
            {pp.nineInstallments}
          </span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-1.5">
          {p.installments.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: delay + 0.4 + i * 0.03 }}
              className="bg-white/5 border border-white/8 rounded-lg p-2 sm:p-2.5 lg:p-1.5 flex flex-col items-center justify-center gap-0"
            >
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-[17px] lg-lock-18"
              >
                {label}
              </span>
              <span
                style={{ fontFamily: "'Inter', sans-serif", color: accent }}
                className="text-[18px] lg-lock-20"
              >
                {villa.taksit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function PaymentPricingSlide() {
  const { t } = useI18n();
  const p = t.slides.payment;
  const pp = t.slides.pricingPdf;

  return (
    <SlideLayout bgImage={paymentBg} overlay="darker" slideNumber={1} totalSlides={1}>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-3 sm:gap-4 lg:gap-2">
        <SlideSubtitle>{pp.subtitle}</SlideSubtitle>
        <SlideTitle>
          {pp.titleBefore}{" "}
          <span className="italic text-[#C9A96E]">{pp.titleAccent}</span>
        </SlideTitle>
        <GoldDivider />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-5 mt-2 lg:mt-1">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-4">
            <VillaPricingBlock villa={primeVilla} accent="#C9A96E" delay={0.4} p={p} pp={pp} />
          </div>

          <div className="bg-white/[0.03] border border-[#7DCEA0]/20 rounded-2xl p-4 sm:p-5 lg:p-4">
            <VillaPricingBlock villa={premiumVilla} accent="#7DCEA0" delay={0.6} p={p} pp={pp} />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-1.5 lg:gap-1 mt-2 lg:mt-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="w-full max-w-2xl bg-[#2D6A4F]/10 backdrop-blur-sm border border-[#2D6A4F]/25 rounded-lg p-3 flex items-center justify-center gap-2.5 lg:gap-2"
          >
            <ShieldCheck className="w-5 h-5 lg:w-5 lg:h-5 text-[#2D6A4F] shrink-0" />
            <span
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em" }}
              className="text-[#2D6A4F] uppercase lg-lock-20 font-bold text-[16px]"
            >
              {p.riskNote}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]/50 shrink-0" />
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-white/30 text-[16px] lg-lock-22 text-[#ffffffb3]"
            >
              {p.notaryNote}
            </span>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
