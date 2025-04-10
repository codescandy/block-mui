import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js', // <== No hash
        chunkFileNames: 'assets/[name].js', // Optional: readable chunk names
        assetFileNames: 'assets/[name][extname]', // Optional: readable asset names
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
});
