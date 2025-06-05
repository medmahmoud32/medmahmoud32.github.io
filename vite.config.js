import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/medmahmoud32/', // 👈 Key change
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('swiper')) return 'swiper'
            return
          }
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
      },
    },
  },
}))
