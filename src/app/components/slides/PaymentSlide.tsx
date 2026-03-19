import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { Home, CalendarClock, ShieldCheck } from "lucide-react";
import paymentBg from "figma:asset/0ec89edbc1b48cea234b8d4bdae1ab86d23da1fa.png";

const installments = [
  "1. Taksit", "2. Taksit", "3. Taksit",
  "4. Taksit", "5. Taksit", "6. Taksit",
  "7. Taksit", "8. Taksit", "9. Taksit",
];

export function PaymentSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={paymentBg} overlay="darker" slideNumber={14} totalSlides={total}>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-3 lg:gap-1.5">
        <SlideSubtitle>Şeffaf Ödeme Planı</SlideSubtitle>
        <SlideTitle>
          Risk Kontrollü,
          <br />
          <span className="italic text-[#C9A96E] text-[44px]">Aşamalı Ödeme Yapısı</span>
        </SlideTitle>
        <GoldDivider />

        {/* Row 1: Adım 1 + Adım 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-4 mt-1 lg:mt-0 max-w-5xl mx-auto"
        >
          {/* Adım 1 - Birinci Ödeme (%50) */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 pt-6 sm:p-5 sm:pt-7 lg:p-3 lg:pt-5 flex flex-col items-center text-center gap-1.5 sm:gap-2 lg:gap-1.5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="bg-black/90 border border-white/15 text-white/50 text-[9px] sm:text-[10px] lg:text-[9px] px-2.5 py-1 lg:px-2 lg:py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap"
              >
                Adım 1
              </span>
            </div>
            <div className="flex items-center gap-3 lg:gap-2">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#7DCEA015", border: "1px solid #7DCEA040" }}
              >
                <Home className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4.5 lg:h-4.5 text-[#7DCEA0]" />
              </div>
              <div className="text-left">
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[#7DCEA0] lg-lock-56 text-[44px]"
                >
                  %50
                </div>
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white lg-lock-24 text-[20px]"
                >
                  Birinci Ödeme
                </div>
              </div>
            </div>
            <p
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}
              className="text-white/50 lg-lock-20 text-[18px]"
            >
              Karşılığında arsa devri yapılır.
            </p>
            <div className="flex flex-col gap-1 lg:gap-0.5 w-full">
              {["Noter onaylı arsa devir sözleşmesi", "Noter onaylı inşaat sözleşmesi"].map((d, j) => (
                <div
                  key={j}
                  className="flex items-center gap-2 lg:gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 lg:py-1"
                >
                  <div className="w-1.5 h-1.5 lg:w-1 lg:h-1 rounded-full bg-[#C9A96E] shrink-0" />
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/60 lg-lock-20 text-[18px]"
                  >
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Adım 2 - İkinci Ödeme (%50) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="relative bg-white/5 backdrop-blur-sm border border-[#C9A96E]/20 rounded-xl p-4 pt-6 sm:p-5 sm:pt-7 lg:p-3 lg:pt-5 flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 lg:gap-1.5"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="bg-black/90 border border-white/15 text-white/50 text-[9px] sm:text-[10px] lg:text-[9px] px-2.5 py-1 lg:px-2 lg:py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap"
              >
                Adım 2
              </span>
            </div>
            <div className="flex items-center gap-3 lg:gap-2">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#C9A96E15", border: "1px solid #C9A96E40" }}
              >
                <CalendarClock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4.5 lg:h-4.5 text-[#C9A96E]" />
              </div>
              <div className="text-left">
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[#C9A96E] lg-lock-56 text-[44px]"
                >
                  %50
                </div>
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white lg-lock-24 text-[20px]"
                >
                  İkinci Ödeme
                </div>
              </div>
            </div>
            <p
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}
              className="text-white/50 max-w-[280px] lg-lock-22 text-[18px]"
            >
              Kalan %50, villa inşaatı yapıldıkça 9 eşit taksitle aylık olarak ödenir.
            </p>
          </motion.div>
        </motion.div>

        {/* Row 2: 9 Taksit Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 lg:p-3">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3 lg:mb-1.5">
              <div className="flex-1 h-[1px] bg-white/10" />
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/40 uppercase tracking-wider lg-lock-20 text-[18px]"
              >
                Kalan %50 — 9 Eşit Taksit
              </span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>
            {/* Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-2">
              {installments.map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.04 }}
                  className="bg-white/5 border border-white/8 rounded-lg p-2.5 sm:p-3 lg:p-2 flex flex-col items-center justify-center gap-0.5 sm:gap-1 lg:gap-0.5"
                >
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white text-[20px] lg-lock-20"
                  >
                    {label}
                  </span>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-[#C9A96E]/70 text-[15px] lg-lock-15"
                  >
                    ~%5.55
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom: Risk + Noter notes */}
        <div className="w-full flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="w-full max-w-4xl bg-[#2D6A4F]/10 backdrop-blur-sm border border-[#2D6A4F]/25 rounded-lg p-2.5 sm:p-3 lg:p-2 flex items-center justify-center gap-2 lg:gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3.5 lg:h-3.5 text-[#2D6A4F] shrink-0" />
            <span
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em" }}
              className="text-[#2D6A4F] uppercase lg-lock-20 text-[18px]"
            >
              Böylece risk minimize edilmiş olur
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex items-center gap-2 lg:gap-1.5"
          >
            <div className="w-1.5 h-1.5 lg:w-1 lg:h-1 rounded-full bg-[#C9A96E]/50 shrink-0" />
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-white/30 font-bold text-[18px] lg-lock-18"
            >
              Tüm işlemler Noterden Onaylı Sözleşmeler ile güvence altındadır
            </span>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}