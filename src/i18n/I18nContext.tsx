import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getTranslations, type Locale, type TranslationTree } from "./translations";

const STORAGE_KEY = "lamos-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationTree;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "tr";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "en" || raw === "tr") return raw;
  } catch {
    /* ignore */
  }
  return "tr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale());

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "tr";
  }, [locale]);

  const t = useMemo(() => getTranslations(locale), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
