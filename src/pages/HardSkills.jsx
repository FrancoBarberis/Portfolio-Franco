import HTMLIcon from '../assets/HTML.svg';
import CSSIcon from '../assets/CSS.svg';
import JSIcon from '../assets/JS.svg';
import ReactIcon from '../assets/React-icon.svg';
import GitIcon from '../assets/GIT.svg';
import TailwindIcon from '../assets/Tailwind.svg';

export default function HardSkills() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white">Te presento mi stack</h2>
      <div className="grid grid-cols-3 grid-rows-4 gap-3 md:gap-4 w-full max-w-2xl h-[400px] md:h-[500px]">
        
        {/* HTML - Naranja oficial #E34F26 - Comienza centro-abajo */}
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">HTML</span>
          <img 
            src={HTMLIcon} 
            alt="HTML" 
            className="absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 md:-bottom-6 w-24 md:w-32 opacity-70 md:opacity-40 rotate-0 md:rotate-12 md:group-hover:bottom-1/2 md:group-hover:translate-y-1/2 md:group-hover:opacity-70 md:group-hover:rotate-0"
            style={{ transition: 'all 0.5s ease-out' }}
          />
        </div>

        {/* JavaScript - Amarillo oficial #F7DF1E */}
        <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 md:p-6 rounded text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-gray-900 overflow-hidden group cursor-pointer">
          <span className="relative z-10">JavaScript</span>
          <img 
            src={JSIcon} 
            alt="JavaScript" 
            className="absolute right-2 bottom-2 w-28 opacity-60 rotate-0 md:-right-8 md:-bottom-8 md:w-36 md:opacity-30 md:rotate-[-15deg] md:group-hover:right-2 md:group-hover:bottom-2 md:group-hover:w-28 md:group-hover:rotate-0 md:group-hover:opacity-60"
            style={{ transition: 'all 0.3s ease-out' }}
          />
        </div>

        {/* CSS - Azul oficial #1572B6 - 3 SVG caen como lluvia de arriba hacia abajo */}
        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">CSS</span>
          
          {/* CSS IZQUIERDA - Cae desde arriba y sale por abajo */}
          <img 
            src={CSSIcon} 
            alt="CSS 1" 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-24 opacity-70 rotate-0 md:-top-20 md:opacity-30 md:rotate-[-8deg] md:group-hover:-bottom-20 md:group-hover:top-auto md:group-hover:rotate-0 md:group-hover:opacity-50"
            style={{ transition: 'all 0.8s ease-in' }}
          />
          
          {/* CSS CENTRO - Cae y queda en el centro */}
          <img 
            src={CSSIcon} 
            alt="CSS 2" 
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-14 opacity-70 rotate-0 md:-top-16 md:opacity-30 md:rotate-[5deg] md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 md:group-hover:rotate-0 md:group-hover:opacity-70"
            style={{ transition: 'all 0.8s ease-in 0.1s' }}
          />
          
          {/* CSS DERECHA - Cae desde arriba y sale por abajo */}
          <img 
            src={CSSIcon} 
            alt="CSS 3" 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-20 opacity-70 rotate-0 md:-top-18 md:opacity-30 md:rotate-[12deg] md:group-hover:-bottom-18 md:group-hover:top-auto md:group-hover:rotate-0 md:group-hover:opacity-50"
            style={{ transition: 'all 0.8s ease-in 0.2s' }}
          />
        </div>

        {/* React - Celeste oficial #61DAFB - Scale extremo con transición suave */}
        <div className="relative bg-gradient-to-br from-cyan-400 to-cyan-500 p-3 md:p-6 rounded text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-gray-900 overflow-hidden group cursor-pointer">
          <span className="relative z-10">React</span>
          <img 
            src={ReactIcon} 
            alt="React" 
            className="absolute right-0 top-0 w-20 opacity-60 transition-all duration-500 ease-out"
            style={{ 
              animation: 'spin 20s linear infinite',
              transform: 'scale(1.2)',
              transformOrigin: 'top right'
            }}
          />
          <style>{`
            @media (min-width: 768px) {
              .group img[alt="React"] {
                transform: scale(0.3);
                opacity: 0.2;
              }
              .group:hover img[alt="React"] {
                transform: scale(3.5) !important;
                opacity: 0.5 !important;
              }
            }
          `}</style>
        </div>

        {/* Git - Rojo/Naranja oficial #F05032 - Izquierdo 2x grande, movimientos rectos */}
        <div className="relative bg-gradient-to-br from-orange-600 to-red-600 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">Git</span>
          {/* Git IZQUIERDO - MAS GRANDE, baja desde arriba-izquierda */}
          <img 
            src={GitIcon} 
            alt="Git izquierdo" 
            className="absolute left-2 bottom-2 w-32 opacity-70 rotate-0 md:-left-4 md:-top-12 md:w-40 md:opacity-40 md:rotate-[-15deg] md:group-hover:left-2 md:group-hover:bottom-2 md:group-hover:w-32 md:group-hover:rotate-0 md:group-hover:opacity-70"
            style={{ transition: 'all 0.5s ease-out' }}
          />
          {/* Git DERECHO - Mas pequeño, sube desde abajo-derecha */}
          <img 
            src={GitIcon} 
            alt="Git derecho" 
            className="absolute right-2 top-2 w-16 opacity-70 rotate-0 md:-right-4 md:-bottom-12 md:w-20 md:opacity-40 md:rotate-[15deg] md:group-hover:right-2 md:group-hover:top-2 md:group-hover:w-16 md:group-hover:rotate-0 md:group-hover:opacity-70"
            style={{ transition: 'all 0.5s ease-out 0.3s' }}
          />
        </div>

        {/* Tailwind - Cyan oficial #06B6D4 - animación más rápida */}
        <div className="relative bg-gradient-to-br from-cyan-500 to-teal-500 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">Tailwind</span>
          <img 
            src={TailwindIcon} 
            alt="Tailwind" 
            className="absolute left-2 top-1/2 -translate-y-1/2 w-16 opacity-60 md:w-24 md:opacity-40 md:group-hover:opacity-60"
            style={{ left: '0.5rem' }}
          />
          <style>{`
            @media (min-width: 768px) {
              .group:hover img[alt="Tailwind"] {
                animation: slide-infinite 1.5s linear infinite;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
