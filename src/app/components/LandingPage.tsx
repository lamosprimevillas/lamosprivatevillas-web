import { useRef, useEffect, useState, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { CoverSlide } from "./slides/CoverSlide";
import { MarketSlide } from "./slides/MarketSlide";
import { BaliLifestyleSlide } from "./slides/BaliLifestyleSlide";
import { LocationMapSlide } from "./slides/LocationMapSlide";
import { GalleryVideoSlide } from "./slides/GalleryVideoSlide";
import { CollectionSlide } from "./slides/CollectionSlide";
import { ArchitectureSlide } from "./slides/ArchitectureSlide";
import { MasterPlanSlide } from "./slides/MasterPlanSlide";
import { LegalSlide } from "./slides/LegalSlide";
import { OwnershipSlide } from "./slides/OwnershipSlide";
import { FinancialSlide } from "./slides/FinancialSlide";
import { ExitStrategySlide } from "./slides/ExitStrategySlide";
import { PaymentSlide } from "./slides/PaymentSlide";
import { ConstructionSlide } from "./slides/ConstructionSlide";
import { AboutUsSlide } from "./slides/AboutUsSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { ProjectGallerySection } from "./sections/ProjectGallerySection";
import { ReferenceProjectSection } from "./sections/ReferenceProjectSection";
import { ApplicationFormSection } from "./sections/ApplicationFormSection";
import { useSequentialPreload } from "../hooks/useSequentialPreload";

import marketBg from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";
import baliBg from "figma:asset/8629ca25f7da3679368f202246d1cede8739f913.png";
import locationMapBg from "figma:asset/5ba4151e9d82f2b08dc11dcbf7c09f1f4934db04.png";

const TOTAL = 16;

function LazySection({
  children,
  id,
  className = "",
  rootMargin = "160px 0px 280px 0px",
  minHeight = "screen" as "screen" | "auto",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  rootMargin?: string;
  /** `auto`: içerik kadar (galeri altı boş siyah şeridi önler). `screen`: tam ekran minimum */
  minHeight?: "screen" | "auto";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const minHClass = minHeight === "screen" ? "min-h-screen" : "min-h-0";
  const placeholderMin =
    minHeight === "screen" ? "min-h-screen" : "min-h-[45vh]";

  return (
    <section id={id} ref={ref} className={`w-full ${minHClass} ${className}`}>
      {visible ? children : <div className={`w-full bg-black ${placeholderMin}`} />}
    </section>
  );
}

function SlideSection({
  children,
  id,
  rootMargin,
}: {
  children: ReactNode;
  id?: string;
  rootMargin?: string;
}) {
  return (
    <LazySection id={id} className="h-screen" rootMargin={rootMargin}>
      <div className="w-full h-screen">{children}</div>
    </LazySection>
  );
}

function EagerSection({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className="w-full min-h-screen h-screen scroll-mt-20 md:scroll-mt-28 lg:scroll-mt-24"
    >
      <div className="w-full h-screen">{children}</div>
    </section>
  );
}

export function LandingPage() {
  useSequentialPreload([marketBg, baliBg, locationMapBg]);

  return (
    <div className="w-full bg-black">
      <Navbar />

      {/* 1 - Hero: always eager */}
      <EagerSection id="hero">
        <CoverSlide total={TOTAL} />
      </EagerSection>

      {/* 2 - Market: eager (preloaded sequentially) */}
      <EagerSection>
        <MarketSlide total={TOTAL} />
      </EagerSection>

      {/* 3 - Bali Lifestyle: eager */}
      <EagerSection>
        <BaliLifestyleSlide total={TOTAL} />
      </EagerSection>

      {/* 5+ : Lazy — görünürken mount, görünmezken unmount (DOM + animasyon yükü sınırlı kalır) */}
      <SlideSection>
        <LocationMapSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <GalleryVideoSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <CollectionSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <ArchitectureSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <MasterPlanSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <LegalSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <OwnershipSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <FinancialSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <ExitStrategySlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <PaymentSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <ConstructionSlide total={TOTAL} />
      </SlideSection>

      {/* Proje galerisi — foto & video (içerik yüksekliği; min-h-screen boş siyah şerit yaratmasın) */}
      <LazySection id="proje-galerisi" minHeight="auto">
        <ProjectGallerySection />
      </LazySection>

      {/* Hakkımızda */}
      <SlideSection id="hakkimizda">
        <AboutUsSlide total={TOTAL} />
      </SlideSection>

      {/* Referans Projemiz */}
      <LazySection id="referans">
        <ReferenceProjectSection />
      </LazySection>

      {/* Başvuru Formu */}
      <LazySection id="basvuru">
        <ApplicationFormSection />
      </LazySection>

      {/* İletişim */}
      <SlideSection id="iletisim">
        <ContactSlide total={TOTAL} />
      </SlideSection>
    </div>
  );
}
