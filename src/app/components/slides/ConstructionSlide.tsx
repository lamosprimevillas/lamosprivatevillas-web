import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { PremiumVideoFrame } from "../PremiumVideoFrame";
import { HardHat, Camera, FileText, Calendar } from "lucide-react";
import constructionBg from "figma:asset/5ba4151e9d82f2b08dc11dcbf7c09f1f4934db04.png";

const constructionVideoEmbed =
  typeof import.meta.env.VITE_CONSTRUCTION_VIDEO_EMBED === "string" &&
  import.meta.env.VITE_CONSTRUCTION_VIDEO_EMBED.trim() !== ""
    ? import.meta.env.VITE_CONSTRUCTION_VIDEO_EMBED.trim()
    : undefined;

const phases = [
  { label: "Planlama ve İzinler", status: "Tamamlandı", percent: 100 },
  { label: "Temel İşleri", status: "Devam Ediyor", percent: 65 },
  { label: "Çelik Yapı", status: "Yaklaşan", percent: 0 },
  { label: "İnce İşler ve Teslim", status: "Yaklaşan", percent: 0 },
];

export function ConstructionSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={constructionBg} overlay="left-dark" slideNumber={13} totalSlides={total}>
      {/* lg: ~%12 küçültme (zoom out hissi) + sıkı aralıklar — tek ekranda sığsın */}
      <div
        className={[
          "mx-auto flex w-full max-w-6xl flex-col items-center text-center",
          "gap-1.5 sm:gap-3 md:gap-4 lg:gap-1 lg:[zoom:0.9]",
        ].join(" ")}
      >
        <div className="[&_p]:text-[9px] sm:[&_p]:text-[10px] lg:[&_p]:text-[8px] lg:[&_p]:tracking-[0.12em]">
          <SlideSubtitle>İnşaat ve Teslimat</SlideSubtitle>
        </div>
        <div className="w-full max-w-full px-1 [&_h1]:text-[18px] sm:[&_h1]:text-[22px] lg:[&_h1]:text-[17px] lg:[&_h1]:leading-[1.15]">
          <SlideTitle>
            Planlı Süreç ve
            <br />
            <span className="italic text-[#C9A96E] text-[17px] sm:text-[22px] lg:text-[16px]">
              Şeffaf Raporlama
            </span>
          </SlideTitle>
        </div>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.45 }}
          className="text-white/60 max-w-xl px-1 text-[10px] sm:text-[11px] lg:max-w-lg lg:text-[9px] lg-lock-18"
        >
          İnşaat açıkça planlanmış aşamaları takip eder. Yatırımcılar teslimata kadar
          aylık ilerleme raporları ve görsel güncellemeler alacaktır.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.52 }}
          className="mx-auto w-full max-w-xl sm:max-w-2xl lg:max-w-[min(42rem,92vw)]"
        >
          <PremiumVideoFrame
            embedUrl={constructionVideoEmbed}
            eyebrow="Saha görüntüleri"
            title="İnşaat güncellemesi"
            emptyHint="Video linki yakında eklenecek"
          />
        </motion.div>

        <div className="mt-0 flex max-w-6xl flex-col gap-2 sm:gap-4 lg:mt-0.5 lg:flex-row lg:gap-3">
          {/* Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-5 lg:w-[34%] lg:p-2.5"
          >
            <div className="flex flex-col gap-2 sm:gap-4 lg:gap-1.5">
              {phases.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                >
                  <div className="mb-0.5 flex items-center justify-between sm:mb-1.5 lg:mb-0.5">
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-left text-[10px] text-white sm:text-[11px] lg:text-[9px] lg-lock-16"
                    >
                      {p.label}
                    </span>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className={`rounded-full px-1.5 py-0.5 uppercase tracking-wider sm:px-2 lg:px-1.5 lg:text-[7px] ${
                        p.status === "Tamamlandı"
                          ? "bg-[#2D6A4F]/15 text-[#2D6A4F]"
                          : p.status === "Devam Ediyor"
                          ? "bg-[#C9A96E]/15 text-[#C9A96E]"
                          : "bg-white/5 text-white/30"
                      } text-[7px] lg-lock-14`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/5 sm:h-1.5 lg:h-[3px]">
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
            className="grid flex-1 grid-cols-2 gap-1.5 sm:gap-2.5 lg:gap-2"
          >
            {[
              { icon: Calendar, title: "Aylık Güncellemeler", desc: "Düzenli ilerleme raporları" },
              { icon: Camera, title: "Fotoğraf Belgesi", desc: "Görsel dokümantasyon" },
              { icon: FileText, title: "Yazılı Raporlar", desc: "Detaylı kilometre taşları" },
              { icon: HardHat, title: "Görüntülü arama ile inceleme", desc: "Profesyonel denetim" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                className="flex flex-col items-center gap-0.5 rounded-lg border border-white/10 bg-white/5 p-2 text-center backdrop-blur-sm sm:gap-1.5 sm:p-3 lg:gap-1 lg:p-2"
              >
                <f.icon className="h-3.5 w-3.5 text-[#C9A96E] sm:h-4 sm:w-4 lg:h-4 lg:w-4" />
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[11px] leading-tight text-white sm:text-[12px] lg:text-[10px] lg-lock-20"
                >
                  {f.title}
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-[8px] leading-snug text-white/50 sm:text-[9px] lg:text-[7px] lg-lock-14"
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