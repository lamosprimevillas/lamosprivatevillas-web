import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import {
  TrendingUp,
  Users,
  Globe,
  Star,
  Percent,
  CalendarRange,
  ThermometerSun,
  CircleDollarSign,
} from "lucide-react";
import marketBg from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";
import { useI18n } from "@/i18n/I18nContext";

const statIcons = [Globe, TrendingUp, Users, Star] as const;
const highlightIcons = [Percent, CalendarRange, ThermometerSun, CircleDollarSign] as const;

export function MarketSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const m = t.slides.market;

  return (
    <SlideLayout bgImage={marketBg} overlay="darker" slideNumber={2} totalSlides={total}>
      <div className="market-slide-compact w-full max-w-6xl mx-auto flex flex-col items-start text-left gap-2 sm:gap-4 md:gap-5 lg:gap-4">
        <SlideSubtitle>{m.subtitle}</SlideSubtitle>
        <SlideTitle>
          <span style={{ fontWeight: 700, fontSize: "1.3em" }}>{m.titleBold}</span>
          {m.titleRest}
          <br />
          <span className="italic text-[#C9A96E]">{m.titleAccent}</span>
        </SlideTitle>
        <GoldDivider delay={0.4} />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="market-body text-white/70 w-full max-w-2xl text-[12px] lg-lock-22"
        >
          {m.body}
        </motion.p>

        <div className="market-highlight-grid w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-1 sm:mt-2">
          {m.highlights.map((item, idx) => {
            const Icon = highlightIcons[idx];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.55 + idx * 0.07 }}
                className="market-highlight-card group flex gap-3 sm:gap-3.5 rounded-lg border border-white/10 border-l-[3px] border-l-[#C9A96E] bg-white/[0.04] p-3 sm:p-3.5 pl-3 sm:pl-4 backdrop-blur-sm"
              >
                <div className="icon-box flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#C9A96E]/35 bg-[#C9A96E]/10">
                  <Icon className="h-4 w-4 text-[#C9A96E]" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white text-[13px] sm:text-[14px] lg-lock-24 leading-snug"
                  >
                    {item.title}
                  </p>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="mt-0.5 text-[9px] sm:text-[10px] leading-relaxed text-white/55 lg-lock-16"
                  >
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="market-stat-row grid w-full grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-2 sm:mt-3">
          {m.stats.map((stat, idx) => {
            const Icon = statIcons[idx];
            const delay = 0.6 + idx * 0.1;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                className="market-stat-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 text-left"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C9A96E] mb-2 sm:mb-3" />
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white text-[22px] lg-lock-40"
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/50 text-[9px] sm:text-[11px] md:text-xs lg-lock-18 uppercase tracking-wider mt-1"
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
