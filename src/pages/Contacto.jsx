import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import Label from "../components/ui/Label";
import { toast } from "react-hot-toast"; // si usas react-hot-toast para notificaciones

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    // Simular envío del formulario
    toast.success("¡Mensaje enviado correctamente! Te contactaremos pronto.");

    // Limpiar formulario
    setFormData({
      nombre: "",
      correo: "",
      mensaje: ""
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros destinos culturales? Estamos aquí para ayudarte a planificar tu próxima aventura
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-secondary">Envíanos un mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo">Correo electrónico</Label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu interés en el turismo cultural de México..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full min-h-[120px] border rounded px-3 py-2"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3"
              >
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-secondary mb-2">Oficina principal</h3>
              <p className="text-muted-foreground">
                Ciudad de México, México<br />
                Zona Centro Histórico
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-2">Teléfono</h3>
              <p className="text-muted-foreground">
                +52 55 1234 5678<br />
                Lunes a Viernes 9:00 - 18:00
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@turismocultural.mx<br />
                contacto@turismocultural.mx
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
