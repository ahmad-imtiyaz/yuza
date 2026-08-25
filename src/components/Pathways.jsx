// Pathways — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
import { useEffect, useState } from 'react';
import { GARDEN_PHOTOS } from '../photos.js';

const pickRandom = (count) => {
  const pool = [...GARDEN_PHOTOS];
  const out = [];
  while (out.length < count && pool.length > 0) {
    out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  }
  return out;
};

const CARD_META = [
  { lab: 'Memory', jp: '思ひ出', meta: 'Our moments', num: '01' },
  { lab: 'Memory', jp: '思ひ出', meta: 'Our moments', num: '02' },
  { lab: 'Memory', jp: '思ひ出', meta: 'Our moments', num: '03' },
];

export default function Pathways() {
  const [shots, setShots] = useState(() => pickRandom(3));
  const [blinkKey, setBlinkKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setShots(pickRandom(3));
      setBlinkKey((k) => k + 1);
    }, 4500);
    return () => clearInterval(id);
  }, []);

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
          {CARD_META.map((m, i) => (
            <article className="card" key={i} data-rv="up" data-view={i} data-cursor>
              <div className="card-fr">
                <img
                  key={`${blinkKey}-${i}`}
                  className="card-blink"
                  src={shots[i]?.image}
                  alt={`Memory ${m.num}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3"/></svg></span>
                <i className="glow" style={{ '--gx': '80.2%', '--gy': '23.9%', '--gr': '22%', '--gt': '6.1s', '--gt2': '9.7s', '--gc1': 'rgba(255,142,108,.50)', '--gc2': 'rgba(212,56,38,.24)' }}></i>
                <div className="card-lab"><b>{m.lab} {m.num}</b><span className="jp">{m.jp}</span></div>
              </div>
              <div className="card-meta"><span>{m.meta}</span><span>{m.num} / 03</span></div>
            </article>
          ))}
        </div>

        <div className="drift-more" data-rv="fade">
          <a className="cta-pill" href="/gallery" data-cursor>
            <span className="jp">写真</span>
            <b>lihat-lihat foto yuu...</b>
            <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3"/></svg>
          </a>
        </div>

      </section>
    </>
  );
}
