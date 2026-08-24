import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './kage/kage.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// world.js (dunia Three.js + logika scroll) dieksekusi SETELAH React
// selesai merender DOM — dia mencari elemen berdasarkan id.
import('./kage/world.js');
