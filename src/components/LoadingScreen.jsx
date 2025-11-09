import React, { useState, useEffect } from "react";
import rocketGif from "../assets/rocketGIF.webp";

export default function LoadingScreen({ progress = 0 }) {
  // Paleta de colores: grises oscuros, acentos azul y naranja
  return (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 45%, #232946 0%, #18181b 70%, #0a0a0a 100%)' }}>
      <div className="flex flex-col items-center justify-center gap-8">
        {/* GIF de cohete centrado */}
        <img
          src={rocketGif}
          alt="Cargando..."
          className="w-32 h-32 md:w-40 md:h-40 drop-shadow-xl"
        />
        {/* Barra de carga cuadrada con efecto neon animado en el borde */}
        <div className="relative w-64 h-8 flex items-center p-1 neon-bar-glow">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-orange-400 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%`, borderRadius: '0px' }}
          ></div>
        </div>
        <span className="mt-2 text-pink-400 font-semibold text-lg tracking-wide drop-shadow-[0_0_4px_#f472b6]">{progress}%</span>
      </div>
    </div>
  );
}
