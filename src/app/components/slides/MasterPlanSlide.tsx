import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { Eye, Car, Trees, Shield } from "lucide-react";
import masterPlanBg from "figma:asset/0ec89edbc1b48cea234b8d4bdae1ab86d23da1fa.png";
import { useI18n } from "@/i18n/I18nContext";

const pillarIcons = [Eye, Car, Trees, Shield] as const;

export function MasterPlanSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const mp = t.slides.masterPlan;

  return (
    <SlideLayout bgImage={masterPlanBg} overlay="darker" slideNumber={8} totalSlides={total}>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-2">
        <SlideSubtitle>{mp.subtitle}</SlideSubtitle>
        <SlideTitle>
          <span className="italic text-[#C9A96E]">{mp.titleAccent}</span>
          <br />
          {mp.titleRest}
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/60 max-w-lg text-[11px] lg-lock-20"
        >
          {mp.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-2xl lg:max-w-xl mt-1 sm:mt-2 lg:mt-1"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 lg:p-3">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-1.5 mb-4 sm:mb-6 lg:mb-2">
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 lg:gap-1.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <motion.div
                    key={`prime-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                    className="aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 sm:gap-1 lg:gap-0.5 bg-[#2D6A4F]/30 border border-[#2D6A4F]/50"
                  >
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-white text-[13px] lg-lock-24"
                    >
                      P{i + 1}
                    </span>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-white/40 text-[9px] lg-lock-18"
                    >
                      105m²
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-end gap-1.5 sm:gap-2 md:gap-3 lg:gap-1.5">
                {Array.from({ length: 2 }, (_, i) => (
                  <motion.div
                    key={`premium-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                    className="w-[22%] aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 sm:gap-1.5 lg:gap-0.5 bg-[#C9A96E]/20 border border-[#C9A96E]/40"
                  >
                    <span
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-white text-[13px] lg-lock-24"
                    >
                      PR{i + 1}
                    </span>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-white/40 text-[9px] lg-lock-18"
                    >
                      120m²
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-1">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-1.5 lg:h-1.5 rounded bg-[#2D6A4F]/40 border border-[#2D6A4F]/60" />
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/50 text-[10px] lg-lock-20"
                >
                  {mp.legendPrime}
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-1">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-1.5 lg:h-1.5 rounded bg-[#C9A96E]/30 border border-[#C9A96E]/50" />
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/50 text-[10px] lg-lock-20"
                >
                  {mp.legendPremium}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-2 w-full max-w-2xl lg:max-w-xl mt-1 sm:mt-2 lg:mt-1">
          {mp.pillars.map((label, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-1"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-3.5 lg:h-3.5 text-[#C9A96E]" />
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/50 uppercase tracking-wider text-center text-[8px] lg-lock-15"
                >
                  {label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
