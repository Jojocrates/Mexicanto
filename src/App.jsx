import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Galeria from "./pages/Galeria";
import Juego from "./pages/Juego";
import Contacto from "./pages/Contacto";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Toaster position="top-right" reverseOrder={false} />
    </Router>
  );
}
