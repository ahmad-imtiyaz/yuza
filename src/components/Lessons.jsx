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
          <p className="body-lg" data-rv="up">Mungkin kata orang-orang tiga pertanyaan ini bisa dibilang sangat sederhana,
            namun menurutku pertanyaan-pertanyaan seperti inilah yang membuat kita bisa lebih dekat
            dan mengenal satu sama lain.</p>
        </div>
        <div className="cur" id="cur">
          <div className="les" data-les="0" data-cursor>
            <span className="k">01</span>
            <h3>Tiga lagu yang kamu suka<em className="jp">音楽</em></h3>
            <div className="les-body">
              <div className="les-txt">
                <p>Tiga lagu ini punya satu kesamaan: semuanya terasa seperti soundtrack untuk seseorang yang punya hati lembut, romantis, dan sedikit nostalgic. "Until I Found You" dari Stephen Sanchez membawa vibe cinta klasik yang hangat, seperti menemukan seseorang yang membuat dunia terasa lebih tenang. "Blue" dari yung kai terasa lebih dreamy, intimate, dan sedikit melankolis, cocok untuk orang yang suka menikmati perasaan secara diam-diam. Sementara "I Need You Most of All", juga dari Stephen Sanchez, punya nuansa rindu yang lebih dalam, seperti seseorang yang benar-benar tahu siapa yang paling berarti baginya.</p>
                <p>Menariknya, selera ini bukan sekadar suka lagu yang enak didengar. Ini tipe musik yang biasanya dipilih orang yang menghargai perasaan, detail kecil, dan suasana. Dari tiga lagu ini terasa sekali bahwa dia bukan cuma mendengarkan lagu, tapi benar-benar ikut merasakan ceritanya.</p>
              </div>
              <figure className="les-shot">
                <img src="/assets/ask/lagu.jpeg" alt="Screenshot jawaban Zee — lagu favorit" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
          <div className="les" data-les="1" data-cursor>
            <span className="k">02</span>
            <h3>Hewan favorit kamu apa?<em className="jp">動物</em></h3>
            <div className="les-body">
              <div className="les-txt">
                <p>Tau gasii, ternyata suka hewan itu bisa jadi bocoran kepribadian juga. Red panda, si penyendiri manis di dahan-dahan tinggi yang pendiam tapi penasaran. Kucing yang independen, dekat secukupnya tapi tetap jaga jarak. Rubah yang lincah dan cerdik, selalu punya cara sendiri buat bertahan. Tiga-tiganya sama-sama bukan tipe yang gampang ditebak, tapi begitu didekati ternyata punya sisi lembut yang bikin susah move on. Dan ternyata, dari semua itu, hewan favoritnya jatuh ke red panda, si kecil pendiam yang diam-diam paling gampang bikin orang jatuh hati.</p>
              </div>
              <figure className="les-shot">
                <img src="/assets/ask/hewan.jpeg" alt="Screenshot jawaban Zee — hewan favorit" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
          <div className="les" data-les="2" data-cursor>
            <span className="k">03</span>
            <h3>Cita-citamu masa depan mau jadi apa?<em className="jp">夢</em></h3>
            <div className="les-body">
              <div className="les-txt">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
