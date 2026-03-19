import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { MapPin, TreePine, Heart, Sparkles } from "lucide-react";
import locationBg from "figma:asset/619e7839cc517646c704b1c88c1df4032b05c437.png";

const features = [
  { icon: MapPin, title: "Birinci Sınıf Konum", desc: "Ubud merkezine dakikalar" },
  { icon: TreePine, title: "Nehir Vadisi", desc: "Bozulmamış orman atmosferi" },
  { icon: Heart, title: "Wellness Merkezi", desc: "Küresel yoga ve inziva merkezi" },
  { icon: Sparkles, title: "Premium Misafirler", desc: "En yüksek harcama yapan turist profili" },
];

export function LocationSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={locationBg} overlay="darker" slideNumber={4} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-3 sm:gap-5 lg:gap-12 items-center text-center lg:text-left">
        {/* Left Content */}
        <div className="lg:flex-[0.9] flex flex-col gap-2 sm:gap-4 md:gap-5">
          <SlideSubtitle>Neden Sayan, Ubud?</SlideSubtitle>
          <SlideTitle>
            <span className="italic text-[#C9A96E]">Doğanın</span> ve
            <br />Sağlıklı Yaşamın Kalbi
          </SlideTitle>
          <GoldDivider />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
            className="text-white/60 max-w-md text-[18px] lg-lock-26"
          >
            Konum kira performansını belirler. Sayan, küresel yoga ve wellness
            turizminin merkezi olup en yüksek harcama yapan gezgin profilini çekiyor.
          </motion.p>
        </div>

        {/* Right Features */}
        <div className="lg:flex-[1.2] grid grid-cols-2 gap-3 sm:gap-5 lg:gap-4 w-full">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6 flex flex-col gap-2.5 sm:gap-3.5"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full bg-[#C9A96E]/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 text-[#C9A96E]" />
              </div>
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-[24px] lg-lock-26"
              >
                {f.title}
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/50 text-[15px] lg-lock-18"
              >
                {f.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}