import { motion } from "motion/react";
import { ReactNode } from "react";

interface SlideLayoutProps {
  bgImage: string | ReactNode;
  overlay?: "dark" | "darker" | "gradient" | "left-dark" | "right-dark";
  children: ReactNode;
  slideNumber?: number;
  totalSlides?: number;
}

export function SlideLayout({
  bgImage,
  overlay = "dark",
  children,
}: SlideLayoutProps) {
  const overlayClasses: Record<string, string> = {
    dark: "bg-black/50",
    darker: "bg-black/70",
    gradient: "bg-gradient-to-r from-black/85 via-black/60 to-black/40",
    "left-dark": "bg-gradient-to-r from-black/90 via-black/65 to-transparent",
    "right-dark": "bg-gradient-to-l from-black/90 via-black/65 to-transparent",
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${typeof bgImage === 'string' ? bgImage : bgImage})` }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Main Content - scrollable on mobile, centered vertically */}
        <div className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 py-4 md:py-0">
          <div className="min-h-full flex items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable animated text components */
export function SlideTitle({ children, delay = 0.2 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
      className="text-white lg-lock-72 text-[36px]"
    >
      {children}
    </motion.h1>
  );
}

export function SlideSubtitle({ children, delay = 0.4 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.15em" }}
      className="text-[#C9A96E] uppercase tracking-[0.15em] lg-lock-22 text-[16px]"
    >
      {children}
    </motion.p>
  );
}

export function SlideText({ children, delay = 0.5 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
      className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl"
    >
      {children}
    </motion.p>
  );
}

export function GoldDivider({ delay = 0.3 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 60 }}
      transition={{ duration: 0.8, delay }}
      className="h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent"
    />
  );
}