/**
 * Tüm kullanıcı metinleri — TR / EN.
 * Yeni anahtar eklerken her iki locale’e de ekleyin.
 */

import { slidesContentEn, slidesContentTr } from "./slidesContent";

export type Locale = "tr" | "en";

export type TranslationTree = typeof translationsTr;

const translationsTr = {
  nav: {
    projectGallery: "Proje Galerisi",
    about: "Hakkımızda",
    reference: "Referans Projemiz",
    application: "Başvuru Formu",
    contact: "İletişim",
    selectLanguage: "Dil seçin",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    homeAria: "Lamos Prime Villas — ana sayfa",
  },
  common: {
    close: "Kapat",
    previous: "Önceki",
    next: "Sonraki",
    slide: "Slayt",
  },
  gallery: {
    eyebrow: "Fotoğraf & video",
    title: "Proje",
    titleItalic: "galerisi",
    intro:
      "Sürükleyin veya küçük önizlemelere dokunun. Videoyu, fotoğraflarla aynı akışta izleyin — tam ekran için görsele tıklayın.",
    label: "Galeri",
    videoTour: "Lamos Prime Villas",
    videoCaption: "Tanıtım videosu",
    videoEmptyEnv: "Video için",
    videoEmptyHint: "ekleyin",
    videoUnavailableHint: "Video URL’si (.env) tanımlandığında burada oynar.",
    expandVideo: "Videoyu büyük aç",
    videoPreview: "Video önizlemesi",
    images: [
      "Villa dış görünüm ve havuz alanı",
      "Tropik peyzaj ve bahçe düzenlemesi",
      "Modern mimari detaylar",
      "Resort alanı ve ortak mekanlar",
      "Villa iç mekan tasarımı",
      "Yaşam alanları",
      "Doğa ile iç içe yapı",
      "Çevre ve peyzaj",
      "Bali geleneksel dokunuşlar",
    ],
  },
  reference: {
    eyebrow: "Tamamlanmış Proje",
    title: "Referans",
    titleItalic: "Projemiz",
    body:
      "Canggu'da tamamladığımız 3 özel villa projemiz, yatırımcılarımıza güçlü kira getirisi ve değer artışı sağlamaya devam ediyor. 2025 tamamlanma sürecini geride bırakıp Teslim Edildi statüsüne ulaştı.",
    stats: {
      villas: "Villa",
      location: "Konum",
      completion: "Tamamlanma",
      status: "Durum",
      locationValue: "Canggu",
      completionValue: "2025",
      statusValue: "Teslim Edildi",
    },
    videoEyebrow: "Referans proje",
    videoTitle: "Video turu",
    videoEmpty: "Proje videosu yakında",
    photoEyebrow: "Görsel",
    photoTitle: "Öne çıkan kare",
    heroPhotoAlt: "Referans villa — bahçe, havuz ve iç mekan",
    galleryLabel: "Proje Galerisi",
  },
  application: {
    eyebrow: "Yatırım Fırsatı",
    title: "Başvuru",
    titleItalic: "Formu",
    body:
      "Lamos Prime Villas yatırım fırsatı hakkında detaylı bilgi almak, yerinde ziyaret planlamak veya rezervasyon yapmak için formu doldurun. Ekibimiz en kısa sürede sizinle iletişime geçecektir.",
    bullets: [
      "Sınırlı sayıda 7 özel villa",
      "Kişiye özel yatırım danışmanlığı",
      "Yerinde ziyaret imkanı",
      "Esnek ödeme planları",
    ],
    successTitle: "Başvurunuz Alındı",
    successBody:
      "Ekibimiz en kısa sürede sizinle iletişime geçecektir. Lamos Prime Villas ailesine hoş geldiniz.",
    namePh: "Adınız Soyadınız",
    emailPh: "E-posta Adresiniz",
    phonePh: "Telefon Numaranız",
    budgetPh: "Yatırım Bütçeniz",
    messagePh: "Mesajınız (isteğe bağlı)",
    submit: "Başvuru Gönder",
    privacy:
      "Bilgileriniz gizli tutulacak ve sadece yatırım danışmanlığı amacıyla kullanılacaktır.",
  },
  cover: {
    eyebrow: "Özel Yatırım Fırsatı",
    location: "Sayan, Ubud — Bali, Endonezya",
    pill1: "7 Villa",
    pill2: "2+1 - 3+1",
    pill3: "Özel Havuzlu",
    tagline:
      "Dünyanın En Güçlü Turizm Destinasyonlarından Birinde 7 Özel Tropikal Rezidans",
  },
  about: {
    subtitle: "Hakkımızda",
    title: "Bali Family",
    titleItalic: "World",
    p1: "Bali Family World, Bali'de yatırım, turizm ve danışmanlık alanlarında faaliyet gösteren, uluslararası yatırımcılara güvenli ve sürdürülebilir çözümler sunan bir yapıdır.",
    p2: "Yerel pazar bilgisi ile yatırımcı bakış açısını birleştirerek, doğru lokasyonlarda yüksek getirili projeler geliştiriyoruz.",
    p3: "Arsa seçiminden inşaat sürecine, satış ve kiralama yönetimine kadar tüm süreci uçtan uca yönetirken; şirket kurulumu ve oturum izinleri gibi konularda da profesyonel danışmanlık sağlıyoruz.",
    p4: "Amacımız, yatırımcıya yalnızca bir mülk değil, güvenli bir yatırım ve sürdürülebilir bir gelir modeli sunmaktır.",
  },
  contact: {
    eyebrow: "İletişim ve Kapanış",
    locationLine: "Sayan, Ubud, Bali, Endonezya",
  },
  slides: slidesContentTr,
  premiumVideo: {
    tapToPlay: "Oynatmak için dokunun",
    hd: "HD",
  },
  pdf: {
    preparingSlides: "Slaytlar hazırlanıyor…",
    loadingAssets: "Görseller yükleniyor…",
    capturing: (n: number, total: number) => `Slayt ${n} / ${total} yakalanıyor…`,
    captureError: (n: number) => `Slayt ${n} yakalanamadı:`,
    buildingPdf: "PDF oluşturuluyor…",
    downloadFullTitle: "Tüm sunumu PDF olarak indir",
    downloadPricingTitle: "Finansal + fiyat PDF indir",
    downloadPdf: "PDF indir",
    pricingPdf: "Fiyat PDF",
    done: "Tamamlandı!",
    buildingHeading: "PDF oluşturuluyor",
  },
} as const;

export { translationsTr };

const translationsEn: TranslationTree = {
  nav: {
    projectGallery: "Project gallery",
    about: "About us",
    reference: "Reference project",
    application: "Application",
    contact: "Contact",
    selectLanguage: "Select language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAria: "Lamos Prime Villas — home",
  },
  common: {
    close: "Close",
    previous: "Previous",
    next: "Next",
    slide: "Slide",
  },
  gallery: {
    eyebrow: "Photo & video",
    title: "Project",
    titleItalic: "gallery",
    intro:
      "Swipe or tap the thumbnails. Watch the video in the same flow as the photos — tap an image for full screen.",
    label: "Gallery",
    videoTour: "Lamos Prime Villas",
    videoCaption: "Promotional video",
    videoEmptyEnv: "Add",
    videoEmptyHint: "to your .env file",
    videoUnavailableHint: "When the video URL is set in .env, it will play here.",
    expandVideo: "Open video large",
    videoPreview: "Video preview",
    images: [
      "Villa exterior and pool area",
      "Tropical landscaping and gardens",
      "Modern architectural details",
      "Resort and shared spaces",
      "Villa interior design",
      "Living spaces",
      "Architecture immersed in nature",
      "Surroundings and landscape",
      "Traditional Balinese touches",
    ],
  },
  reference: {
    eyebrow: "Completed project",
    title: "Reference",
    titleItalic: "project",
    body:
      "Our completed three-villa project in Canggu continues to deliver strong rental yields and capital appreciation for investors. The 2025 completion cycle is behind us and the project is delivered.",
    stats: {
      villas: "Villas",
      location: "Location",
      completion: "Completion",
      status: "Status",
      locationValue: "Canggu",
      completionValue: "2025",
      statusValue: "Delivered",
    },
    videoEyebrow: "Reference project",
    videoTitle: "Video tour",
    videoEmpty: "Project video coming soon",
    photoEyebrow: "Image",
    photoTitle: "Featured frame",
    heroPhotoAlt: "Reference villa — garden, pool and interior",
    galleryLabel: "Project gallery",
  },
  application: {
    eyebrow: "Investment opportunity",
    title: "Application",
    titleItalic: "form",
    body:
      "Fill out the form for details on the Lamos Prime Villas opportunity, to plan an on-site visit, or to reserve. Our team will contact you shortly.",
    bullets: [
      "Only 7 private villas",
      "Personalised investment advisory",
      "On-site visits available",
      "Flexible payment plans",
    ],
    successTitle: "Application received",
    successBody:
      "Our team will contact you shortly. Welcome to the Lamos Prime Villas family.",
    namePh: "Full name",
    emailPh: "Email address",
    phonePh: "Phone number",
    budgetPh: "Investment budget",
    messagePh: "Message (optional)",
    submit: "Submit application",
    privacy:
      "Your details are kept confidential and used only for investment advisory purposes.",
  },
  cover: {
    eyebrow: "Exclusive investment opportunity",
    location: "Sayan, Ubud — Bali, Indonesia",
    pill1: "7 villas",
    pill2: "2+1 – 3+1",
    pill3: "Private pool",
    tagline:
      "Seven private tropical residences in one of the world’s strongest tourism destinations",
  },
  about: {
    subtitle: "About us",
    title: "Bali Family",
    titleItalic: "World",
    p1: "Bali Family World operates across investment, tourism and advisory in Bali, offering international investors secure and sustainable solutions.",
    p2: "We combine local market insight with an investor mindset to develop high-yield projects in the right locations.",
    p3: "We manage the full journey from land selection and construction to sales and leasing, and advise on company setup and residency where needed.",
    p4: "Our goal is to offer not just a property, but a secure investment and a sustainable income model.",
  },
  contact: {
    eyebrow: "Contact & closing",
    locationLine: "Sayan, Ubud, Bali, Indonesia",
  },
  slides: slidesContentEn,
  premiumVideo: {
    tapToPlay: "Tap to play",
    hd: "HD",
  },
  pdf: {
    preparingSlides: "Preparing slides…",
    loadingAssets: "Loading assets…",
    capturing: (n: number, total: number) => `Capturing slide ${n} / ${total}…`,
    captureError: (n: number) => `Could not capture slide ${n}:`,
    buildingPdf: "Building PDF…",
    downloadFullTitle: "Download full deck as PDF",
    downloadPricingTitle: "Download financial + pricing PDF",
    downloadPdf: "Download PDF",
    pricingPdf: "Pricing PDF",
    done: "Done!",
    buildingHeading: "Building PDF",
  },
};

export { translationsEn };

export function getTranslations(locale: Locale): TranslationTree {
  return locale === "en" ? translationsEn : translationsTr;
}
