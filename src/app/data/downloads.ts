/**
 * İndirilebilir sunum PDF'leri (public/sunum/).
 * Türkçe PDF eklenince dosyayı public/sunum/ altına koyup `tr` satırını doldurun;
 * dosyası olmayan dil butonu görünmez (çalışmayan link bırakılmaz).
 */
export const presentationDownloads: { tr?: string; en?: string } = {
  en: "/sunum/Lamos-Prime-Villas-Presentation-EN.pdf",
  // tr: "/sunum/Lamos-Prime-Villas-Sunum-TR.pdf",
};

export function availablePresentationDownloads() {
  return (["tr", "en"] as const)
    .filter((k) => Boolean(presentationDownloads[k]))
    .map((k) => ({ lang: k, href: presentationDownloads[k]! }));
}
