// Daftar semua foto kenangan — path relatif ke folder public/assets/garden/
// Tambahkan foto baru di sini; DriftWall (home) otomatis menampilkan sampel acak,
// halaman /gallery menampilkan semuanya.
import { classifyOrientation } from './photo-orient.js';

const PHOTOS = [
  { src: '/assets/garden/photo-1.jpg',  w: 1080, h: 1080 },
  { src: '/assets/garden/photo-2.jpg',  w: 736,  h: 736 },
  { src: '/assets/garden/photo-3.jpg',  w: 1200, h: 1200 },
  { src: '/assets/garden/photo-4.jpg',  w: 995,  h: 995 },
  { src: '/assets/garden/photo-5.jpg',  w: 1080, h: 883 },
  { src: '/assets/garden/photo-6.jpg',  w: 706,  h: 700 },
  { src: '/assets/garden/photo-7.jpg',  w: 736,  h: 736 },
  { src: '/assets/garden/photo-8.jpg',  w: 736,  h: 736 },
  { src: '/assets/garden/photo-9.jpg',  w: 225,  h: 225 },
  { src: '/assets/garden/photo-10.jpg', w: 736,  h: 736 },
  { src: '/assets/garden/photo-11.jpg', w: 736,  h: 736 },
  { src: '/assets/garden/photo-12.jpg', w: 736,  h: 736 },
  { src: '/assets/garden/photo-13.jpg', w: 690,  h: 690 },
  { src: '/assets/garden/photo-14.jpg', w: 736,  h: 736 },
  { src: '/assets/garden/photo-15.jpg', w: 736,  h: 736 },
  { src: '/assets/garden/photo-16.jpg', w: 690,  h: 590 },
  { src: '/assets/garden/photo-17.jpg', w: 736,  h: 736 },
  { src: '/assets/garden/photo-18.jpg', w: 736,  h: 736 },
  { src: '/assets/garden/photo-19.jpg', w: 736,  h: 736 },
  { src: '/assets/garden/photo-20.jpg', w: 1000, h: 1000 },
  { src: '/assets/garden/f718c8fd266d67adb0278a9ea41494f9.jpg', w: 1080, h: 608 },
  { src: '/assets/garden/3733fbff6774ea8ad337d196d9d76a76.jpg', w: 1200, h: 675 },
  { src: '/assets/garden/5dac33a3902025ab28c66eeb23ad69e8.jpg', w: 1199, h: 674 },
  { src: '/assets/garden/4b86f9cc3484df2cf38a600931de8fa3.jpg', w: 735, h: 488 },
];

export const GARDEN_PHOTOS = PHOTOS.map(({ src, w, h }, i) => ({
  image: src,
  title: `Memory ${String(i + 1).padStart(2, '0')}`,
  w,
  h,
  ratio: w / h,
  orient: classifyOrientation(w / h),
}));
