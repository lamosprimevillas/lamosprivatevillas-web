import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import architectureBg from "figma:asset/ed8f29a915f28aad1fb488874529396cf81f3f89.png";

const details = [
  { title: "Çelik Yapı", desc: "Uzun ömürlü, dayanıklı çelik yapı sistemi" },
  { title: "Yerden Tavana Cam", desc: "Panoramik orman manzaraları" },
  { title: "Yüksek Tavanlar", desc: "Ferah, havadar tropikal yaşam alanları" },
  { title: "Modern Tropikal", desc: "Çağdaş tasarım Bali sıcaklığıyla buluşuyor" },
];

export function ArchitectureSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={architectureBg} overlay="right-dark" slideNumber={7} totalSlides={total}>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-3 sm:gap-6 lg:gap-16 items-start lg:items-center">
        {/* Spacer for image visibility */}
        <div className="hidden lg:block flex-1" />

        {/* Right Content - with backdrop panel for readability */}
        <div className="flex-1 flex flex-col gap-2 sm:gap-4 md:gap-5 lg:gap-2 bg-black/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 lg:p-4 border border-white/5">
          <SlideSubtitle>Mimari Vizyon</SlideSubtitle>
          <SlideTitle>
            Modern Tropikal
            <br />
            <span className="italic text-[#C9A96E] text-[24px] lg-lock-64">Çelik Mimari</span>
          </SlideTitle>
          <GoldDivider />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
            className="text-white/70 max-w-md lg-lock-20 text-[11px]"
          >
            Modern tasarım, dayanıklı çelik yapı sistemiyle tropikal mimariyle buluşuyor.
            Geniş cam açıklıkları ve yüksek tavanlar lüks iç mekanları nefes kesici
            orman manzaralarıyla bütünleştiriyor.
          </motion.p>

          {/* Detail Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-3 mt-1 sm:mt-2 lg:mt-1">
            {details.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex items-start gap-2 sm:gap-3 lg:gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#C9A96E] mt-1.5 sm:mt-2 lg:mt-1 shrink-0" />
                <div>
                  <div
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white text-[13px] lg-lock-24"
                  >
                    {d.title}
                  </div>
                  <div
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/50 lg-lock-18 text-[10px]"
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