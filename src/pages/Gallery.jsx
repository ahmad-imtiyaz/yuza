import { useEffect, useState } from 'react';
import DriftWall from '../components/DriftWall.jsx';
import { GARDEN_PHOTOS } from '../photos.js';

// Halaman /gallery — DriftWall interaktif + grid seluruh kenangan.
function useResponsiveTiles() {
  const get = () => {
    if (typeof window === 'undefined') return { columns: 3, tileWidth: 220, tileHeight: 290 };
    const w = window.innerWidth;
    if (w < 640) return { columns: 2, tileWidth: Math.round(w * 0.36), tileHeight: Math.round(w * 0.48) };
    if (w < 1080) return { columns: 4, tileWidth: 140, tileHeight: 185 };
    return { columns: 5, tileWidth: 175, tileHeight: 230 };
  };
  const [tiles, setTiles] = useState(get);
  useEffect(() => {
    const onResize = () => setTiles(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return tiles;
}

const PAGE_SIZE = 9;

export default function Gallery() {
  const [preview, setPreview] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState(1);
  const tiles = useResponsiveTiles();

  const pageCount = Math.max(1, Math.ceil(GARDEN_PHOTOS.length / PAGE_SIZE));
  const pagePhotos = GARDEN_PHOTOS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goToPage = (p) => {
    setPage(Math.min(Math.max(1, p), pageCount));
    document.querySelector('.gallery-grid-head')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const closeMenu = () => setMenuOpen(false);

  const closePreview = () => {
    setPreview(null);
    if (typeof window !== 'undefined' && window.__driftWallResume) window.__driftWallResume();
  };

  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => { if (e.key === 'Escape') closePreview(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <div className="gallery-page">
      <canvas id="gl" aria-hidden="true"></canvas>
      <div id="vignette"></div>
      <div id="grain"></div>
      <div className="cur-dot" id="cursor"></div>

      <header className={`nav${menuOpen ? ' menu-open' : ''}`} id="nav">
        <a className="brand" href="/" data-cursor>
          <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <circle cx="22" cy="25" r="8.6" fill="#e0231c" fillOpacity=".9"/>
            <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" strokeWidth="1.5"/>
            <path d="M14 35.5h16" stroke="#dfe7e0" strokeWidth="1.2" strokeOpacity=".6"/>
          </svg>
          <span className="brand-tx"><b>YUZA</b><i>my tomodachi :3</i></span>
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="/" data-cursor onClick={closeMenu}><span>Kembali</span><span className="alt">帰る</span></a>
        </nav>
        <button
          className={`nav-burger${menuOpen ? ' active' : ''}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          data-cursor
          onClick={() => setMenuOpen((v) => !v)}
        ><i></i><i></i></button>
      </header>

      <div className="page gallery-body">
        <div className="sec-head">
          <span className="k"><b>02</b> — Still Gardens</span><span className="rule"></span><span className="k jp">庭園</span>
        </div>

        <p className="body gallery-intro">
          Semua kenangan kita di satu tempat. Arahkan kursor untuk melihat lebih dekat,
          klik fotonya untuk melihat lebih jelas.
        </p>

        <div className="drift-wrap">
          <DriftWall
            items={GARDEN_PHOTOS}
            onTileClick={(item) => setPreview(item)}
            pauseOnHover={true}
            dim={0.5}
            fade={0.7}
            radius={14}
            {...tiles}
          />
        </div>

        <div className="sec-head gallery-grid-head">
          <span className="k"><b>全て</b> — Semua Kenangan</span><span className="rule"></span><span className="k jp">全部</span>
        </div>

        <div className="gallery-grid">
          {pagePhotos.map((p) => (
            <figure className="g-card" key={p.image} onClick={() => setPreview(p)} data-cursor>
              <div className="g-fr">
                <img src={p.image} alt={p.title ?? ''} loading="lazy" decoding="async" />
                <i className="g-glow" aria-hidden="true"></i>
              </div>
              <figcaption className="g-cap"><b>{p.title}</b></figcaption>
            </figure>
          ))}
        </div>

        {pageCount > 1 && (
          <nav className="pager" aria-label="Halaman galeri">
            <button className="pager-btn" disabled={page === 1} onClick={() => goToPage(page - 1)} data-cursor>←</button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                className={`pager-num${n === page ? ' is-on' : ''}`}
                aria-current={n === page ? 'page' : undefined}
                onClick={() => goToPage(n)}
                data-cursor
              >{String(n).padStart(2, '0')}</button>
            ))}
            <button className="pager-btn" disabled={page === pageCount} onClick={() => goToPage(page + 1)} data-cursor>→</button>
          </nav>
        )}
      </div>

      {preview && (
        <div className="pv-backdrop" onClick={closePreview}>
          <figure className="pv-card" onClick={(e) => e.stopPropagation()}>
            <button className="pv-close" aria-label="Close" onClick={closePreview}>
              <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M2 2l10 10M12 2 2 12" stroke="#dfe7e0" strokeWidth="1.3"/></svg>
            </button>
            <div className="pv-fr">
              <img src={preview.image} alt={preview.title ?? ''} decoding="async" />
              <i className="pv-glow" aria-hidden="true"></i>
            </div>
            <figcaption className="pv-cap">
              <b>{preview.title}</b><span className="jp">思ひ出</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
