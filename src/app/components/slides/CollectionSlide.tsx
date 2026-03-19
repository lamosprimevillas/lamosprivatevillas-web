import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { Crown, Diamond, Bed, Sofa, Armchair, Lamp, UtensilsCrossed, Bath, Wind, Tv, TreePalm, Ruler, Home, Trees, Maximize } from "lucide-react";
import collectionBg from "figma:asset/9eba3025a7fb9754e76b817f78453cb939b49ede.png";

const furnitureItems = [
  { icon: Bed, label: "Yatak & Baza" },
  { icon: Sofa, label: "Koltuk Takımı" },
  { icon: Armchair, label: "TV Ünitesi" },
  { icon: UtensilsCrossed, label: "Yemek Masası ve Sandalyeler" },
  { icon: Lamp, label: "Aydınlatma" },
  { icon: Bath, label: "Banyo Mobilyası" },
  { icon: Wind, label: "Mutfak Mobilyaları" },
  { icon: Tv, label: "Kıyafet Dolapları" },
  { icon: TreePalm, label: "Bahçe & Peyzaj" },
];

interface AreaDetail {
  icon: typeof Ruler;
  label: string;
  value: string;
  highlight?: boolean;
}

const primeAreas: AreaDetail[] = [
  { icon: Ruler, label: "Arsa Alanı", value: "105 m²" },
  { icon: Home, label: "Bina Alanı", value: "60 + 60 = 120 m²" },
  { icon: Trees, label: "Bahçe & Havuz", value: "40 m²" },
  { icon: Maximize, label: "Toplam Yaşam Alanı", value: "165 m²", highlight: true },
];

const premiumAreas: AreaDetail[] = [
  { icon: Ruler, label: "Arsa Alanı", value: "120 m²" },
  { icon: Home, label: "Bina Alanı", value: "70 + 70 = 140 m²" },
  { icon: Trees, label: "Bahçe & Havuz", value: "50 m²" },
  { icon: Maximize, label: "Toplam Yaşam Alanı", value: "195 m²", highlight: true },
];

function AreaRow({ areas, accentColor }: { areas: AreaDetail[]; accentColor: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:gap-2 lg:gap-1 w-full">
      {areas.map((a) => (
        <div
          key={a.label}
          className={`flex items-center gap-1 sm:gap-2 lg:gap-2 rounded-lg px-1 py-0.5 sm:px-2.5 sm:py-1.5 lg:px-2.5 lg:py-1.5 ${
            a.highlight
              ? "bg-white/8 border border-white/10"
              : "bg-white/[0.03]"
          }`}
        >
          <a.icon
            className="w-2 h-2 sm:w-3.5 sm:h-3.5 lg:w-3 lg:h-3 shrink-0 hidden sm:block"
            style={{ color: a.highlight ? accentColor : "rgba(255,255,255,0.4)" }}
          />
          <span
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/40 lg-lock-16 uppercase tracking-wider shrink-0 text-[7px] sm:text-[9px]"
          >
            {a.label}
          </span>
          <span className="flex-1" />
          <span
            style={{ fontFamily: "'Playfair Display', serif", color: a.highlight ? accentColor : "rgba(255,255,255,0.7)" }}
            className={`lg-lock-20 ${a.highlight ? "font-bold" : ""} text-[9px] sm:text-[13px]`}
          >
            {a.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CollectionSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={collectionBg} overlay="darker" slideNumber={6} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-2">
        <SlideSubtitle>Lamos Prime Sınırlı Koleksiyon</SlideSubtitle>
        <SlideTitle>
          Sadece <span className="text-[#C9A96E] italic">7</span> Özel <span className="text-[#C9A96E] italic">2+1</span>
          <br />Yaşam Alanı
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/60 max-w-lg lg-lock-22 text-[11px]"
        >
          Mutlak mahremiyet ve münhasırlık için sadece 7 villa ile sınırlı.
          Seçici yatırımcı için tasarlanmış butik, düşük yoğunluklu bir konsept.
        </motion.p>

        {/* 3-Column Grid: Prime | Premium | Dahil Olanlar */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-4 lg:gap-4 mt-1 sm:mt-4 lg:mt-2 w-full">

          {/* Prime Villa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-[#C9A96E]/20 rounded-xl p-2 sm:p-5 lg:p-4 flex flex-col items-center gap-1 sm:gap-3 lg:gap-2"
          >
            <div className="w-6 h-6 sm:w-12 sm:h-12 lg:w-8 lg:h-8 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center">
              <Crown className="w-3 h-3 sm:w-6 sm:h-6 lg:w-4 lg:h-4 text-[#C9A96E]" />
            </div>
            <div
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white lg-lock-24 text-[15px]"
            >
              Prime Villa
            </div>
            <span
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
              className="text-[#C9A96E]/70 uppercase text-[7px] sm:text-[11px] lg-lock-13 border border-[#C9A96E]/25 bg-[#C9A96E]/5 px-2 py-0.5 rounded-full"
            >
              2+1 Rezidans
            </span>
            <div className="w-8 h-[1px] bg-[#C9A96E]/40" />
            <div className="flex flex-col items-center gap-0.5">
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#C9A96E] lg-lock-48 text-[24px]"
              >
                5
              </span>
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/40 uppercase tracking-wider text-[8px] sm:text-[13px]"
              >
                Mevcut Ünite
              </span>
            </div>
            <div className="w-full h-[1px] bg-white/10 mt-1 lg:mt-0.5" />

            {/* Area Details */}
            <AreaRow areas={primeAreas} accentColor="#C9A96E" />
          </motion.div>

          {/* Premium Villa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="bg-[#C9A96E]/5 backdrop-blur-sm border border-[#C9A96E]/30 rounded-xl p-2 sm:p-5 lg:p-4 flex flex-col items-center gap-1 sm:gap-3 lg:gap-2"
          >
            <div className="w-6 h-6 sm:w-12 sm:h-12 lg:w-8 lg:h-8 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/40 flex items-center justify-center">
              <Diamond className="w-3 h-3 sm:w-6 sm:h-6 lg:w-4 lg:h-4 text-[#C9A96E]" />
            </div>
            <div
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white lg-lock-24 text-[15px]"
            >
              Premium Villa
            </div>
            <span
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
              className="text-[#C9A96E]/70 uppercase text-[7px] sm:text-[11px] lg-lock-13 border border-[#C9A96E]/25 bg-[#C9A96E]/5 px-2 py-0.5 rounded-full"
            >
              2+1 Rezidans
            </span>
            <div className="w-8 h-[1px] bg-[#C9A96E]/40" />
            <div className="flex flex-col items-center gap-0.5">
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#C9A96E] lg-lock-48 text-[24px]"
              >
                2
              </span>
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/40 uppercase tracking-wider text-[8px] sm:text-[13px]"
              >
                Mevcut Ünite
              </span>
            </div>
            <div className="w-full h-[1px] bg-white/10 mt-1 lg:mt-0.5" />

            {/* Area Details */}
            <AreaRow areas={premiumAreas} accentColor="#C9A96E" />
          </motion.div>

          {/* Villaya Dahil Olanlar — 3rd Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="col-span-2 lg:col-span-1 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-2 sm:p-5 lg:p-4 flex flex-col gap-1 sm:gap-3 lg:gap-2"
          >
            {/* Header */}
            <div className="flex items-center gap-2 lg:gap-1.5">
              <div className="flex-1 h-[1px] bg-[#C9A96E]/20" />
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.15em" }}
                className="text-[#C9A96E]/70 uppercase lg-lock-20 text-[12px]"
              >
                Villaya Dahil
              </span>
              <div className="flex-1 h-[1px] bg-[#C9A96E]/20" />
            </div>

            {/* Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-0.5 sm:gap-1 lg:gap-0.5">
              {furnitureItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 1.0 + i * 0.04 }}
                  className="flex items-center gap-1 sm:gap-2 lg:gap-2 bg-white/[0.04] hover:bg-white/[0.07] transition-colors rounded-lg px-1.5 py-1 sm:px-2.5 sm:py-1.5 lg:px-2.5 lg:py-1.5"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 rounded bg-[#C9A96E]/8 flex items-center justify-center shrink-0">
                    <item.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#C9A96E]/50" />
                  </div>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/55 lg-lock-20 text-left text-[8px] sm:text-[11px]"
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:block mt-auto pt-0.5">
              <div className="w-full h-[1px] bg-white/5 mb-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}