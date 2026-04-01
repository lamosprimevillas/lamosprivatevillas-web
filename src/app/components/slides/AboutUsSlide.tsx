import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import aboutBg from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";
import { useI18n } from "@/i18n/I18nContext";

export function AboutUsSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const a = t.about;
  return (
    <SlideLayout bgImage={aboutBg} overlay="darker" slideNumber={15} totalSlides={total}>
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-3 px-1">
        <SlideSubtitle>{a.subtitle}</SlideSubtitle>
        <SlideTitle>
          {a.title} <span className="italic text-[#C9A96E]">{a.titleItalic}</span>
        </SlideTitle>
        <GoldDivider delay={0.35} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.75 }}
          className="text-white/70 text-[10px] sm:text-[12px] lg-lock-20 flex flex-col gap-2 sm:gap-3 text-left sm:text-center max-w-2xl"
        >
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p>{a.p3}</p>
          <p>{a.p4}</p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
