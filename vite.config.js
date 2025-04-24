// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensure this matches your GitHub Pages repo name
  plugins: [react()],
  build: {
    outDir: 'build', // Ensure the build output directory is set correctly
  },
});
