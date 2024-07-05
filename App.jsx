import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './src/slide/Home';
import AllPage from './src/slide/AllPage';
import Navbar from './src/components/Navbar'; // Import Navbar
import About from './src/slide/About';
import Galeriporto from './src/slide/Galeriporto';
import './index.css';  // Pastikan file CSS diimpor di sini
import FooterComponents from './src/components/FooterComponents';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Galeriporto" element={<Galeriporto />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
