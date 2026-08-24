// Preloader — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
export default function Preloader() {
  return (
    <>
      <div id="pre">
        <div className="pre-in">
          <div className="pre-mark">
            <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <circle cx="22" cy="24" r="9.5" stroke="#e0231c" strokeWidth="1.2"/>
              <path d="M6 12h32M9.5 17h25M22 8v28" stroke="#dfe7e0" strokeWidth="1.2"/>
            </svg>
          </div>
          <div className="pre-jp jp">影の道</div>
          <div className="pre-bar"><i id="pre-fill"></i></div>
          <div className="pre-meta">
            <span>Raising the mountain temple</span><b><span id="pre-pct">0</span>%</b>
          </div>
        </div>
      </div>
    </>
  );
}
