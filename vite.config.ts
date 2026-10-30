import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// استبدال الإعداد الافتراضي لإلغاء أي اعتماد على TanStack Start أثناء البناء على Vercel
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});