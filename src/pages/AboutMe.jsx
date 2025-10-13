import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AboutMe() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ["Franco Barberis", "Frontend Developer"],
        typeSpeed: 120,
        backSpeed: 80,
        backDelay: 3000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    }
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 max-w-2xl mx-auto px-4 py-6 md:py-8">
      {/* Placeholder de foto con gradiente difuminado - más cerca del h2 */}
      <div className="relative w-full max-w-md h-56 md:h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
          Foto de Perfil
        </div>
        {/* Gradiente difuminado más alto para mejor merge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold text-center min-h-[3rem] md:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center whitespace-nowrap">
        <span ref={typedRef} className="text-cyan-400 inline-block"></span>
      </h3>
      <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed">
        Soy desarrollador Full Stack con foco en experiencias limpias y usables.
        Tengo experiencia realizando varios tipos de proyectos: sitios
        corporativos, paneles administrativos, e-commerce y soluciones a medida.
      </p>
    </div>
  );
}
