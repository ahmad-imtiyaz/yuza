// Gate — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
import { useState, useEffect } from 'react';

export default function Gate() {
  const slides = [
    { src: '/assets/gate/photo-1.jpg', alt: 'First Meeting', jp: '出会い', en: 'First Meeting' },
    { src: '/assets/gate/photo-2.jpg', alt: 'First Walk', jp: '初散歩', en: 'First Walk' },
    { src: '/assets/gate/photo-3.jpg', alt: 'The Promise', jp: '約束', en: 'The Promise' },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

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
          <span className="k"><b>01</b> — Kansha</span><span className="rule"></span><span className="k jp">感謝</span>
        </div>
        <div className="gate-grid">
          <div className={`gate-slider is-on`} id="gate-slider" data-rv="up">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`gate-slide ${i === active ? 'is-active' : ''}`}
                data-cursor
                onClick={() => setActive(i)}
              >
                <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                <div className="gate-slide-lab">
                  <b>{s.en}</b><span className="jp">{s.jp}</span>
                </div>
              </div>
            ))}
            <div className="gate-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`gate-dot ${i === active ? 'is-active' : ''}`}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setActive(i)}
                ></button>
              ))}
            </div>
          </div>
          <div className="gate-copy">
            <h2 className="display h-sec" data-rv="up">Thank you for being in my life.</h2>
            <p className="lead" data-rv="up">Aku beruntung banget bisa kenal kamu dalam hidupku. Makasih udah mau main bareng, yang suka ngajak ngobrol santai tanpa alasan jelas, dan yang udah bantu aku upgrade versi diriku tanpa kamu sadari. Hal-hal kecil kayak gitu yang bikin aku ngerasa beruntung punya temen kayak kamu.</p>
            <p className="body" data-rv="up">Kamu juga salah satu alasan kenapa aku masih ada di Discord sampe sekarang. To be honest makasih juga udah bantu aku dapetin beberapa hal yang dulu rasanya gak bisa aku dapetin, sampe sekarang.</p>
            <a className="arrowlink" href="#pathways" data-rv="fade" data-cursor>
              <span>lihat-lihat foto yuu...</span>
              <span className="ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3"/></svg></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
