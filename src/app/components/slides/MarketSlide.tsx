import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { TrendingUp, Users, Globe, Star } from "lucide-react";
import marketBg from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";

const stats = [
  { icon: Globe, value: "7M+", label: "Yıllık Turist", delay: 0.6 },
  { icon: TrendingUp, value: "25%", label: "Yıllık Büyüme", delay: 0.7 },
  { icon: Users, value: "80%+", label: "Lüks Doluluk", delay: 0.8 },
  { icon: Star, value: "#1", label: "Küresel Destinasyon", delay: 0.9 },
];

export function MarketSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={marketBg} overlay="darker" slideNumber={2} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-4">
        <SlideSubtitle>Bali Pazarı ve Fırsatı</SlideSubtitle>
        <SlideTitle>
          <span style={{ fontWeight: 700, fontSize: "1.3em" }}>BALİ</span>  'de
          Küresel Turizmin Zirvesinde
          <br />
          <span className="italic text-[#C9A96E]">Kârlı Bir Yatırım</span>
        </SlideTitle>
        <GoldDivider delay={0.4} />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/70 max-w-xl text-[12px] lg-lock-22"
        >
          Günümüzün yüksek harcama yapan turistleri doğa, mutlak mahremiyet ve lüks arıyor.
          Bu yüksek değerli proje olağanüstü kira getirisi ve sermaye değer artışı sunuyor.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-2 sm:mt-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 text-center"
            >
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C9A96E] mx-auto mb-2 sm:mb-3" />
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-[22px] lg-lock-40"
              >
                {stat.value}
              </div>
              <div
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/50 text-[9px] sm:text-[11px] md:text-xs lg-lock-18 uppercase tracking-wider mt-1"
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}