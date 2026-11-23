/**
 * Proje galerisi — villa tipine göre görseller.
 * Kaynak: "LAMOS 205m2 PREMIUM VILLAS.pdf" ve "LAMOS 175m2 PRIME VILLAS.pdf" (Kasım 2026).
 * Görsel değiştirmek / eklemek: src/assets/gallery/<tip>/NN.webp (sıra = dosya adı),
 * alt yazılar i18n'de gallery.premiumImages / gallery.primeImages.
 */
const premiumFiles = import.meta.glob("@/assets/gallery/premium/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const primeFiles = import.meta.glob("@/assets/gallery/prime/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const sorted = (files: Record<string, string>) =>
  Object.keys(files)
    .sort()
    .map((k) => files[k]);

export type VillaGalleryType = "premium" | "prime";

export const villaGalleries: Record<VillaGalleryType, string[]> = {
  premium: sorted(premiumFiles),
  prime: sorted(primeFiles),
};
