import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Biz Kimiz", href: "#hakkimizda" },
  { label: "Referans Projemiz", href: "#referans" },
  { label: "Başvuru Formu", href: "#basvuru" },
  { label: "İletişim", href: "#iletisim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <div className="w-5 sm:w-8 h-[2px] bg-[#C9A96E] group-hover:w-10 transition-all duration-300" />
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.2em" }}
              className="text-[#C9A96E] uppercase text-sm sm:text-base tracking-[0.2em]"
            >
              Lamos Prime Villas
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="px-4 py-2 text-[13px] text-white/60 hover:text-[#C9A96E] uppercase tracking-[0.12em] transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white/60 hover:text-[#C9A96E] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 border-t border-white/5" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="px-4 py-3 text-sm text-white/60 hover:text-[#C9A96E] uppercase tracking-[0.12em] transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
