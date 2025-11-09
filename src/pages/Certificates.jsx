export default function Certificates() {
  return (
  <div className="space-y-6 max-w-4xl mx-auto">
  <h3 className="text-2xl font-bold text-white text-center mt-0">Certificaciones</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Certificado 1 */}
  <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3 md:p-4 rounded-lg border-2 border-blue-700 animate-glow flex flex-col justify-between" style={{boxShadow: "0 0 12px 2px rgba(59,130,246,0.25), 0 0 16px 2px rgba(59,130,246,0.10)"}}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">�</span>
              <div>
                <h4 className="text-lg font-semibold text-white">Tecnicatura Universitaria en Informática</h4>
                <p className="text-sm text-gray-400">Universidad Nacional General Sarmiento (UNGS)</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2 text-left leading-relaxed">
              Formación en desarrollo de software, algoritmos, estructuras de datos, bases de datos y arquitectura de sistemas.
            </p>
          </div>
          <div className="flex items-center justify-end mt-4">
                <button className="text-xs text-blue-400 hover:underline bg-blue-900 px-3 py-1 rounded shadow cursor-pointer" download>
                  Descargar PDF
            </button>
          </div>
        </div>

        {/* Certificado 2 */}
  <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 p-3 md:p-4 rounded-lg border-2 border-green-700 animate-glow flex flex-col justify-between" style={{boxShadow: "0 0 12px 2px rgba(34,197,94,0.25), 0 0 16px 2px rgba(34,197,94,0.10)"}}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📝</span>
              <div>
                <h4 className="text-lg font-semibold text-white">Web Development Course</h4>
                <p className="text-sm text-gray-400">Coderhouse</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2 text-left leading-relaxed">
              Especialización en desarrollo web moderno con HTML, CSS y JS.
            </p>
          </div>
          <div className="flex items-center justify-end mt-4">
                <button className="text-xs text-green-400 hover:underline bg-green-900 px-3 py-1 rounded shadow cursor-pointer" download>
                  Descargar PDF
            </button>
          </div>
        </div>

        {/* Certificado 3 */}
  <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 p-3 md:p-4 rounded-lg border-2 border-purple-700 animate-glow flex flex-col justify-between" style={{boxShadow: "0 0 12px 2px rgba(168,85,247,0.25), 0 0 16px 2px rgba(168,85,247,0.10)"}}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">�</span>
              <div>
                <h4 className="text-lg font-semibold text-white">Full Stack Web Development Bootcamp</h4>
                <p className="text-sm text-gray-400">Udemy</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2 text-left leading-relaxed">
              Desarrollo con React, NodeJS, bases de datos y APIs.
            </p>
          </div>
          <div className="flex items-center justify-end mt-4">
                <button className="text-xs text-purple-400 bg-purple-900 px-3 py-1 rounded shadow cursor-not-allowed opacity-50" disabled>
                  Descargar PDF
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}
