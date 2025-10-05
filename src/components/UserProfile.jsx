function UserProfile({ name = "Franco", avatar = "👤", status = "online" }) {
  const statusColors = {
    online: "bg-green-500",
    away: "bg-yellow-500", 
    busy: "bg-red-500",
    offline: "bg-gray-500"
  };

  return (
    <div className="flex items-center gap-3 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
      {/* Avatar con indicador de estado */}
      <div className="relative flex-shrink-0">
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium">
          {avatar}
        </div>
        {/* Indicador de estado */}
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${statusColors[status]}`}></div>
      </div>
      
      {/* Información del usuario */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-white truncate">{name}</div>
        <div className="text-xs text-gray-400 capitalize">{status}</div>
      </div>
      
      {/* Botones de acción */}
      <div className="flex gap-1">
        <button 
          className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center rounded text-xs"
          title="Silenciar micrófono"
        >
          🎤
        </button>
        <button 
          className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center rounded text-xs"
          title="Desactivar audio"
        >
          🔊
        </button>
        <button 
          className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center rounded text-xs"
          title="Configuración"
        >
          ⚙️
        </button>
      </div>
    </div>
  );
}

export default UserProfile;