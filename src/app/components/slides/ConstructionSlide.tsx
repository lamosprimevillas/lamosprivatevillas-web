import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { HardHat, Camera, FileText, Calendar } from "lucide-react";
import constructionBg from "figma:asset/5ba4151e9d82f2b08dc11dcbf7c09f1f4934db04.png";
import { useI18n } from "@/i18n/I18nContext";

const featureIcons = [Calendar, Camera, FileText, HardHat] as const;

export function ConstructionSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const c = t.slides.construction;

  const statusClass = (status: (typeof c.phases)[number]["status"]) => {
    if (status === "done") return "bg-[#2D6A4F]/15 text-[#2D6A4F]";
    if (status === "progress") return "bg-[#C9A96E]/15 text-[#C9A96E]";
    return "bg-white/5 text-white/30";
  };

  const statusLabel = (status: (typeof c.phases)[number]["status"]) => {
    if (status === "done") return c.statusDone;
    if (status === "progress") return c.statusProgress;
    return c.statusUpcoming;
  };

  return (
    <SlideLayout bgImage={constructionBg} overlay="left-dark" slideNumber={14} totalSlides={total}>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 text-center sm:gap-4 md:gap-5 lg:gap-4">
        <SlideSubtitle>{c.subtitle}</SlideSubtitle>
        <SlideTitle>
          {c.titleLine1}
          <br />
          <span className="italic text-[#C9A96E]">{c.titleAccent}</span>
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="max-w-xl text-[11px] text-white/60 lg-lock-22"
        >
          {c.body}
        </motion.p>

        <div className="mt-1 flex max-w-6xl flex-col gap-3 sm:mt-4 sm:gap-6 lg:mt-2 lg:flex-row lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-6 lg:w-[36%] lg:p-4"
          >
            <div className="flex flex-col gap-3 sm:gap-5 lg:gap-2">
              {c.phases.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                >
                  <div className="mb-1 flex items-center justify-between sm:mb-2 lg:mb-1">
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="text-left text-[11px] text-white lg-lock-18"
                    >
                      {p.label}
                    </span>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className={`rounded-full px-1.5 py-0.5 uppercase tracking-wider sm:px-2 lg:px-1.5 ${statusClass(
                        p.status,
                      )} text-[8px] lg-lock-15`}
                    >
                      {statusLabel(p.status)}
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/5 sm:h-1.5 lg:h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${p.percent}%` }}
                      transition={{ duration: 1, delay: 0.9 + i * 0.1 }}
                      className={`h-full rounded-full ${
                        p.percent === 100
                          ? "bg-[#2D6A4F]"
                          : p.percent > 0
                            ? "bg-gradient-to-r from-[#C9A96E] to-[#C9A96E]/60"
                            : ""
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid flex-1 grid-cols-2 gap-2 sm:gap-3 lg:gap-3"
          >
            {c.features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-2.5 text-center backdrop-blur-sm sm:gap-2 sm:p-4 lg:gap-2 lg:p-5"
                >
                  <Icon className="h-4 w-4 text-[#C9A96E] sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[12px] text-white lg-lock-26 sm:text-[13px]"
                  >
                    {f.title}
                  </span>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-[9px] text-white/50 lg-lock-18 sm:text-[10px]"
                  >
                    {f.desc}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
