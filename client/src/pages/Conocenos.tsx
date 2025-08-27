import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Star, User, Phone, Mail, Quote } from "lucide-react"; // iconos profesionales

function Conocenos() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Conócenos"
        description="Descubre quiénes somos, nuestra misión, visión y valores."
      />
      <Navbar />

      {/* Hero principal */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white text-center shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Conócenos
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-100">
            Somos un equipo comprometido con el crecimiento de tu negocio.
          </p>
        </div>
      </section>

      {/* Sección principal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card Misión */}
          <Card className="group relative overflow-hidden rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-10 text-center">
              <Target className="w-12 h-12 mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Nuestra Misión</h3>
              <div className="w-12 h-1 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-gray-600 leading-relaxed">
                Ayudar a las empresas a digitalizarse de manera rápida y eficiente, 
                ofreciendo soluciones accesibles y escalables.
              </p>
            </CardContent>
          </Card>

          {/* Card Visión */}
          <Card className="group relative overflow-hidden rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-10 text-center">
              <Eye className="w-12 h-12 mx-auto mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Nuestra Visión</h3>
              <div className="w-12 h-1 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-gray-600 leading-relaxed">
                Ser el aliado tecnológico más confiable para pequeñas y medianas empresas,
                impulsando su éxito en el mundo digital.
              </p>
            </CardContent>
          </Card>

          {/* Card Valores */}
          <Card className="group relative overflow-hidden rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-10 text-center">
              <Star className="w-12 h-12 mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Nuestros Valores</h3>
              <div className="w-12 h-1 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-gray-600 leading-relaxed">
                Innovación, transparencia, compromiso y excelencia en cada proyecto.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Detrás de cada proyecto hay personas apasionadas, listas para ayudarte a crecer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Card Equipo */}
            <Card className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-1">
                    {/* Si hay imagen, úsala; si no, ícono User */}
                    <img
                      src="https://via.placeholder.com/200"
                      alt="Miembro del equipo"
                      className="rounded-full object-cover w-full h-full border-4 border-white shadow-md"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
                      <User className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Nombre y Cargo */}
                <h4 className="font-semibold text-xl text-gray-800">Nombre Apellido</h4>
                <p className="text-sm text-gray-500 mb-4">Cargo / Rol</p>

                {/* Frase */}
                <div className="italic text-gray-600 mb-4 flex items-center justify-center gap-2">
                  <Quote className="h-4 w-4 text-blue-500" />
                  <span>"Mi compromiso es dar lo mejor en cada proyecto."</span>
                </div>

                {/* Contacto */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href="tel:+525511223344" className="hover:underline">
                      +52 55 1122 3344
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <a href="mailto:correo@empresa.com" className="hover:underline">
                      correo@empresa.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Repite para más miembros */}

            <Card className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-1">
                    {/* Si hay imagen, úsala; si no, ícono User */}
                    <img
                      src="https://via.placeholder.com/200"
                      alt="Miembro del equipo"
                      className="rounded-full object-cover w-full h-full border-4 border-white shadow-md"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
                      <User className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Nombre y Cargo */}
                <h4 className="font-semibold text-xl text-gray-800">Nombre Apellido</h4>
                <p className="text-sm text-gray-500 mb-4">Cargo / Rol</p>

                {/* Frase */}
                <div className="italic text-gray-600 mb-4 flex items-center justify-center gap-2">
                  <Quote className="h-4 w-4 text-blue-500" />
                  <span>"Mi compromiso es dar lo mejor en cada proyecto."</span>
                </div>

                {/* Contacto */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href="tel:+525511223344" className="hover:underline">
                      +52 55 1122 3344
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <a href="mailto:correo@empresa.com" className="hover:underline">
                      correo@empresa.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-1">
                    {/* Si hay imagen, úsala; si no, ícono User */}
                    <img
                      src="https://via.placeholder.com/200"
                      alt="Miembro del equipo"
                      className="rounded-full object-cover w-full h-full border-4 border-white shadow-md"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
                      <User className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Nombre y Cargo */}
                <h4 className="font-semibold text-xl text-gray-800">Nombre Apellido</h4>
                <p className="text-sm text-gray-500 mb-4">Cargo / Rol</p>

                {/* Frase */}
                <div className="italic text-gray-600 mb-4 flex items-center justify-center gap-2">
                  <Quote className="h-4 w-4 text-blue-500" />
                  <span>"Mi compromiso es dar lo mejor en cada proyecto."</span>
                </div>

                {/* Contacto */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href="tel:+525511223344" className="hover:underline">
                      +52 55 1122 3344
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <a href="mailto:correo@empresa.com" className="hover:underline">
                      correo@empresa.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Conocenos;
