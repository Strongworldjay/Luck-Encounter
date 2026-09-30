import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
const publicDir = resolve('public');
function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [relative(publicDir, path).replaceAll('\\', '/')];
  });
}
export default defineConfig({
  plugins: [react()],
  define: { __PUBLIC_ART__: JSON.stringify(filesIn(publicDir)) },
  build: { rollupOptions: { output: { manualChunks(id) {
    if (id.includes('node_modules/react')) return 'vendor-react';
    const level = id.match(/data\/spells\/(cantrips|level\d)\.js/);
    if (level) return `spells-${level[1]}`;
  } } } },
});
