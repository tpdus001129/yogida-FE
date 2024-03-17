import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      // '/api/v1': 'http://localhost:5500',
      // '/images': 'http://localhost:5500',
      '/api/v1': 'https://port-0-yogida-am952nlsyy2nly.sel5.cloudtype.app',
      '/images': 'https://port-0-yogida-am952nlsyy2nly.sel5.cloudtype.app',
    },
  },
});
