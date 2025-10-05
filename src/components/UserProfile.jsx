import { useEffect, useState } from "react";
import React from "react";

function UserProfile({
  name = "Franco Barberis",
  avatar = "👤",
  avatarGif = null, // URL del GIF para el modal
  bannerImage = null, // URL del banner
  status = "open to work",
  onToggleAudio = () => {},
  onOpenSettings = () => {},
  audioEnabled = true,
  githubName = "FrancoBarberis",
  bio = "Full Stack Developer",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [avatarRect, setAvatarRect] = useState(null);

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
    <div 
      className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border-2 border-gray-400 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Avatar + estado */}
      <div 
        className="relative flex-shrink-0 cursor-pointer"
        onMouseEnter={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setAvatarRect(rect);
          setShowProfileModal(true);
        }}
        onMouseLeave={() => {
          setShowProfileModal(false);
        }}
      >
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-900 dark:text-white font-medium border-2 border-gray-400 dark:border-gray-700 overflow-hidden">
          {typeof avatar === 'string' && avatar.startsWith('http') ? (
            <img 
              src={avatar} 
              alt="avatar" 
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            avatar
          )}
        </div>
        <div
          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-200 dark:border-gray-800 ${statusClass}`}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 dark:text-white truncate relative overflow-hidden h-5">
          <span 
            className="block absolute w-full transition-all duration-200 ease-in-out"
            style={{
              transform: isHovered ? 'translateY(-100%)' : 'translateY(0)',
              opacity: isHovered ? 0 : 1,
            }}
          >
            {name}
          </span>
          <span 
            className="block absolute w-full transition-all duration-200 ease-in-out"
            style={{
              transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
              opacity: isHovered ? 1 : 0,
            }}
          >
            #{githubName}
          </span>
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
          {status}
        </div>
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
          data-settings-button
          className="w-8 h-8 text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center justify-center rounded cursor-pointer"
          title="Configuración"
          aria-label="Configuración"
        >
          ⚙️
        </button>
      </div>

      {/* Modal de perfil expandido */}
      {showProfileModal && avatarRect && (
        <ProfileModal
          isOpen={showProfileModal}
          anchorRect={avatarRect}
          name={name}
          githubName={githubName}
          avatar={avatar}
          avatarGif={avatarGif}
          bannerImage={bannerImage}
          status={status}
          statusClass={statusClass}
          bio={bio}
        />
      )}
    </div>
  );
}

function ProfileModal({ isOpen, anchorRect, name, githubName, avatar, avatarGif, bannerImage, status, statusClass, bio }) {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (!isOpen || !anchorRect) {
      setPosition(null);
      return;
    }

    const gap = 8;
    const modalWidth = 300;
    const modalHeight = 350;
    
    // Calcular posición para que aparezca arriba del avatar
    setPosition({
      position: "fixed",
      bottom: `${window.innerHeight - anchorRect.top + gap}px`,
      left: `${anchorRect.left}px`,
      zIndex: 9999,
    });
  }, [isOpen, anchorRect]);

  if (!isOpen || !position) return null;

  return (
    <div
      className="profile-modal bg-white dark:bg-gray-900 rounded-lg shadow-2xl border-2 border-gray-400 dark:border-gray-700 overflow-hidden"
      style={{ ...position, width: '300px' }}
    >
      {/* Banner */}
      <div className="h-24 relative" style={{ backgroundColor: bannerImage ? 'transparent' : '#5865F2' }}>
        {bannerImage && (
          <img src={bannerImage} alt="banner" className="w-full h-full object-cover" />
        )}
      </div>

      {/* Contenido del perfil */}
      <div className="px-4 pb-4">
        {/* Avatar grande con GIF */}
        <div className="relative -mt-12 mb-4">
          <div className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden bg-gray-300 dark:bg-gray-700">
            {avatarGif ? (
              <img 
                src={avatarGif} 
                alt="avatar" 
                className="w-full h-full object-cover"
              />
            ) : typeof avatar === 'string' && avatar.startsWith('http') ? (
              <img 
                src={avatar} 
                alt="avatar" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl bg-gray-300 dark:bg-gray-600">
                {avatar}
              </div>
            )}
          </div>
          {/* Indicador de estado */}
          <div
            className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 ${statusClass}`}
          />
        </div>

        {/* Información del usuario */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 border-2 border-gray-300 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">#{githubName}</p>
          <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-2 mt-2">
            <p className="text-gray-600 dark:text-gray-400 text-xs uppercase font-semibold mb-1">Estado</p>
            <p className="text-gray-900 dark:text-white text-sm capitalize">{status}</p>
          </div>
          {bio && (
            <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-2 mt-2">
              <p className="text-gray-600 dark:text-gray-400 text-xs uppercase font-semibold mb-1">Acerca de mí</p>
              <p className="text-gray-900 dark:text-white text-sm">{bio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SettingsModal({ isOpen, onClose, isDark, onToggleDark, anchorRect }) {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (!isOpen || !anchorRect) {
      setPosition(null);
      return;
    }

    const gap = 8;
    const isMobile = window.innerWidth < 768;
    
    setPosition({
      position: "fixed",
      bottom: `${window.innerHeight - anchorRect.top + gap}px`,
      ...(isMobile 
        ? { right: `${window.innerWidth - anchorRect.right}px` }
        : { left: `${anchorRect.left}px` }
      ),
      zIndex: 9999,
    });
  }, [isOpen, anchorRect]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest(".settings-modal")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen || !position) return null;

  return (
    <div
      className="settings-modal bg-gray-800 dark:bg-gray-800 rounded-lg shadow-xl border-2 border-gray-400 dark:border-gray-700 p-4 w-72"
      style={position}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm">Configuración</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors text-lg font-bold"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        {/* Toggle Dark Mode */}
        <div className="flex items-center justify-between p-3 bg-gray-700 dark:bg-gray-700 rounded hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors border-2 border-gray-600 dark:border-gray-600">
          <span className="text-white text-sm">Modo oscuro</span>
          <button
            onClick={onToggleDark}
            className={`relative w-11 h-6 rounded-full transition-colors border-2 border-gray-300 ${
              isDark ? "bg-indigo-500" : "bg-gray-500"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                isDark ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Otras opciones de configuración */}
        <div className="p-3 bg-gray-700 dark:bg-gray-700 rounded border-2 border-gray-600 dark:border-gray-600">
          <p className="text-gray-400 text-xs">Más opciones próximamente...</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;