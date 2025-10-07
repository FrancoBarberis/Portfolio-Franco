import { useEffect, useState } from "react";
import React from "react";
import Banner from "../assets/CoderGIF.gif";
import rocketGif from "../assets/rocketGIF.webp";

function UserProfile({
  name = "Franco Barberis",
  avatar = rocketGif,
  avatarGif = rocketGif, // usa el rocket por defecto si no se pasa uno
  status = "open to work",
  onToggleAudio = () => {},
  onToggleDark = () => {},
  isDark = true,
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
      {/* Avatar/GIF dentro de contenedor con glow animado */}
      <div 
        className="relative flex-shrink-0 cursor-pointer glow-rotating"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setAvatarRect(rect);
          setShowProfileModal(prev => !prev);
        }}
        onMouseEnter={(e) => {
          if (window.innerWidth >= 768) { // desktop: permite hover abrir
            const rect = e.currentTarget.getBoundingClientRect();
            setAvatarRect(rect);
            setShowProfileModal(true);
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768) {
            setShowProfileModal(false);
          }
        }}
      >
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden relative z-[1]">
          <img 
            src={typeof avatar === 'string' ? avatar : rocketGif}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-200 dark:border-gray-800 ${statusClass}`}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="text-[11px] md:text-sm font-medium text-gray-900 dark:text-white truncate relative overflow-hidden h-4 md:h-5 font-mono">
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
            className="block absolute w-full transition-all duration-200 ease-in-out truncate"
            style={{
              transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
              opacity: isHovered ? 1 : 0,
            }}
          >
            {name} <span className="font-light text-gray-900 dark:text-white">@github</span>
          </span>
        </div>
        <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 capitalize font-mono">
          {status}
        </div>
      </div>

      {/* Acciones (audio + toggle tema) */}
      <div className="flex gap-2 items-center self-center">
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
          onClick={onToggleDark}
          className="w-8 h-8 md:w-9 md:h-9 transition-all duration-200 flex items-center justify-center rounded cursor-pointer bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
          title={isDark ? "Modo oscuro: ON" : "Modo oscuro: OFF"}
          aria-label="Alternar modo oscuro"
        >
          <span className="text-yellow-500 dark:text-gray-300">{isDark ? '🌙' : '🌞'}</span>
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

function ProfileModal({ isOpen, anchorRect, name, email = 'francobarberissic3@gmail.com', avatar, status, statusClass, bio }) {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const closeHandler = () => setShowProfileModal(false);
    window.addEventListener('close-profile-modal', closeHandler);
    return () => window.removeEventListener('close-profile-modal', closeHandler);
  }, []);

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
      {/* Botón X flotante en mobile, sobre el banner */}
      <button
        className="md:hidden absolute right-2 top-2 z-10 bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          // cerrar modal en el mismo componente
          const closeEvt = new Event('close-profile-modal');
          window.dispatchEvent(closeEvt);
        }}
        aria-label="Cerrar"
        title="Cerrar"
        style={{ position: 'absolute' }}
      >
        ✕
      </button>
      {/* Banner */}
    <div className="h-24 relative">
          <img src={Banner} alt="banner" className="w-full h-full object-cover " />
      </div>

      {/* Contenido del perfil */}
      <div className="px-4 pb-4">
        {/* Avatar grande: siempre usar `avatar` pasado */}
        <div className="relative -mt-12 mb-4">
          <div className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden bg-gray-300 dark:bg-gray-700 glow-rotating">
            <img 
              src={typeof avatar === 'string' ? avatar : ''}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Indicador de estado */}
          <div
            className={`absolute bottom-0 right-0 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${statusClass}`}
          />
        </div>

        {/* Información del usuario */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 border-2 border-gray-300 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white font-semibold text-sm md:text-base mb-1 font-mono break-words">
            {email}
          </h3>
          <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-2 mt-2">
            <p className="text-gray-600 dark:text-gray-400 text-[10px] md:text-xs uppercase font-semibold mb-1">Estado</p>
            <p className="text-gray-900 dark:text-white text-xs md:text-sm capitalize">{status}</p>
          </div>
          <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-2 mt-2">
            <p className="text-gray-600 dark:text-gray-400 text-[10px] md:text-xs uppercase font-semibold mb-1">Acerca de mí</p>
            <p className="text-gray-900 dark:text-white text-xs md:text-sm">Frontend Developer</p>
          </div>
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