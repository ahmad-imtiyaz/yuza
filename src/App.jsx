import Preloader from './components/Preloader.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Gate from './components/Gate.jsx';
import Pathways from './components/Pathways.jsx';
import Lessons from './components/Lessons.jsx';
import Eternity from './components/Eternity.jsx';
import Footer from './components/Footer.jsx';

// Struktur layer mengikuti referensi asli:
//   canvas#gl (WebGL, z-0) -> .page (konten scroll, z-10) -> vignette/grain/cursor (overlay atas)
// Semua id dipertahankan karena world.js mengikatnya langsung.
export default function App() {
  return (
    <>
      <canvas id="gl" aria-hidden="true"></canvas>

      <div id="vignette"></div>
      <div id="grain"></div>
      <div className="cur-dot" id="cursor"></div>

      <Preloader />
      <Nav />

      <div className="page" id="top">
        <Hero />
        <Gate />
        <Pathways />
        <Lessons />
        <Eternity />
        <Footer />
      </div>

      <div id="fg-sky" aria-hidden="true"></div>
      <div className="rail" id="rail"></div>
    </>
  );
}
