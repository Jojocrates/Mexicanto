import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { useState } from "react";


const preguntas = [
  {
    id: 1,
    pregunta: "¿En qué estado se encuentra Chichén Itzá?",
    opciones: ["Yucatán", "Quintana Roo", "Campeche", "Chiapas"],
    respuestaCorrecta: 0
  },
  {
    id: 2,
    pregunta: "¿Cómo se llama la pirámide principal de Teotihuacán?",
    opciones: ["Pirámide de la Luna", "Pirámide del Sol", "El Castillo", "La Venta"],
    respuestaCorrecta: 1
  },
  {
    id: 3,
    pregunta: "¿Por qué es famoso el pueblo de Taxco?",
    opciones: ["Por su cerámica", "Por su plata", "Por sus textiles", "Por su café"],
    respuestaCorrecta: 1
  },
  {
    id: 4,
    pregunta: "¿Qué civilización construyó Chichén Itzá?",
    opciones: ["Azteca", "Olmeca", "Maya", "Zapoteca"],
    respuestaCorrecta: 2
  },
  {
    id: 5,
    pregunta: "¿En qué estado se encuentra San Miguel de Allende?",
    opciones: ["Guanajuato", "Querétaro", "Michoacán", "Jalisco"],
    respuestaCorrecta: 0
  }
];

export default function Juego() {
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const iniciarJuego = () => {
    setJuegoIniciado(true);
    setPreguntaActual(0);
    setPuntuacion(0);
    setRespuestaSeleccionada(null);
    setMostrarResultado(false);
    setJuegoTerminado(false);
  };

  const seleccionarRespuesta = (indice) => {
    if (respuestaSeleccionada === null) {
      setRespuestaSeleccionada(indice);
      setMostrarResultado(true);
      
      if (indice === preguntas[preguntaActual].respuestaCorrecta) {
        setPuntuacion(puntuacion + 1);
      }
    }
  };

  const siguientePregunta = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
      setRespuestaSeleccionada(null);
      setMostrarResultado(false);
    } else {
      setJuegoTerminado(true);
    }
  };

  const reiniciarJuego = () => {
    setJuegoIniciado(false);
    setJuegoTerminado(false);
  };

  if (!juegoIniciado) {
    return (
      <section id="juego" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Reto Cultural Mexicano
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pon a prueba tus conocimientos sobre la rica cultura e historia de México
          </p>
          <Button 
            onClick={iniciarJuego}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl"
          >
            Iniciar Juego
          </Button>
        </div>
      </section>
    );
  }

  if (juegoTerminado) {
    return (
      <section id="juego" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-secondary">¡Juego Completado!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-6xl text-primary font-bold">
                {puntuacion}/{preguntas.length}
              </div>
              <p className="text-lg text-muted-foreground">
                {puntuacion === preguntas.length 
                  ? "¡Perfecto! Eres un experto en cultura mexicana" 
                  : puntuacion >= preguntas.length * 0.7
                  ? "¡Muy bien! Tienes buenos conocimientos sobre México"
                  : "¡Sigue aprendiendo! México tiene mucho que ofrecer"}
              </p>
              <Button 
                onClick={reiniciarJuego}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Jugar de nuevo
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const pregunta = preguntas[preguntaActual];

  return (
    <section id="juego" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Pregunta {preguntaActual + 1} de {preguntas.length}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Reto Cultural Mexicano
          </h2>
          <div className="flex justify-center mb-4">
            <div className="text-lg text-muted-foreground">
              Puntuación: <span className="font-bold text-primary">{puntuacion}</span>
            </div>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-center">{pregunta.pregunta}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pregunta.opciones.map((opcion, indice) => (
              <Button
                key={indice}
                onClick={() => seleccionarRespuesta(indice)}
                variant="outline"
                className={`w-full py-3 text-left justify-start h-auto ${
                  respuestaSeleccionada === indice
                    ? indice === pregunta.respuestaCorrecta
                      ? "bg-green-100 border-green-500 text-green-700"
                      : "bg-red-100 border-red-500 text-red-700"
                    : mostrarResultado && indice === pregunta.respuestaCorrecta
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "hover:bg-gray-50"
                }`}
                disabled={mostrarResultado}
              >
                <span className="font-medium mr-3">{String.fromCharCode(65 + indice)}.</span>
                {opcion}
              </Button>
            ))}
            
            {mostrarResultado && (
              <div className="pt-4">
                <Button 
                  onClick={siguientePregunta}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  {preguntaActual < preguntas.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}