import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './src/slide/Home';
import AllPage from './src/slide/AllPage';
import Navbar from './src/components/Navbar'; // Import Navbar

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
