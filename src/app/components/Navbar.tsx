import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.webp";

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Proje Galerisi", href: "#galeri" },
  { label: "Referans Projemiz", href: "#referans" },
  { label: "Başvuru Formu", href: "#basvuru" },
  { label: "İletişim", href: "#iletisim" },
];

const LANGUAGE_CODES = ["EN", "TR", "RU", "FR", "DE", "ES", "ZH", "AR"] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState<string>("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const languageSelectClass =
    "h-9 min-w-[5.25rem] cursor-pointer appearance-none rounded-md border border-[#C9A96E]/30 bg-black/50 py-1.5 pl-2.5 pr-8 text-[11px] font-medium uppercase tracking-[0.1em] text-[#C9A96E] outline-none transition-colors hover:border-[#C9A96E]/50 focus-visible:ring-2 focus-visible:ring-[#C9A96E]/30";

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-black/80 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl pl-2 pr-4 sm:pl-3 sm:pr-6 lg:pl-4 lg:pr-8">
        <div className="flex items-center gap-3 py-2 sm:gap-4 sm:py-2.5">
          {/* Logo — sol */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
            className="group -ml-0.5 flex min-w-0 shrink-0 items-center sm:-ml-1.5 lg:-ml-2"
            aria-label="Lamos Prime Villas — ana sayfa"
          >
            <img
              src={logoImg}
              alt="Lamos Prime Villas"
              className="h-auto w-auto max-h-[44px] max-w-[min(360px,calc(100vw-9rem))] object-contain object-left sm:max-h-[50px] md:max-h-[54px] md:max-w-[min(420px,calc(100vw-13rem))] lg:max-h-[58px] lg:max-w-[min(480px,calc(100vw-15rem))]"
            />
          </a>

          {/* Masaüstü: dil + menü — sağa dayalı */}
          <div className="hidden min-w-0 flex-1 items-center justify-end gap-1 md:flex lg:gap-2">
            <div className="relative shrink-0">
              <select
                id="nav-language"
                aria-label="Dil seçin"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={languageSelectClass}
              >
                {LANGUAGE_CODES.map((code) => (
                  <option key={code} value={code} disabled={code !== "EN"}>
                    {code}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#C9A96E]/80"
                aria-hidden
              />
            </div>

            <div className="flex flex-wrap items-center justify-end">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="whitespace-nowrap px-2 py-2 text-[11px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-[#C9A96E] lg:px-3 lg:text-[12px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobil: menü düğmesi */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center text-white/60 transition-colors hover:text-[#C9A96E] md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[28rem] border-t border-white/5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 bg-black/95 px-4 py-3 backdrop-blur-xl">
          <div className="relative max-w-[200px]">
            <label htmlFor="nav-language-mobile" className="sr-only">
              Dil seçin
            </label>
            <select
              id="nav-language-mobile"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`${languageSelectClass} w-full`}
            >
              {LANGUAGE_CODES.map((code) => (
                <option key={code} value={code} disabled={code !== "EN"}>
                  {code}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#C9A96E]/80"
              aria-hidden
            />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="rounded-lg px-4 py-3 text-sm uppercase tracking-[0.12em] text-white/60 transition-colors hover:bg-white/5 hover:text-[#C9A96E]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
