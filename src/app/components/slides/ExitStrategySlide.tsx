import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { Wallet, ArrowUpRight } from "lucide-react";
import exitBg from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";

export function ExitStrategySlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={exitBg} overlay="left-dark" slideNumber={13} totalSlides={total}>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-2">
        <SlideSubtitle>Çıkış Stratejisi</SlideSubtitle>
        <SlideTitle>
          Çift Kâr:
          <br />
          <span className="italic text-[#C9A96E]">Kira Geliri ve Değer Artışı</span>
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/60 max-w-xl text-[11px] lg-lock-20"
        >
          Kısa vadeli yüksek kira gelirine ek olarak, hızla değerlenen bölgesel değer
          yatırımcılara kârlı bir yeniden satış çıkış fırsatı sunuyor.
        </motion.p>

        {/* Growth Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl w-full"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 lg:p-6">
            {/* Growth Chart Mockup */}
            <div className="flex items-end gap-1 sm:gap-2 md:gap-3 lg:gap-3 h-24 sm:h-32 md:h-40 lg:h-40 mb-4 sm:mb-6 lg:mb-4">
              {[
                { h: 25, y: "Y1", v: "$30K" },
                { h: 35, y: "Y2", v: "$38K" },
                { h: 45, y: "Y3", v: "$44K" },
                { h: 55, y: "Y4", v: "$48K" },
                { h: 65, y: "Y5", v: "$55K" },
                { h: 75, y: "Y6", v: "$60K" },
                { h: 85, y: "Y7", v: "$68K" },
                { h: 100, y: "Y8", v: "$75K" },
              ].map((bar, i) => (
                <motion.div
                  key={bar.y}
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.h}%` }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
                  className="flex-1 bg-gradient-to-t from-[#2D6A4F] to-[#C9A96E]/60 rounded-t-md relative group"
                >
                  <div className="absolute -top-4 sm:-top-5 lg:-top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-[#C9A96E] text-[9px] sm:text-[10px] lg:text-[9px] whitespace-nowrap"
                    >
                      {bar.v}
                    </span>
                  </div>
                  <div className="absolute -bottom-4 sm:-bottom-5 lg:-bottom-4 left-1/2 -translate-x-1/2">
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-white/30 text-[9px] sm:text-[10px] lg:text-[9px]"
                    >
                      {bar.y}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dual Profit Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-4 mt-6 sm:mt-8 lg:mt-5">
              <div className="flex items-center gap-2 sm:gap-4 lg:gap-3 bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 rounded-lg p-2.5 sm:p-4 lg:p-3.5">
                <Wallet className="w-5 h-5 sm:w-8 sm:h-8 lg:w-7 lg:h-7 text-[#2D6A4F] shrink-0" />
                <div>
                  <div
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white text-[13px] lg-lock-24"
                  >
                    Kira Geliri
                  </div>
                  <div
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/40 text-[10px] lg-lock-16"
                  >
                    İlk günden istikrarlı nakit akışı
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 lg:gap-3 bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-lg p-2.5 sm:p-4 lg:p-3.5">
                <ArrowUpRight className="w-5 h-5 sm:w-8 sm:h-8 lg:w-7 lg:h-7 text-[#C9A96E] shrink-0" />
                <div>
                  <div
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white text-[13px] lg-lock-24"
                  >
                    Sermaye Değer Artışı
                  </div>
                  <div
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/40 text-[10px] lg-lock-16"
                  >
                    Zamanla artan mülk değeri
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}