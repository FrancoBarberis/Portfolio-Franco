import React, { useLayoutEffect, useState } from 'react';
import { UserProfile } from '../components';
import rocketGif from '../assets/rocketGIF.webp';

function DiscordWindow({ 
  children, 
  userName = "Franco Barberis", 
  userAvatar = rocketGif,
  userAvatarGif = null,
  userBio = "Frontend Developer",
  userStatus = "open to work", 
  githubName = "FrancoBarberis",
  onAudioEnabledChange
}) {
  const [audioEnabled, setAudioEnabled] = useState(true);

  const handleToggleAudio = () => {
    const newValue = !audioEnabled;
    setAudioEnabled(newValue);
    onAudioEnabledChange?.(newValue);
  };

  // Ref para la barra inferior
  const bottomBarRef = React.useRef(null);
  const [bottomBarHeight, setBottomBarHeight] = useState(56);

  useLayoutEffect(() => {
    function updateHeight() {
      if (bottomBarRef.current) {
        setBottomBarHeight(bottomBarRef.current.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      className="w-full bg-gray-800 text-white flex flex-col font-mono overflow-hidden"
      style={{
        height: '100dvh',
        minHeight: '100dvh',
        '--bottom-bar-height': `${bottomBarHeight}px`
      }}
    >
      {/* Contenido principal */}
      <div className="flex-1 flex w-full min-h-0">
        {children}
      </div>
      {/* Barra inferior - más compacta en desktop/tablet */}
      <div
        ref={bottomBarRef}
        className="bg-gray-900 border-t-2 border-gray-700 flex items-center gap-2 flex-shrink-0 px-2 py-2 z-50"
        style={{
          zIndex: 50,
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}
      >
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
            onToggleAudio={handleToggleAudio}
          />
        </div>
      </div>
    </div>
  );
}

export default DiscordWindow;