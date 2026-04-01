/**
 * YouTube iframe için tek tip embed URL’si.
 * Shorts / watch / nocookie / kısa ID — hepsinden 11 karakterlik video ID çıkarılır.
 *
 * "Video unavailable" genelde şu yüzden olur (kodla düzeltilemez):
 * - YouTube Studio → İçerik → videoda "Yerleştirmeye izin ver" kapalı
 * - Video gizli veya kısıtlı
 */

const ID_11 = /^[a-zA-Z0-9_-]{11}$/;

export function extractYoutubeVideoId(input: string): string | null {
  const s = input.trim();
  if (!s) return null;
  if (ID_11.test(s)) return s;

  try {
    const u = new URL(s);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      return ID_11.test(id) ? id : null;
    }

    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      const path = u.pathname;
      if (path.startsWith("/embed/")) {
        const id = path.slice("/embed/".length).split("/")[0];
        return ID_11.test(id) ? id : null;
      }
      if (path.startsWith("/shorts/")) {
        const id = path.split("/")[2];
        return id && ID_11.test(id) ? id : null;
      }
      const v = u.searchParams.get("v");
      if (v && ID_11.test(v)) return v;
    }
  } catch {
    return null;
  }

  return null;
}

/** iframe src — www.youtube.com (Shorts dahil en sorunsuz varyant) */
export function buildYoutubeEmbedSrc(raw: string, opts?: { autoplay?: boolean }): string {
  const id = extractYoutubeVideoId(raw);
  if (!id) {
    try {
      return new URL(raw).toString();
    } catch {
      return raw;
    }
  }

  const u = new URL(`https://www.youtube.com/embed/${id}`);
  u.searchParams.set("rel", "0");
  u.searchParams.set("modestbranding", "1");
  u.searchParams.set("playsinline", "1");
  // autoplay kapalı: bazı tarayıcılarda Shorts + autoplay "unavailable" gösterebiliyor; kullanıcı oynatıra tıklar
  if (opts?.autoplay === true) {
    u.searchParams.set("autoplay", "1");
  }

  return u.toString();
}
