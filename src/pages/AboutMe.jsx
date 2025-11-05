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
      <div className="relative flex flex-col items-center justify-end mx-auto mb-5" style={{width: '240px', height: '320px'}}>
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
        {/* Texto Typed.js sobre la imagen, puede sobresalir horizontalmente */}
        <div className="flex justify-center items-center w-full pb-2 relative" style={{zIndex: 2, overflow: 'visible'}}>
          <h3 className="text-2xl md:text-5xl lg:text-5xl font-extrabold text-center text-white m-0 p-0 whitespace-nowrap" style={{overflow: 'visible'}}>
            <span ref={typedRef} className="text-white inline-block whitespace-nowrap" style={{overflow: 'visible'}}></span>
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
