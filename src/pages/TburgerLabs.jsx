export default function TburgerLabs() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto px-4">
      <div className="flex flex-col w-full max-w-2xl gap-4">
        {/* Imagen del proyecto */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg overflow-hidden shadow-xl relative cursor-pointer h-64 md:h-80 flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800"></div>
          {/* Overlay oscuro con animación y visibilidad responsive */}
          <div
            className="absolute inset-0 flex items-end justify-center pb-6 bg-black/40 md:bg-black/0 md:group-hover:bg-black/60 transition-colors duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <div className="flex gap-4 transition-opacity duration-500">
              <a
                href="https://tburgerlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-semibold shadow-lg transition-colors duration-200 border border-gray-600"
              >
                Ver Demo
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-semibold shadow-lg transition-colors duration-200 border border-gray-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Contenedor oscuro fuera de la imagen */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-xl p-4 mb-6 shadow-lg mt-0 md:p-6 md:text-left text-center relative">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
            TburgerLabs - Sistema de Pedidos
          </h3>
          <p className="mb-4 text-gray-300">
            Aplicación web para generar pedidos de restaurante con temática de Resident Evil, desarrollada con
            <strong> React, npm y Firestore Database</strong>.
          </p>
          <h4 className="font-semibold mb-3 text-white">Características:</h4>
          <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-10">
            <li>Panel de administración</li>
            <li>Sistema de pedidos en tiempo real</li>
            <li>Integración con pagos</li>
            <li>Dashboard de estadísticas</li>
          </ul>
          <p>Esta fue la primer aplicación que desarrollé y publiqué, inicialmente la hice con vanilla JS y luego la refactoricé con React para mejorar su estructura y funcionalidad.</p>
        </div>
      </div>
    </div>
  );
}
