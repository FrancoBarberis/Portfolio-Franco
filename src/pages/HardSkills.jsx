import HTMLIcon from "../assets/HTML.svg";
import CSSIcon from "../assets/CSS.svg";
import JSIcon from "../assets/JS.svg";
import ReactIcon from "../assets/React-icon.svg";
import GitIcon from "../assets/GIT.svg";
import TailwindIcon from "../assets/Tailwind.svg";

export default function HardSkills() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white">
        Te presento mi stack
      </h2>
      <div className="grid grid-cols-3 grid-rows-4 gap-3 md:gap-4 w-full max-w-2xl h-[400px] md:h-[500px]">
        {/* HTML - Naranja oficial #E34F26 - Termina muy abajo con efecto de aparición */}
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base lg:font-extrabold lg:text-3xl text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">HTML</span>
          <img
            src={HTMLIcon}
            alt="HTML"
            className="absolute opacity-70 left-1/2 -translate-x-1/2 bottom-1/3 translate-y-1/2 scale-120 w-24 md:-top-5 md:w-32  lg:bottom-0  lg:opacity-0 lg:group-hover:translate-y-1/3 lg:group-hover:opacity-70"
            style={{ transition: "all 0.5s ease-out" }}
          />
        </div>

        {/* JavaScript - Amarillo oficial #F7DF1E - rota al hover */}
        <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 md:p-6 rounded text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-xs md:text-base lg:font-extrabold lg:text-3xl text-gray-900 overflow-hidden group cursor-pointer">
          <span className="relative z-10 ">JavaScript</span>
          <img
            src={JSIcon}
            alt="JavaScript"
            className="absolute transition-transform right-2 bottom-2 w-16 opacity-60 md:scale-120 lg:scale-200
            lg:w-20 lg:left-45 lg:-bottom-10 lg:opacity-40 lg:rotate-45 lg:group-hover:opacity-60 lg:group-hover:rotate-0
            lg:group-hover:scale-130 lg:group-hover:-translate-x-14 lg:group-hover:-translate-y-13"
            style={{ transition: "all 0.5s ease-out" }}
          />
        </div>

        {/* CSS - Azul oficial #1572B6 - Lluvia más rápida, izquierda en mobile/tablet */}
        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-3 md:p-6 rounded text-center lg:font-extrabold lg:text-3xl col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">CSS</span>

          {/* CSS IZQUIERDA - Cae primero, desde arriba fuera, atraviesa y sale por abajo */}
          <img
            src={CSSIcon}
            alt="CSS 1"
            className="hidden lg:block absolute left-4 w-24"
            style={{
              top: "-6rem",
              opacity: 0,
              transition: "top 0.7s ease-in 0s, opacity 0.7s ease-in 0s",
            }}
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="CSS 1"] {
                top: calc(100% + 6rem) !important;
                opacity: 0.5 !important;
              }
            }
          `}</style>

          {/* CSS CENTRO/IZQUIERDA - En mobile/tablet a la izquierda, en desktop cae al centro */}
          <img
            src={CSSIcon}
            alt="CSS 2"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 opacity-70 lg:left-1/2 lg:-translate-x-1/2"
            style={{
              transition: "top 0.7s ease-in 0.3s, opacity 0.7s ease-in 0.3s",
            }}
          />
          <style>{`
            @media (min-width: 1024px) {
              .group img[alt="CSS 2"] {
                top: -5rem;
                opacity: 0;
              }
              .group:hover img[alt="CSS 2"] {
                top: 200% !important;
                opacity: 0.7 !important;
              }
            }
          `}</style>

          {/* CSS DERECHA - Cae segundo, desde arriba fuera, atraviesa y sale por abajo */}
          <img
            src={CSSIcon}
            alt="CSS 3"
            className="hidden lg:block absolute right-4 w-20"
            style={{
              top: "-5.5rem",
              opacity: 0,
              transition: "top 0.7s ease-in 0.15s, opacity 0.7s ease-in 0.15s",
            }}
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="CSS 3"] {
                top: calc(100% + 5.5rem) !important;
                opacity: 0.5 !important;
              }
            }
          `}</style>
        </div>

        {/* React - Celeste oficial #61DAFB - Mucho más grande, centrado, rota al hover */}
        <div className="relative bg-gradient-to-br from-cyan-400 to-cyan-500 p-3 md:p-6 rounded text-center col-span-1 lg:font-extrabold lg:text-3xl row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-gray-900 overflow-hidden group cursor-pointer">
          <span className="relative z-10">React</span>
          <img
            src={ReactIcon}
            alt="React"
            className="absolute transition-all duration-2000 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 lg:w-40 opacity-60 lg:group-hover:animate-spin lg:group-hover:scale-120 lg:group-hover:opacity-90"
          />
          {/* <style>{`
            @media (min-width: 1024px) {
              .group img[alt="React"] {
                opacity: 0.3;
              }
              .group:hover img[alt="React"] {
                animation: spin 2s linear infinite !important;
                opacity: 0.6 !important;
              }
            }
          `}</style> */}
        </div>

        {/* Git - Rojo/Naranja oficial #F05032 - Izq a la izquierda, Der a la derecha */}
        <div className="relative bg-gradient-to-br from-orange-600 to-red-600 p-3 md:p-6 rounded lg:font-extrabold lg:text-3xl text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">Git</span>

          {/* Git IZQUIERDO - Baja desde arriba fuera, queda a la IZQUIERDA */}
          <img
            src={GitIcon}
            alt="Git izquierdo"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-32 opacity-80 lg:-top-16 lg:opacity-70 lg:group-hover:top-1/2 lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-90"
            style={{ transition: "all 0.5s ease-out" }}
          />

          {/* Git DERECHO - Sube desde abajo fuera, queda a la DERECHA */}
          <img
            src={GitIcon}
            alt="Git derecho"
            className="absolute opacity-0 right-4 top-1/2 -translate-y-1/2 w-16 md:w-20 md:top-1/2 lg:opacity-60 lg:top-44 lg:group-hover:opacity-90 lg:group-hover:top-1/2"
            style={{
              transition: "all 0.5s ease-out 0.2s",
            }}
          />
        </div>

        {/* Tailwind - Cyan oficial #06B6D4 - Posición inicial corregida */}
        <div className="relative bg-gradient-to-br from-cyan-500 to-teal-500 p-3 md:p-6 rounded lg:font-extrabold lg:text-3xl text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group cursor-pointer">
          <span className="relative z-10">Tailwind</span>
          <img
            src={TailwindIcon}
            alt="Tailwind"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-16 opacity-60 lg:w-24 lg:opacity-40 lg:group-hover:opacity-60"
          />
          <style>{`
            @media (min-width: 1024px) {
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
