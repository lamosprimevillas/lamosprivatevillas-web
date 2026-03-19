import { useEffect } from "react";

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

export function useSequentialPreload(images: string[]) {
  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (const src of images) {
        if (cancelled) break;
        await preloadImage(src);
      }
    }

    run();
    return () => { cancelled = true; };
  }, []);
}
