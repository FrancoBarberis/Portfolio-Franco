import React from 'react';

const Bubble = ({ 
  icon, 
  name, 
  isActive = false, 
  onClick,
  color = "bg-gray-600"
}) => {
  return (
    <div className="relative group mb-2">
      {/* Indicador de activo (barra izquierda) */}
      <div 
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-r-full transition-all duration-200 ${
          isActive 
            ? 'w-1 h-10' 
            : 'w-0 h-0 group-hover:w-1 group-hover:h-5'
        }`}
      />
      
      {/* Botón del servidor */}
      <button
        onClick={onClick}
        className={`
          relative w-12 h-12 rounded-full transition-all duration-200 
          flex items-center justify-center text-white font-bold text-lg
          ${isActive 
            ? `${color} rounded-2xl` 
            : 'bg-gray-600 hover:bg-gray-500 hover:rounded-2xl'
          }
          group-hover:rounded-2xl
        `}
        title={name}
      >
        {icon}
      </button>
      
      {/* Tooltip con el nombre */}
      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {name}
        {/* Flecha del tooltip */}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-black"></div>
      </div>
    </div>
  );
};

export default Bubble;
