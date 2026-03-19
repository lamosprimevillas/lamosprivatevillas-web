import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import { ShieldCheck, FileCheck, Leaf } from "lucide-react";
import legalBg from "figma:asset/b7c7d443ae2a0ace15ff25de76d18b033bd022df.png";

const permits = [
  {
    icon: ShieldCheck,
    code: "PBG",
    title: "İnşaat Ruhsatı",
    desc: "Persetujuan Bangunan Gedung — Tam bina inşaat onayı",
  },
  {
    icon: FileCheck,
    code: "SLF",
    title: "Kullanılabilirlik Sertifikası",
    desc: "Sertifikat Laik Fungsi — Bina uygunluk ve güvenlik sertifikası",
  },
  {
    icon: Leaf,
    code: "SPPL",
    title: "Çevre İzni",
    desc: "Surat Pernyataan Pengelolaan Lingkungan — Çevre uyumluluğu",
  },
];

export function LegalSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={legalBg} overlay="left-dark" slideNumber={9} totalSlides={total}>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-4">
        <SlideSubtitle>Hukuki Güvence ve İzinler</SlideSubtitle>
        <SlideTitle>
          Tam Onaylı ve
          <br />
          <span className="italic text-[#C9A96E]">Hukuki Güvenceli</span>
        </SlideTitle>
        <GoldDivider />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}
          className="text-white/60 max-w-xl text-[20px] lg-lock-20"
        >
          Yatırımınız hukuki olarak güvence altındadır. Proje, tüm resmi prosedürlere
          tam uyumludur &mdash; muhafazakâr gayrimenkul yatırımcıları için kritik bir faktör.
        </motion.p>

        {/* Permits */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-5 mt-1 sm:mt-2">
          {permits.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-[#C9A96E]/20 rounded-xl p-3 sm:p-5 md:p-6 lg:p-5 flex flex-col items-center text-center gap-2 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-14 lg:h-14 rounded-full bg-[#2D6A4F]/20 border border-[#2D6A4F]/40 flex items-center justify-center">
                <p.icon className="w-5 h-5 sm:w-7 sm:h-7 lg:w-7 lg:h-7 text-[#2D6A4F]" />
              </div>
              <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[#C9A96E] text-[42px] lg-lock-48"
                >
                  {p.code}
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-white text-[20px] lg-lock-20"
                >
                  {p.title}
                </span>
              </div>
              <div className="w-6 h-[1px] bg-[#C9A96E]/30 hidden sm:block" />
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-white/40 hidden sm:block text-[16px] lg-lock-16"
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}