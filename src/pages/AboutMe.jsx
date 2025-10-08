export default function AboutMe() {
  return (
    <div className="space-y-6">
      {/* Placeholder de foto con gradiente difuminado */}
      <div className="relative w-full max-w-md mx-auto h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
          Foto de Perfil
        </div>
        {/* Gradiente difuminado en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white">¡Hola! Soy Franco</h3>
      <p className="text-gray-300">
        Soy desarrollador Full Stack con foco en experiencias limpias y usables.
        Tengo experiencia realizando varios tipos de proyectos: sitios
        corporativos, paneles administrativos, e-commerce y soluciones a medida.
      </p>
      <p className="text-gray-300">
        📧{" "}
        <a
          href="mailto:francobarberissic3@gmail.com"
          className="text-blue-400 hover:underline"
        >
          francobarberissic3@gmail.com
        </a>
      </p>
    </div>
  );
}
