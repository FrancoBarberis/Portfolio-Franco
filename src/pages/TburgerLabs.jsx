import TBurgerLabsPicture from "../assets/TBurgerLabs.png";
export default function TburgerLabs() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto px-4">
      <div className="flex flex-col w-full max-w-2xl gap-4">
        {/* Imagen del proyecto con borde interno animado */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg overflow-hidden shadow-xl relative cursor-pointer h-64 md:h-80 flex items-center justify-center group animated-inner-border">
          <img
            src={TBurgerLabsPicture}
            alt="TBurgerLabs"
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-auto hover:contrast-50 hover:brightness-75 transition-all duration-500"
          />

          {/* Borde interno animado */}
          <div className="border-side border-bottom"></div>
          <div className="border-side border-right"></div>
          <div className="border-side border-top"></div>
          <div className="border-side border-left"></div>
          {/* Overlay oscuro con animación y visibilidad responsive */}
          <div className="absolute inset-0 flex items-end justify-center pb-16 bg  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-colors duration-500">
            <div className="flex gap-4 transition-opacity duration-500">
              <a
                href="https://tburgerlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 lg:w-30 text-center text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-semibold shadow-lg transition-colors duration-200 border border-gray-600 z-10"
              >
                Ver Demo
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                className="bg-gray-700 lg:w-30 text-center text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-semibold shadow-lg transition-colors duration-200 border border-gray-600 z-10"
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
            Aplicación web para generar pedidos de restaurante con temática de
            Resident Evil, desarrollada con
            <strong> React y Firestore Database</strong>.
          </p>
          <h4 className="font-semibold mb-3 text-white">Características:</h4>
          <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-10">
            <li>
              Panel de administración de precios (con ruta protegida de React)
            </li>
            <li>Redirección a Whatsapp para completar pedidos</li>
            <li>Base de datos NoSQL (Firestore)</li>
          </ul>
          <p>
            Esta fue la primer aplicación que desarrollé y publiqué,
            inicialmente la hice con Vanilla JS y luego la refactoricé con React
            para mejorar su estructura y funcionalidad. Me ayudé con Copilot
            para implementar la base de datos.
          </p>
        </div>
      </div>
    </div>
  );
}
