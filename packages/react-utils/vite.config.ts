import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      // 빌드 시 src/index.ts을 시작점으로
      entry: resolve(__dirname, 'src/index.ts'),
      // 빌드 이름
      name: '@musma/react-utils',
      formats: ['es', 'umd'],
      // 빌드 결과물 파일 이름
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'luxon'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          luxon: 'Luxon',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: 'src', replacement: resolve('src') }],
  },
  plugins: [visualizer(), react(), dts()],
})
