import HTMLIcon from "../assets/HTML.svg";
import CSSIcon from "../assets/CSS.svg";
import JSIcon from "../assets/JS.svg";
import ReactIcon from "../assets/React-icon.svg";
import GitIcon from "../assets/GIT.svg";
import TailwindIcon from "../assets/Tailwind.svg";
import ViteIcon from "../assets/Vite.svg";
import NodeIcon from "../assets/Node.svg";
import SQLIcon from "../assets/SQL.svg";
import { useRef, useState, useEffect } from "react";
import Typed from "typed.js";

export default function HardSkills() {
  const nodeTextRef = useRef(null);
  const typedRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering && nodeTextRef.current) {
      if (typedRef.current) typedRef.current.destroy();
      nodeTextRef.current.textContent = '';
      typedRef.current = new Typed(nodeTextRef.current, {
        strings: ["NodeJS"],
        typeSpeed: 120,
        backSpeed: 80,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    } else {
      if (typedRef.current) { typedRef.current.destroy(); typedRef.current = null; }
      if (nodeTextRef.current) nodeTextRef.current.textContent = 'NodeJS';
    }
    return () => { if (typedRef.current) typedRef.current.destroy(); };
  }, [isHovering]);

  return (
  <div className="flex flex-col justify-around items-center gap-y-20 p-4 h-fit">
      <h2 className="text-xl md:text-2xl font-semibold text-white">
        Este es mi stack de tecnologías
      </h2>
      <div className="grid grid-cols-3 grid-rows-6 gap-3 md:gap-4 w-full max-w-2xl h-[400px] md:h-[600px]">
        {/* HTML - Naranja oficial #E34F26 - Termina muy abajo con efecto de aparición */}
  <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-3 md:p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base lg:font-extrabold lg:text-3xl text-white overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(227,79,38,0.3), 0 0 32px 4px rgba(227,79,38,0.15)"}}>
          <span className="relative z-10">HTML</span>
          <img
            src={HTMLIcon}
            alt="HTML"
            className="absolute opacity-70 left-1/2 -translate-x-1/2 bottom-1/3 translate-y-1/2 scale-120 w-24 md:-top-5 md:w-32  lg:bottom-0  lg:opacity-0 lg:group-hover:translate-y-1/3 lg:group-hover:opacity-70"
            style={{ transition: "all 0.5s ease-out" }}
          />
        </div>

        {/* JavaScript - Amarillo oficial #F7DF1E - rota al hover */}
  <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 md:p-6 rounded text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-xs md:text-base lg:font-extrabold lg:text-3xl text-gray-900 overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(247,223,30,0.3), 0 0 32px 4px rgba(247,223,30,0.15)"}}>
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
  <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-3 md:p-6 rounded text-center lg:font-extrabold lg:text-3xl col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(21,114,182,0.3), 0 0 32px 4px rgba(21,114,182,0.15)"}}>
          <span className="relative z-10">CSS</span>

          {/* CSS IZQUIERDA - Cae primero, desde arriba fuera, atraviesa y sale por abajo */}
          <img
            src={CSSIcon}
            alt="CSS 1"
            className=" top-3 opacity-70 lg:block absolute left-4 w-24 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="CSS 1"] {
                animation: rain-infinite 3s linear infinite;
              }
            }
          `}</style>

          {/* CSS CENTRO/IZQUIERDA - En mobile/tablet a la izquierda, en desktop cae al centro */}
          <img
            src={CSSIcon}
            alt="CSS 2"
            className="absolute left-4 -top-1/2 -translate-y-1/2 w-14 opacity-0 lg:left-1/2 lg:-translate-x-1/2"
            style={{
              transition: "top 0.7s ease-in 0.3s, opacity 0.7s ease-in 0.3s",
            }}
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="CSS 2"] {
                animation: rain-infinite 2s linear infinite;
              }
            }
          `}</style>

          {/* CSS DERECHA - Cae segundo, desde arriba fuera, atraviesa y sale por abajo */}
          <img
            src={CSSIcon}
            alt="CSS 3"
            className="hidden lg:block absolute right-4 w-20 opacity-0 "
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="CSS 3"] {
                animation: rain-infinite 1.2s linear infinite;
              }
            }
          `}</style>
        </div>

        {/* React - Celeste oficial #61DAFB - Mucho más grande, centrado, rota al hover */}
  <div className="relative bg-gradient-to-br from-cyan-400 to-cyan-500 p-3 md:p-6 rounded text-center col-span-1 lg:font-extrabold lg:text-3xl row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-gray-900 overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(97,218,251,0.3), 0 0 32px 4px rgba(97,218,251,0.15)"}}>
          <span className="relative z-10">React</span>
          <img
            src={ReactIcon}
            alt="React"
            className="absolute transition-opacity duration-2000 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 lg:w-40 opacity-60 lg:group-hover:animate-spin lg:group-hover:scale-120 lg:group-hover:opacity-90"
          />
        </div>

        {/* Git - Rojo/Naranja oficial #F05032 - Izq a la izquierda, Der a la derecha */}
  <div className="relative bg-gradient-to-br from-orange-600 to-red-600 p-3 md:p-6 rounded lg:font-extrabold lg:text-3xl text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(240,80,50,0.3), 0 0 32px 4px rgba(240,80,50,0.15)"}}>
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

        {/* Tailwind - Cyan oficial #06B6D4 - Múltiples logos deslizándose rápido */}
  <div className="relative bg-gradient-to-br from-white to-cyan-600 p-3 md:p-6 rounded lg:font-extrabold lg:text-3xl text-center col-span-2 row-span-1 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(6,182,212,0.3), 0 0 32px 4px rgba(6,182,212,0.15)"}}>
          <span className="relative z-10">Tailwind</span>
          
          {/* Logo 1 */}
          <img
            src={TailwindIcon}
            alt="Tailwind 1"
            className="absolute w-16 opacity-0 lg:w-20 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="Tailwind 1"] {
                animation: slide-infinite 0.8s linear infinite;
                opacity: 0.4;
              }
            }
          `}</style>

          {/* Logo 2 */}
          <img
            src={TailwindIcon}
            alt="Tailwind 2"
            className="absolute w-16 opacity-0 lg:w-20 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="Tailwind 2"] {
                animation: slide-infinite 0.8s linear 0.2s infinite;
                opacity: 0.35;
              }
            }
          `}</style>

          {/* Logo 3 */}
          <img
            src={TailwindIcon}
            alt="Tailwind 3"
            className="absolute w-16 opacity-0 lg:w-20 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="Tailwind 3"] {
                animation: slide-infinite 0.8s linear 0.4s infinite;
                opacity: 0.45;
              }
            }
          `}</style>

          {/* Logo 4 */}
          <img
            src={TailwindIcon}
            alt="Tailwind 4"
            className="absolute w-16 opacity-0 lg:w-20 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="Tailwind 4"] {
                animation: slide-infinite 0.8s linear 0.6s infinite;
                opacity: 0.3;
              }
            }
          `}</style>

          {/* Logo 5 */}
          <img
            src={TailwindIcon}
            alt="Tailwind 5"
            className="absolute w-16 opacity-0 lg:w-18 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="Tailwind 5"] {
                animation: slide-infinite 0.8s linear 0.1s infinite;
                opacity: 0.4;
              }
            }
          `}</style>
        </div>

        {/* VITE - Rayo que cruza la pantalla a alta velocidad */}
  <div className="relative bg-gradient-to-br from-yellow-500 to-blue-600 p-3 md:p-6 rounded lg:font-extrabold lg:text-3xl text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(59,130,246,0.3), 0 0 32px 4px rgba(59,130,246,0.15)"}}>
          <span className="relative z-10">Vite</span>
          
          {/* Logo estático - visible por defecto, se oculta en hover */}
          <img
            src={ViteIcon}
            alt="Vite Static"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 opacity-60 lg:w-24 lg:opacity-70 lg:group-hover:opacity-0 transition-opacity duration-300"
          />

          {/* Rayo 1 - Diagonal de izquierda a derecha */}
          <img
            src={ViteIcon}
            alt="Vite 1"
            className="absolute w-20 opacity-0 lg:w-28 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="Vite 1"] {
                animation: lightning-strike 0.6s ease-out infinite;
              }
            }
          `}</style>

          {/* Rayo 2 - Más pequeño, más rápido */}
          <img
            src={ViteIcon}
            alt="Vite 2"
            className="absolute w-16 opacity-0 lg:w-20 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="Vite 2"] {
                animation: lightning-strike 0.4s ease-out 0.3s infinite;
              }
            }
          `}</style>

          {/* Rayo 3 - Centro */}
          <img
            src={ViteIcon}
            alt="Vite 3"
            className="absolute w-24 opacity-0 lg:w-32 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="Vite 3"] {
                animation: lightning-strike 0.5s ease-out 0.15s infinite;
              }
            }
          `}</style>
        </div>
        {/* NodeJS */}
        
        <div 
          className="relative bg-gradient-to-br from-green-600 to-black p-3 md:p-6 rounded lg:font-extrabold lg:text-3xl text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(34,197,94,0.3), 0 0 32px 4px rgba(34,197,94,0.15)"}}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="relative z-10" ref={nodeTextRef}>NodeJS</span>
          <img
            src={NodeIcon}
            alt="NodeJS"
            className="absolute transition-all ease-in-out duration-300 left-70% top-1/4 w-3xl opacity-60 lg:w-24 lg:opacity-40 lg:group-hover:opacity-60"
          />
        </div>  
        
        {/* SQL & noSQL - Base de datos con iconos orbitando */}
  <div className="relative bg-gradient-to-br from-yellow-700 to-yellow-300 p-3 md:p-6 rounded lg:font-extrabold lg:text-3xl text-center col-span-1 row-span-2 flex items-center justify-center font-medium text-sm md:text-base text-white overflow-hidden group animate-glow" style={{boxShadow: "0 0 16px 2px rgba(202,138,4,0.3), 0 0 32px 4px rgba(202,138,4,0.15)"}}>
          <span className="relative z-10">SQL & noSQL</span>
          
          {/* Centro - Base de datos principal */}
          <img
            src={SQLIcon}
            alt="SQL Center"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 opacity-50 lg:w-20 lg:opacity-50"
          />

          {/* Órbita 1 - Arriba (0°) */}
          <img
            src={SQLIcon}
            alt="SQL Orbit 1"
            className="absolute left-1/2 top-1/2 w-10 opacity-0 lg:w-12 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="SQL Orbit 1"] {
                animation: orbit-1 2s linear infinite;
              }
            }
          `}</style>

          {/* Órbita 2 - Derecha (90°) */}
          <img
            src={SQLIcon}
            alt="SQL Orbit 2"
            className="absolute left-1/2 top-1/2 w-8 opacity-0 lg:w-10 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="SQL Orbit 2"] {
                animation: orbit-2 2s linear infinite;
              }
            }
          `}</style>

          {/* Órbita 3 - Abajo (180°) */}
          <img
            src={SQLIcon}
            alt="SQL Orbit 3"
            className="absolute left-1/2 top-1/2 w-8 opacity-0 lg:w-10 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="SQL Orbit 3"] {
                animation: orbit-3 2s linear infinite;
              }
            }
          `}</style>

          {/* Órbita 4 - Izquierda (270°) */}
          <img
            src={SQLIcon}
            alt="SQL Orbit 4"
            className="absolute left-1/2 top-1/2 w-8 opacity-0 lg:w-10 lg:opacity-0"
          />
          <style>{`
            @media (min-width: 1024px) {
              .group:hover img[alt="SQL Orbit 4"] {
                animation: orbit-4 2s linear infinite;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
