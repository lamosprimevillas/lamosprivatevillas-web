import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { Clock, ArrowRight, RefreshCw } from "lucide-react";
import ownershipBg from "figma:asset/824b55987c2a902814d98214f672927f0a231642.png";

export function OwnershipSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={ownershipBg} overlay="left-dark" slideNumber={9} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-4">
        <SlideSubtitle>Mülkiyet ve Kira Sözleşmesi</SlideSubtitle>
        <SlideTitle>
          <span className="text-[#C9A96E] italic">30+30</span> Yıllık
          <br />
          Güvenli Yatırım Modeli
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/60 max-w-xl text-[11px] lg-lock-20"
        >
          Bu süre yalnızca arsa 30+30 = 60 yıllığına geçerlidir. İnşa edilen villa
          tamamen yatırımcının mülkiyetindedir; yatırımcı dilerse villayı satabilir,
          yeniden geliştirebilir, yıkabilir veya farklı bir şekilde değerlendirebilir.
        </motion.p>

        {/* Timeline Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 max-w-3xl"
        >
          <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-6">
            {/* Phase 1 */}
            <div className="flex-1 bg-[#2D6A4F]/15 border border-[#2D6A4F]/30 rounded-lg p-2.5 sm:p-4 md:p-5 text-center">
              <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-[#2D6A4F] mx-auto mb-1.5 sm:mb-3" />
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white mb-0.5 sm:mb-1 text-[22px] lg-lock-48"
              >
                30
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/50 uppercase tracking-wider text-[9px] lg-lock-14"
              >
                Yıl Birincil Hak
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center shrink-0">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A96E]" />
            </div>

            {/* Phase 2 */}
            <div className="flex-1 bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-2.5 sm:p-4 md:p-5 text-center">
              <RefreshCw className="w-4 h-4 sm:w-6 sm:h-6 text-[#C9A96E] mx-auto mb-1.5 sm:mb-3" />
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#C9A96E] mb-0.5 sm:mb-1 text-[22px] lg-lock-48"
              >
                +30
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/50 uppercase tracking-wider text-[9px] lg-lock-14"
              >
                Yıl Uzatma Önceliği
              </div>
            </div>

            {/* Equals */}
            <div className="flex items-center shrink-0">
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[#C9A96E] text-base sm:text-xl"
              >
                =
              </span>
            </div>

            {/* Total */}
            <div className="flex-1 bg-white/5 border border-white/15 rounded-lg p-2.5 sm:p-4 md:p-5 text-center">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white mb-0.5 sm:mb-1 text-[28px] lg-lock-64"
              >
                60
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/50 uppercase tracking-wider text-[9px] lg-lock-14"
              >
                Yıl Toplam Güvence
              </div>
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[#C9A96E]/60 italic mt-1 sm:mt-2 hidden sm:block text-[14px] lg-lock-14"
              >
                Kuşaklar Arası Değer
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}