export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 max-w-2xl mx-auto px-4">
      {/* Placeholder de foto con gradiente difuminado - más cerca del h2 */}
      <div className="relative w-full max-w-md h-56 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
          Foto de Perfil
        </div>
        {/* Gradiente difuminado más alto para mejor merge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white text-center -mt-2">Frontend Developer</h3>
      <p className="text-gray-300 text-center">
        Soy desarrollador Full Stack con foco en experiencias limpias y usables.
        Tengo experiencia realizando varios tipos de proyectos: sitios
        corporativos, paneles administrativos, e-commerce y soluciones a medida.
      </p>
    </div>
  );
}
