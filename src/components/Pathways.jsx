// Pathways — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
import { useEffect, useState } from 'react';
import DriftWall from './DriftWall.jsx';
import { GARDEN_PHOTOS } from '../photos.js';

function useResponsiveTiles() {
  const get = () => {
    if (typeof window === 'undefined') return { columns: 3, tileWidth: 220, tileHeight: 290 };
    const w = window.innerWidth;
    if (w < 640) return { columns: 2, tileWidth: Math.round(w * 0.36), tileHeight: Math.round(w * 0.48) };
    if (w < 1080) return { columns: 3, tileWidth: 170, tileHeight: 224 };
    return { columns: 3, tileWidth: 220, tileHeight: 290 };
  };
  const [tiles, setTiles] = useState(get);
  useEffect(() => {
    const onResize = () => setTiles(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return tiles;
}

export default function Pathways() {
  const items = GARDEN_PHOTOS;
  const tiles = useResponsiveTiles();
  const [preview, setPreview] = useState(null);

  const openPreview = (item) => setPreview(item);
  const closePreview = () => {
    setPreview(null);
    if (typeof window !== 'undefined' && window.__driftWallResume) window.__driftWallResume();
  };

  // esc untuk tutup preview
  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => { if (e.key === 'Escape') closePreview(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  return (
    <>
      <section className="sec" id="pathways" data-cam="2">

        <div className="fg" data-fg="pathways" aria-hidden="true">
          <span className="fg-el fg-sakura fg-el--sway" data-fg-in="left">
            <img src="/assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-leaves fg-el--sway" data-fg-in="right">
            <img src="/assets/foreground/png/maple-leaves.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-lantern" data-fg-in="up">
            <img src="/assets/foreground/png/stone-lantern.webp" alt="" width="1024" height="1499" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-bush" data-fg-in="up">
            <img src="/assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async" />
          </span>
        </div>
        <div className="sec-head" data-rv="fade">
          <span className="k"><b>02</b> — Still Gardens</span><span className="rule"></span><span className="k jp">庭園</span>
        </div>

        <div className="drift-wrap" data-rv="fade">
          <DriftWall
            items={items}
            onTileClick={openPreview}
            pauseOnHover={true}
            dim={0.5}
            fade={0.7}
            radius={14}
            {...tiles}
          />
        </div>

        <div className="drift-more" data-rv="fade">
          <a className="arrowlink" href="/gallery" data-cursor>
            <span>lihat seluruh kenangan...</span>
            <span className="ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3"/></svg></span>
          </a>
        </div>

      </section>

      {preview && (
        <div className="pv-backdrop" onClick={closePreview}>
          <figure className="pv-card" onClick={(e) => e.stopPropagation()}>
            <button className="pv-close" aria-label="Close" onClick={closePreview}>
              <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M2 2l10 10M12 2 2 12" stroke="#dfe7e0" strokeWidth="1.3"/></svg>
            </button>
            <div className="pv-fr">
              <img src={preview.image} alt={preview.title ?? ''} decoding="async" />
            </div>
            <figcaption className="pv-cap">
              <b>{preview.title}</b><span className="jp">思ひ出</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
