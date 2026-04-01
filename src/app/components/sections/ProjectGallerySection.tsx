import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Play, Maximize2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";
import {
  referenceGalleryImages,
  getGalleryVideoEmbed,
} from "@/app/data/referenceGalleryAssets";
import { buildYoutubeEmbedSrc } from "@/app/utils/youtubeEmbed";
import { useI18n } from "@/i18n/I18nContext";
import { useIsMaxLg } from "@/app/hooks/useIsMaxLg";
import interiorBg from "@/assets/interior2.webp";
import type { TranslationTree } from "@/i18n/translations";

type GallerySlide =
  | {
      kind: "video";
      embedUrl: string | undefined;
      label: string;
      caption: string;
      posterSrc: string;
    }
  | ({ kind: "image" } & (typeof referenceGalleryImages)[number]);

/** Döngülü carouselde komşu slaytlar (wrap dahil) — sadece bunlarda tam çözünürlük yüklenir */
function isNeighborSlide(current: number, index: number, len: number) {
  if (len <= 1) return true;
  const d = Math.abs(current - index);
  return Math.min(d, len - d) <= 1;
}

function buildGallerySlides(t: TranslationTree): GallerySlide[] {
  const embed = getGalleryVideoEmbed();
  const posterSrc = referenceGalleryImages[0]?.src ?? "";
  const images = referenceGalleryImages.map((img, i) => ({
    ...img,
    alt: t.gallery.images[i] ?? img.alt,
  }));
  return [
    {
      kind: "video",
      embedUrl: embed,
      label: t.gallery.videoTour,
      caption: t.gallery.videoCaption,
      posterSrc,
    },
    ...images.map((img) => ({ kind: "image" as const, ...img })),
  ];
}

/**
 * Orta genişlikte kutu (16:10): object-cover ile kenar boşluğu olmaz;
 * saf 16:9’dan biraz daha “yüksek” olduğu için çoğu karede kırpma daha az kalır.
 */
const SLIDE_MEDIA_BOX =
  "relative w-full overflow-hidden rounded-[inherit] aspect-[16/10] max-h-[min(66vh,720px)] min-h-[200px] sm:min-h-[240px]";

export function ProjectGallerySection() {
  const { t } = useI18n();
  const isMaxLg = useIsMaxLg();
  const slides = useMemo(() => buildGallerySlides(t), [t]);
  const slideCount = slides.length;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : slideCount - 1,
    );
  }, [slideCount]);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < slideCount - 1 ? prev + 1 : 0,
    );
  }, [slideCount]);

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

  const scrollThumbIntoView = useCallback(
    (i: number) => {
      api?.scrollTo(i);
    },
    [api],
  );

  // Arka plan: aynı görsel + daha koyu (parlaklık düşük, üstte ekstra siyah)
  return (
    <div className="relative w-full overflow-hidden bg-black py-14 sm:py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 brightness-[0.48]"
        style={{ backgroundImage: `url(${interiorBg})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center sm:mb-8">
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.28em" }}
            className="text-[#C9A96E] uppercase text-xs sm:text-sm"
          >
            {t.gallery.eyebrow}
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.08 }}
            className="mt-1.5 text-2xl text-white sm:text-3xl md:text-4xl"
          >
            {t.gallery.title}{" "}
            <span className="italic text-[#C9A96E]">{t.gallery.titleItalic}</span>
          </h2>
          <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#C9A96E]/75 to-transparent" />
          <p
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}
            className="mx-auto mt-3 max-w-xl text-xs text-white/58 sm:text-sm"
          >
            {t.gallery.intro}
          </p>
        </div>

        <div className="mb-3 flex items-end justify-between gap-2 px-0.5">
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.14em" }}
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 sm:text-xs"
          >
            {t.gallery.label}
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[11px] text-white/40 sm:text-xs">
            {current + 1} / {slideCount}
          </span>
        </div>

        <div className="relative rounded-2xl border border-white/[0.09] bg-black/22 p-1.5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.5)] sm:rounded-3xl sm:p-2">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
              duration: 20,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-2.5">
              {slides.map((slide, i) => (
                <CarouselItem key={i} className="basis-full pl-2 sm:pl-2.5 [content-visibility:auto]">
                  {slide.kind === "video" ? (
                    <VideoCarouselSlide
                      slide={slide}
                      isActive={current === i}
                      onOpenLightbox={() => setLightboxIndex(i)}
                      mediaBoxClass={SLIDE_MEDIA_BOX}
                      useNoCookieEmbed={isMaxLg}
                    />
                  ) : (
                    <GalleryImageCard
                      slide={slide}
                      index={i}
                      current={current}
                      slideCount={slideCount}
                      onOpenLightbox={() => setLightboxIndex(i)}
                      mediaBoxClass={SLIDE_MEDIA_BOX}
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="outline"
              className="left-1 top-[40%] z-10 size-10 -translate-y-1/2 border-[#C9A96E]/40 bg-black/60 text-[#C9A96E] hover:bg-black/80 sm:left-2 sm:size-11"
            />
            <CarouselNext
              variant="outline"
              className="right-1 top-[40%] z-10 size-10 -translate-y-1/2 border-[#C9A96E]/40 bg-black/60 text-[#C9A96E] hover:bg-black/80 sm:right-2 sm:size-11"
            />
          </Carousel>

          <div className="mt-3 flex justify-center gap-1.5 sm:mt-3.5 sm:gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${t.common.slide} ${i + 1}`}
                onClick={() => scrollThumbIntoView(i)}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                  current === i ? "w-7 bg-[#C9A96E]" : "w-1.5 bg-white/22 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div
            className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:gap-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollThumbIntoView(i)}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md border transition-colors duration-200 sm:h-[3.75rem] sm:w-24 ${
                  current === i
                    ? "border-[#C9A96E] ring-1 ring-[#C9A96E]/40"
                    : "border-white/12 opacity-85 hover:border-white/25"
                }`}
              >
                {slide.kind === "video" ? (
                  <>
                    <img
                      src={slide.posterSrc}
                      alt=""
                      width={96}
                      height={60}
                      className="h-full w-full object-cover brightness-[0.88]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="h-6 w-6 text-[#C9A96E] sm:h-7 sm:w-7" fill="currentColor" />
                    </div>
                  </>
                ) : (
                  <img
                    src={slide.src}
                    alt=""
                    width={96}
                    height={60}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 sm:right-6 sm:top-6"
              aria-label={t.common.close}
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                lightboxPrev();
              }}
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 sm:left-6"
              aria-label={t.common.previous}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                lightboxNext();
              }}
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 sm:right-6"
              aria-label={t.common.next}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex max-h-[92vh] w-full max-w-[min(96vw,1200px)] flex-col items-center gap-3 px-3 sm:gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {slides[lightboxIndex]?.kind === "video" ? (
                <>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
                    {slides[lightboxIndex].embedUrl ? (
                      <iframe
                        title={slides[lightboxIndex].label}
                        src={buildYoutubeEmbedSrc(slides[lightboxIndex].embedUrl!, {
                          autoplay: true,
                          useNoCookie: isMaxLg,
                        })}
                        className="absolute inset-0 h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    ) : (
                      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-zinc-900 px-6 text-center">
                        <Play className="h-14 w-14 text-[#C9A96E]/50" />
                        <p className="text-sm text-white/55">{t.gallery.videoUnavailableHint}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                    <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm text-white/70">
                      {slides[lightboxIndex].caption}
                    </p>
                    <span className="text-xs text-white/35">
                      {lightboxIndex + 1} / {slideCount}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={(slides[lightboxIndex] as Extract<GallerySlide, { kind: "image" }>).src}
                    alt={(slides[lightboxIndex] as Extract<GallerySlide, { kind: "image" }>).alt}
                    className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                    decoding="async"
                  />
                  <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                    <p
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-sm text-white/75 sm:text-base"
                    >
                      {(slides[lightboxIndex] as Extract<GallerySlide, { kind: "image" }>).alt}
                    </p>
                    <span className="text-xs text-white/35">
                      {lightboxIndex + 1} / {slideCount}
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const GalleryImageCard = memo(function GalleryImageCard({
  slide,
  index,
  current,
  slideCount,
  onOpenLightbox,
  mediaBoxClass,
}: {
  slide: Extract<GallerySlide, { kind: "image" }>;
  index: number;
  current: number;
  slideCount: number;
  onOpenLightbox: () => void;
  mediaBoxClass: string;
}) {
  const loadFull = isNeighborSlide(current, index, slideCount);

  return (
    <button
      type="button"
      onClick={onOpenLightbox}
      className="group relative w-full overflow-hidden rounded-xl border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/50 sm:rounded-2xl"
    >
      <div className={`bg-zinc-950/50 ${mediaBoxClass}`}>
        {loadFull ? (
          <img
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading={index === 1 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={current === index ? "high" : "low"}
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-900/40" aria-hidden />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pt-20" />
        <div className="absolute bottom-0 left-0 right-0 p-3 text-left sm:p-4">
          <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm text-white/95 sm:text-base">
            {slide.alt}
          </p>
        </div>
      </div>
    </button>
  );
});

const VideoCarouselSlide = memo(function VideoCarouselSlide({
  slide,
  isActive,
  onOpenLightbox,
  mediaBoxClass,
  useNoCookieEmbed,
}: {
  slide: Extract<GallerySlide, { kind: "video" }>;
  isActive: boolean;
  onOpenLightbox: () => void;
  mediaBoxClass: string;
  useNoCookieEmbed: boolean;
}) {
  const { t } = useI18n();
  const hasEmbed = Boolean(slide.embedUrl);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 sm:rounded-2xl">
      <div className={`relative bg-black/50 ${mediaBoxClass}`}>
        {hasEmbed && isActive ? (
          <>
            <iframe
              title={slide.label}
              src={buildYoutubeEmbedSrc(slide.embedUrl!, {
                autoplay: true,
                useNoCookie: useNoCookieEmbed,
              })}
              className="absolute inset-0 z-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <button
              type="button"
              onClick={onOpenLightbox}
              className="absolute right-2.5 top-2.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A96E]/40 bg-black/60 text-[#C9A96E] hover:bg-black/75 sm:h-10 sm:w-10"
              aria-label={t.gallery.expandVideo}
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </>
        ) : hasEmbed && !isActive ? (
          <button
            type="button"
            onClick={onOpenLightbox}
            className="absolute inset-0 block h-full w-full text-left"
            aria-label={t.gallery.videoPreview}
          >
            <img
              src={slide.posterSrc}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-[#C9A96E]/35 bg-black/50 p-4 sm:p-5">
                <Play className="h-10 w-10 text-[#C9A96E] sm:h-12 sm:w-12" fill="currentColor" strokeWidth={0.5} />
              </div>
            </div>
          </button>
        ) : (
          <button
            type="button"
            onClick={onOpenLightbox}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-zinc-900/90 to-black/90 px-4"
          >
            <Play className="h-12 w-12 text-[#C9A96E]/60" />
            <p className="max-w-xs text-center text-xs text-white/55 sm:text-sm">
              {t.gallery.videoEmptyEnv}{" "}
              <span className="text-[#C9A96E]/90">VITE_GALLERY_VIDEO_EMBED</span>{" "}
              {t.gallery.videoEmptyHint}
            </p>
          </button>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/82 via-black/20 to-transparent p-3 sm:p-4">
          <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm text-white sm:text-base">
            {slide.label}
          </p>
          <p className="mt-0.5 text-[10px] text-[#C9A96E]/85 sm:text-xs">{slide.caption}</p>
        </div>
      </div>
    </div>
  );
});
