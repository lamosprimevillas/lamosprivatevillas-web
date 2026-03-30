import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { DollarSign, Percent, BarChart3, MinusCircle } from "lucide-react";
import financialBg from "figma:asset/619e7839cc517646c704b1c88c1df4032b05c437.png";

const expenses = [
  { label: "Platform Komisyonu", pct: "" },
  { label: "Vergi", pct: "" },
  { label: "Elektrik, Su, Bakım", pct: "" },
  { label: "Yönetim (Management)", pct: "" },
];

/** First column min width so long villa names stay on one line */
const FIN_TABLE_COLS = "minmax(10rem, 1.75fr) minmax(0, 1fr) minmax(0, 0.85fr) minmax(0, 1fr)" as const;

export function FinancialSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={financialBg} overlay="darker" slideNumber={10} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4 lg:gap-2.5">
        <SlideSubtitle>Finansal Projeksiyonlar (ROI)</SlideSubtitle>
        <SlideTitle>
          Yüksek <span className="italic text-[#C9A96E] lg-lock-72 text-[24px]">Kira Getirisi</span>
        </SlideTitle>
        <GoldDivider />

        {/* Financial Table */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-3xl"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            {/* Table: wider first column so villa names stay on one line */}
            <div
              className="grid bg-[#C9A96E]/10 border-b border-white/10"
              style={{ gridTemplateColumns: FIN_TABLE_COLS }}
            >
              {["", "Gecelik Ücret", "Doluluk", "Brüt Yıllık Gelir"].map((h, i) => (
                <div
                  key={h || "empty"}
                  className={`p-1.5 sm:p-2.5 md:p-3 lg:p-2.5 flex items-center ${i === 0 ? "" : "justify-center text-center"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="text-[#C9A96E] uppercase tracking-wider lg-lock-18 text-[7px] sm:text-[8px] leading-tight">
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {[
              {
                name: "Prime Villa 2+1",
                rate: "$120–180",
                occ: "70-80%",
                gross: "$40.000",
                iconClass: "text-[#2D6A4F]",
                border: "border-b border-white/5",
              },
              {
                name: "Prime Plus Villa 3+1",
                rate: "$140–200",
                occ: "70-80%",
                gross: "$48.000",
                iconClass: "text-[#C9A96E]",
                border: "border-b border-white/5",
              },
              {
                name: "Premium Villa 3+1",
                rate: "$160–220",
                occ: "70-80%",
                gross: "$56.000",
                iconClass: "text-[#C9A96E]",
                border: "",
              },
            ].map((row) => (
              <div
                key={row.name}
                className={`grid ${row.border}`}
                style={{ gridTemplateColumns: FIN_TABLE_COLS }}
              >
                <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-2.5 flex items-center gap-1 min-w-0">
                  <DollarSign className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 shrink-0 self-center ${row.iconClass}`} />
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
                    gece başına
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

        {/* Expense Breakdown + Net Income */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-4">
          {/* Expenses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 md:p-5 lg:p-4"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3 lg:mb-2">
              <MinusCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-red-400/70" />
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/60 uppercase tracking-wider lg-lock-18 text-[9px]"
              >
                Giderler
              </span>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2 lg:gap-1.5">
              {expenses.map((e) => (
                <div key={e.label} className="flex items-center justify-between">
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-white/50 lg-lock-18 text-[9px]"
                  >
                    {e.label}
                  </span>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="text-red-400/60 text-[9px] lg-lock-15"
                  >
                    {e.pct}
                  </span>
                </div>
              ))}
              <div className="w-full h-[1px] bg-white/10 mt-1 lg:mt-0.5" />
              <div className="flex items-center justify-between">
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white/70 lg-lock-18 text-[10px]"
                >
                  Ort. Toplam Gider
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

          {/* Net Income */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="bg-[#2D6A4F]/10 backdrop-blur-sm border border-[#2D6A4F]/30 rounded-xl p-3 sm:p-4 md:p-5 lg:p-4 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3 lg:mb-2">
              <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-[#C9A96E]" />
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[#C9A96E] uppercase tracking-wider lg-lock-18 text-[10px]"
              >
                Net Yıllık Gelir
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-2">
              {[
                { label: "Prime Villa 2+1", net: "$24.000" },
                { label: "Prime Plus Villa 3+1", net: "$28.800" },
                { label: "Premium Villa 3+1", net: "$33.600" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-2 bg-white/5 rounded-lg p-2 sm:p-3 lg:p-2.5"
                >
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-white lg-lock-24 text-[11px] sm:text-[12px] text-left leading-tight"
                  >
                    {row.label}
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

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 lg:gap-8 mt-1">
          {[
            { icon: BarChart3, value: "12-18%", label: "Tahmini Yıllık ROI" },
            { icon: DollarSign, value: "6-7 Yıl", label: "Geri Ödeme Süresi" },
            { icon: Percent, value: "70-80%", label: "Hedef Doluluk" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-1"
            >
              <m.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C9A96E]" />
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
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}