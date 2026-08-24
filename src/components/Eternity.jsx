// Eternity — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
export default function Eternity() {
  return (
    <>
      <section className="sec fin" id="eternity" data-cam="4">
        
        <div className="fg" data-fg="eternity" aria-hidden="true">
          <span className="fg-el fg-hill" data-fg-in="up">
            <img src="/assets/foreground/png/hill.webp" alt="" width="1774" height="887" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-ruins" data-fg-in="left">
            <img src="/assets/foreground/png/shrine-ruins.webp" alt="" width="1536" height="1001" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-grass" data-fg-in="up">
            <img src="/assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-sakura" data-fg-in="left">
            <img src="/assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
          </span>
        </div>
        <div className="eyebrow" data-rv="fade">Chapter 04 — Afterlight</div>
        <h2 className="display" data-rv="up">Afterlight</h2>
        <p className="body-lg" data-rv="up">The gate does not close behind you. Take the walk whenever the noise
          gets loud — it is always the same path, and never the same light.</p>
        <a className="cta" href="#top" data-rv="fade" data-cursor>
          <i></i><span>Begin the walk</span>
          <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3"/></svg>
        </a>
      </section>
    </>
  );
}
