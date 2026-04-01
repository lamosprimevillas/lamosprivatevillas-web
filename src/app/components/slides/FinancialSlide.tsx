import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { DollarSign, Percent, BarChart3, MinusCircle } from "lucide-react";
import financialBg from "figma:asset/619e7839cc517646c704b1c88c1df4032b05c437.png";
import { useI18n } from "@/i18n/I18nContext";

const FIN_TABLE_COLS = "minmax(10rem, 1.75fr) minmax(0, 1fr) minmax(0, 0.85fr) minmax(0, 1fr)" as const;

const metricIcons = [BarChart3, DollarSign, Percent] as const;

export function FinancialSlide({ total }: { total: number }) {
  const { t } = useI18n();
  const f = t.slides.financial;

  return (
    <SlideLayout bgImage={financialBg} overlay="darker" slideNumber={11} totalSlides={total}>
      <div className="financial-slide-compact w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4 lg:gap-2.5">
        <SlideSubtitle>{f.subtitle}</SlideSubtitle>
        <SlideTitle>
          {f.titleBefore}
          <span className="italic text-[#C9A96E] lg-lock-72 text-[24px]">{f.titleAccent}</span>
        </SlideTitle>
        <GoldDivider />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="financial-table-wrap w-full max-w-3xl"
        >
          <div className="financial-table-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            <div
              className="financial-table-grid grid bg-[#C9A96E]/10 border-b border-white/10"
              style={{ gridTemplateColumns: FIN_TABLE_COLS }}
            >
              {f.tableHeaders.map((h, i) => (
                <div
                  key={h || `col-${i}`}
                  className={`p-1.5 sm:p-2.5 md:p-3 lg:p-2.5 flex items-center ${i === 0 ? "" : "justify-center text-center"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="text-[#C9A96E] uppercase tracking-wider lg-lock-18 text-[7px] sm:text-[8px] leading-tight">
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {f.villaRows.map((row, idx) => (
              <div
                key={row.name}
                className={`financial-table-grid grid ${idx < 2 ? "border-b border-white/5" : ""}`}
                style={{ gridTemplateColumns: FIN_TABLE_COLS }}
              >
                <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-2.5 flex items-center gap-1 min-w-0">
                  <DollarSign
                    className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 shrink-0 self-center ${
                      row.name.startsWith("Prime Villa") && !row.name.includes("Plus")
                        ? "text-[#2D6A4F]"
                        : "text-[#C9A96E]"
                    }`}
                  />
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white lg-lock-24 text-left leading-none whitespace-nowrap text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]"
                  >
                    {row.name}
                  </span>
                </div>
                <div className="p-2 sm:p-3 md:p-4 lg:p-3 flex flex-col items-center justify-center">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white lg-lock-28 text-[12px]"
                  >
                    {row.rate}
                  </span>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/30 lg-lock-15 text-[8px]"
                  >
                    {f.perNight}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-1.5 p-2 sm:p-3 md:p-4 lg:p-3">
                  <Percent className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-[#C9A96E] shrink-0" />
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white lg-lock-24 text-[11px]"
                  >
                    {row.occ}
                  </span>
                </div>
                <div className="p-2 sm:p-3 md:p-4 lg:p-3 flex items-center justify-center">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white text-[14px] lg-lock-28"
                  >
                    {row.gross}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="financial-bottom-row w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="financial-card-expenses bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 md:p-5 lg:p-4"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3 lg:mb-2">
              <MinusCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-red-400/70" />
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/60 uppercase tracking-wider lg-lock-18 text-[9px]"
              >
                {f.expensesTitle}
              </span>
            </div>
            <div className="financial-expense-list flex flex-col gap-1.5 sm:gap-2 lg:gap-1.5">
              {f.expenseLabels.map((label) => (
                <div key={label} className="flex items-center justify-between">
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/50 lg-lock-18 text-[9px]"
                  >
                    {label}
                  </span>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-red-400/60 text-[9px] lg-lock-15"
                  />
                </div>
              ))}
              <div className="w-full h-[1px] bg-white/10 mt-1 lg:mt-0.5" />
              <div className="flex items-center justify-between">
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/70 lg-lock-18 text-[10px]"
                >
                  {f.totalExpenseLabel}
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-red-400/80 lg-lock-20 text-[11px]"
                >
                  %40
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="financial-card-net bg-[#2D6A4F]/10 backdrop-blur-sm border border-[#2D6A4F]/30 rounded-xl p-3 sm:p-4 md:p-5 lg:p-4 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3 lg:mb-2">
              <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#C9A96E]" />
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[#C9A96E] uppercase tracking-wider lg-lock-18 text-[10px]"
              >
                {f.netIncomeTitle}
              </span>
            </div>
            <div className="financial-net-list flex flex-col gap-2 sm:gap-3 lg:gap-2">
              {f.villaRows.map((row) => (
                <div
                  key={row.name}
                  className="financial-net-row flex items-center justify-between gap-2 bg-white/5 rounded-lg p-2 sm:p-3 lg:p-2.5"
                >
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white lg-lock-24 text-[11px] sm:text-[12px] text-left leading-tight"
                  >
                    {row.name}
                  </span>
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[#C9A96E] lg-lock-26 text-[12px] shrink-0"
                  >
                    {row.net}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="financial-metrics-row grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 lg:gap-8 mt-1">
          {f.metrics.map((m, i) => {
            const Icon = metricIcons[i];
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-1"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C9A96E]" />
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white lg-lock-48 text-[16px]"
                >
                  {m.value}
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/40 uppercase tracking-wider font-bold lg-lock-18 text-[8px]"
                >
                  {m.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
