import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import {
  Crown,
  Diamond,
  Bed,
  Sofa,
  Armchair,
  Lamp,
  UtensilsCrossed,
  Bath,
  Wind,
  Tv,
  TreePalm,
  Ruler,
  Home,
  Trees,
  Maximize,
} from "lucide-react";
import collectionBg from "figma:asset/9eba3025a7fb9754e76b817f78453cb939b49ede.png";
import { useI18n } from "@/i18n/I18nContext";

const furnitureIcons = [
  Bed,
  Sofa,
  Armchair,
  UtensilsCrossed,
  Lamp,
  Bath,
  Wind,
  Tv,
  TreePalm,
] as const;

interface AreaDetail {
  icon: typeof Ruler;
  label: string;
  value: string;
  highlight?: boolean;
}

function AreaRow({ areas, accentColor }: { areas: AreaDetail[]; accentColor: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:gap-2 lg:gap-1 w-full">
      {areas.map((a) => (
        <div
          key={a.label}
          className={`flex items-center gap-1 sm:gap-2 lg:gap-2 rounded-lg px-1 py-0.5 sm:px-2.5 sm:py-1.5 lg:px-2.5 lg:py-1.5 ${
            a.highlight ? "bg-white/8 border border-white/10" : "bg-white/[0.03]"
          }`}
        >
          <a.icon
            className="w-2 h-2 sm:w-3.5 sm:h-3.5 lg:w-3 lg:h-3 shrink-0 hidden sm:block"
            style={{ color: a.highlight ? accentColor : "rgba(255,255,255,0.4)" }}
          />
          <span
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/40 lg-lock-16 uppercase tracking-wider shrink-0 text-[7px] sm:text-[9px]"
          >
            {a.label}
          </span>
          <span className="flex-1" />
          <span
            style={{ fontFamily: "'Playfair Display', serif", color: a.highlight ? accentColor : "rgba(255,255,255,0.7)" }}
            className={`lg-lock-20 ${a.highlight ? "font-bold" : ""} text-[9px] sm:text-[13px]`}
          >
            {a.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CollectionSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const col = t.slides.collection;

  const primeAreas: AreaDetail[] = col.areasPrime.map((a, i) => ({
    icon: [Ruler, Home, Trees, Maximize][i] as typeof Ruler,
    label: a.label,
    value: a.value,
    highlight: i === 3,
  }));

  const premiumAreas: AreaDetail[] = col.areasPremium.map((a, i) => ({
    icon: [Ruler, Home, Trees, Maximize][i] as typeof Ruler,
    label: a.label,
    value: a.value,
    highlight: i === 3,
  }));

  return (
    <SlideLayout bgImage={collectionBg} overlay="darker" slideNumber={6} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-2">
        <SlideSubtitle>{col.subtitle}</SlideSubtitle>
        <SlideTitle>
          <span className="block leading-[1.15]">
            <span className="text-white">{col.titleLine1}</span>
            <span className="italic text-[#C9A96E]">{col.titleGold7}</span>
            <span className="text-white">{col.titleMid1}</span>
            <span className="italic text-[#C9A96E]">{col.titleGold21}</span>
            <span className="text-white">{col.titleMid2}</span>
            <span className="italic text-[#C9A96E]">{col.titleGold31}</span>
          </span>
          <span className="mt-1 block text-white sm:mt-1.5">{col.titleLine2}</span>
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/60 max-w-lg lg-lock-22 text-[11px]"
        >
          {col.body}
        </motion.p>

        <div className="mt-1 grid w-full grid-cols-2 items-stretch gap-1.5 sm:mt-4 sm:gap-4 lg:mt-2 lg:grid-cols-3 lg:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex h-full min-h-0 flex-col items-center rounded-xl border border-[#C9A96E]/20 bg-white/5 p-2 backdrop-blur-sm sm:p-5 lg:p-4"
          >
            <div className="flex w-full flex-col items-center gap-1 sm:gap-2 lg:gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 sm:h-12 sm:w-12 lg:h-8 lg:w-8">
                <Crown className="h-3 w-3 text-[#C9A96E] sm:h-6 sm:w-6 lg:h-4 lg:w-4" />
              </div>
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[15px] text-white lg-lock-24"
              >
                {col.primeVilla}
              </div>
              <span
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
                className="rounded-full border border-[#C9A96E]/25 bg-[#C9A96E]/5 px-2 py-0.5 text-[7px] uppercase text-[#C9A96E]/70 sm:text-[11px] lg-lock-13"
              >
                {col.residence21}
              </span>
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[15px] text-white lg-lock-24"
              >
                {col.primePlus}
              </div>
              <span
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
                className="rounded-full border border-[#C9A96E]/25 bg-[#C9A96E]/5 px-2 py-0.5 text-[7px] uppercase text-[#C9A96E]/70 sm:text-[11px] lg-lock-13"
              >
                {col.residence31}
              </span>
            </div>

            <div className="mt-auto flex w-full flex-col items-center gap-1 pt-2 sm:gap-1.5 sm:pt-3 lg:pt-2">
              <div className="h-[1px] w-8 bg-[#C9A96E]/40" />
              <div className="flex flex-col items-center gap-0.5">
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[24px] text-[#C9A96E] lg-lock-48"
                >
                  5
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-[8px] uppercase tracking-wider text-white/40 sm:text-[13px]"
                >
                  {col.unitsAvailable}
                </span>
              </div>
              <div className="mt-0.5 h-[1px] w-full bg-white/10 lg:mt-0.5" />
              <AreaRow areas={primeAreas} accentColor="#C9A96E" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex h-full min-h-0 flex-col items-center rounded-xl border border-[#C9A96E]/30 bg-[#C9A96E]/5 p-2 backdrop-blur-sm sm:p-5 lg:p-4"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/40 bg-[#C9A96E]/15 sm:h-12 sm:w-12 lg:h-8 lg:w-8">
              <Diamond className="h-3 w-3 text-[#C9A96E] sm:h-6 sm:w-6 lg:h-4 lg:w-4" />
            </div>
            <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-1.5 py-2 sm:py-3 lg:py-2">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-center text-[15px] text-white lg-lock-24"
              >
                {col.premiumVilla}
              </div>
              <span
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
                className="rounded-full border border-[#C9A96E]/25 bg-[#C9A96E]/5 px-2 py-0.5 text-[7px] uppercase text-[#C9A96E]/70 sm:text-[11px] lg-lock-13"
              >
                {col.residence31}
              </span>
            </div>

            <div className="mt-auto flex w-full flex-col items-center gap-1 pt-1 sm:gap-1.5 sm:pt-2 lg:pt-1">
              <div className="h-[1px] w-8 bg-[#C9A96E]/40" />
              <div className="flex flex-col items-center gap-0.5">
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[24px] text-[#C9A96E] lg-lock-48"
                >
                  2
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-[8px] uppercase tracking-wider text-white/40 sm:text-[13px]"
                >
                  {col.unitsAvailable}
                </span>
              </div>
              <div className="mt-0.5 h-[1px] w-full bg-white/10 lg:mt-0.5" />
              <AreaRow areas={premiumAreas} accentColor="#C9A96E" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="col-span-2 lg:col-span-1 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-2 sm:p-5 lg:p-4 flex flex-col gap-1 sm:gap-3 lg:gap-2"
          >
            <div className="flex items-center gap-2 lg:gap-1.5">
              <div className="flex-1 h-[1px] bg-[#C9A96E]/20" />
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.15em" }}
                className="text-[#C9A96E]/70 uppercase lg-lock-20 text-[12px]"
              >
                {col.includedHeader}
              </span>
              <div className="flex-1 h-[1px] bg-[#C9A96E]/20" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-0.5 sm:gap-1 lg:gap-0.5">
              {col.furniture.map((label, i) => {
                const Icon = furnitureIcons[i];
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 1.0 + i * 0.04 }}
                    className="flex items-center gap-1 sm:gap-2 lg:gap-2 bg-white/[0.04] hover:bg-white/[0.07] transition-colors rounded-lg px-1.5 py-1 sm:px-2.5 sm:py-1.5 lg:px-2.5 lg:py-1.5"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 rounded bg-[#C9A96E]/8 flex items-center justify-center shrink-0">
                      <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#C9A96E]/50" />
                    </div>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-white/55 lg-lock-20 text-left text-[8px] sm:text-[11px]"
                    >
                      {label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="hidden lg:block mt-auto pt-0.5">
              <div className="w-full h-[1px] bg-white/5 mb-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
