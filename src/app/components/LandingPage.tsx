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

const TOTAL = 16;

function LazySection({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`w-full min-h-screen ${className}`}>
      {visible ? children : <div className="w-full min-h-screen bg-black" />}
    </section>
  );
}

function SlideSection({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <LazySection id={id} className="h-screen">
      <div className="w-full h-screen">{children}</div>
    </LazySection>
  );
}

export function LandingPage() {
  return (
    <div className="w-full bg-black">
      <Navbar />

      {/* Hero */}
      <SlideSection id="hero">
        <CoverSlide total={TOTAL} />
      </SlideSection>

      {/* Biz Kimiz - Market & Lifestyle */}
      <SlideSection id="hakkimizda">
        <MarketSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <BaliLifestyleSlide total={TOTAL} />
      </SlideSection>

      {/* Location */}
      <SlideSection>
        <LocationSlide total={TOTAL} />
      </SlideSection>

      <SlideSection>
        <LocationMapSlide total={TOTAL} />
      </SlideSection>

      {/* Villa Collection */}
      <SlideSection>
        <CollectionSlide total={TOTAL} />
      </SlideSection>

      {/* Architecture */}
      <SlideSection>
        <ArchitectureSlide total={TOTAL} />
      </SlideSection>

      {/* Master Plan */}
      <SlideSection>
        <MasterPlanSlide total={TOTAL} />
      </SlideSection>

      {/* Legal */}
      <SlideSection>
        <LegalSlide total={TOTAL} />
      </SlideSection>

      {/* Ownership */}
      <SlideSection>
        <OwnershipSlide total={TOTAL} />
      </SlideSection>

      {/* Financial */}
      <SlideSection>
        <FinancialSlide total={TOTAL} />
      </SlideSection>

      {/* Competitor */}
      <SlideSection>
        <CompetitorSlide total={TOTAL} />
      </SlideSection>

      {/* Exit Strategy */}
      <SlideSection>
        <ExitStrategySlide total={TOTAL} />
      </SlideSection>

      {/* Payment */}
      <SlideSection>
        <PaymentSlide total={TOTAL} />
      </SlideSection>

      {/* Construction */}
      <SlideSection>
        <ConstructionSlide total={TOTAL} />
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
