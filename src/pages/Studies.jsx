export default function Studies() {
  return (
  <div className="space-y-6 max-w-4xl mx-auto px-4 h-full overflow-y-auto max-h-full">
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
                <div className="bg-gray-700 p-4 min-h-[240px] rounded-lg border-2 border-blue-500 inline-block max-w-md animate-glow" style={{boxShadow: "0 0 16px 2px rgba(59,130,246,0.3), 0 0 32px 4px rgba(59,130,246,0.15)"}}>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white">Tecnicatura Universitaria en Informática</h4>
                  <p className="text-gray-400 text-sm">Universidad Nacional General Sarmiento (UNGS)</p>
                </div>
                <p className="text-gray-300 text-sm">
                  Formación en desarrollo de software, algoritmos, estructuras de datos,
                  bases de datos y arquitectura de sistemas.
                </p>
                <span className="inline-block mt-3 text-xs bg-blue-900 text-white px-3 py-1 rounded-full">
                  2017 - 2021
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
              <div className="bg-gray-700 p-4 min-h-[240px] rounded-lg border-2 border-green-500 inline-block max-w-md animate-glow" style={{boxShadow: "0 0 16px 2px rgba(34,197,94,0.3), 0 0 32px 4px rgba(34,197,94,0.15)"}}>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white">Web Development Course</h4>
                  <p className="text-gray-400 text-sm">Coderhouse</p>
                </div>
                <p className="text-gray-300 text-sm">
                  Especialización en desarrollo web moderno con HTML, CSS y JS.
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
              <div className="bg-gray-700 p-4 min-h-[240px] rounded-lg border-2 border-purple-500 inline-block max-w-md animate-glow" style={{boxShadow: "0 0 16px 2px rgba(168,85,247,0.3), 0 0 32px 4px rgba(168,85,247,0.15)"}}>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-white">Full Stack Web Development Bootcamp</h4>
                  <p className="text-gray-400 text-sm">Udemy</p>
                </div>
                <p className="text-gray-300 text-sm">
                  Desarrollo con React, NodeJS, bases de datos y APIs.
                </p>
                <span className="inline-block mt-3 text-xs bg-purple-900 text-white px-3 py-1 rounded-full">
                  2025 - Actualidad
                </span>
              </div>
            </div>
            {/* Círculo en la línea */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-800 z-10"></div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
  <div className="md:hidden">
  <div className="bg-gray-700 py-2 px-4 rounded-lg border-l-4 border-blue-500 animate-glow mx-auto max-w-xs w-fit my-4" style={{boxShadow: "0 0 16px 2px rgba(59,130,246,0.3), 0 0 32px 4px rgba(59,130,246,0.15)"}}>
          <div className="mb-2">
            <h4 className="text-base font-semibold text-white">Tecnicatura Universitaria en Informática</h4>
            <p className="text-gray-400 text-xs">Universidad Nacional General Sarmiento (UNGS)</p>
            <span className="block mt-1 text-xs bg-blue-900 text-white px-2 py-1 rounded-full whitespace-nowrap w-fit">2017-2021</span>
          </div>
          <p className="text-gray-300 text-sm">
            Desarrollo de software, algoritmos, estructuras de datos y bases de datos.
          </p>
        </div>

  <div className="bg-gray-700 py-2 px-4 rounded-lg border-l-4 border-green-500 animate-glow mx-auto max-w-xs w-fit my-4" style={{boxShadow: "0 0 16px 2px rgba(34,197,94,0.3), 0 0 32px 4px rgba(34,197,94,0.15)"}}>
          <div className="mb-2">
            <h4 className="text-base font-semibold text-white">Web Development Course</h4>
            <p className="text-gray-400 text-xs">Coderhouse</p>
            <span className="block mt-1 text-xs bg-green-900 text-white px-2 py-1 rounded-full whitespace-nowrap w-fit">2023</span>
          </div>
          <p className="text-gray-300 text-sm">
            Especialización en desarrollo web moderno con HTML, CSS y JS.
          </p>
        </div>

  <div className="bg-gray-700 py-2 px-4 rounded-lg border-l-4 border-purple-500 animate-glow mx-auto max-w-xs w-fit my-4" style={{boxShadow: "0 0 16px 2px rgba(168,85,247,0.3), 0 0 32px 4px rgba(168,85,247,0.15)"}}>
          <div className="mb-2">
            <h4 className="text-base font-semibold text-white">Full Stack Web Development Bootcamp</h4>
            <p className="text-gray-400 text-xs">Udemy</p>
            <span className="block mt-1 text-xs bg-purple-900 text-white px-2 py-1 rounded-full whitespace-nowrap w-fit">2025-Actualidad</span>
          </div>
          <p className="text-gray-300 text-sm">
            Desarrollo con React, NodeJS, bases de datos y APIs.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg border border-blue-800">
        <p className="text-sm text-gray-300 text-center">
          Me mantengo actualizado mediante formación online y práctica constante.
        </p>
      </div>
    </div>
  );
}
