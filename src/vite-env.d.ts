/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONSTRUCTION_VIDEO_EMBED?: string;
  readonly VITE_ARCHITECTURE_VIDEO_EMBED?: string;
  readonly VITE_REFERENCE_VIDEO_EMBED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "figma:asset/*" {
  const src: string;
  export default src;
}
