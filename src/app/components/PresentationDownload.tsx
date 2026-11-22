import { Download } from "lucide-react";
import { availablePresentationDownloads } from "@/app/data/downloads";
import { useI18n } from "@/i18n/I18nContext";

/**
 * Sunum PDF indirme bağlantıları (yalnızca dosyası olan diller).
 * variant="nav": üst menü; "hero": kapak slaytı.
 */
export function PresentationDownload({ variant }: { variant: "nav" | "hero" | "mobile" }) {
  const { t } = useI18n();
  const items = availablePresentationDownloads();
  if (items.length === 0) return null;

  const fileLabel = (lang: "tr" | "en") => (lang === "tr" ? t.download.tr : t.download.en);

  if (variant === "nav") {
    return (
      <div className="ml-1 flex items-center gap-1 lg:ml-2">
        {items.map(({ lang, href }) => (
          <a
            key={lang}
            href={href}
            download
            title={`${t.download.label} — ${fileLabel(lang)}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="flex h-9 items-center gap-1.5 whitespace-nowrap rounded-md border border-[#C9A96E]/35 bg-[#C9A96E]/10 px-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#C9A96E] transition-colors hover:border-[#C9A96E]/70 hover:bg-[#C9A96E]/20"
          >
            <Download className="h-3.5 w-3.5" />
            {t.download.short}
            {items.length > 1 && <span className="text-[#C9A96E]/70">{lang.toUpperCase()}</span>}
          </a>
        ))}
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-1.5 pt-1">
        {items.map(({ lang, href }) => (
          <a
            key={lang}
            href={href}
            download
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="flex items-center gap-2 rounded-lg border border-[#C9A96E]/30 bg-[#C9A96E]/10 px-4 py-3 text-sm uppercase tracking-[0.12em] text-[#C9A96E]"
          >
            <Download className="h-4 w-4" />
            {t.download.label} · {lang.toUpperCase()}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {items.map(({ lang, href }) => (
        <a
          key={lang}
          href={href}
          download
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
          className="group flex items-center gap-2 rounded-full border border-[#C9A96E]/50 bg-black/35 px-4 py-2 text-[11px] uppercase text-[#C9A96E] backdrop-blur-sm transition-all hover:border-[#C9A96E] hover:bg-[#C9A96E]/15 sm:px-5 sm:py-2.5 sm:text-xs"
        >
          <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          {t.download.label}
          <span className="text-white/60">· {fileLabel(lang)}</span>
        </a>
      ))}
    </div>
  );
}
