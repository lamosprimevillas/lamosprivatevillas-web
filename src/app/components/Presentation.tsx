import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CoverSlide } from "./slides/CoverSlide";
import { MarketSlide } from "./slides/MarketSlide";
import { BaliLifestyleSlide } from "./slides/BaliLifestyleSlide";
import { LocationMapSlide } from "./slides/LocationMapSlide";
import { GalleryVideoSlide } from "./slides/GalleryVideoSlide";
import { CollectionSlide } from "./slides/CollectionSlide";
import { ArchitectureSlide } from "./slides/ArchitectureSlide";
import { MasterPlanSlide } from "./slides/MasterPlanSlide";
import { LegalSlide } from "./slides/LegalSlide";
import { OwnershipSlide } from "./slides/OwnershipSlide";
import { FinancialSlide } from "./slides/FinancialSlide";
import { ExitStrategySlide } from "./slides/ExitStrategySlide";
import { PaymentSlide } from "./slides/PaymentSlide";
import { ConstructionSlide } from "./slides/ConstructionSlide";
import { AboutUsSlide } from "./slides/AboutUsSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { PdfExporter } from "./PdfExporter";

const TOTAL_SLIDES = 16;

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= TOTAL_SLIDES) return;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide((p) => p + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((p) => p - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch / swipe support
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const slides = [
    <CoverSlide key="cover" total={TOTAL_SLIDES} />,
    <MarketSlide key="market" total={TOTAL_SLIDES} />,
    <BaliLifestyleSlide key="balilifestyle" total={TOTAL_SLIDES} />,
    <LocationMapSlide key="locationmap" total={TOTAL_SLIDES} />,
    <GalleryVideoSlide key="galleryvideo" total={TOTAL_SLIDES} />,
    <CollectionSlide key="collection" total={TOTAL_SLIDES} />,
    <ArchitectureSlide key="architecture" total={TOTAL_SLIDES} />,
    <MasterPlanSlide key="masterplan" total={TOTAL_SLIDES} />,
    <LegalSlide key="legal" total={TOTAL_SLIDES} />,
    <OwnershipSlide key="ownership" total={TOTAL_SLIDES} />,
    <FinancialSlide key="financial" total={TOTAL_SLIDES} />,
    <ExitStrategySlide key="exit" total={TOTAL_SLIDES} />,
    <PaymentSlide key="payment" total={TOTAL_SLIDES} />,
    <ConstructionSlide key="construction" total={TOTAL_SLIDES} />,
    <AboutUsSlide key="about" total={TOTAL_SLIDES} />,
    <ContactSlide key="contact" total={TOTAL_SLIDES} />,
  ];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none">
      {/* PDF Export Button */}
      <PdfExporter />

      {/* Slide Content */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C9A96E] hover:border-[#C9A96E]/30 transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}

      {currentSlide < TOTAL_SLIDES - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C9A96E] hover:border-[#C9A96E]/30 transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}

      {/* Slide Thumbnails (mini navigation) */}
      <div className="absolute bottom-1 sm:bottom-4 md:bottom-6 right-2 sm:right-4 md:right-6 z-50 flex items-center gap-1 sm:gap-2">
        <span
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-white/20 text-[10px] mr-2 hidden md:inline"
        >
          {currentSlide + 1}/{TOTAL_SLIDES}
        </span>
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === currentSlide
                ? "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#C9A96E]"
                : "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}