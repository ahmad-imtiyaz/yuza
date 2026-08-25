// Lessons — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
export default function Lessons() {
  return (
    <>
      <section className="sec" id="lessons" data-cam="3">
        
        <div className="fg" data-fg="lessons" aria-hidden="true">
          <span className="fg-el fg-wall fg-el--flip" data-fg-in="right">
            <img src="/assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-stones" data-fg-in="up">
            <img src="/assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-grass" data-fg-in="up">
            <img src="/assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async" />
          </span>
        </div>
        <div className="sec-head" data-rv="fade">
          <span className="k"><b>03</b> — Sacred Craft</span><span className="rule"></span><span className="k jp">手業</span>
        </div>
        <div className="cur-head">
          <h2 className="display h-sec" data-rv="up">About Zee</h2>
          <p className="body-lg" data-rv="up">Tiga pertanyaan sederhana, dijawab langsung oleh orangnya.
            Jawaban asli, tanpa diedit — persis seperti dia menjawab di Discord.</p>
        </div>
        <div className="cur" id="cur">
          <div className="les" data-les="0" data-cursor>
            <span className="k">01</span>
            <h3>Tiga lagu yang kamu suka<em className="jp">音楽</em></h3>
            <p>Aku tanya, dia jawab. Ini playlist hatinya, versi asli.</p>
            <figure className="les-shot">
              <img src="/assets/zee/qa-1.jpg" alt="Screenshot jawaban Zee — lagu favorit" loading="lazy" decoding="async" />
            </figure>
          </div>
          <div className="les" data-les="1" data-cursor>
            <span className="k">02</span>
            <h3>Hewan favorit kamu apa?<em className="jp">動物</em></h3>
            <p>Jawaban yang bikin aku makin kenal dia.</p>
            <figure className="les-shot">
              <img src="/assets/zee/qa-2.jpg" alt="Screenshot jawaban Zee — hewan favorit" loading="lazy" decoding="async" />
            </figure>
          </div>
          <div className="les" data-les="2" data-cursor>
            <span className="k">03</span>
            <h3>Cita-citamu masa depan mau jadi apa?<em className="jp">夢</em></h3>
            <p>Dan yang terakhir — mimpinya untuk hari-hari yang akan datang.</p>
            <figure className="les-shot">
              <img src="/assets/zee/qa-3.jpg" alt="Screenshot jawaban Zee — cita-cita" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
