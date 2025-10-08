export default function SoftSkills() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-white">Habilidades Blandas</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🤝</span>
            <h4 className="text-xl font-semibold text-white">Trabajo en Equipo</h4>
          </div>
          <p className="text-gray-300">
            Experiencia colaborando en equipos multidisciplinarios, usando metodologías ágiles
            y herramientas de gestión de proyectos.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">💡</span>
            <h4 className="text-xl font-semibold text-white">Resolución de Problemas</h4>
          </div>
          <p className="text-gray-300">
            Capacidad analítica para identificar problemas y proponer soluciones efectivas
            tanto en código como en arquitectura.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🗣️</span>
            <h4 className="text-xl font-semibold text-white">Comunicación</h4>
          </div>
          <p className="text-gray-300">
            Habilidad para comunicar ideas técnicas de forma clara, tanto con equipos
            de desarrollo como con stakeholders no técnicos.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">📚</span>
            <h4 className="text-xl font-semibold text-white">Aprendizaje Continuo</h4>
          </div>
          <p className="text-gray-300">
            Constantemente actualizándome con nuevas tecnologías y mejores prácticas
            en el desarrollo de software.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">⚡</span>
            <h4 className="text-xl font-semibold text-white">Adaptabilidad</h4>
          </div>
          <p className="text-gray-300">
            Flexible para trabajar con diferentes tecnologías, metodologías y
            adaptarme rápidamente a nuevos entornos.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎯</span>
            <h4 className="text-xl font-semibold text-white">Orientación a Resultados</h4>
          </div>
          <p className="text-gray-300">
            Enfocado en entregar soluciones de calidad que cumplan con los
            objetivos del proyecto y las expectativas del cliente.
          </p>
        </div>
      </div>
    </div>
  );
}
