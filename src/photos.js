// Daftar semua foto kenangan — path relatif ke folder public/assets/garden/
// Tambahkan foto baru di sini; DriftWall (home) otomatis menampilkan sampel acak,
// halaman /gallery menampilkan semuanya.
const PHOTOS = [
  '/assets/garden/photo-1.jpg',
  '/assets/garden/photo-2.jpg',
  '/assets/garden/photo-3.jpg',
  '/assets/garden/photo-4.jpg',
  '/assets/garden/photo-5.jpg',
  '/assets/garden/photo-7.jpg',
  '/assets/garden/photo-8.jpg',
  '/assets/garden/photo-9.jpg',
  '/assets/garden/photo-10.jpg',
];

export const GARDEN_PHOTOS = PHOTOS.map((src, i) => ({
  image: src,
  title: `Memory ${String(i + 1).padStart(2, '0')}`,
}));
