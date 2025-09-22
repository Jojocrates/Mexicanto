import React from "react";

const Galeria = () => {
  return (
    <section className="py-12 bg-[#fff9f3]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#003c47]">Galería Cultural</h2>
        <p className="mt-2 text-gray-600">
          Una colección visual de los tesoros culturales y paisajes únicos de México
        </p>
      </div>

      {/* Galería */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Imagen 1 */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src= "/imagenes/holbox.jpg"
            alt="Holbox"
            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 2 */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/imagenes/cdmx.jpg"
            alt="Ciudad de México"
            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 3 */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/imagenes/acapulco.jpg"
            alt="Acapulco"
            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 4 */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/imagenes/chiapas.jpg"
            alt="Chiapas"
            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 5 */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/imagenes/tapalpa.jpg"
            alt="Tapalpa"
            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 6 */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/imagenes/maza.jpg"
            alt="Mazamitla"
            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default Galeria;
