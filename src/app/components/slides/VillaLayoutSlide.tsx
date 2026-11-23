import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Maximize2 } from "lucide-react";
import { SlideLayout, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { ImageLightbox } from "../ImageLightbox";
import { backgrounds } from "@/app/data/renders";
import { useI18n } from "@/i18n/I18nContext";

import premiumGround from "@/assets/plans/premium-ground.webp";
import premiumUpper from "@/assets/plans/premium-upper.webp";
import primePlusGround from "@/assets/plans/primeplus-ground.webp";
import primePlusUpper from "@/assets/plans/primeplus-upper.webp";
import primeGround from "@/assets/plans/prime-ground.webp";
import primeUpper from "@/assets/plans/prime-upper.webp";
import premiumRender from "@/assets/renders/premium-layout-render.webp";
import primeRender from "@/assets/renders/prime-layout-render.webp";

/** Sunum PDF'i s. 11–13 (Ekim 2026) */
const VILLA_LAYOUTS = {
  premium: {
    ground: premiumGround,
    upper: premiumUpper,
    render: premiumRender,
    areas: ["125 m²", "80 + 80 = 160 m²", "45 m²", "205 m²"],
  },
  primePlus: {
    ground: primePlusGround,
    upper: primePlusUpper,
    render: primeRender,
    areas: ["105 m²", "70 + 70 = 140 m²", "35 m²", "175 m²"],
  },
  prime: {
    ground: primeGround,
    upper: primeUpper,
    render: primeRender,
    areas: ["105 m²", "70 + 70 = 140 m²", "35 m²", "175 m²"],
  },
} as const;

export type VillaLayoutType = keyof typeof VILLA_LAYOUTS;

function PlanCard({
  src,
  label,
  onOpen,
  delay,
}: {
  src: string;
  label: string;
  onOpen: () => void;
  delay: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group flex min-h-0 w-full flex-col items-center gap-1.5 text-center outline-none"
    >
      <span
        style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.18em" }}
        className="text-[11px] uppercase text-[#C9A96E] sm:text-sm lg-lock-18"
      >
        {label}
      </span>
      <span className="relative block w-full overflow-hidden rounded-xl border border-[#C9A96E]/25 bg-[#F6F1EA] p-1.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8)] transition-colors group-hover:border-[#C9A96E]/60 group-focus-visible:ring-2 group-focus-visible:ring-[#C9A96E]/50 sm:p-2">
        <img
          src={src}
          alt={label}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto max-h-[34vh] w-auto max-w-full object-contain sm:max-h-[40vh] lg:max-h-[50vh]"
        />
        <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-[#C9A96E] opacity-80 transition-opacity group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" />
        </span>
      </span>
    </motion.button>
  );
}

export function VillaLayoutSlide({ type }: { type: VillaLayoutType; total?: number }) {
  const { t } = useI18n();
  const l = t.slides.layouts;
  const meta = l[type];
  const data = VILLA_LAYOUTS[type];
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = useMemo(
    () => [
      { src: data.ground, alt: `${meta.name} — ${l.ground}` },
      { src: data.render, alt: `${meta.name} — ${meta.bedrooms}` },
      { src: data.upper, alt: `${meta.name} — ${l.upper}` },
    ],
    [data, meta, l],
  );

  const shared = type !== "premium";

  return (
    <SlideLayout bgImage={backgrounds.layouts} overlay="darker">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 pb-10 pt-20 text-center sm:gap-3 lg:gap-2 lg:pb-0 lg:pt-16">
        <SlideSubtitle>{l.subtitle}</SlideSubtitle>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
          className="flex flex-wrap items-baseline justify-center gap-x-3 text-[22px] text-white lg-lock-48"
        >
          <span>
            <span className="italic text-[#C9A96E]">{meta.units}</span>{" "}
            <span className="text-white/80">{l.unitsWord}</span>
          </span>
          <span className="text-white/30">·</span>
          <span className="italic text-[#C9A96E]">{meta.name}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}
          className="text-[11px] uppercase text-white/60 sm:text-sm lg-lock-18"
        >
          {meta.bedrooms}
        </motion.p>
        <GoldDivider />

        <div className="mt-2 grid w-full grid-cols-2 items-start gap-3 sm:gap-5 lg:mt-1 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-center lg:gap-6">
          <div className="order-2 lg:order-1">
            <PlanCard src={data.ground} label={l.ground} onOpen={() => setLightbox(0)} delay={0.5} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="order-1 col-span-2 flex flex-col items-center gap-3 lg:order-2 lg:col-span-1"
          >
            <button
              type="button"
              onClick={() => setLightbox(1)}
              className="group relative block w-full max-w-md overflow-hidden rounded-2xl border border-[#C9A96E]/25 outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/50"
            >
              <img
                src={data.render}
                alt={`${meta.name} — ${meta.bedrooms}`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[30vh] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
            <div className="w-full max-w-md rounded-xl border border-white/10 bg-black/45 p-2.5 backdrop-blur-md sm:p-3">
              {l.areaLabels.map((label, i) => (
                <div
                  key={label}
                  className={`flex items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 lg:py-1 ${
                    i === 3 ? "mt-1 border border-[#C9A96E]/25 bg-[#C9A96E]/10" : ""
                  }`}
                >
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-[10px] uppercase tracking-wider text-white/55 sm:text-xs lg-lock-15"
                  >
                    {label}
                  </span>
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className={`text-[13px] sm:text-base lg-lock-20 ${
                      i === 3 ? "font-bold text-[#C9A96E]" : "text-white/85"
                    }`}
                  >
                    {data.areas[i]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="order-3">
            <PlanCard src={data.upper} label={l.upper} onOpen={() => setLightbox(2)} delay={0.6} />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="mt-1 max-w-2xl text-[10px] text-white/45 sm:text-xs"
        >
          {shared ? `${l.sharedUnitsNote} · ` : ""}
          {l.zoomHint}
        </motion.p>
      </div>

      <ImageLightbox
        images={images}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
      />
    </SlideLayout>
  );
}
