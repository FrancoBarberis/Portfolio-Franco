export default function Studies() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4">
      <h3 className="text-2xl font-bold text-white text-center mb-8">Formación Académica</h3>
      
      {/* Timeline container con línea central - OCULTO EN MOBILE */}
      <div className="relative hidden md:block">
        {/* Línea central vertical con gradiente multicolor */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5"
          style={{
            background: 'linear-gradient(to bottom, rgb(59 130 246), rgb(34 197 94), rgb(168 85 247), rgb(249 115 22))'
          }}
        ></div>
        
        <div className="space-y-12">
          {/* Educación formal - IZQUIERDA */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-8 text-right">
              <div className="bg-gray-700 p-6 rounded-lg border-2 border-blue-500 inline-block max-w-md">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white">Título Universitario en Informática</h4>
                  <p className="text-gray-400 text-sm">Universidad XYZ</p>
                </div>
                <p className="text-gray-300 text-sm">
                  Formación en desarrollo de software, algoritmos, estructuras de datos,
                  bases de datos y arquitectura de sistemas.
                </p>
                <span className="inline-block mt-3 text-xs bg-blue-900 text-white px-3 py-1 rounded-full">
                  2018 - 2022
                </span>
              </div>
            </div>
            {/* Círculo en la línea */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 z-10"></div>
            <div className="w-1/2"></div>
          </div>

          {/* Curso 1 - DERECHA */}
          <div className="relative flex items-center">
            <div className="w-1/2"></div>
            {/* Círculo en la línea */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-800 z-10"></div>
            <div className="w-1/2 pl-8">
              <div className="bg-gray-700 p-6 rounded-lg border-2 border-green-500 inline-block max-w-md">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white">Full Stack Development</h4>
                  <p className="text-gray-400 text-sm">Plataforma Online</p>
                </div>
                <p className="text-gray-300 text-sm">
                  Especialización en desarrollo web moderno con React, Node.js, Express y PostgreSQL.
                </p>
                <span className="inline-block mt-3 text-xs bg-green-900 text-white px-3 py-1 rounded-full">
                  2023
                </span>
              </div>
            </div>
          </div>

          {/* Curso 2 - IZQUIERDA */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-8 text-right">
              <div className="bg-gray-700 p-6 rounded-lg border-2 border-purple-500 inline-block max-w-md">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white">Advanced JavaScript & TypeScript</h4>
                  <p className="text-gray-400 text-sm">Institución Educativa</p>
                </div>
                <p className="text-gray-300 text-sm">
                  Profundización en JavaScript moderno, TypeScript, patrones de diseño
                  y mejores prácticas.
                </p>
                <span className="inline-block mt-3 text-xs bg-purple-900 text-white px-3 py-1 rounded-full">
                  2023
                </span>
              </div>
            </div>
            {/* Círculo en la línea */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-800 z-10"></div>
            <div className="w-1/2"></div>
          </div>

          {/* Curso 3 - DERECHA */}
          <div className="relative flex items-center">
            <div className="w-1/2"></div>
            {/* Círculo en la línea */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-800 z-10"></div>
            <div className="w-1/2 pl-8">
              <div className="bg-gray-700 p-6 rounded-lg border-2 border-orange-500 inline-block max-w-md">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white">UI/UX Design Fundamentals</h4>
                  <p className="text-gray-400 text-sm">Escuela de Diseño</p>
                </div>
                <p className="text-gray-300 text-sm">
                  Fundamentos de diseño de interfaces, experiencia de usuario, prototipado
                  en Figma.
                </p>
                <span className="inline-block mt-3 text-xs bg-orange-900 text-white px-3 py-1 rounded-full">
                  2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout simple para MOBILE */}
      <div className="md:hidden space-y-4">
        <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
          <div className="flex justify-between items-start mb-2 gap-2">
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-semibold text-white">Título Universitario en Informática</h4>
              <p className="text-gray-400 text-xs">Universidad XYZ</p>
            </div>
            <span className="text-xs bg-blue-900 text-white px-2 py-1 rounded-full whitespace-nowrap">2018-2022</span>
          </div>
          <p className="text-gray-300 text-sm">
            Desarrollo de software, algoritmos, estructuras de datos y bases de datos.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
          <div className="flex justify-between items-start mb-2 gap-2">
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-semibold text-white">Full Stack Development</h4>
              <p className="text-gray-400 text-xs">Plataforma Online</p>
            </div>
            <span className="text-xs bg-green-900 text-white px-2 py-1 rounded-full whitespace-nowrap">2023</span>
          </div>
          <p className="text-gray-300 text-sm">
            React, Node.js, Express, PostgreSQL y metodologías ágiles.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500">
          <div className="flex justify-between items-start mb-2 gap-2">
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-semibold text-white">Advanced JavaScript & TypeScript</h4>
              <p className="text-gray-400 text-xs">Institución Educativa</p>
            </div>
            <span className="text-xs bg-purple-900 text-white px-2 py-1 rounded-full whitespace-nowrap">2023</span>
          </div>
          <p className="text-gray-300 text-sm">
            JavaScript moderno, TypeScript y patrones de diseño.
          </p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-orange-500">
          <div className="flex justify-between items-start mb-2 gap-2">
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-semibold text-white">UI/UX Design Fundamentals</h4>
              <p className="text-gray-400 text-xs">Escuela de Diseño</p>
            </div>
            <span className="text-xs bg-orange-900 text-white px-2 py-1 rounded-full whitespace-nowrap">2024</span>
          </div>
          <p className="text-gray-300 text-sm">
            Diseño de interfaces, UX y prototipado en Figma.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg border border-blue-800">
        <p className="text-sm text-gray-300">
          📖 <strong>Aprendizaje continuo:</strong> Constantemente actualizándome con cursos online,
          documentación oficial y participando en comunidades de desarrollo.
        </p>
      </div>
    </div>
  );
}
