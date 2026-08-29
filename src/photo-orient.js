import { useEffect, useState } from 'react';

// Analisis orientasi foto dari rasio dimensi piksel aslinya (width / height).
// Dipakai supaya tiap kartu bisa ikut bentuk fotonya — portrait, landscape,
// atau square — sehingga tidak ada crop. Bisa dipakai di build time
// (baking photos.js) maupun runtime (probe + hook).

// Threshold rasio untuk mengklasifikasi orientasi.
export const PORTRAIT_MAX = 0.95; // rasio < 0.95  -> portrait
export const LANDSCAPE_MIN = 1.05; // rasio > 1.05  -> landscape

export function classifyOrientation(ratio) {
  if (!ratio || !isFinite(ratio)) return 'square';
  if (ratio > LANDSCAPE_MIN) return 'landscape';
  if (ratio < PORTRAIT_MAX) return 'portrait';
  return 'square';
}

const probeCache = new Map(); // src -> Promise<{ w, h, ratio, orient } | null>

// Baca dimensi piksel asli foto secara async (dengan cache per-src).
export function probeImage(src) {
  if (!src) return Promise.resolve(null);
  if (probeCache.has(src)) return probeCache.get(src);
  const p = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const w = img.naturalWidth || 0;
      const h = img.naturalHeight || 0;
      const ratio = w && h ? w / h : 1;
      resolve({ w, h, ratio, orient: classifyOrientation(ratio) });
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
  probeCache.set(src, p);
  return p;
}

// Hook: berikan orientasi + rasio foto. Langsung pakai data yang sudah ada
// (fallback), lalu diperbarui setelah probe runtime selesai (berguna kalau
// suatu foto belum punya w/h di photos.js).
export function useImageOrient(src, fallbackOrient = 'square', fallbackRatio = 1) {
  const [orient, setOrient] = useState(fallbackOrient);
  const [ratio, setRatio] = useState(fallbackRatio);
  useEffect(() => {
    let alive = true;
    probeImage(src).then((r) => {
      if (alive && r) {
        setOrient(r.orient);
        setRatio(r.ratio);
      }
    });
    return () => {
      alive = false;
    };
  }, [src, fallbackRatio]);
  return { orient, ratio };
}
