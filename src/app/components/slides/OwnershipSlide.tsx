import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { Clock, ArrowRight, RefreshCw } from "lucide-react";
import ownershipBg from "figma:asset/824b55987c2a902814d98214f672927f0a231642.png";
import { useI18n } from "@/i18n/I18nContext";

export function OwnershipSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const o = t.slides.ownership;

  return (
    <SlideLayout bgImage={ownershipBg} overlay="left-dark" slideNumber={10} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-4">
        <SlideSubtitle>{o.subtitle}</SlideSubtitle>
        <SlideTitle>
          <span className="text-[#C9A96E] italic">{o.yearsLease}</span> {o.line1Suffix}
          <br />
          {o.line2}
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/60 max-w-xl text-[11px] lg-lock-20"
        >
          {o.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 max-w-3xl"
        >
          <div className="flex flex-row items-stretch gap-2 sm:gap-3 md:gap-5">
            <div className="flex flex-1 flex-col items-center rounded-lg border border-[#2D6A4F]/30 bg-[#2D6A4F]/15 p-2.5 text-center sm:p-4 md:p-5">
              <div className="mb-1.5 flex h-7 items-center justify-center sm:mb-2 sm:h-9">
                <Clock className="h-4 w-4 text-[#2D6A4F] sm:h-6 sm:w-6" />
              </div>
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="flex min-h-[2.5rem] items-center justify-center leading-none text-white sm:min-h-[2.75rem] text-[24px] sm:text-[28px] lg-lock-48"
              >
                30
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="mt-1.5 text-[9px] uppercase leading-snug tracking-wider text-white/50 lg-lock-14"
              >
                {o.phase1}
              </div>
            </div>

            <div className="flex shrink-0 items-center self-center">
              <ArrowRight className="h-4 w-4 text-[#C9A96E] sm:h-5 sm:w-5" />
            </div>

            <div className="flex flex-1 flex-col items-center rounded-lg border border-[#C9A96E]/30 bg-[#C9A96E]/10 p-2.5 text-center sm:p-4 md:p-5">
              <div className="mb-1.5 flex h-7 items-center justify-center sm:mb-2 sm:h-9">
                <RefreshCw className="h-4 w-4 text-[#C9A96E] sm:h-6 sm:w-6" />
              </div>
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="flex min-h-[2.5rem] items-center justify-center leading-none text-[#C9A96E] sm:min-h-[2.75rem] text-[24px] sm:text-[28px] lg-lock-48"
              >
                +30
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="mt-1.5 text-[9px] uppercase leading-snug tracking-wider text-white/50 lg-lock-14"
              >
                {o.phase2}
              </div>
            </div>

            <div className="flex shrink-0 items-center self-center">
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-lg text-[#C9A96E] sm:text-xl"
              >
                =
              </span>
            </div>

            <div className="flex flex-1 flex-col items-center rounded-lg border border-white/15 bg-white/5 p-2.5 text-center sm:p-4 md:p-5">
              <div className="mb-1.5 flex h-7 items-center justify-center sm:mb-2 sm:h-9" aria-hidden>
                <span className="inline-block h-4 w-4 opacity-0 sm:h-6 sm:w-6" />
              </div>
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="flex min-h-[2.5rem] items-center justify-center leading-none text-white sm:min-h-[2.75rem] text-[24px] sm:text-[28px] lg-lock-48"
              >
                60
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="mt-1.5 text-[9px] uppercase leading-snug tracking-wider text-white/50 lg-lock-14"
              >
                {o.total}
              </div>
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="mt-1.5 hidden text-[12px] italic leading-tight text-[#C9A96E]/70 sm:block sm:text-[13px] lg-lock-14"
              >
                {o.tagline}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
