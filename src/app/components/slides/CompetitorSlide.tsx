import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { Check, X } from "lucide-react";
import competitorBg from "figma:asset/8629ca25f7da3679368f202246d1cede8739f913.png";

const features = [
  "Dayanıklı Çelik Mimari",
  "Tüm İzinler Hazır (PBG, SLF, SPPL)",
  "Noterden Onaylı İkili Sözleşme",
  "Düşük Yoğunluk (Sadece 7 Villa)",
  "30+30 Yıl Kira Güvencesi",
  "Profesyonel Kiralama Yönetimi",
  "Şeffaf Ödeme Planı",
  "Aylık İlerleme Raporları",
];

export function CompetitorSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={competitorBg} overlay="darker" slideNumber={12} totalSlides={total}>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-2">
        <SlideSubtitle>Rakip Analizi</SlideSubtitle>
        <SlideTitle>
          Lamos Prime'ın
          <br />
          <span className="italic text-[#C9A96E]">Rekabet Avantajı</span>
        </SlideTitle>
        <GoldDivider />

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#C9A96E]/10 border-b border-white/10">
              <div className="p-2 sm:p-3 md:p-4 lg:p-2">
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-[#C9A96E] text-[22px] sm:text-sm md:text-base lg-lock-22 uppercase tracking-wider"
                >
                  Özellik
                </span>
              </div>
              <div className="p-2 sm:p-3 md:p-4 lg:p-2 text-center">
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[#C9A96E] text-[22px] sm:text-base lg-lock-22"
                >
                  Lamos Prime
                </span>
              </div>
              <div className="p-2 sm:p-3 md:p-4 lg:p-2 text-center">
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/40 text-[22px] sm:text-base lg-lock-22"
                >
                  Standart Villalar
                </span>
              </div>
            </div>

            {/* Rows */}
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
                className={`grid grid-cols-[2fr_1fr_1fr] ${
                  i < features.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-2.5"><span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/80 text-[18px] sm:text-xs md:text-sm lg-lock-18"
                  >{f}</span></div>
                <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-2.5 flex justify-center">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8 rounded-full bg-[#2D6A4F]/20 flex items-center justify-center">
                    <Check className="w-5 h-5 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-[#2D6A4F]" />
                  </div>
                </div>
                <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-2.5 flex justify-center">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8 rounded-full bg-red-900/20 flex items-center justify-center">
                    <X className="w-5 h-5 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-red-400/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}