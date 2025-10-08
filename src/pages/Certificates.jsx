export default function Certificates() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h3 className="text-2xl font-bold text-white">Certificaciones</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Certificado 1 */}
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-6 rounded-lg border-2 border-blue-700">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🏆</span>
            <div>
              <h4 className="text-lg font-semibold text-white">React Developer Certification</h4>
              <p className="text-sm text-gray-400">Meta / Facebook</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-2">
            Certificación oficial en desarrollo con React, incluyendo hooks, context API,
            y mejores prácticas.
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs bg-blue-800 text-white px-2 py-1 rounded">2023</span>
            <button className="text-xs text-blue-400 hover:underline">
              Ver credencial →
            </button>
          </div>
        </div>

        {/* Certificado 2 */}
        <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 p-6 rounded-lg border-2 border-green-700">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">✅</span>
            <div>
              <h4 className="text-lg font-semibold text-white">Node.js Application Developer</h4>
              <p className="text-sm text-gray-400">OpenJS Foundation</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-2">
            Certificación en desarrollo de aplicaciones backend con Node.js, Express
            y arquitecturas RESTful.
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs bg-green-800 text-white px-2 py-1 rounded">2023</span>
            <button className="text-xs text-green-400 hover:underline">
              Ver credencial →
            </button>
          </div>
        </div>

        {/* Certificado 3 */}
        <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 p-6 rounded-lg border-2 border-purple-700">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">📜</span>
            <div>
              <h4 className="text-lg font-semibold text-white">TypeScript Fundamentals</h4>
              <p className="text-sm text-gray-400">Microsoft</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-2">
            Certificación en TypeScript, tipos avanzados, genéricos y
            patrones de diseño con TypeScript.
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs bg-purple-800 text-white px-2 py-1 rounded">2024</span>
            <button className="text-xs text-purple-400 hover:underline">
              Ver credencial →
            </button>
          </div>
        </div>

        {/* Certificado 4 */}
        <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 p-6 rounded-lg border-2 border-orange-700">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">☁️</span>
            <div>
              <h4 className="text-lg font-semibold text-white">AWS Cloud Practitioner</h4>
              <p className="text-sm text-gray-400">Amazon Web Services</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-2">
            Fundamentos de cloud computing, servicios principales de AWS
            y mejores prácticas de implementación.
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs bg-orange-800 text-white px-2 py-1 rounded">2024</span>
            <button className="text-xs text-orange-400 hover:underline">
              Ver credencial →
            </button>
          </div>
        </div>

        {/* Certificado 5 */}
        <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/20 p-6 rounded-lg border-2 border-teal-700">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎨</span>
            <div>
              <h4 className="text-lg font-semibold text-white">Tailwind CSS Mastery</h4>
              <p className="text-sm text-gray-400">Tailwind Labs</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-2">
            Certificación avanzada en Tailwind CSS, utility-first design
            y responsive design patterns.
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs bg-teal-800 text-white px-2 py-1 rounded">2024</span>
            <button className="text-xs text-teal-400 hover:underline">
              Ver credencial →
            </button>
          </div>
        </div>

        {/* Certificado 6 */}
        <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 p-6 rounded-lg border-2 border-red-700">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🗄️</span>
            <div>
              <h4 className="text-lg font-semibold text-white">PostgreSQL Administrator</h4>
              <p className="text-sm text-gray-400">PostgreSQL Global Dev</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-2">
            Certificación en administración de bases de datos PostgreSQL,
            optimización de queries y diseño de esquemas.
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs bg-red-800 text-white px-2 py-1 rounded">2023</span>
            <button className="text-xs text-red-400 hover:underline">
              Ver credencial →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-900/20 rounded-lg border border-yellow-800">
        <p className="text-sm text-gray-300">
          🎓 <strong>Nota:</strong> Estos son placeholders de certificaciones. Las credenciales
          reales estarán disponibles próximamente con enlaces verificables.
        </p>
      </div>
    </div>
  );
}
