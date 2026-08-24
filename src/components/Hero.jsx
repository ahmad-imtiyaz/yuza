// Hero — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
export default function Hero() {
  return (
    <>
      <section className="hero" id="hero" data-cam="0">
        <div className="hero-top">
          <div className="eyebrow" data-rv="fade"><span className="dot"></span> Chapter 00 — The Hidden Gate</div>
          <h1 className="display h-hero">
            <span className="mask-line"><span>For Zee,</span></span>
            <span className="mask-line"><span>I still want to explore</span></span>
            <span className="mask-line"><span>the world with you</span></span>
          </h1>
          <p className="hero-sub body" data-rv="up">Thank you for being part of my story. This is for our memories — past, present, and the ones we'll make.</p>
        </div>
      
        <div className="hero-spacer"></div>
      
        <div className="hero-foot">
          <div className="hero-cue" data-rv="fade"><span>I'm glad I met you</span><span className="track"><i></i></span></div>
          <div className="hero-cue-jp" data-rv="fade"><span>出会えてよかった</span></div>
        </div>
      
        <a className="peek" href="#pathways" data-view="3" data-rv="fade" data-cursor aria-label="See the photos">
           
          <span className="peek-fr" data-frame></span>
          <span className="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#dfe7e0"/></svg></span>
          <span className="peek-cap"><b className="jp">写真を見る</b><i>See the photos...</i></span>
        </a>
      
        <div className="word-fb" aria-hidden="true">for zee</div>
      
        <div className="hero-side" data-rv="up">
          <span className="v jp">道連れ</span>
        </div>
      </section>
    </>
  );
}
