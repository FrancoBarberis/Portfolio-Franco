import { useLayoutEffect, useState } from 'react';
import { UserProfile } from '../components';
import rocketGif from '../assets/rocketGIF.webp';

function DiscordWindow({ 
  children, 
  userName = "Franco Barberis", 
  userAvatar = rocketGif,
  userAvatarGif = null,
  userBio = "Frontend Developer",
  userStatus = "open to work", 
  githubName = "FrancoBarberis" 
}) {
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Asegurar que el modo oscuro esté siempre activo
  useLayoutEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
  <div className="h-screen w-full bg-gray-800 text-white flex flex-col overflow-hidden font-mono">
      {/* Barra de título vacía */}
  <div className="bg-gray-900 h-6 md:h-8 border-b-2 border-gray-700 flex-shrink-0" />

      {/* Contenido principal */}
      <div className="flex-1 flex overflow-hidden w-full min-h-0">
        {children}
      </div>

      {/* Barra inferior */}
  <div className="bg-gray-900 border-t-2 border-gray-700 flex items-center gap-2 flex-shrink-0
                      px-2 py-2 md:px-2 md:py-2
                      md:grid md:grid-cols-[5rem_15rem_1fr]">
        {/* Perfil: en mobile ocupa todo; en desktop, 2 primeras columnas */}
        <div className="px-2 md:px-2 md:col-span-2 flex-1">
          <UserProfile 
            name={userName}
            avatar={userAvatar}
            avatarGif={userAvatarGif}
            bio={userBio}
            status={userStatus}
            githubName={githubName}
            audioEnabled={audioEnabled}
            onToggleAudio={() => setAudioEnabled(v => !v)}
          />
        </div>

        {/* Input solo en desktop, con emoji y aviso de demo */}
        <div className="hidden md:block md:col-start-3 md:px-0">
          <div className="bg-gray-800 rounded-lg px-4 py-3 flex items-center gap-3 border-2 border-gray-700">
            <span className="text-gray-500 text-sm">💬</span>
            <input 
              type="text" 
              placeholder="Mensaje..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
            />
            <button className="text-gray-400 hover:text-white transition-colors text-sm" title="Emojis">😊</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscordWindow;