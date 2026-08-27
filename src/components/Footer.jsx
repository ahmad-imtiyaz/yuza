// Footer — colophon penutup (Afterlight). Edit bebas.
// Dummy link columns dibuang; ini penutup buku yang personal untuk Zee.
export default function Footer() {
  return (
    <>
      <footer className="foot" data-cam="5">

        <div className="fg" data-fg="foot" aria-hidden="true">
          <span className="fg-el fg-bush" data-fg-in="up">
            <img src="/assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-grass" data-fg-in="up">
            <img src="/assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-stones" data-fg-in="up">
            <img src="/assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async" />
          </span>
        </div>

        <div className="colophon">
          <svg viewBox="0 0 44 44" fill="none" width="34" height="34" aria-hidden="true">
            <circle cx="22" cy="25" r="8.6" fill="#e0231c" fillOpacity=".9" />
            <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" strokeWidth="1.5" />
          </svg>
          <p className="colophon-title">Kage no Michi</p>
          <p className="colophon-note">Hadiah perpisahan untuk Zee. Gerbang ini tak pernah benar-benar tertutup — buka kembali kapan pun kamu rindu akan cahayanya.</p>
          <span className="jp colophon-jp">静けさは一つの技である</span>
          <a className="colophon-top" href="#top" data-cursor>Kembali ke awal ↑</a>
          <span className="colophon-meta">© 2026 · Untuk Zee</span>
        </div>
      </footer>
    </>
  );
}
