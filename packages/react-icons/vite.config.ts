import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      // 빌드 시 src/index.ts을 시작점으로
      entry: resolve(__dirname, 'src/index.ts'),
      // 빌드 이름
      name: 'musma-react-icon',
      formats: ['es'],
      // 빌드 결과물 파일 이름
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [react(), dts(), visualizer({ open: false })],
})
