import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { HardHat, Camera, FileText, Calendar } from "lucide-react";
import constructionBg from "figma:asset/5ba4151e9d82f2b08dc11dcbf7c09f1f4934db04.png";

const phases = [
  { label: "Planlama ve İzinler", status: "Tamamlandı", percent: 100 },
  { label: "Temel İşleri", status: "Devam Ediyor", percent: 65 },
  { label: "Çelik Yapı", status: "Yaklaşan", percent: 0 },
  { label: "İnce İşler ve Teslim", status: "Yaklaşan", percent: 0 },
];

export function ConstructionSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={constructionBg} overlay="left-dark" slideNumber={15} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-2">
        <SlideSubtitle>İnşaat ve Teslimat</SlideSubtitle>
        <SlideTitle>
          Planlı Süreç ve
          <br />
          <span className="italic text-[#C9A96E]">Şeffaf Raporlama</span>
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/60 max-w-xl text-[22px] lg-lock-22"
        >
          İnşaat açıkça planlanmış aşamaları takip eder. Yatırımcılar teslimata kadar
          aylık ilerleme raporları ve görsel güncellemeler alacaktır.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-3 sm:gap-6 lg:gap-5 mt-1 sm:mt-2 lg:mt-1 max-w-6xl">
          {/* Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-[36%] shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-6 lg:p-3"
          >
            <div className="flex flex-col gap-3 sm:gap-5 lg:gap-2">
              {phases.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2 lg:mb-1">
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-white lg-lock-18 text-[18px]"
                    >
                      {p.label}
                    </span>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className={`uppercase tracking-wider px-1.5 sm:px-2 lg:px-1.5 py-0.5 rounded-full ${ p.status === "Tamamlandı" ? "text-[#2D6A4F] bg-[#2D6A4F]/15" : p.status === "Devam Ediyor" ? "text-[#C9A96E] bg-[#C9A96E]/15" : "text-white/30 bg-white/5" } text-[15px] lg-lock-15`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div className="w-full h-1 sm:h-1.5 lg:h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${p.percent}%` }}
                      transition={{ duration: 1, delay: 0.9 + i * 0.1 }}
                      className={`h-full rounded-full ${
                        p.percent === 100
                          ? "bg-[#2D6A4F]"
                          : p.percent > 0
                          ? "bg-gradient-to-r from-[#C9A96E] to-[#C9A96E]/60"
                          : ""
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transparency Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:flex-1 grid grid-cols-2 gap-2 sm:gap-3 lg:gap-3"
          >
            {[
              { icon: Calendar, title: "Aylık Güncellemeler", desc: "Düzenli ilerleme raporları" },
              { icon: Camera, title: "Fotoğraf Belgesi", desc: "Görsel dokümantasyon" },
              { icon: FileText, title: "Yazılı Raporlar", desc: "Detaylı kilometre taşları" },
              { icon: HardHat, title: "Kalite Kontrol", desc: "Profesyonel denetim" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2.5 sm:p-4 lg:p-5 flex flex-col items-center text-center gap-1 sm:gap-2 lg:gap-2"
              >
                <f.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-[#C9A96E]" />
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white lg-lock-26 text-[22px]"
                >
                  {f.title}
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/50 lg-lock-18 text-[16px]"
                >
                  {f.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}