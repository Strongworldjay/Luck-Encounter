export const mdInlineToHtml = (md) => String(md ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>')
  .replace(/__([\s\S]*?)__/g, '<strong>$1</strong>')
  .replace(/\r\n|\r|\n/g, '<br/>');
export const featSlug = (name) => String(name ?? '').toLowerCase().trim().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
