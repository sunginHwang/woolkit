import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),dts({
    insertTypesEntry: true,
  })],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    target: "esnext",
   // minify: 'esbuild', // SWC가 자체적으로 빠르게 변환하므로 추가적인 minify가 필요 없음
  },
})
