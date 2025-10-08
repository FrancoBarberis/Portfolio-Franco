export default function SoundWave() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto px-4">
      {/* Imagen del proyecto con botones overlay */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg overflow-hidden shadow-xl group relative cursor-pointer">
        <div className="relative h-64 md:h-80 flex items-center justify-center">
          {/* Placeholder de imagen - gradiente simple */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500"></div>
          
          {/* Overlay oscuro con botones - aparece en hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transform translate-y-4 group-hover:translate-y-0 font-semibold shadow-lg"
              style={{ transition: 'background-color 0.2s, transform 0.3s 75ms' }}
            >
              Ver Demo
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transform translate-y-4 group-hover:translate-y-0 font-semibold shadow-lg"
              style={{ transition: 'background-color 0.2s, transform 0.3s 150ms' }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
          SoundWave - Visualizador de Audio
        </h3>
        <p className="mb-4 text-gray-300">
          Aplicación que visualiza música en tiempo real usando la <strong>Web Audio API</strong> con
          efectos visuales dinámicos y personalizables.
        </p>
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-white">Características:</h4>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Análisis de frecuencias en tiempo real</li>
            <li>Múltiples modos de visualización (barras, ondas, partículas)</li>
            <li>Controles de ecualización interactivos</li>
            <li>Soporte para archivos locales y streaming</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
