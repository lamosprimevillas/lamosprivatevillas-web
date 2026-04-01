import { motion } from "motion/react";
import coverBg from "figma:asset/0ec89edbc1b48cea234b8d4bdae1ab86d23da1fa.png";
import { useI18n } from "@/i18n/I18nContext";

export function CoverSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const c = t.cover;
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background as real <img> for maximum LCP priority */}
      <img
        src={coverBg}
        alt=""
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 pb-4 md:pb-0 pt-[max(4rem,env(safe-area-inset-top,0px))] sm:pt-[4.25rem] md:pt-[7rem] lg:pt-20">
          <div className="min-h-full flex items-center">
            <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8">
              {/* Logo Mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center gap-3 sm:gap-4"
              >
                <div className="w-12 sm:w-16 h-[1px] bg-[#C9A96E]" />
                <span
                  style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.4em" }}
                  className="text-[#C9A96E] uppercase text-[15px] lg-lock-22"
                >
                  {c.eyebrow}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.05 }}
                className="text-white lg-lock-96 text-[36px]"
              >
                Lamos Prime
                <br />
                <span className="italic text-[#C9A96E]">Villas</span>
              </motion.h1>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-2 sm:gap-4"
              >
                <div className="w-6 sm:w-12 h-[1px] bg-white/30" />
                <span
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}
                  className="text-white/60 uppercase lg-lock-18 text-[13px]"
                >
                  {c.location}
                </span>
                <div className="w-6 sm:w-12 h-[1px] bg-white/30" />
              </motion.div>

              {/* Key Features Pills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
                className="flex w-full max-w-full flex-wrap items-center justify-center gap-3 sm:gap-4 max-lg:gap-1.5 max-lg:px-0.5 max-[360px]:flex-col max-[360px]:gap-2 max-[360px]:px-2"
              >
                {[
                  { text: c.pill1 },
                  { text: c.pill2, accent: true },
                  { text: c.pill3 },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`shrink-0 px-4 sm:px-5 py-1.5 sm:py-2 max-lg:px-2.5 max-lg:py-1 rounded-full border ${
                      item.accent
                        ? "border-[#C9A96E]/50 bg-[#C9A96E]/10"
                        : "border-white/15 bg-white/5"
                    } backdrop-blur-sm max-[360px]:mx-auto max-[360px]:w-full max-[360px]:max-w-[220px]`}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "0.15em",
                      }}
                      className={`block text-center uppercase text-[12px] max-lg:text-[10px] max-lg:tracking-[0.1em] lg-lock-15 whitespace-nowrap ${
                        item.accent ? "text-[#C9A96E]" : "text-white/50"
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="mt-2 sm:mt-4 md:mt-8 max-w-xl"
              >
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.7 }}
                  className="text-white/50 italic text-[15px] lg:text-[34px] mx-[2px] my-[0px] p-[0px]"
                >
                  {c.tagline}
                </p>
              </motion.div>

              {/* CTA Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="mt-2 sm:mt-6 md:mt-10 flex flex-col items-center gap-2"
              >
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
