const sources = import.meta.glob('../assets/*.{png,jpg,jpeg,gif,svg,webp}', { eager: true, query: '?url', import: 'default' });
export const artwork = (name) => sources[`../assets/${name}`] ?? '';
