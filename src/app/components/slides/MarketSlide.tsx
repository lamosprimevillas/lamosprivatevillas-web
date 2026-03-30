import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import {
  TrendingUp,
  Users,
  Globe,
  Star,
  Percent,
  CalendarRange,
  ThermometerSun,
  CircleDollarSign,
} from "lucide-react";
import marketBg from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";

const stats = [
  { icon: Globe, value: "7M+", label: "Yıllık Turist", delay: 0.6 },
  { icon: TrendingUp, value: "40%", label: "Yıllık Büyüme", delay: 0.7 },
  { icon: Users, value: "80%+", label: "Lüks Doluluk", delay: 0.8 },
  { icon: Star, value: "#1", label: "Tripadvisor En İyi Destinasyon", delay: 0.9 },
];

const marketHighlights = [
  {
    icon: Percent,
    title: "Düşük vergi",
    detail: "Yatırım ve işletme maliyetlerinde rekabetçi vergi ortamı.",
    delay: 0.55,
  },
  {
    icon: CalendarRange,
    title: "12 ay turizm",
    detail: "Yıl boyunca talep; yüksek sezon sürekliliği.",
    delay: 0.62,
  },
  {
    icon: ThermometerSun,
    title: "İklim",
    detail: "Hava sıcaklığı yıl boyunca yaklaşık 25–35°C.",
    delay: 0.69,
  },
  {
    icon: CircleDollarSign,
    title: "Dolar bazında getiri",
    detail: "Gelir ve değerlemeyi güçlü para birimi üzerinden planlama.",
    delay: 0.76,
  },
];

export function MarketSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={marketBg} overlay="darker" slideNumber={2} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start text-left gap-2 sm:gap-4 md:gap-5 lg:gap-4">
        <SlideSubtitle>Bali Pazarı ve Fırsatı</SlideSubtitle>
        <SlideTitle>
          <span style={{ fontWeight: 700, fontSize: "1.3em" }}>BALİ</span> &apos;de
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
          className="text-white/70 w-full max-w-2xl text-[12px] lg-lock-22"
        >
          Günümüzün yüksek harcama yapan turistleri doğa, mutlak mahremiyet ve lüks arıyor.
          Bu yüksek değerli proje olağanüstü kira getirisi ve sermaye değer artışı sunuyor.
        </motion.p>

        {/* Öne çıkanlar — sıra: düşük vergi → 12 ay turizm → iklim → dolar */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-1 sm:mt-2">
          {marketHighlights.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: item.delay }}
              className="group flex gap-3 sm:gap-3.5 rounded-lg border border-white/10 border-l-[3px] border-l-[#C9A96E] bg-white/[0.04] p-3 sm:p-3.5 pl-3 sm:pl-4 backdrop-blur-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#C9A96E]/35 bg-[#C9A96E]/10">
                <item.icon className="h-4 w-4 text-[#C9A96E]" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white text-[13px] sm:text-[14px] lg-lock-24 leading-snug"
                >
                  {item.title}
                </p>
                <p
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="mt-0.5 text-[9px] sm:text-[10px] leading-relaxed text-white/55 lg-lock-16"
                >
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-2 sm:mt-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 text-left"
            >
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C9A96E] mb-2 sm:mb-3" />
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
