import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import {
  Landmark,
  Droplets,
  Sparkles,
  Waves,
  Music,
  GraduationCap,
  UtensilsCrossed,
  BadgePercent,
  UsersRound,
} from "lucide-react";
import baliBg from "figma:asset/8629ca25f7da3679368f202246d1cede8739f913.png";

const lifestyleItems = [
  { icon: Landmark, text: "Kültür, tapınaklar, geleneksel danslar" },
  { icon: Droplets, text: "Şelaleler, göller, pirinç terasları" },
  { icon: Sparkles, text: "Yoga, spiritüel merkezler, arınma seremonileri" },
  { icon: Waves, text: "Sörf, dalış, rafting, ATV" },
  { icon: Music, text: "Dünyaca ünlü beach club'lar ve DJ performansları" },
  { icon: GraduationCap, text: "Uluslararası okullar ve hastaneler" },
  { icon: UtensilsCrossed, text: "20'den fazla dünya mutfağı" },
  { icon: BadgePercent, text: "Düşük vergi oranları" },
  { icon: UsersRound, text: "Global yatırım fırsatları" },
];

export function BaliLifestyleSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={baliBg} overlay="darker" slideNumber={3} totalSlides={total}>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-2.5">
        <SlideSubtitle>Bali'nin Gerçek Gücü</SlideSubtitle>
        <SlideTitle>
          <span style={{ fontWeight: 700, fontSize: "1.3em" }}>BALİ</span>, Bir Trend Değil,
          <br />
          <span className="italic text-[#C9A96E]">Küresel Bir Yaşam Merkezi</span>
        </SlideTitle>
        <GoldDivider delay={0.35} />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          className="text-white/60 max-w-2xl text-[11px] lg-lock-24"
        >
          Ancak Bali'yi güçlü yapan yalnızca turist sayısı değildir.
          Bali, <span className="text-[#C9A96E]">"yaşam merkezi"</span> olan full paket bir adadır.
        </motion.p>

        {/* Lifestyle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3 mt-1">
          {lifestyleItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.55 + i * 0.07 }}
              className="flex items-center gap-2 sm:gap-3 lg:gap-3 bg-white/5 backdrop-blur-sm border border-white/8 rounded-lg px-2.5 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-2.5"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-[#C9A96E]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 text-[#C9A96E]" />
              </div>
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/80 text-[10px] lg-lock-20"
              >
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-1 sm:mt-2 lg:mt-1.5 bg-[#2D6A4F]/10 border border-[#2D6A4F]/25 rounded-xl px-4 py-3 sm:px-6 sm:py-4 lg:px-5 lg:py-3 max-w-4xl"
        >
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.7 }}
            className="text-white/50 italic text-[14px] lg-lock-26"
          >
            Bali'de turizm geçici değildir. Bali bir trend değil, <span className="text-[#C9A96E]">global bir yaşam merkezidir.</span>
          </p>
          <div className="w-10 h-[1px] bg-[#C9A96E]/30 my-2 sm:my-3 lg:my-1.5" />
          <p
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
            className="text-white/45 text-[10px] lg-lock-18"
          >
            Bu nedenle doğru lokasyonda yapılan yatırımlar, yalnızca kira getirisi değil,
            <span className="text-[#C9A96E]/80"> değer artışı</span> da üretir.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}