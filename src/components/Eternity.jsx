// Eternity — ported dari Kage landing page (threeui.com).
// Edit bebas: markup ini adalah tampilan; logika scroll/Three.js ada di src/kage/world.js
import { useState } from 'react';
import Envelope from './Envelope.jsx';

export default function Eternity() {
  const [envOpen, setEnvOpen] = useState(false);
  return (
    <>
      <section className="sec fin" id="eternity" data-cam="4">
        
        <div className="fg" data-fg="eternity" aria-hidden="true">
          <span className="fg-el fg-hill" data-fg-in="up">
            <img src="/assets/foreground/png/hill.webp" alt="" width="1774" height="887" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-ruins" data-fg-in="left">
            <img src="/assets/foreground/png/shrine-ruins.webp" alt="" width="1536" height="1001" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-grass" data-fg-in="up">
            <img src="/assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async" />
          </span>
          <span className="fg-el fg-sakura" data-fg-in="left">
            <img src="/assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
          </span>
        </div>
        <div className="eyebrow" data-rv="fade">Chapter 04 — Afterlight</div>
        <h2 className="display" data-rv="up">Afterlight</h2>
        <p className="body-lg" data-rv="up">Cahaya matahari tinggal sebentar lagi, dan aku harus pergi jauh darimu, mungkin kali ini jalan kita beneran berhenti di sini. Tapi sebelum gerbang itu tertutup, aku pengen kita merayakan satu hal lagi. Ingat project yang kita bener bener tunggu hasilnya? Yes betull kamu mendapatkan nya zee, sekali lagi M E N D A P A T K A N N Y A. Itu bener bener lebih dari kabar baik untuk kita kali ini, itu bukti kamu bisa jalan terus maju ke level selanjutnya. Dan soal obrolan kita kemarin-kemarin yang, 'semoga ga in another life'… yaa, kalau beneran kita nggak ketemu lagi di dunia mana pun, setidaknya aku tinggalin <span className="firefly">afterlight</span> ini. Cahayanya akan terus nyala, walaupun aku sudah pergi.</p>
        <button className="cta" type="button" onClick={() => setEnvOpen(true)} data-rv="fade" data-cursor>
          <i></i>
          <span className="cta-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
              <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M3 8.5 12 14l9-5.5" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </span>
          <span>Sealed for Ayu</span>
        </button>
      </section>

      <Envelope open={envOpen} onClose={() => setEnvOpen(false)} />
    </>
  );
}
