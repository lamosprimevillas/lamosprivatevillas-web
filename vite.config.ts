import { defineConfig, loadEnv, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * WhatsApp / Facebook OG tarayıcıları göreli og:image URL’sini güvenilir çözmez.
 * index.html içinde __LAMOS_SITE_ORIGIN__ → canlı site kökü (sondaki / yok).
 */
function siteOriginMetaPlugin(mode: string): Plugin {
  return {
    name: 'site-origin-meta',
    transformIndexHtml(html) {
      const env = loadEnv(mode, process.cwd(), '')
      const origin = (env.VITE_SITE_ORIGIN || 'https://www.lamosprimevillas.com').replace(
        /\/$/,
        '',
      )
      return html.replaceAll('__LAMOS_SITE_ORIGIN__', origin)
    },
  }
}

function figmaAssetPlugin(): Plugin {
  const FIGMA_PREFIX = 'figma:asset/'

  return {
    name: 'figma-asset-resolver',
    resolveId(source) {
      if (source.startsWith(FIGMA_PREFIX)) {
        const filename = source.slice(FIGMA_PREFIX.length)
        const webpFilename = filename.replace(/\.png$/, '.webp')
        return path.resolve(__dirname, 'src/assets', webpFilename)
      }
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
    siteOriginMetaPlugin(mode),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
}))
