import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Foto from "../assets/Perfil.png";

export default function AboutMe() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ["Franco Barberis", "Frontend Developer"],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 3000,
        startDelay: 70,
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
    <div className="flex flex-col justify-center align-middle h-full w-full">
      <div
        className="relative h-full w-full flex flex-col items-center justify-end mx-auto mb-5"
        style={{
          backgroundImage: `url(${Foto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "240px",
          height: "320px",
        }}
      >
        {/* Título centrado, una sola línea, sin fondo, cursor al final */}
        <div className="flex justify-center items-center w-full pb-2">
          <h3 className="text-2xl md:text-5xl lg:text-5xl font-extrabold text-center text-white m-0 p-0 whitespace-nowrap">
            <span ref={typedRef} className="text-white inline-block whitespace-nowrap"></span>
          </h3>
        </div>
      </div>
      <p className="text-gray-300 text-center text-base md:text-3xl md:mt-20 leading-relaxed">
        Soy desarrollador Full Stack con foco en experiencias limpias y usables.
        Tengo algunos proyectos realizados que podrás ver en este portafolio.
      </p>
    </div>
  );
}
