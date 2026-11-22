/**
 * Güncel proje renderları (Ekim 2026 sunumu, LAMOS_VILLAS_PRESENTATION.pdf).
 * Arka planlar ve galeri bu dosyadan beslenir; görsel değiştirmek için
 * src/assets/renders/ altındaki dosyayı aynı adla değiştirmek yeterli.
 */
import premiumHero from "@/assets/renders/premium-hero.webp";
import premiumFront from "@/assets/renders/premium-front.webp";
import primeFront from "@/assets/renders/prime-front.webp";
import aerialSite from "@/assets/renders/aerial-site.webp";
import aerialPremium from "@/assets/renders/aerial-premium.webp";
import aerialPrime from "@/assets/renders/aerial-prime.webp";
import gardenPool from "@/assets/renders/garden-pool.webp";
import poolAerial from "@/assets/renders/pool-aerial.webp";
import poolSide from "@/assets/renders/pool-side.webp";
import living1 from "@/assets/renders/living-1.webp";
import living2 from "@/assets/renders/living-2.webp";
import living3 from "@/assets/renders/living-3.webp";
import living4 from "@/assets/renders/living-4.webp";
import kitchen1 from "@/assets/renders/kitchen-1.webp";
import kitchen2 from "@/assets/renders/kitchen-2.webp";
import bedroomBath from "@/assets/renders/bedroom-bath.webp";
import bedroom1 from "@/assets/renders/bedroom-1.webp";
import bedroom2 from "@/assets/renders/bedroom-2.webp";
import bathroom from "@/assets/renders/bathroom.webp";

export const renders = {
  premiumHero,
  premiumFront,
  primeFront,
  aerialSite,
  aerialPremium,
  aerialPrime,
  gardenPool,
  poolAerial,
  poolSide,
  living1,
  living2,
  living3,
  living4,
  kitchen1,
  kitchen2,
  bedroomBath,
  bedroom1,
  bedroom2,
  bathroom,
};

/** Slayt arka planları — hangi bölüm hangi render */
export const backgrounds = {
  cover: premiumHero,
  market: gardenPool,
  baliLifestyle: poolAerial,
  locationMap: aerialPrime,
  galleryVideo: living1,
  collection: living4,
  architecture: living2,
  legal: bedroom1,
  ownership: bedroom2,
  financial: premiumFront,
  exitStrategy: bedroomBath,
  payment: aerialPremium,
  construction: aerialSite,
  about: living3,
  contact: poolSide,
  application: kitchen2,
  layouts: kitchen1,
};

/** Ana sayfa galerisi + proje galerisi (sıra = galeri sırası) */
export const projectGalleryImages: { src: string; key: string }[] = [
  { src: premiumHero, key: "premiumHero" },
  { src: primeFront, key: "primeFront" },
  { src: aerialSite, key: "aerialSite" },
  { src: aerialPremium, key: "aerialPremium" },
  { src: aerialPrime, key: "aerialPrime" },
  { src: gardenPool, key: "gardenPool" },
  { src: poolAerial, key: "poolAerial" },
  { src: poolSide, key: "poolSide" },
  { src: living1, key: "living1" },
  { src: living2, key: "living2" },
  { src: living3, key: "living3" },
  { src: kitchen1, key: "kitchen1" },
  { src: kitchen2, key: "kitchen2" },
  { src: bedroomBath, key: "bedroomBath" },
  { src: bedroom1, key: "bedroom1" },
  { src: bedroom2, key: "bedroom2" },
  { src: bathroom, key: "bathroom" },
];
