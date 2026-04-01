import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import {
  Landmark,
  Droplets,
  Sparkles,
  Waves,
  Music,
  GraduationCap,
  UtensilsCrossed,
  BadgePercent,
  UsersRound,
} from "lucide-react";
import baliBg from "figma:asset/8629ca25f7da3679368f202246d1cede8739f913.png";
import { useI18n } from "@/i18n/I18nContext";

const lifestyleIcons = [
  Landmark,
  Droplets,
  Sparkles,
  Waves,
  Music,
  GraduationCap,
  UtensilsCrossed,
  BadgePercent,
  UsersRound,
] as const;

export function BaliLifestyleSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const b = t.slides.baliLifestyle;

  return (
    <SlideLayout bgImage={baliBg} overlay="darker" slideNumber={3} totalSlides={total}>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-2.5">
        <SlideSubtitle>{b.subtitle}</SlideSubtitle>
        <SlideTitle>
          <span style={{ fontWeight: 700, fontSize: "1.3em" }}>{b.titleBold}</span>
          {b.titleAfterBold}
          <br />
          <span className="italic text-[#C9A96E]">{b.titleAccent}</span>
        </SlideTitle>
        <GoldDivider delay={0.35} />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          className="text-white/60 max-w-2xl text-[11px] lg-lock-24"
        >
          {b.bodyBefore}
          <span className="text-[#C9A96E]">{b.bodyHighlight}</span>
          {b.bodyAfter}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3 mt-1">
          {b.items.map((text, i) => {
            const Icon = lifestyleIcons[i];
            return (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.55 + i * 0.07 }}
                className="flex items-center gap-2 sm:gap-3 lg:gap-3 bg-white/5 backdrop-blur-sm border border-white/8 rounded-lg px-2.5 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-2.5"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-[#C9A96E]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 text-[#C9A96E]" />
                </div>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/80 text-[10px] lg-lock-20"
                >
                  {text}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-1 sm:mt-2 lg:mt-1.5 bg-[#2D6A4F]/10 border border-[#2D6A4F]/25 rounded-xl px-4 py-3 sm:px-6 sm:py-4 lg:px-5 lg:py-3 max-w-4xl"
        >
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.7 }}
            className="text-white/50 italic text-[14px] lg-lock-26"
          >
            {b.bottomItalic}
          </p>
          <div className="w-10 h-[1px] bg-[#C9A96E]/30 my-2 sm:my-3 lg:my-1.5" />
          <p
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
            className="text-white/45 text-[10px] lg-lock-18"
          >
            {b.bottomNote}
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
