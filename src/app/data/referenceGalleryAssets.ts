import img1 from "figma:asset/0ec89edbc1b48cea234b8d4bdae1ab86d23da1fa.png";
import img2 from "figma:asset/5ba4151e9d82f2b08dc11dcbf7c09f1f4934db04.png";
import img3 from "figma:asset/619e7839cc517646c704b1c88c1df4032b05c437.png";
import img4 from "figma:asset/824b55987c2a902814d98214f672927f0a231642.png";
import img5 from "figma:asset/8629ca25f7da3679368f202246d1cede8739f913.png";
import img6 from "figma:asset/9eba3025a7fb9754e76b817f78453cb939b49ede.png";
import img7 from "figma:asset/b7c7d443ae2a0ace15ff25de76d18b033bd022df.png";
import img8 from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";
import img9 from "figma:asset/ed8f29a915f28aad1fb488874529396cf81f3f89.png";

export type GalleryImageItem = { src: string; alt: string };

/** Referans projesi ile aynı görsel seti */
export const referenceGalleryImages: GalleryImageItem[] = [
  { src: img1, alt: "Villa dış görünüm ve havuz alanı" },
  { src: img5, alt: "Tropik peyzaj ve bahçe düzenlemesi" },
  { src: img9, alt: "Modern mimari detaylar" },
  { src: img3, alt: "Resort alanı ve ortak mekanlar" },
  { src: img4, alt: "Villa iç mekan tasarımı" },
  { src: img6, alt: "Yaşam alanları" },
  { src: img7, alt: "Doğa ile iç içe yapı" },
  { src: img2, alt: "Çevre ve peyzaj" },
  { src: img8, alt: "Bali geleneksel dokunuşlar" },
];

/** Referans villası bölümündeki video (PremiumVideoFrame) */
export function getReferenceVideoEmbed(): string | undefined {
  const v = import.meta.env.VITE_REFERENCE_VIDEO_EMBED;
  return typeof v === "string" && v.trim() !== "" ? v.trim() : undefined;
}

/** Proje galerisi carousel’deki ilk slayt (Lamos tanıtım vb.; referanstan bağımsız olabilir) */
export function getGalleryVideoEmbed(): string | undefined {
  const v = import.meta.env.VITE_GALLERY_VIDEO_EMBED;
  return typeof v === "string" && v.trim() !== "" ? v.trim() : undefined;
}
