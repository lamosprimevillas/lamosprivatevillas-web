import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "@/assets/logo.webp";
import { backgrounds } from "@/app/data/renders";
import { useI18n } from "@/i18n/I18nContext";
import type { Locale } from "@/i18n/translations";

const SESSION_KEY = "lamos-lang-chosen";

function alreadyChosen(): boolean {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * Site açılışında dil seçim ekranı (logo + isim + TR / EN).
 * Her ziyarette (tarayıcı sekmesi oturumu) bir kez gösterilir; seçim sonrası site o dilde açılır.
 */
export function LanguageGate() {
  const { setLocale } = useI18n();
  const [open, setOpen] = useState(() => typeof window !== "undefined" && !alreadyChosen());

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const choose = (locale: Locale) => {
    setLocale(locale);
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    window.scrollTo({ top: 0 });
    setOpen(false);
  };

  const options: { code: Locale; label: string; native: string }[] = [
    { code: "tr", label: "TR", native: "Türkçe" },
    { code: "en", label: "EN", native: "English" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="lang-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Dil seçin / Choose your language"
        >
          <img
            src={backgrounds.cover}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgba(201,169,110,0.12),transparent_70%)]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 flex w-full max-w-lg flex-col items-center gap-6 px-6 text-center sm:gap-8"
          >
            <img
              src={logoImg}
              alt="Lamos Prime Villas"
              className="h-auto w-[230px] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] sm:w-[300px]"
            />

            <div className="flex flex-col items-center gap-3">
              <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.22em" }}
                className="text-2xl uppercase text-[#C9A96E] sm:text-4xl"
              >
                Dil seçin
              </p>
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.2em" }}
                className="text-lg uppercase text-white/75 sm:text-2xl"
              >
                Choose your language
              </p>
            </div>

            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4">
              {options.map((o, i) => (
                <motion.button
                  key={o.code}
                  type="button"
                  onClick={() => choose(o.code)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                  className="group flex flex-col items-center gap-1 rounded-xl border border-[#C9A96E]/40 bg-black/40 px-4 py-5 backdrop-blur-md transition-all hover:border-[#C9A96E] hover:bg-[#C9A96E]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/60 sm:py-5"
                >
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-4xl text-[#C9A96E] sm:text-5xl"
                  >
                    {o.label}
                  </span>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.16em" }}
                    className="text-sm uppercase text-white/80 group-hover:text-white sm:text-base"
                  >
                    {o.native}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
