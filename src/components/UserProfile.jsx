function UserProfile({
  name = "Franco Barberis",
  avatar = "👤",
  status = "open to work",
  onToggleAudio = () => {},
  onOpenSettings = () => {},
  audioEnabled = true,
}) {
  const statusColors = {
    online: "bg-green-500",
    away: "bg-yellow-500",
    busy: "bg-red-500",
    offline: "bg-gray-500",
  };

  // "open to work" usa el color de "online"
  const normalized = (status || "").toLowerCase();
  const colorKey = normalized === "open to work" ? "online" : normalized;
  const statusClass = statusColors[colorKey] || statusColors.online;

  return (
  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
      {/* Avatar + estado */}
      <div className="relative flex-shrink-0">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-900 dark:text-white font-medium">
          {avatar}
        </div>
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${statusClass}`} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{name}</div>
  <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{status}</div>
      </div>

      {/* Acciones (solo audio y config) */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onToggleAudio}
          className="w-8 h-8 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center justify-center rounded cursor-pointer"
          title={audioEnabled ? "Desactivar audio" : "Activar audio"}
          aria-label={audioEnabled ? "Desactivar audio" : "Activar audio"}
        >
          {audioEnabled ? "🔊" : "🔇"}
        </button>
        <button
          type="button"
          onClick={(e) => onOpenSettings(e)}
          className="w-8 h-8 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center justify-center rounded cursor-pointer"
          title="Configuración"
          aria-label="Configuración"
        >
          ⚙️
        </button>
      </div>
    </div>
  );
}

export default UserProfile;