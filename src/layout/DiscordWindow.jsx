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


  return (
  <div className="h-screen w-full bg-gray-800 text-white flex flex-col overflow-hidden font-mono">
      {/* Barra de título vacía - solo en desktop/tablet */}
  <div className="hidden md:block bg-gray-900 h-6 md:h-8 border-b-2 border-gray-700 flex-shrink-0" />

      {/* Contenido principal */}
      <div className="flex-1 flex overflow-hidden w-full min-h-0">
        {children}
      </div>

      {/* Barra inferior - más compacta en desktop/tablet */}
  <div className="bg-gray-900 border-t-2 border-gray-700 flex items-center gap-2 flex-shrink-0 px-2 py-2">
        {/* Perfil: ocupa todo el ancho */}
        <div className="w-full px-2">
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
      </div>
    </div>
  );
}

export default DiscordWindow;