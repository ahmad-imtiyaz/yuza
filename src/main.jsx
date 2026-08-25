import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Gallery from './pages/Gallery.jsx';
import './kage/kage.css';
import './kage/gallery.css';

const isGallery = window.location.pathname.replace(/\/+$/, '') === '/gallery';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isGallery ? <Gallery /> : <App />}
  </StrictMode>,
);

// world.js (dunia Three.js + logika scroll) dieksekusi SETELAH React
// selesai merender DOM — dia mencari elemen berdasarkan id.
// Hanya di halaman utama; /gallery tidak memakai dunia Three.js.
if (!isGallery) import('./kage/world.js');
