import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: 'http://api-kiosk-dev.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
    port: 3000,
    host: true,
  },
});
