import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-black text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Descubre la riqueza cultural de México
      </h2>
      <p className="mb-6 text-lg max-w-2xl">
        Explora destinos únicos llenos de historia, tradición y belleza natural que te conectarán con la esencia de México
      </p>
      <Link
        to="/destinos"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
      >
        Explorar destinos
      </Link>
    </section>
  );
}
