// Pathways — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
export default function Pathways() {
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
        <div className="cards" id="cards">
          <article className="card" data-rv="up" data-view="0" data-cursor>
            <div className="card-fr" data-frame>
                      <span className="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3"/></svg></span>
              <i className="glow" style={{ '--gx': '80.2%', '--gy': '23.9%', '--gr': '22%', '--gt': '6.1s', '--gt2': '9.7s', '--gc1': 'rgba(255,142,108,.50)', '--gc2': 'rgba(212,56,38,.24)' }}></i>
              <div className="card-lab"><b>Approach</b><span className="jp">参道</span></div>
            </div>
            <div className="card-meta"><span>The long climb</span><span>01 / 03</span></div>
          </article>
          <article className="card" data-rv="up" data-view="1" data-cursor>
            <div className="card-fr" data-frame>
                      <span className="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3"/></svg></span>
              <i className="glow glow--flame" style={{ '--gx': '70.5%', '--gy': '47.2%', '--gr': '14%', '--gt': '3.7s', '--gt2': '5.3s', '--gc1': 'rgba(255,198,124,.62)', '--gc2': 'rgba(226,118,40,.30)' }}></i>
              <div className="card-lab"><b>Lanterns</b><span className="jp">灯籠</span></div>
            </div>
            <div className="card-meta"><span>Lantern court</span><span>02 / 03</span></div>
          </article>
          <article className="card" data-rv="up" data-view="2" data-cursor>
            <div className="card-fr" data-frame>
                      <span className="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3"/></svg></span>
              <i className="glow" style={{ '--gx': '48.0%', '--gy': '16.8%', '--gr': '20%', '--gt': '7.3s', '--gt2': '11.2s', '--gc1': 'rgba(255,138,104,.52)', '--gc2': 'rgba(208,54,36,.24)' }}></i>
              <div className="card-lab"><b>Moonwater</b><span className="jp">月影</span></div>
            </div>
            <div className="card-meta"><span>The wet court</span><span>03 / 03</span></div>
          </article>
        </div>
      </section>
    </>
  );
}
