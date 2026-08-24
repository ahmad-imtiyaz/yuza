// Gate — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
export default function Gate() {
  return (
    <>
      <section className="sec" id="gate" data-cam="1">
        
        <div className="fg" data-fg="gate" aria-hidden="true">
          <span className="fg-el fg-wall" data-fg-in="left">
            <img src="/assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-pine" data-fg-in="right">
            <img src="/assets/foreground/png/pine-tree.webp" alt="" width="1024" height="1438" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-grass" data-fg-in="up">
            <img src="/assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async" />
          </span>
        </div>
        <div className="sec-head" data-rv="fade">
          <span className="k"><b>01</b> — The Sanmon</span><span className="rule"></span><span className="k jp">山門</span>
        </div>
        <div className="cards" id="gate-cards">
          <article className="card" data-rv="up" data-cursor>
            <div className="card-fr" data-frame>
              <img src="/assets/gate/photo-1.jpg" alt="Memory 1" loading="lazy" decoding="async" />
              <div className="card-lab"><b>First Meeting</b><span className="jp">出会い</span></div>
            </div>
          </article>
          <article className="card" data-rv="up" data-cursor>
            <div className="card-fr" data-frame>
              <img src="/assets/gate/photo-2.jpg" alt="Memory 2" loading="lazy" decoding="async" />
              <div className="card-lab"><b>First Walk</b><span className="jp">初散歩</span></div>
            </div>
          </article>
          <article className="card" data-rv="up" data-cursor>
            <div className="card-fr" data-frame>
              <img src="/assets/gate/photo-3.jpg" alt="Memory 3" loading="lazy" decoding="async" />
              <div className="card-lab"><b>The Promise</b><span className="jp">約束</span></div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
