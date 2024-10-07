/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ghpages-test-action',
  plugins: [react()],
  test: {
    exclude: ['e2e', 'node_modules'],
  },
});
