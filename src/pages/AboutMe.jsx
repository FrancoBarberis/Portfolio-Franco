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
  <div className="flex flex-col items-center h-full w-full min-h-[100svh] md:min-h-screen mt-10">
  <div className="relative flex flex-col items-center justify-center mx-auto mb-2 md:mb-5" style={{width: '140px', height: '170px'}}>
        {/* Imagen centrada */}
        <img 
          src={Foto} 
          alt="Perfil" 
          className="w-full h-full object-cover object-center rounded-lg block aboutme-img-mask" 
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 14%, black 70%, black 100%)',
            maskImage: 'linear-gradient(to top, transparent 0%, black 14%, black 70%, black 100%)'
          }}
        />
        <style>{`
          @media (min-width: 768px) {
            .aboutme-img-mask {
              -webkit-mask-image: linear-gradient(to top, transparent 0%, black 10%, black 70%, black 100%) !important;
              mask-image: linear-gradient(to top, transparent 0%, black 10%, black 70%, black 100%) !important;
            }
          }
        `}</style>
          }}
        />
        {/* Gradiente difuminado en la parte inferior */}
        {/* Eliminado: el gradiente ahora es una máscara sobre la imagen */}
        {/* Texto Typed.js SIEMPRE en la parte baja de la imagen */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-2" style={{zIndex: 2, overflow: 'visible'}}>
          <h3 className="text-2xl md:text-4xl lg:text-4xl font-extrabold text-center text-white m-0 p-0 whitespace-nowrap" style={{overflow: 'visible'}}>
            <span ref={typedRef} className="text-white inline-block whitespace-nowrap" style={{overflow: 'visible'}}></span>
          </h3>
        </div>
      </div>
  <p className="text-gray-300 text-center text-xs md:text-lg md:mt-8 leading-relaxed max-w-xs md:max-w-2xl mx-auto">
        Soy desarrollador Full Stack con foco en experiencias limpias y usables.
        Tengo algunos proyectos realizados que podrás ver en este portafolio.
      </p>
    </div>
  );
}
