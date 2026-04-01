import { useState, useCallback, useMemo } from "react";
import { Play } from "lucide-react";
import { buildYoutubeEmbedSrc } from "@/app/utils/youtubeEmbed";
import { useI18n } from "@/i18n/I18nContext";
import { useIsMaxLg } from "@/app/hooks/useIsMaxLg";
import { PREMIUM_VIDEO_916_AREA_CLASSNAME } from "@/app/components/videoFrameSizing";

export type PremiumVideoFrameProps = {
  /** Tam YouTube embed URL’si, örn. https://www.youtube-nocookie.com/embed/VIDEO_ID */
  embedUrl?: string;
  /** Doğrudan .mp4 vb. (embed yoksa) */
  videoSrc?: string;
  posterSrc?: string;
  eyebrow?: string;
  title?: string;
  /** Boş durumda kısa metin */
  emptyHint?: string;
  className?: string;
  /**
   * `16:9` varsayılan (yatay). `9:16` telefonla çekilmiş dikey video için.
   */
  aspectVariant?: "16:9" | "9:16";
};

export function PremiumVideoFrame({
  embedUrl,
  videoSrc,
  posterSrc,
  eyebrow,
  title,
  emptyHint,
  className = "",
  aspectVariant = "16:9",
}: PremiumVideoFrameProps) {
  const { t } = useI18n();
  const eyebrowText = eyebrow ?? "";
  const titleText = title ?? "";
  const emptyHintText = emptyHint ?? "";
  const [active, setActive] = useState(false);
  const isMaxLg = useIsMaxLg();
  const hasMedia = Boolean(embedUrl || videoSrc);
  const start = useCallback(() => {
    if (hasMedia) setActive(true);
  }, [hasMedia]);

  const iframeSrc = useMemo(() => {
    if (!embedUrl || !active) return "";
    return buildYoutubeEmbedSrc(embedUrl, { autoplay: true, useNoCookie: isMaxLg });
  }, [embedUrl, active, isMaxLg]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Dış lüks çerçeve — ince altın gradyan */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#C9A96E]/55 via-[#C9A96E]/15 to-white/[0.08] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.85),inset_0_0_0_1px_rgba(201,169,110,0.12)]">
        <div className="relative rounded-2xl bg-black/90 overflow-hidden ring-1 ring-white/[0.06]">
          {/* Köşe detayları */}
          <div
            className="pointer-events-none absolute top-3 left-3 z-20 w-7 h-7 sm:w-9 sm:h-9 border-t-2 border-l-2 border-[#C9A96E]/70 rounded-tl-md"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-3 right-3 z-20 w-7 h-7 sm:w-9 sm:h-9 border-t-2 border-r-2 border-[#C9A96E]/70 rounded-tr-md"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-3 left-3 z-20 w-7 h-7 sm:w-9 sm:h-9 border-b-2 border-l-2 border-[#C9A96E]/70 rounded-bl-md"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-3 right-3 z-20 w-7 h-7 sm:w-9 sm:h-9 border-b-2 border-r-2 border-[#C9A96E]/70 rounded-br-md"
            aria-hidden
          />

          {/* Üst şerit — başlık */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-4 sm:px-5 py-3 border-b border-white/[0.07] bg-gradient-to-r from-black/80 via-black/40 to-transparent">
            <div>
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.25em" }}
                className="text-[#C9A96E]/90 uppercase text-[9px] sm:text-[10px] tracking-[0.2em]"
              >
                {eyebrowText}
              </p>
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white/95 text-sm sm:text-base lg:text-lg"
              >
                {titleText}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-white/25">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C9A96E]/40" />
              <span
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
                className="text-[9px] uppercase"
              >
                {t.premiumVideo.hd}
              </span>
            </div>
          </div>

          {/* Oynatma alanı: yatay 16:9 veya dikey 9:16 (telefon videosu) */}
          <div
            className={`relative w-full bg-gradient-to-b from-zinc-950 to-black ${
              aspectVariant === "9:16" ? PREMIUM_VIDEO_916_AREA_CLASSNAME : "aspect-video"
            }`}
          >
            {!active && (
              <button
                type="button"
                onClick={start}
                disabled={!hasMedia}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 group cursor-pointer disabled:cursor-default"
              >
                {posterSrc && (
                  <img
                    src={posterSrc}
                    alt=""
                    decoding="async"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                <div className="relative flex flex-col items-center gap-3 px-6">
                  <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#C9A96E]/40 bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(201,169,110,0.15)] group-hover:border-[#C9A96E]/70 group-hover:shadow-[0_0_48px_rgba(201,169,110,0.25)] transition-all duration-300">
                    <Play
                      className="w-7 h-7 sm:w-9 sm:h-9 text-[#C9A96E] ml-1"
                      fill="#C9A96E"
                      stroke="#C9A96E"
                      strokeWidth={1}
                    />
                  </span>
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-white/70 text-sm sm:text-base italic"
                  >
                    {hasMedia ? t.premiumVideo.tapToPlay : emptyHintText}
                  </span>
                </div>
              </button>
            )}

            {active && embedUrl && (
              <div className="absolute inset-0 z-[5] h-full w-full bg-black">
                <iframe
                  title={titleText}
                  src={iframeSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            )}

            {active && videoSrc && !embedUrl && (
              <video
                className={`absolute inset-0 z-[5] h-full w-full ${
                  aspectVariant === "9:16" ? "object-contain" : "object-cover"
                }`}
                controls
                playsInline
                autoPlay
                poster={posterSrc}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
