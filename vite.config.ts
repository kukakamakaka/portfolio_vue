import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify' // Импорт плагина

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Включает tree-shaking
  ],
})