// Lessons — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
import { useRef, useState, useLayoutEffect } from "react";

// Satu kartu "About Zee". Di mobile teks disembunyikan di bawah gambar dan
// dibuka dengan swipe horizontal (arah mengikuti sisi gambar di desktop:
// genap -> gambar kiri -> swipe kanan, ganjil -> gambar kanan -> swipe kiri),
// membuka seperti gulungan ninjutsu yang menggelar ke bawah.
function Lesson({ index, num, title, children }) {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef(null);
  const dragging = useRef(false);
  const axis = useRef(null); // "h" | "v" | null
  const start = useRef({ x: 0, y: 0 });
  const moved = useRef(false);
  const isMobile = useRef(false);

  // Sisi gambar mengikuti layout zigzag desktop (nth-child): genap -> kiri, ganjil -> kanan.
  const side = Number(index) % 2 === 1 ? "left" : "right";

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width:1080px)");
    const sync = () => { isMobile.current = mq.matches; };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onDown = (e) => {
    if (!isMobile.current) return;
    dragging.current = true;
    axis.current = null;
    moved.current = false;
    start.current = { x: e.clientX, y: e.clientY };
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    if (!axis.current) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return; // belum cukup gerak
      axis.current = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
      if (axis.current === "v") { dragging.current = false; return; } // biarkan scroll vertikal
    }
    if (axis.current !== "h") return;
    moved.current = true;
  };
  const onUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
    if (axis.current !== "h") { axis.current = null; return; }
    const dx = e.clientX - start.current.x;
    const dir = side === "left" ? 1 : -1; // swipe kanan jika gambar di kiri
    const prog = (dx * dir) / 55; // ambang 55px
    if (!revealed) {
      if (prog > 1) setRevealed(true);
    } else if (prog < -1) {
      setRevealed(false); // swipe berlawanan menutup kembali
    }
    axis.current = null;
  };
  const onClick = () => {
    if (moved.current) { moved.current = false; return; } // sisa swipe, abaikan
    if (!isMobile.current) return;
    setRevealed((r) => !r);
  };

  return (
    <div
      className={`les${revealed ? " is-revealed" : ""}`}
      data-les={index}
      data-img={side}
      data-cursor
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onClick={onClick}
    >
      <span className="k">{num}</span>
      <h3>{title}</h3>
      <div className="les-body">
        {children}
        <span className="les-hint" aria-hidden="true">
          <span className="les-hint-arrow">{side === "left" ? "→" : "←"}</span>
          Swipe to see all text
        </span>
      </div>
    </div>
  );
}

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
          <span className="k"><b>03</b> — Jiwa</span><span className="rule"></span><span className="k jp">心</span>
        </div>
        <div className="cur-head">
          <h2 className="display h-sec" data-rv="up">About Zee</h2>
          <p className="body-lg" data-rv="up">Mungkin kata orang-orang tiga pertanyaan ini bisa dibilang sangat sederhana,
            namun menurutku pertanyaan-pertanyaan seperti inilah yang membuat kita bisa lebih dekat
            dan mengenal satu sama lain.</p>
        </div>
        <div className="cur" id="cur">
          <Lesson index="0" num="01" title={<>Tiga lagu yang kamu suka<em className="jp">音楽</em></>}>
            <div className="les-txt" onClick={(e) => e.stopPropagation()}>
              <p>Tiga lagu ini punya satu kesamaan: semuanya terasa seperti soundtrack untuk seseorang yang punya hati lembut, romantis, dan sedikit nostalgic. "Until I Found You" dari Stephen Sanchez membawa vibe cinta klasik yang hangat, seperti menemukan seseorang yang membuat dunia terasa lebih tenang. "Blue" dari yung kai terasa lebih dreamy, intimate, dan sedikit melankolis, cocok untuk orang yang suka menikmati perasaan secara diam-diam. Sementara "I Need You Most of All", juga dari Stephen Sanchez, punya nuansa rindu yang lebih dalam, seperti seseorang yang benar-benar tahu siapa yang paling berarti baginya.</p>
              <p>Menariknya, selera ini bukan sekadar suka lagu yang enak didengar. Ini tipe musik yang biasanya dipilih orang yang menghargai perasaan, detail kecil, dan suasana. Dari tiga lagu ini terasa sekali bahwa dia bukan cuma mendengarkan lagu, tapi benar-benar ikut merasakan ceritanya.</p>
            </div>
            <figure className="les-shot">
              <img src="/assets/ask/lagu.jpeg" alt="Screenshot jawaban Zee — lagu favorit" loading="lazy" decoding="async" />
            </figure>
          </Lesson>
          <Lesson index="1" num="02" title={<>Hewan yang paling kamu sayangi<em className="jp">動物</em></>}>
            <div className="les-txt" onClick={(e) => e.stopPropagation()}>
              <p>Tau gasii, ternyata suka hewan itu bisa jadi bocoran kepribadian juga. Red panda, si penyendiri manis di dahan-dahan tinggi yang pendiam tapi penasaran. Kucing yang independen, dekat secukupnya tapi tetap jaga jarak. Rubah yang lincah dan cerdik, selalu punya cara sendiri buat bertahan. Tiga-tiganya sama-sama bukan tipe yang gampang ditebak, tapi begitu didekati ternyata punya sisi lembut yang bikin susah move on. Dan ternyata, dari semua itu, hewan favoritnya jatuh ke red panda, si kecil pendiam yang diam-diam paling gampang bikin orang jatuh hati.</p>
            </div>
            <figure className="les-shot">
              <img src="/assets/ask/hewan.jpeg" alt="Screenshot jawaban Zee — hewan favorit" loading="lazy" decoding="async" />
            </figure>
          </Lesson>
          <Lesson index="2" num="03" title={<>Cita-cita yang ingin kamu wujudkan<em className="jp">夢</em></>}>
            <div className="les-txt" onClick={(e) => e.stopPropagation()}>
              <p>Ternyata di balik satu cita-cita, ada dua sisi yang jalan bareng. Ada mimpi yang lahir dari suka, punya usaha sendiri semacam cafe atau dessert shop yang manis dan personal. Tapi ada juga sisi yang lebih jujur ke diri sendiri, melihat kemampuan yang sudah dipunya dan pelan-pelan condong ke dunia HR. Bukan karena menyerah pada mimpi yang tadi, tapi karena tahu mana yang paling masuk akal buat dikejar sekarang. Justru kombinasi kayak gini yang nunjukin orangnya nggak asal ngejar cita-cita yang kedengeran keren doang. Semogaa apa yang kamu kejar itu tercapai di kemudian hari, Zee.</p>
            </div>
            <div className="les-shots">
              <figure className="les-shot">
                <figcaption className="les-shot-cap">質問</figcaption>
                <img src="/assets/ask/masa-depan-1.jpeg" alt="Pertanyaan tentang cita-cita" loading="lazy" decoding="async" />
              </figure>
              <figure className="les-shot">
                <figcaption className="les-shot-cap">答え</figcaption>
                <img src="/assets/ask/masa-depan-2.jpeg" alt="Jawaban Zee — cita-cita" loading="lazy" decoding="async" />
              </figure>
            </div>
          </Lesson>
        </div>
      </section>
    </>
  );
}
