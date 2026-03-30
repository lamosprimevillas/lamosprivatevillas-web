import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, Home, Calendar, Award, X } from "lucide-react";
import { PremiumVideoFrame } from "../PremiumVideoFrame";

import interiorBg from "@/assets/interior2.webp";
import img1 from "figma:asset/0ec89edbc1b48cea234b8d4bdae1ab86d23da1fa.png";
import img2 from "figma:asset/5ba4151e9d82f2b08dc11dcbf7c09f1f4934db04.png";
import img3 from "figma:asset/619e7839cc517646c704b1c88c1df4032b05c437.png";
import img4 from "figma:asset/824b55987c2a902814d98214f672927f0a231642.png";
import img5 from "figma:asset/8629ca25f7da3679368f202246d1cede8739f913.png";
import img6 from "figma:asset/9eba3025a7fb9754e76b817f78453cb939b49ede.png";
import img7 from "figma:asset/b7c7d443ae2a0ace15ff25de76d18b033bd022df.png";
import img8 from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";
import img9 from "figma:asset/ed8f29a915f28aad1fb488874529396cf81f3f89.png";

const galleryImages = [
  { src: img1, alt: "Villa dış görünüm ve havuz alanı" },
  { src: img5, alt: "Tropik peyzaj ve bahçe düzenlemesi" },
  { src: img9, alt: "Modern mimari detaylar" },
  { src: img3, alt: "Resort alanı ve ortak mekanlar" },
  { src: img4, alt: "Villa iç mekan tasarımı" },
  { src: img6, alt: "Yaşam alanları" },
  { src: img7, alt: "Doğa ile iç içe yapı" },
  { src: img2, alt: "Çevre ve peyzaj" },
  { src: img8, alt: "Bali geleneksel dokunuşlar" },
];

const referenceVideoEmbed =
  typeof import.meta.env.VITE_REFERENCE_VIDEO_EMBED === "string" &&
  import.meta.env.VITE_REFERENCE_VIDEO_EMBED.trim() !== ""
    ? import.meta.env.VITE_REFERENCE_VIDEO_EMBED.trim()
    : undefined;

const stats = [
  { icon: Home, value: "3", label: "Villa" },
  { icon: MapPin, value: "Canggu", label: "Konum" },
  { icon: Calendar, value: "2025", label: "Tamamlanma" },
  { icon: Award, value: "Teslim Edildi", label: "Durum" },
];

export function ReferenceProjectSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
  }, []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, lightboxPrev, lightboxNext]);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${interiorBg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center py-12 sm:py-16">
        {/* Header */}
        <div className="mx-auto mb-5 flex max-w-7xl flex-col items-center px-4 sm:mb-8 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex w-full flex-col items-center gap-2 text-center sm:gap-3"
          >
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.3em" }}
              className="text-[#C9A96E] uppercase text-sm sm:text-base"
            >
              Tamamlanmış Proje
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Referans{" "}
              <span className="italic text-[#C9A96E]">Projemiz</span>
            </h2>
            <div className="mx-auto h-[1px] w-16 bg-gradient-to-r from-[#C9A96E] to-transparent" />
            <p
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
              className="max-w-2xl text-base text-white/60 sm:text-2xl"
            >
              Canggu'da tamamladığımız 3 özel villa projemiz, yatırımcılarımıza güçlü kira
              getirisi ve değer artışı sağlamaya devam ediyor. 2025 tamamlanma sürecini
              geride bırakıp Teslim Edildi statüsüne ulaştı.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 grid w-full max-w-4xl grid-cols-2 justify-items-stretch gap-2 sm:mt-6 sm:gap-3 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 text-center"
              >
                <stat.icon className="w-4 h-4 text-[#C9A96E] mx-auto mb-1.5" />
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white text-xl sm:text-2xl"
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/50 text-xs uppercase tracking-wider mt-0.5"
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mx-auto mt-5 w-full max-w-2xl sm:mt-6"
          >
            <PremiumVideoFrame
              embedUrl={referenceVideoEmbed}
              eyebrow="Referans proje"
              title="Video turu"
              emptyHint="Proje videosu yakında"
            />
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          id="galeri"
          className="relative"
        >
          {/* Gallery Label */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mb-3 sm:mb-4 flex items-center justify-between">
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.15em" }}
              className="text-white/40 uppercase text-sm"
            >
              Proje Galerisi
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  canScrollLeft
                    ? "border-[#C9A96E]/30 text-[#C9A96E] hover:bg-[#C9A96E]/10"
                    : "border-white/10 text-white/20"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  canScrollRight
                    ? "border-[#C9A96E]/30 text-[#C9A96E] hover:bg-[#C9A96E]/10"
                    : "border-white/10 text-white/20"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-8 lg:px-16 pb-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex-none w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] snap-start cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative group overflow-hidden rounded-xl border border-white/5">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[140px] sm:h-[170px] md:h-[200px] lg:h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-white/80 text-xs"
                    >
                      {img.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[78vh] object-contain rounded-xl"
              />
              <div className="flex items-center gap-3">
                <p
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/70 text-sm"
                >
                  {galleryImages[lightboxIndex].alt}
                </p>
                <span className="text-white/30 text-xs">
                  {lightboxIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
