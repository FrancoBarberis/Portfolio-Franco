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
        
        {/* HTML - Naranja oficial #E34F26 */}
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">HTML</span>
          <img 
            src={HTMLIcon} 
            alt="HTML" 
            className="absolute -right-8 top-1/2 -translate-y-1/2 w-24 md:w-32 opacity-40 rotate-12 group-hover:left-2 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:w-16 md:group-hover:w-20 group-hover:rotate-0 group-hover:opacity-70"
            style={{ transition: 'all 0.5s ease-out' }}
          />
        </div>

        {/* JavaScript - Amarillo oficial #F7DF1E */}
        <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 md:p-6 rounded text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-gray-900 overflow-hidden group cursor-pointer">
          <span className="relative z-10">JavaScript</span>
          <img 
            src={JSIcon} 
            alt="JavaScript" 
            className="absolute -right-8 -bottom-8 w-28 md:w-36 opacity-30 rotate-[-15deg] group-hover:right-2 group-hover:bottom-2 group-hover:rotate-0 group-hover:opacity-60"
            style={{ transition: 'all 0.5s ease-out' }}
          />
        </div>

        {/* CSS - Azul oficial #1572B6 */}
        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">CSS</span>
          <img 
            src={CSSIcon} 
            alt="CSS" 
            className="absolute -right-8 top-1/2 -translate-y-1/2 w-24 md:w-32 opacity-40 rotate-[-12deg] group-hover:right-2 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:w-16 md:group-hover:w-20 group-hover:rotate-[8deg] group-hover:opacity-70"
            style={{ transition: 'all 0.5s ease-out' }}
          />
        </div>

        {/* React - Celeste oficial #61DAFB con escala */}
        <div className="relative bg-gradient-to-br from-cyan-400 to-cyan-500 p-3 md:p-6 rounded text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-gray-900 overflow-hidden group cursor-pointer">
          <span className="relative z-10">React</span>
          <img 
            src={ReactIcon} 
            alt="React" 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 md:w-28 opacity-20 scale-75 group-hover:scale-110 group-hover:opacity-50"
            style={{ animation: 'spin 20s linear infinite', transition: 'transform 0.7s ease-out, opacity 0.7s ease-out' }}
          />
        </div>

        {/* Git - Rojo/Naranja oficial #F05032 con doble icono descendente */}
        <div className="relative bg-gradient-to-br from-orange-600 to-red-600 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">Git</span>
          <img 
            src={GitIcon} 
            alt="Git" 
            className="absolute -right-6 -top-8 w-20 md:w-28 opacity-30 rotate-[15deg] group-hover:right-1 group-hover:top-1 group-hover:rotate-0 group-hover:opacity-60"
            style={{ transition: 'all 0.7s ease-out' }}
          />
          <img 
            src={GitIcon} 
            alt="Git" 
            className="absolute -left-6 -top-8 w-20 md:w-28 opacity-30 rotate-[-15deg] group-hover:left-1 group-hover:top-1 group-hover:rotate-0 group-hover:opacity-60"
            style={{ transition: 'all 0.7s ease-out' }}
          />
        </div>

        {/* Tailwind - Cyan oficial #06B6D4 con movimiento horizontal infinito */}
        <div className="relative bg-gradient-to-br from-cyan-500 to-teal-500 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">Tailwind</span>
          <img 
            src={TailwindIcon} 
            alt="Tailwind" 
            className="absolute -left-24 top-1/2 -translate-y-1/2 w-16 md:w-24 opacity-20"
            style={{ animation: 'none' }}
          />
          <style>{`
            .group:hover img[alt="Tailwind"] {
              animation: slide-infinite 3s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
