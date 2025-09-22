import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-red-600">
          Turismo Cultural México
        </h1>
        <ul className="flex space-x-6 text-gray-800 font-medium">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/destinos">Destinos</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li><Link to="/juego">Juego</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
