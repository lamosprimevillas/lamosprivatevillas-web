import { useRef, useEffect, useState, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { CoverSlide } from "./slides/CoverSlide";
import { MarketSlide } from "./slides/MarketSlide";
import { BaliLifestyleSlide } from "./slides/BaliLifestyleSlide";
import { LocationSlide } from "./slides/LocationSlide";
import { LocationMapSlide } from "./slides/LocationMapSlide";
import { CollectionSlide } from "./slides/CollectionSlide";
import { ArchitectureSlide } from "./slides/ArchitectureSlide";
import { MasterPlanSlide } from "./slides/MasterPlanSlide";
import { LegalSlide } from "./slides/LegalSlide";
import { OwnershipSlide } from "./slides/OwnershipSlide";
import { FinancialSlide } from "./slides/FinancialSlide";
import { CompetitorSlide } from "./slides/CompetitorSlide";
import { ExitStrategySlide } from "./slides/ExitStrategySlide";
import { PaymentSlide } from "./slides/PaymentSlide";
import { ConstructionSlide } from "./slides/ConstructionSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { ReferenceProjectSection } from "./sections/ReferenceProjectSection";
import { ApplicationFormSection } from "./sections/ApplicationFormSection";
import { useSequentialPreload } from "../hooks/useSequentialPreload";

import marketBg from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";
import baliBg from "figma:asset/8629ca25f7da3679368f202246d1cede8739f913.png";
import locationBg from "figma:asset/619e7839cc517646c704b1c88c1df4032b05c437.png";

const TOTAL = 16;

function LazySection({
  children,
  id,
  className = "",
  rootMargin = "0px 0px 2000px 0px",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <section id={id} ref={ref} className={`w-full min-h-screen ${className}`}>
      {visible ? children : <div className="w-full min-h-screen bg-black" />}
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
    <section id={id} className="w-full min-h-screen h-screen">
      <div className="w-full h-screen">{children}</div>
    </section>
  );
}

export function LandingPage() {
  useSequentialPreload([marketBg, baliBg, locationBg]);

  return (
    <div className="w-full bg-black">
      <Navbar />

      {/* 1 - Hero: always eager */}
      <EagerSection id="hero">
        <CoverSlide total={TOTAL} />
      </EagerSection>

      {/* 2 - Market: eager (preloaded sequentially) */}
      <EagerSection id="hakkimizda">
        <MarketSlide total={TOTAL} />
      </EagerSection>

      {/* 3 - Bali Lifestyle: eager */}
      <EagerSection>
        <BaliLifestyleSlide total={TOTAL} />
      </EagerSection>

      {/* 4 - Location: eager */}
      <EagerSection>
        <LocationSlide total={TOTAL} />
      </EagerSection>

      {/* 5+ : Lazy with generous rootMargin */}
      <SlideSection rootMargin="0px 0px 2000px 0px">
        <LocationMapSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <CollectionSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <ArchitectureSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <MasterPlanSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <LegalSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <OwnershipSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <FinancialSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <CompetitorSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <ExitStrategySlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <PaymentSlide total={TOTAL} />
      </SlideSection>

      <SlideSection rootMargin="0px 0px 2000px 0px">
        <ConstructionSlide total={TOTAL} />
      </SlideSection>

      {/* Referans Projemiz */}
      <LazySection id="referans" rootMargin="0px 0px 2000px 0px">
        <ReferenceProjectSection />
      </LazySection>

      {/* Başvuru Formu */}
      <LazySection id="basvuru" rootMargin="0px 0px 2000px 0px">
        <ApplicationFormSection />
      </LazySection>

      {/* İletişim */}
      <SlideSection id="iletisim" rootMargin="0px 0px 2000px 0px">
        <ContactSlide total={TOTAL} />
      </SlideSection>
    </div>
  );
}
