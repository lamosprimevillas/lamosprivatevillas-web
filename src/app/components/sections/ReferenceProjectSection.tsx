import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, Home, Calendar, Award, X } from "lucide-react";
import { PremiumVideoFrame } from "../PremiumVideoFrame";

import interiorBg from "@/assets/interior2.webp";
import referenceVillaHeroImg from "@/assets/Reference_villa.jpeg";
import {
  referenceGalleryImages as galleryImagesRaw,
  getReferenceVideoEmbed,
} from "@/app/data/referenceGalleryAssets";
import { useI18n } from "@/i18n/I18nContext";

const referenceVideoEmbed = getReferenceVideoEmbed();

const LIGHTBOX_HERO_INDEX = -1;

/** Video kartıyla aynı premium çerçeve; 9:16 telefon oranı */
function ReferencePhonePhotoCard({
  src,
  alt,
  onOpen,
  eyebrow,
  title,
}: {
  src: string;
  alt: string;
  onOpen: () => void;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="relative w-full">
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#C9A96E]/55 via-[#C9A96E]/15 to-white/[0.08] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.85),inset_0_0_0_1px_rgba(201,169,110,0.12)]">
        <div className="relative rounded-2xl bg-black/90 overflow-hidden ring-1 ring-white/[0.06]">
          <div
            className="pointer-events-none absolute top-3 left-3 z-20 h-7 w-7 rounded-tl-md border-t-2 border-l-2 border-[#C9A96E]/70 sm:h-9 sm:w-9"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-3 right-3 z-20 h-7 w-7 rounded-tr-md border-t-2 border-r-2 border-[#C9A96E]/70 sm:h-9 sm:w-9"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-3 left-3 z-20 h-7 w-7 rounded-bl-md border-b-2 border-l-2 border-[#C9A96E]/70 sm:h-9 sm:w-9"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-3 right-3 z-20 h-7 w-7 rounded-br-md border-b-2 border-r-2 border-[#C9A96E]/70 sm:h-9 sm:w-9"
            aria-hidden
          />

          <div className="relative z-10 border-b border-white/[0.07] bg-gradient-to-r from-black/80 via-black/40 to-transparent px-4 py-3 sm:px-5">
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.25em" }}
              className="text-[9px] uppercase tracking-[0.2em] text-[#C9A96E]/90 sm:text-[10px]"
            >
              {eyebrow}
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm text-white/95 sm:text-base lg:text-lg">
              {title}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="relative block w-full rounded-b-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <div className="relative mx-auto aspect-[9/16] w-full max-h-[min(75vh,680px)] max-w-[min(100%,380px)] bg-zinc-950 sm:max-w-[420px]">
              <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export function ReferenceProjectSection() {
  const { t } = useI18n();
  const galleryImages = galleryImagesRaw.map((img, i) => ({
    ...img,
    alt: t.gallery.images[i] ?? img.alt,
  }));
  const lightboxSlideCount = galleryImages.length + 1;

  const stats = [
    { icon: Home, value: "3", label: t.reference.stats.villas },
    { icon: MapPin, value: t.reference.stats.locationValue, label: t.reference.stats.location },
    { icon: Calendar, value: t.reference.stats.completionValue, label: t.reference.stats.completion },
    { icon: Award, value: t.reference.stats.statusValue, label: t.reference.stats.status },
  ];

  const REFERENCE_VILLA_HERO = {
    src: referenceVillaHeroImg,
    alt: t.reference.heroPhotoAlt,
  };

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
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      if (prev === LIGHTBOX_HERO_INDEX) return galleryImages.length - 1;
      if (prev === 0) return LIGHTBOX_HERO_INDEX;
      return prev - 1;
    });
  }, []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      if (prev === galleryImages.length - 1) return LIGHTBOX_HERO_INDEX;
      if (prev === LIGHTBOX_HERO_INDEX) return 0;
      return prev + 1;
    });
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
              {t.reference.eyebrow}
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {t.reference.title}{" "}
              <span className="italic text-[#C9A96E]">{t.reference.titleItalic}</span>
            </h2>
            <div className="mx-auto h-[1px] w-16 bg-gradient-to-r from-[#C9A96E] to-transparent" />
            <p
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
              className="max-w-2xl text-base text-white/60 sm:text-2xl"
            >
              {t.reference.body}
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
            className="mx-auto mt-5 w-full max-w-5xl sm:mt-6"
          >
            <div className="grid grid-cols-1 items-start justify-items-center gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
              <div className="w-full max-w-[420px] justify-self-center">
                <PremiumVideoFrame
                  aspectVariant="9:16"
                  embedUrl={referenceVideoEmbed}
                  eyebrow={t.reference.videoEyebrow}
                  title={t.reference.videoTitle}
                  emptyHint={t.reference.videoEmpty}
                />
              </div>
              <div className="w-full max-w-[420px] justify-self-center">
                <ReferencePhonePhotoCard
                  src={REFERENCE_VILLA_HERO.src}
                  alt={REFERENCE_VILLA_HERO.alt}
                  eyebrow={t.reference.photoEyebrow}
                  title={t.reference.photoTitle}
                  onOpen={() => setLightboxIndex(LIGHTBOX_HERO_INDEX)}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Gallery Label */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mb-3 sm:mb-4 flex items-center justify-between">
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.15em" }}
              className="text-white/40 uppercase text-sm"
            >
              {t.reference.galleryLabel}
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
                src={
                  lightboxIndex === LIGHTBOX_HERO_INDEX
                    ? REFERENCE_VILLA_HERO.src
                    : galleryImages[lightboxIndex].src
                }
                alt={
                  lightboxIndex === LIGHTBOX_HERO_INDEX
                    ? REFERENCE_VILLA_HERO.alt
                    : galleryImages[lightboxIndex].alt
                }
                className="max-w-full max-h-[78vh] object-contain rounded-xl"
              />
              <div className="flex items-center gap-3">
                <p
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/70 text-sm"
                >
                  {lightboxIndex === LIGHTBOX_HERO_INDEX
                    ? REFERENCE_VILLA_HERO.alt
                    : galleryImages[lightboxIndex].alt}
                </p>
                <span className="text-white/30 text-xs">
                  {lightboxIndex === LIGHTBOX_HERO_INDEX
                    ? 1
                    : lightboxIndex + 2}{" "}
                  / {lightboxSlideCount}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
