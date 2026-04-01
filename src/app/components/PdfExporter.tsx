import { useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { Download, Loader2, Check, FileText } from "lucide-react";

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
import { PaymentPricingSlide } from "./slides/PaymentPricingSlide";
import { useI18n } from "@/i18n/I18nContext";

const TOTAL = 16;
const SLIDE_W = 1920;
const SLIDE_H = 1080;

const allSlideComponents = [
  <CoverSlide key="c1" total={TOTAL} />,
  <MarketSlide key="c2" total={TOTAL} />,
  <BaliLifestyleSlide key="c3" total={TOTAL} />,
  <LocationMapSlide key="c4" total={TOTAL} />,
  <GalleryVideoSlide key="c4b" total={TOTAL} />,
  <CollectionSlide key="c5" total={TOTAL} />,
  <ArchitectureSlide key="c6" total={TOTAL} />,
  <MasterPlanSlide key="c7" total={TOTAL} />,
  <LegalSlide key="c8" total={TOTAL} />,
  <OwnershipSlide key="c9" total={TOTAL} />,
  <FinancialSlide key="c10" total={TOTAL} />,
  <ExitStrategySlide key="c11" total={TOTAL} />,
  <PaymentSlide key="c12" total={TOTAL} />,
  <ConstructionSlide key="c13" total={TOTAL} />,
  <AboutUsSlide key="c14" total={TOTAL} />,
  <ContactSlide key="c16" total={TOTAL} />,
];

// Financial (slide 10) + Pricing page slides
const financialPricingSlides = [
  <FinancialSlide key="fp1" total={TOTAL} />,
  <PaymentPricingSlide key="fp2" />,
];

function applyOnClone(clonedDoc: Document) {
  // Force all motion elements to be visible (skip animations)
  const motionEls = clonedDoc.querySelectorAll("[style]");
  motionEls.forEach((mel) => {
    const htmlEl = mel as HTMLElement;
    if (htmlEl.style.opacity === "0") {
      htmlEl.style.opacity = "1";
    }
    if (htmlEl.style.transform) {
      htmlEl.style.transform = "none";
    }
  });

  // Fix backdrop-blur: html2canvas cannot render CSS backdrop-filter.
  const allEls = clonedDoc.querySelectorAll("*");
  allEls.forEach((node) => {
    const htmlEl = node as HTMLElement;
    const cs = getComputedStyle(htmlEl);
    const bf =
      cs.getPropertyValue("backdrop-filter") ||
      cs.getPropertyValue("-webkit-backdrop-filter");
    if (bf && bf !== "none") {
      htmlEl.style.backdropFilter = "none";
      htmlEl.style.setProperty("-webkit-backdrop-filter", "none");

      const bg = cs.backgroundColor;
      if (bg) {
        const rgbaMatch = bg.match(
          /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
        );
        if (rgbaMatch) {
          const r = parseInt(rgbaMatch[1]);
          const g = parseInt(rgbaMatch[2]);
          const b = parseInt(rgbaMatch[3]);
          const darkR = Math.round(r * 0.35);
          const darkG = Math.round(g * 0.35);
          const darkB = Math.round(b * 0.35);
          htmlEl.style.backgroundColor = `rgba(${darkR}, ${darkG}, ${darkB}, 0.78)`;
        } else {
          htmlEl.style.backgroundColor = "rgba(15, 15, 15, 0.78)";
        }
      } else {
        htmlEl.style.backgroundColor = "rgba(15, 15, 15, 0.78)";
      }
    }
  });
}

export function PdfExporter() {
  const { t } = useI18n();
  const pdf = t.pdf;
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSlideLabel, setCurrentSlideLabel] = useState("");
  const [done, setDone] = useState(false);
  const [donePartial, setDonePartial] = useState(false);
  const [renderSlides, setRenderSlides] = useState<React.ReactElement[] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resolveRenderRef = useRef<(() => void) | null>(null);
  const exportMetaRef = useRef<{ filename: string; slideCount: number }>({
    filename: "",
    slideCount: 0,
  });

  useEffect(() => {
    if (renderSlides && containerRef.current && resolveRenderRef.current) {
      const timer = setTimeout(() => {
        resolveRenderRef.current?.();
        resolveRenderRef.current = null;
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [renderSlides]);

  const doExport = useCallback(
    async (slides: React.ReactElement[], filename: string) => {
      setExporting(true);
      setProgress(0);
      setDone(false);
      setDonePartial(false);
      setCurrentSlideLabel(pdf.preparingSlides);
      exportMetaRef.current = { filename, slideCount: slides.length };

      setRenderSlides(slides);

      await new Promise<void>((resolve) => {
        resolveRenderRef.current = resolve;
      });

      setCurrentSlideLabel(pdf.loadingAssets);
      await new Promise((r) => setTimeout(r, 2000));

      const container = containerRef.current;
      if (!container) {
        setExporting(false);
        setRenderSlides(null);
        return;
      }

      const slideElements = container.querySelectorAll("[data-pdf-slide]");
      if (slideElements.length === 0) {
        setExporting(false);
        setRenderSlides(null);
        return;
      }

      const total = slideElements.length;
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [SLIDE_W, SLIDE_H],
      });

      for (let i = 0; i < total; i++) {
        const el = slideElements[i] as HTMLElement;
        setCurrentSlideLabel(pdf.capturing(i + 1, total));
        setProgress((i / total) * 100);

        try {
          const canvas = await html2canvas(el, {
            width: SLIDE_W,
            height: SLIDE_H,
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#000000",
            logging: false,
            imageTimeout: 15000,
            onclone: (clonedDoc) => applyOnClone(clonedDoc),
          });

          const imgData = canvas.toDataURL("image/jpeg", 0.92);

          if (i > 0) {
            pdf.addPage([SLIDE_W, SLIDE_H], "landscape");
          }

          pdf.addImage(imgData, "JPEG", 0, 0, SLIDE_W, SLIDE_H);
        } catch (err) {
          console.error(pdf.captureError(i + 1), err);
        }

        setProgress(((i + 1) / total) * 100);
      }

      setCurrentSlideLabel(pdf.buildingPdf);
      pdf.save(filename);

      setExporting(false);

      // Signal which export finished
      if (total === allSlideComponents.length) {
        setDone(true);
        setTimeout(() => {
          setRenderSlides(null);
          setDone(false);
        }, 3000);
      } else {
        setDonePartial(true);
        setTimeout(() => {
          setRenderSlides(null);
          setDonePartial(false);
        }, 3000);
      }
    },
    [pdf]
  );

  const exportFull = useCallback(() => {
    doExport(allSlideComponents, "Lamos-Prime-Villas-Pitch-Deck.pdf");
  }, [doExport]);

  const exportFinancialPricing = useCallback(() => {
    doExport(financialPricingSlides, "Lamos-Finansal-Fiyat.pdf");
  }, [doExport]);

  const slideCount = exportMetaRef.current.slideCount || TOTAL;

  return (
    <>
      {/* Full PDF Export Button */}
      <button
        onClick={exportFull}
        disabled={exporting}
        className="absolute top-3 sm:top-6 md:top-8 lg:top-6 right-16 sm:right-24 md:right-32 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-[#C9A96E] hover:border-[#C9A96E]/30 transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        title={pdf.downloadFullTitle}
      >
        {exporting && !donePartial ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : done ? (
          <Check className="w-3.5 h-3.5 text-green-400" />
        ) : (
          <Download className="w-3.5 h-3.5" />
        )}
        <span
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[10px] sm:text-[11px] uppercase tracking-wider hidden sm:inline"
        >
          {done ? pdf.done : pdf.downloadPdf}
        </span>
      </button>

      {/* Financial + Pricing PDF Export Button */}
      <button
        onClick={exportFinancialPricing}
        disabled={exporting}
        className="absolute top-3 sm:top-6 md:top-8 lg:top-6 right-32 sm:right-48 md:right-60 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/50 hover:text-[#7DCEA0] hover:border-[#7DCEA0]/30 transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        title={pdf.downloadPricingTitle}
      >
        {exporting && !done ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : donePartial ? (
          <Check className="w-3.5 h-3.5 text-green-400" />
        ) : (
          <FileText className="w-3.5 h-3.5" />
        )}
        <span
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[10px] sm:text-[11px] uppercase tracking-wider hidden sm:inline"
        >
          {donePartial ? pdf.done : pdf.pricingPdf}
        </span>
      </button>

      {/* Progress Overlay */}
      {exporting && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-[#C9A96E] animate-spin" />
            </div>
            <div className="text-center">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-xl mb-2"
              >
                {pdf.buildingHeading}
              </h3>
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/40 text-sm"
              >
                {currentSlideLabel}
              </p>
            </div>
            {/* Progress Bar */}
            <div className="w-full">
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C9A96E] to-[#7DCEA0] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/30 text-xs"
                >
                  {Math.round(progress)}%
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/30 text-xs"
                >
                  {slideCount} slide
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Offscreen Slide Renderer */}
      {renderSlides &&
        createPortal(
          <div
            ref={containerRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: `${SLIDE_W}px`,
              zIndex: -9999,
              opacity: 0,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            {renderSlides.map((slide, i) => (
              <div
                key={i}
                data-pdf-slide={i}
                style={{
                  width: `${SLIDE_W}px`,
                  height: `${SLIDE_H}px`,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {slide}
              </div>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
