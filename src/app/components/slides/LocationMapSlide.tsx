import { motion } from "motion/react";
import { SlideLayout, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { MapPin } from "lucide-react";
import locationMapBg from "figma:asset/5ba4151e9d82f2b08dc11dcbf7c09f1f4934db04.png";
import locationMapImage from "figma:asset/20d1ad4c7a7d9df060eed7ddcded96d2309e3e46.png";

export function LocationMapSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={locationMapBg} overlay="darker" slideNumber={5} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4 lg:gap-2">
        {/* Header */}
        <SlideSubtitle>Sayan, Ubud'un En Değerli Koridoru</SlideSubtitle>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
          className="text-white text-[24px] lg-lock-56"
        >
          Lokasyon{" "}
          <span className="text-[#C9A96E] italic">Avantajı</span>
        </motion.h1>

        <GoldDivider />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          className="text-white/55 max-w-xl text-[11px] lg-lock-18"
        >
          Sayan, Ubud'un en prestijli ve yüksek gelirli segmentine hitap eden bölgesidir.
        </motion.p>

        {/* Map Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-lg sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mt-1"
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-[#C9A96E]/5 blur-3xl rounded-full scale-90" />

          <img
            src={locationMapImage}
            alt="Lamos Prime Lokasyon Haritası – Sayan, Ubud"
            className="relative w-full h-auto rounded-xl"
          />
        </motion.div>

        {/* Bottom Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col items-center gap-2 mt-1"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-[1px] bg-[#C9A96E]/40" />
            <MapPin className="w-3.5 h-3.5 text-[#C9A96E]/60" />
            <div className="w-5 h-[1px] bg-[#C9A96E]/40" />
          </div>
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/50 max-w-lg lg-lock-24 text-[12px]"
          >
            Lokasyon, kira performansının{" "}
            <span className="text-[#C9A96E]" style={{ fontWeight: 600 }}>%50</span>'sini belirler.
            Sayan bu anlamda risk değil,{" "}
            <span className="text-[#C9A96E] italic" style={{ fontWeight: 600 }}>avantajdır</span>.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}