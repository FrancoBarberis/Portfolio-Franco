import TBurgerLabsPicture from "../assets/TBurgerLabs.png";
export default function TburgerLabs() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto px-4">
      <div className="flex flex-col w-full max-w-2xl gap-4">
        {/* Imagen del proyecto con borde interno animado (igual que Poketris) */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg overflow-hidden shadow-xl relative cursor-pointer h-64 md:h-80 flex items-center justify-center group animated-inner-border">
          <img
            src={TBurgerLabsPicture}
            alt="TBurgerLabs"
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-auto transition-[filter] duration-[1800ms] group-hover:brightness-25 group-hover:contrast-100"
          />
          {/* Borde interno animado */}
          <div className="border-side border-bottom hidden lg:block"></div>
          <div className="border-side border-right hidden lg:block"></div>
          <div className="border-side border-top hidden lg:block"></div>
          <div className="border-side border-left hidden lg:block"></div>
          {/* Overlay oscuro con animación y visibilidad responsive */}
          <div className="absolute left-0 right-0 bottom-[20%] flex items-center justify-center bg transition-colors duration-[2500ms] z-20">
            <div className="flex flex-row gap-2 md:gap-0 md:space-x-5 items-center justify-center w-full transition-opacity duration-[1800ms] lg:opacity-0 lg:pointer-events-none group-hover:lg:opacity-100 group-hover:lg:pointer-events-auto">
              <a
                href="https://tburgerlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 max-w-[90px] w-[22vw] md:max-w-none md:w-auto md:min-w-[110px] text-center text-white px-2 py-1 md:px-6 md:py-3 rounded-lg font-thin md:font-semibold shadow-lg text-[11px] md:text-base transition-colors duration-200 border border-gray-600 z-10 hover:brightness-110 whitespace-nowrap mx-auto"
                style={{ width: '22vw', maxWidth: '90px' }}
              >
                Ver Demo
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                className="flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 max-w-[90px] w-[22vw] md:max-w-none md:w-auto md:min-w-[110px] text-center text-white px-2 py-1 md:px-6 md:py-3 rounded-lg font-thin md:font-semibold shadow-lg text-[11px] md:text-base transition-colors duration-200 border border-gray-600 z-10 hover:brightness-110 whitespace-nowrap mx-auto"
                style={{ width: '22vw', maxWidth: '90px' }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Contenedor oscuro fuera de la imagen */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-xl p-4 mb-6 shadow-lg mt-0 md:p-6 md:text-left relative">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white text-center">
            TburgerLabs - Sistema de Pedidos
          </h3>
          <p className="mb-4 text-gray-300 text-left text-sm md:text-base">
            Aplicación web para generar pedidos de restaurante con temática de Resident Evil, desarrollada con
            <strong> React y Firestore Database</strong>.
          </p>
          <h4 className="font-semibold mb-3 text-white text-left">Características:</h4>
          <ul className="list-disc pl-4 text-gray-300 space-y-1 mb-4 text-left text-sm md:text-base">
            <li>Panel de administración de precios (con ruta protegida de React)</li>
            <li>Redirección a Whatsapp para completar pedidos</li>
            <li>Base de datos NoSQL (Firestore)</li>
          </ul>
          <p className="text-left">Esta fue la primer aplicación que desarrollé y publiqué, inicialmente la hice con Vanilla JS y luego la refactoricé con React para mejorar su estructura y funcionalidad. Me ayudé con Copilot para implementar la base de datos.</p>
        </div>
      </div>
    </div>
  );
}
