import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetPlugin(): Plugin {
  const FIGMA_PREFIX = 'figma:asset/'

  return {
    name: 'figma-asset-resolver',
    resolveId(source) {
      if (source.startsWith(FIGMA_PREFIX)) {
        const filename = source.slice(FIGMA_PREFIX.length)
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
