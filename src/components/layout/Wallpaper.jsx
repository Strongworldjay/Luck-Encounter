import { artwork } from '../../utils/artwork.js';
export default function Wallpaper({ dark }) {
  const name = dark ? 'wallpapernight' : 'wallpaperday';
  const desktop = artwork(`${name}.png`);
  const mobile = artwork(`${name}mobile.png`) || desktop;
  // Keep the theme background until the user's wallpaper files are supplied.
  if (!desktop && !mobile) return null;
  return <picture className="app-wallpaper" aria-hidden="true">
    {mobile && <source media="(max-width: 720px)" srcSet={mobile} />}
    <img src={desktop || mobile} alt="" decoding="async" onError={(event) => { event.currentTarget.style.visibility = 'hidden'; }} onLoad={(event) => { event.currentTarget.style.visibility = ''; }} />
  </picture>;
}
