import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Flipcard/', // Adjust this if the deployment URL is different
  build: {
    rollupOptions: {
      output: {
        // Ensure assets are copied to the right directory when building
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
});
