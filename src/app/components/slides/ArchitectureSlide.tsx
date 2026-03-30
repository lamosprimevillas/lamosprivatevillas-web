import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { PremiumVideoFrame } from "../PremiumVideoFrame";
import architectureBg from "figma:asset/ed8f29a915f28aad1fb488874529396cf81f3f89.png";

const architectureVideoEmbed =
  typeof import.meta.env.VITE_ARCHITECTURE_VIDEO_EMBED === "string" &&
  import.meta.env.VITE_ARCHITECTURE_VIDEO_EMBED.trim() !== ""
    ? import.meta.env.VITE_ARCHITECTURE_VIDEO_EMBED.trim()
    : undefined;

const details = [
  { title: "Çelik Yapı", desc: "Uzun ömürlü, dayanıklı çelik yapı sistemi" },
  { title: "Yerden Tavana Cam", desc: "Panoramik orman manzaraları" },
  { title: "Yüksek Tavanlar", desc: "Ferah, havadar tropikal yaşam alanları" },
  { title: "Modern Tropikal", desc: "Çağdaş tasarım Bali sıcaklığıyla buluşuyor" },
];

export function ArchitectureSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={architectureBg} overlay="right-dark" slideNumber={6} totalSlides={total}>
      {/* lg: video | metin eşit genişlik, yan yana sığacak şekilde */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="w-full min-w-0 order-2 lg:order-1"
        >
          <PremiumVideoFrame
            embedUrl={architectureVideoEmbed}
            eyebrow="Mimari tur"
            title="Villa ve çevre"
            emptyHint="Mimari tanıtım videosu yakında"
          />
        </motion.div>

        {/* Sağ: daha küçük tipografi, hafif sağa kaydırılmış */}
        <div
          className={[
            "flex min-h-0 w-full min-w-0 flex-col",
            "gap-2 sm:gap-4 md:gap-5 lg:gap-1.5",
            "rounded-2xl border border-white/5 bg-black/50 p-4 backdrop-blur-md sm:p-6 md:p-8 lg:p-3",
            "order-1 lg:order-2 lg:pl-5 lg:pr-1",
          ].join(" ")}
        >
          <div className="[&_p]:text-[9px] sm:[&_p]:text-[10px] lg:[&_p]:text-[8px] lg:[&_p]:tracking-[0.14em]">
            <SlideSubtitle>Mimari Vizyon</SlideSubtitle>
          </div>
          <div className="[&_h1]:text-[19px] sm:[&_h1]:text-[22px] lg:[&_h1]:text-[16px] lg:[&_h1]:leading-[1.12]">
            <SlideTitle>
              Modern Tropikal
              <br />
              <span className="italic text-[#C9A96E] text-[20px] sm:text-[24px] lg:text-[17px] lg-lock-64">
                Çelik Mimari
              </span>
            </SlideTitle>
          </div>
          <GoldDivider />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.55 }}
            className="text-white/70 w-full max-w-none text-[11px] lg:max-w-none lg:text-[9px] lg:leading-relaxed lg-lock-18"
          >
            Modern tasarım, dayanıklı çelik yapı sistemiyle tropikal mimariyle buluşuyor.
            Geniş cam açıklıkları ve yüksek tavanlar lüks iç mekanları nefes kesici
            orman manzaralarıyla bütünleştiriyor.
          </motion.p>

          <div className="mt-1 grid grid-cols-2 gap-2 sm:gap-4 lg:mt-0.5 lg:gap-x-2 lg:gap-y-1.5">
            {details.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex items-start gap-1.5 sm:gap-3 lg:gap-1.5"
              >
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A96E] sm:mt-2 sm:h-2 sm:w-2 lg:mt-0.5" />
                <div className="min-w-0">
                  <div
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white text-[13px] leading-tight lg:text-[10px] lg-lock-20"
                  >
                    {d.title}
                  </div>
                  <div
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/50 text-[10px] leading-snug lg:text-[8px] lg-lock-14"
                  >
                    {d.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}