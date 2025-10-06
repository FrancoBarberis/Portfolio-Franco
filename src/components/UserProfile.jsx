import { useEffect, useState } from "react";
import React from "react";
import Banner from "../assets/BannerCoding.webp"

function UserProfile({
  name = "Franco Barberis",
  avatar = "👤",
  avatarGif = "../assets/CSS.svg", // URL del GIF para el modal
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
        <div className="text-xs md:text-sm font-medium text-gray-900 dark:text-white truncate relative overflow-hidden h-4 md:h-5">
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
            {name} <span className="font-light text-gray-900 dark:text-white">@github</span>
          </span>
        </div>
        <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 capitalize">
          {status}
        </div>
      </div>

      {/* Acciones (solo audio y config) */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onToggleAudio}
          className={`w-8 h-8 md:w-9 md:h-9 transition-all duration-300 flex items-center justify-center rounded cursor-pointer ${
            audioEnabled 
              ? 'bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700' 
              : 'bg-red-200 dark:bg-red-900/30 hover:bg-red-300 dark:hover:bg-red-900/50'
          }`}
          title={audioEnabled ? "Desactivar audio" : "Activar audio"}
          aria-label={audioEnabled ? "Desactivar audio" : "Activar audio"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className={`w-5 h-5 md:w-5 md:h-5 transition-all duration-300 ${
              audioEnabled 
                ? 'text-gray-600 dark:text-gray-400' 
                : 'text-red-600 dark:text-red-400 scale-110'
            }`}
          >
            {audioEnabled ? (
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"/>
            ) : (
              <>
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"/>
              </>
            )}
          </svg>
        </button>
        <button
          type="button"
          onClick={(e) => onOpenSettings(e)}
          data-settings-button
          className="w-8 h-8 md:w-9 md:h-9 text-base md:text-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 flex items-center justify-center rounded cursor-pointer"
          title="Configuración"
          aria-label="Configuración"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 md:w-5 md:h-5"
          >
            <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
          </svg>
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
      <div className="h-24 relative">
          <img src={Banner} alt="banner" className="w-full h-full object-cover" />
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
          <h3 className="text-gray-900 dark:text-white font-semibold text-base md:text-lg mb-1">
            {githubName} <span className="font-light">@github</span>
          </h3>
          <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-2 mt-2">
            <p className="text-gray-600 dark:text-gray-400 text-[10px] md:text-xs uppercase font-semibold mb-1">Estado</p>
            <p className="text-gray-900 dark:text-white text-xs md:text-sm capitalize">{status}</p>
          </div>
          {bio && (
            <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-2 mt-2">
              <p className="text-gray-600 dark:text-gray-400 text-[10px] md:text-xs uppercase font-semibold mb-1">Acerca de mí</p>
              <p className="text-gray-900 dark:text-white text-xs md:text-sm">{bio}</p>
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