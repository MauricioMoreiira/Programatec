import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const ORIGIN_PLACEHOLDER = '__SITE_ORIGIN__'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://programatec.com.br').replace(/\/+$/, '')

  return {
    plugins: [
      react(),
      {
        name: 'html-site-origin',
        transformIndexHtml(html) {
          return html.replaceAll(ORIGIN_PLACEHOLDER, siteUrl)
        },
      },
    ],
  }
})
