import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export type LightboxImage = { src: string; alt: string };

/**
 * Tam ekran görsel görüntüleyici.
 * Geçiş: oklar, görselin sol/sağ yarısına tıklama, klavye (← → Esc) ve kaydırma (mobil).
 * document.body'ye portal ile açılır; slayt animasyonlarının transform'undan etkilenmez.
 */
export function ImageLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const { t } = useI18n();
  const count = images.length;
  const open = index !== null && count > 0;

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + count) % count);
  }, [index, count, onIndexChange]);

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % count);
  }, [index, count, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopPropagation();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        e.stopPropagation();
        next();
      }
    };
    // capture: sunum sayfasının slayt tuşlarından önce yakala
    window.addEventListener("keydown", onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, prev, next]);

  // Komşu görselleri önceden yükle
  useEffect(() => {
    if (index === null || count < 2) return;
    [images[(index + 1) % count], images[(index - 1 + count) % count]].forEach((img) => {
      const el = new Image();
      el.src = img.src;
    });
  }, [index, images, count]);

  const touch = useRef<{ x: number; y: number } | null>(null);

  if (typeof document === "undefined") return null;

  const current = index !== null ? images[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex flex-col bg-black/95 select-none"
          role="dialog"
          aria-modal="true"
          onTouchStart={(e) => {
            touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }}
          onTouchEnd={(e) => {
            const s = touch.current;
            touch.current = null;
            if (!s) return;
            const dx = e.changedTouches[0].clientX - s.x;
            const dy = e.changedTouches[0].clientY - s.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
              e.stopPropagation();
              if (dx < 0) next();
              else prev();
            }
          }}
        >
          {/* Üst şerit */}
          <div className="relative z-20 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-xs tracking-[0.2em] text-white/50 sm:text-sm"
            >
              {(index ?? 0) + 1} / {count}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-[#C9A96E]/50 hover:text-[#C9A96E]"
              aria-label={t.common.close}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Görsel alanı: sol yarı = önceki, sağ yarı = sonraki */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={current.src}
                src={current.src}
                alt={current.alt}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                draggable={false}
              />
            </AnimatePresence>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label={t.common.previous}
                  className="group absolute inset-y-0 left-0 z-10 flex w-1/2 cursor-w-resize items-center justify-start pl-2 sm:pl-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors group-hover:border-[#C9A96E]/60 group-hover:text-[#C9A96E] sm:h-12 sm:w-12">
                    <ChevronLeft className="h-6 w-6" />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={t.common.next}
                  className="group absolute inset-y-0 right-0 z-10 flex w-1/2 cursor-e-resize items-center justify-end pr-2 sm:pr-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors group-hover:border-[#C9A96E]/60 group-hover:text-[#C9A96E] sm:h-12 sm:w-12">
                    <ChevronRight className="h-6 w-6" />
                  </span>
                </button>
              </>
            )}
          </div>

          {/* Alt yazı */}
          <div className="relative z-20 px-4 pb-5 pt-3 text-center sm:pb-6">
            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-sm text-white/80 sm:text-base"
            >
              {current.alt}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
