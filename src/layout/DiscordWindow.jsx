import { useEffect, useState } from 'react';
import { UserProfile, SettingsModal } from '../components';

function DiscordWindow({ 
  children, 
  userName = "Franco Barberis", 
  userAvatar = "🚀", 
  userAvatarGif = null,
  userBanner = null,
  userBio = "Full Stack Developer",
  userStatus = "open to work", 
  githubName = "FrancoBarberis" 
}) {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [anchorRect, setAnchorRect] = useState(null);
  const settingsButtonRef = useState(null)[0]; // Referencia al botón

  // Opcional: añade o quita la clase 'dark' en <html> si usas Tailwind darkMode: 'class'
  useEffect(() => {
    const el = document.documentElement;
    if (isDark) el.classList.add('dark');
    else el.classList.remove('dark');
  }, [isDark]);

  // Actualizar anchorRect cuando cambia el tamaño de ventana
  useEffect(() => {
    if (!isSettingsOpen) return;

    const updateAnchorRect = () => {
      const button = document.querySelector('[data-settings-button]');
      if (button) {
        setAnchorRect(button.getBoundingClientRect());
      }
    };

    updateAnchorRect();
    window.addEventListener('resize', updateAnchorRect);
    return () => window.removeEventListener('resize', updateAnchorRect);
  }, [isSettingsOpen]);

  return (
    <div className="h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white flex flex-col overflow-hidden">
      {/* Barra de título vacía */}
  <div className="bg-gray-200 dark:bg-gray-900 h-6 md:h-8 border-b-2 border-gray-400 dark:border-gray-700 flex-shrink-0" />

      {/* Contenido principal */}
      <div className="flex-1 flex overflow-hidden w-full min-h-0">
        {children}
      </div>

      {/* Barra inferior */}
  <div className="bg-gray-200 dark:bg-gray-900 border-t-2 border-gray-400 dark:border-gray-700 flex items-center gap-2 flex-shrink-0
                      px-2 py-2 md:px-2 md:py-2
                      md:grid md:grid-cols-[5rem_15rem_1fr]">
        {/* Perfil: en mobile ocupa todo; en desktop, 2 primeras columnas */}
        <div className="px-2 md:px-2 md:col-span-2 flex-1">
          <UserProfile 
            name={userName}
            avatar={userAvatar}
            avatarGif={userAvatarGif}
            bannerImage={userBanner}
            bio={userBio}
            status={userStatus}
            githubName={githubName}
            audioEnabled={audioEnabled}
            onToggleAudio={() => setAudioEnabled(v => !v)}
            onOpenSettings={(e) => {
              e.stopPropagation(); // evita que el click llegue al listener global
              setIsSettingsOpen(prev => {
                if (prev) return false; // si estaba abierto, cerrarlo
                const rect = e?.currentTarget?.getBoundingClientRect?.();
                if (rect) setAnchorRect(rect);
                return true; // abrir si estaba cerrado
              });
            }}
          />
        </div>

        {/* Input solo en desktop, con emoji y aviso de demo */}
        <div className="hidden md:block md:col-start-3 md:px-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 flex items-center gap-3 border-2 border-gray-400 dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-500 text-sm">💬</span>
            <input 
              type="text" 
              placeholder="Mensaje..."
              className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none text-sm"
            />
            <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm" title="Emojis">😊</button>
          </div>
        </div>
      </div>

      {/* Popover de configuración anclado al botón */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        isDark={isDark}
        onToggleDark={() => setIsDark(v => !v)}
        anchorRect={anchorRect}
      />
    </div>
  );
}

export default DiscordWindow;