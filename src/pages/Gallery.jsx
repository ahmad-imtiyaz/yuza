import { useEffect, useState } from 'react';
import { GARDEN_PHOTOS } from '../photos.js';

// Halaman /gallery — seluruh kenangan dalam grid.
export default function Gallery() {
  const [preview, setPreview] = useState(null);

  const closePreview = () => setPreview(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => { if (e.key === 'Escape') closePreview(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  return (
    <div className="gallery-page">
      <canvas id="gl" aria-hidden="true"></canvas>
      <div id="vignette"></div>
      <div id="grain"></div>

      <header className="nav" id="nav">
        <a className="brand" href="/" data-cursor>
          <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <circle cx="22" cy="25" r="8.6" fill="#e0231c" fillOpacity=".9"/>
            <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" strokeWidth="1.5"/>
            <path d="M14 35.5h16" stroke="#dfe7e0" strokeWidth="1.2" strokeOpacity=".6"/>
          </svg>
          <span className="brand-tx"><b>YUZA</b><i>my tomodachi :3</i></span>
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="/" data-cursor><span>Kembali</span><span className="alt">帰る</span></a>
        </nav>
      </header>

      <div className="page gallery-body">
        <div className="sec-head" data-rv="fade">
          <span className="k"><b>02</b> — Still Gardens</span><span className="rule"></span><span className="k jp">庭園</span>
        </div>

        {GARDEN_PHOTOS.length === 0 ? (
          <p className="body">Belum ada foto — segera diisi.</p>
        ) : (
          <div className="gallery-grid">
            {GARDEN_PHOTOS.map((p) => (
              <figure className="g-card" key={p.image} data-rv="up" onClick={() => setPreview(p)} data-cursor>
                <div className="g-fr">
                  <img src={p.image} alt={p.title ?? ''} loading="lazy" decoding="async" />
                </div>
                <figcaption className="g-cap"><b>{p.title}</b></figcaption>
              </figure>
            ))}
          </div>
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
