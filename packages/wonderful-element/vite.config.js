import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path'

export default defineConfig({
  publicDir: false,
  plugins: [
    DefineOptions(),
    vue(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'wonderful-element',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
