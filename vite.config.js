import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/react')) return 'vendor-react';
          if (id.includes('/src/data/spells/cantrips.js')) return 'spells-cantrips';
          const level = id.match(/\/src\/data\/spells\/level(\d)\.js$/)?.[1];
          if (level) return `spells-level-${level}`;
          if (id.includes('/src/data/itemsData.js')) return 'items-catalog';
          return undefined;
        },
      },
    },
  },
});
