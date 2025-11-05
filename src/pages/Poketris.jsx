import TBurgerLabsPicture from "../assets/TBurgerLabs.png";
export default function Poketris() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto px-4">
      <div className="flex flex-col w-full max-w-2xl gap-4">
        {/* Imagen del proyecto con borde interno animado (igual que TburgerLabs) */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg overflow-hidden shadow-xl relative cursor-pointer h-64 md:h-80 flex items-center justify-center group animated-inner-border">
          <img
            src={TBurgerLabsPicture}
            alt="Poketris"
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-auto transition-all duration-[2500ms] group-hover:contrast-50 group-hover:brightness-75"
          />
          {/* Borde interno animado */}
          <div className="border-side border-bottom hidden md:block"></div>
          <div className="border-side border-right hidden md:block"></div>
          <div className="border-side border-top hidden md:block"></div>
          <div className="border-side border-left hidden md:block"></div>
          {/* Overlay oscuro con animación y visibilidad responsive */}
          <div className="absolute inset-0 flex items-end justify-center pb-16 bg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-colors duration-[2500ms]">
            <div className="flex gap-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-[2500ms]">
              <a
                href="https://tburgerlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 lg:w-30 text-center text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-200 border border-gray-600 z-10 hover:brightness-110"
              >
                Ver Demo
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 lg:w-30 text-center text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-200 border border-gray-600 z-10 hover:brightness-110"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Contenedor oscuro fuera de la imagen */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-xl p-4 mb-6 shadow-lg mt-0 md:p-6 md:text-left text-center relative">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
            Pokétris - Juego de Tetris con Temática Pokémon
          </h3>
          <p className="mb-4 text-gray-300">
            El clásico tetris, con un giro inesperado. Se juega horizontalmente, e incorpora la captura de Pokémon, cambiando puntos por Pokéballs. Los sprites y stats se obtienen de la PokéAPI. Desarrollado con React, <strong> React y Firestore Database</strong>.
          </p>
          <h4 className="font-semibold mb-3 text-white">Características:</h4>
          <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-10">
            <li>Panel de administración de precios (con ruta protegida de React)</li>
            <li>Redirección a Whatsapp para completar pedidos</li>
            <li>Base de datos NoSQL (Firestore)</li>
          </ul>
          <p>Esta fue la primer aplicación que desarrollé y publiqué, inicialmente la hice con Vanilla JS y luego la refactoricé con React para mejorar su estructura y funcionalidad. Me ayudé con Copilot para implementar la base de datos.</p>
        </div>
      </div>
    </div>
  );
}
