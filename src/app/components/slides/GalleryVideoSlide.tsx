import { SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { PremiumVideoFrame } from "../PremiumVideoFrame";
import { getGalleryVideoEmbed, referenceGalleryImages } from "@/app/data/referenceGalleryAssets";
import { useI18n } from "@/i18n/I18nContext";
import interiorBg from "@/assets/interior2.webp";

const galleryVideoEmbed = getGalleryVideoEmbed();
const posterSrc = referenceGalleryImages[0]?.src ?? "";

export function GalleryVideoSlide({ total: _total }: { total: number }) {
  const { t } = useI18n();
  const gv = t.slides.galleryVideoSlide;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Arka plan — iç mekân görseli + katmanlı karartma ve altın vurgu */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat brightness-[0.62]"
        style={{ backgroundImage: `url(${interiorBg})` }}
      />
      <div className="absolute inset-0 bg-black/38" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/28 to-black/60" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(201,169,110,0.14),transparent_58%)]"
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 md:px-16 lg:overflow-hidden lg:px-20 lg:py-6">
          <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col items-center justify-center gap-4 text-center sm:gap-5 lg:gap-4">
            <SlideSubtitle>{gv.subtitle}</SlideSubtitle>
            <SlideTitle>
              {gv.title}{" "}
              <span className="italic text-[#C9A96E]">{gv.titleItalic}</span>
            </SlideTitle>
            <GoldDivider delay={0.35} />

            <div className="mt-1 w-full max-w-4xl px-0 sm:px-2 lg:mt-2">
              <PremiumVideoFrame
                embedUrl={galleryVideoEmbed}
                posterSrc={posterSrc}
                aspectVariant="16:9"
                eyebrow={t.gallery.videoTour}
                title={t.gallery.videoCaption}
                emptyHint={t.gallery.videoUnavailableHint}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
