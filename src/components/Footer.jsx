import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-600">© 2025 Agenda de Estudio Online</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}