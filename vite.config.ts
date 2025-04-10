import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // or '0.0.0.0' to be accessible on your network
    port: 3000, // change to whatever port you want
    open: true, // optional: opens browser on dev start
  },
  build: {
    chunkSizeWarningLimit: 1000, // Keep this if needed

  },
});
