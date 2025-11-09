import TBurgerLabsPicture from "../assets/TBurgerLabs.png";
export default function Poketris() {
  return (
  <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto px-4 h-fit">
  <div className="flex flex-col w-full max-w-2xl gap-4 h-fit">
        {/* Imagen del proyecto con borde interno animado (igual que TburgerLabs) */}
  <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg overflow-hidden shadow-xl relative h-64 md:h-80 flex items-center justify-center group animated-inner-border p-3 md:p-4">
          <img
            src={TBurgerLabsPicture}
            alt="Poketris"
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-[filter] duration-[1800ms] group-hover:brightness-25 group-hover:contrast-100"
          />
          {/* Borde interno animado */}
          <div className="border-side border-bottom hidden lg:block"></div>
          <div className="border-side border-right hidden lg:block"></div>
          <div className="border-side border-top hidden lg:block"></div>
          <div className="border-side border-left hidden lg:block"></div>
            <div className="border-side border-bottom border-purple-500 hidden lg:block"></div>
            <div className="border-side border-right border-purple-500 hidden lg:block"></div>
            <div className="border-side border-top border-purple-500 hidden lg:block"></div>
            <div className="border-side border-left border-purple-500 hidden lg:block"></div>
          {/* Overlay oscuro con animación y visibilidad responsive */}
          <div className="absolute left-0 right-0 bottom-[20%] flex items-center justify-center bg transition-colors duration-[2500ms] z-20">
            <div className="flex flex-row gap-2 md:gap-0 md:space-x-5 items-center justify-center w-full transition-opacity duration-[1800ms]
              lg:opacity-0 lg:pointer-events-none group-hover:lg:opacity-100 group-hover:lg:pointer-events-auto">
              <a
                href="https://tburgerlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 max-w-[90px] w-[22vw] md:max-w-none md:w-auto md:min-w-[110px] text-center text-white px-2 py-1 md:px-6 md:py-3 rounded-lg font-thin md:font-semibold shadow-lg text-[11px] md:text-base transition-colors duration-200 border-l-4 border-purple-500 animate-glow z-10 hover:brightness-110 whitespace-nowrap mx-auto"
                style={{ width: '22vw', maxWidth: '90px', boxShadow: '0 0 16px 2px rgba(168,85,247,0.3), 0 0 32px 4px rgba(168,85,247,0.15)' }}
              >
                Ver Demo
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                className="flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 max-w-[90px] w-[22vw] md:max-w-none md:w-auto md:min-w-[110px] text-center text-white px-2 py-1 md:px-6 md:py-3 rounded-lg font-thin md:font-semibold shadow-lg text-[11px] md:text-base transition-colors duration-200 border-l-4 border-purple-500 animate-glow z-10 hover:brightness-110 whitespace-nowrap mx-auto"
                style={{ width: '22vw', maxWidth: '90px', boxShadow: '0 0 16px 2px rgba(168,85,247,0.3), 0 0 32px 4px rgba(168,85,247,0.15)' }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Contenedor oscuro fuera de la imagen */}
  <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-xl p-3 md:p-6 mb-6 shadow-lg mt-0 md:text-left relative border-l-4 border-purple-500" style={{boxShadow: '0 0 0 0 rgba(0,0,0,0), -8px 0 24px 2px rgba(168,85,247,0.35)'}}>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white text-center">
            Pokétris - Juego de Tetris
          </h3>
          <p className="mb-4 text-gray-300 text-left leading-relaxed text-sm md:text-base">
            El clásico tetris, con un giro inesperado. Se juega horizontalmente, e incorpora la captura de Pokémon, cambiando puntos por Pokéballs. Los sprites y stats se obtienen de la PokéAPI. Desarrollado con <strong> React y Firestore Database</strong>.
          </p>
          <h4 className="font-semibold mb-3 text-white text-left">Características:</h4>
          <ul className="list-disc pl-4 text-gray-300 space-y-1 mb-4 text-left leading-relaxed text-sm md:text-base">
            <li>Consumo de la PokéAPI (API REST)</li>
            <li>Base de datos Firestore para almacenar puntuaciones de los jugadores</li>
          </ul>
          <p className="mb-4 text-gray-300 text-left leading-relaxed text-sm md:text-base">Pokétris comenzó como un Tetris básico, pero busqué llevarlo más allá integrando la PokéAPI y una base de datos en Firestore para almacenar puntuaciones. El mayor desafío fue lograr que el tablero se renderizara de forma consistente y fluida usando React, manteniendo la experiencia de juego dinámica y sin errores.</p>
        </div>
      </div>
    </div>
  );
}
