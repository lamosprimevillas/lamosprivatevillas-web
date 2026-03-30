import { motion } from "motion/react";
import { SlideLayout, SlideTitle, SlideSubtitle, GoldDivider } from "../SlideLayout";
import aboutBg from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";

export function AboutUsSlide({ total }: { total: number }) {
  return (
    <SlideLayout bgImage={aboutBg} overlay="darker" slideNumber={14} totalSlides={total}>
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-5 lg:gap-3 px-1">
        <SlideSubtitle>Hakkımızda</SlideSubtitle>
        <SlideTitle>
          Bali Family <span className="italic text-[#C9A96E]">World</span>
        </SlideTitle>
        <GoldDivider delay={0.35} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.75 }}
          className="text-white/70 text-[10px] sm:text-[12px] lg-lock-20 flex flex-col gap-2 sm:gap-3 text-left sm:text-center max-w-2xl"
        >
          <p>
            Bali Family World, Bali&apos;de yatırım, turizm ve danışmanlık alanlarında faaliyet
            gösteren, uluslararası yatırımcılara güvenli ve sürdürülebilir çözümler sunan bir
            yapıdır.
          </p>
          <p>
            Yerel pazar bilgisi ile yatırımcı bakış açısını birleştirerek, doğru lokasyonlarda
            yüksek getirili projeler geliştiriyoruz.
          </p>
          <p>
            Arsa seçiminden inşaat sürecine, satış ve kiralama yönetimine kadar tüm süreci uçtan
            uca yönetirken; şirket kurulumu ve oturum izinleri gibi konularda da profesyonel
            danışmanlık sağlıyoruz.
          </p>
          <p>
            Amacımız, yatırımcıya yalnızca bir mülk değil, güvenli bir yatırım ve sürdürülebilir bir
            gelir modeli sunmaktır.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
