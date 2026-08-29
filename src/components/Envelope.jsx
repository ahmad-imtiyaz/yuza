import { useEffect, useState } from 'react';
import './Envelope.css';

// Amplop gaya hongbao (Tionghoa) yang harus dibuka: klik amplop -> flap
// berputar, surat (art text emas) meluncur keluar berisi pesan.
// Teks surat mudah diedit di bagian .env-letter di bawah.
export default function Envelope({ open, onClose }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (open) {
      setOpened(false);
      document.body.classList.add('is-locked');
    } else {
      document.body.classList.remove('is-locked');
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [open, onClose]);

  const openIt = (e) => {
    e.stopPropagation();
    if (!opened) setOpened(true);
  };

  return (
    <div
      className={`env-overlay${open ? ' is-open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Surat untuk Ayu"
    >
      <button className="env-close" aria-label="Tutup" onClick={(e) => { e.stopPropagation(); onClose(); }}>
        &times;
      </button>

      <div className={`env${opened ? ' is-opened' : ''}`} onClick={openIt}>
        <div className="env-back" aria-hidden="true" />

        <div className="env-letter">
          <span className="env-to">Untuk Ayu</span>
          <p className="env-hero">Terima kasih sudah memberiku kesempatan kedua</p>
          <p className="env-sub">untuk memperbaiki semuanya.</p>
          <p className="env-ps">
            Meninggalkan Discord dan kalian ternyata bukan pilihan terbaik &mdash;
            aku bersyukur masih di sini.
          </p>
          <span className="env-sign">&mdash; dengan tulus, aku</span>
        </div>

        <div className="env-pocket" aria-hidden="true" />

        <button className="env-flap" aria-label="Buka amplop" onClick={openIt}>
          <span className="env-seal" aria-hidden="true">&#31150;</span>
        </button>

        {!opened && <span className="env-hint">Ketuk amplopnya untuk membuka</span>}
      </div>
    </div>
  );
}
