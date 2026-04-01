import { motion } from "motion/react";
import { SlideLayout } from "../SlideLayout";
import { Mail, MapPin, Globe } from "lucide-react";
import contactBg from "figma:asset/619e7839cc517646c704b1c88c1df4032b05c437.png";
import { useI18n } from "@/i18n/I18nContext";

export function ContactSlide({ total }: { total: number }) {
  const { t, locale } = useI18n();
  const s = t.slides.contactSlide;
  const loc = t.contact.locationLine;

  return (
    <SlideLayout bgImage={contactBg} overlay="darker" slideNumber={16} totalSlides={total}>
      <div className="w-full flex flex-col items-center text-center gap-3 sm:gap-5 md:gap-6 lg:gap-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-2"
        >
          <div className="w-14 sm:w-20 lg:w-14 h-[1px] bg-[#C9A96E]" />
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.3em" }}
            className="text-[#C9A96E] uppercase text-[11px] lg-lock-20"
          >
            {s.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
          className="text-white lg-lock-72 text-[22px]"
        >
          {locale === "tr" ? (
            <>
              <span style={{ fontWeight: 700, fontSize: "1.3em" }}>{s.titleBold}</span>
              {s.titleAfterBold}
              <br />
              <span className="italic text-[#C9A96E]">{s.titleAccent}</span>
            </>
          ) : (
            <>
              {s.titleAfterBold}
              <br />
              <span className="italic text-[#C9A96E]">{s.titleAccent}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.7 }}
          className="text-white/50 italic max-w-lg text-[14px] lg-lock-28"
        >
          {s.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-2 mt-2 sm:mt-4 lg:mt-2"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-[#C9A96E]/20 rounded-xl p-4 sm:p-6 md:p-8 lg:p-6 flex flex-col items-center gap-3 sm:gap-5 lg:gap-3 min-w-[260px] sm:min-w-[280px] md:min-w-[360px] lg:min-w-[380px]">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-2.5">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C9A96E] shrink-0" />
              <a
                href="mailto:lamosprimevillas@gmail.com"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                className="text-white hover:text-[#C9A96E] transition-colors text-[12px] lg-lock-24"
              >
                lamosprimevillas@gmail.com
              </a>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="flex items-center gap-2 sm:gap-3 lg:gap-2.5">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C9A96E] shrink-0" />
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/60 text-[11px] lg-lock-20"
              >
                {loc}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 lg:gap-2.5">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C9A96E] shrink-0" />
              <span
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/60 text-[11px] lg-lock-20"
              >
                www.lamosprimevillas.com
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-2 sm:mt-4 md:mt-8 lg:mt-3 flex flex-col items-center gap-2 sm:gap-3 lg:gap-1.5"
        >
          <div className="w-10 sm:w-12 lg:w-10 h-[1px] bg-[#C9A96E]/40" />
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.2em" }}
            className="text-white/70 uppercase lg-lock-24 text-[11px]"
          >
            {s.footerBrand}
          </span>
          <span
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-white/70 uppercase lg-lock-20 text-[10px]"
          >
            {s.footerSub}
          </span>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
