export default function Destinos() {
  const destinos = [
    {
      nombre: "San Miguel de Allende",
      descripcion:
        "Ciudad colonial declarada Patrimonio de la Humanidad, famosa por su arquitectura barroca y ambiente artístico.",
      imagen: "/imagenes/san-miguel.jpg",
    },
    {
      nombre: "Taxco",
      descripcion:
        "Pueblo mágico conocido como la Capital Mundial de la Plata, con calles empedradas y arquitectura colonial.",
      imagen: "/imagenes/taxco.jpg",
    },
    {
      nombre: "Chichén Itzá",
      descripcion:
        "Una de las Nuevas Siete Maravillas del Mundo, centro ceremonial maya con la famosa pirámide de Kukulkán.",
      imagen: "/imagenes/chichen.jpg",
    },
    {
      nombre: "Teotihuacán",
      descripcion:
        "Ciudad prehispánica conocida como 'La Ciudad de los Dioses', con las impresionantes Pirámides del Sol y la Luna.",
      imagen: "/imagenes/teotihuacan.jpg",
    },
  ];

  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
        Destinos Culturales
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Descubre los lugares más emblemáticos de México, donde la historia y la cultura cobran vida
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinos.map((destino, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={destino.imagen}
              alt={destino.nombre}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {destino.nombre}
                </h3>
                <p className="text-gray-600 mt-2">{destino.descripcion}</p>
              </div>
              <button className="mt-4 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors px-4 py-2 rounded">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
