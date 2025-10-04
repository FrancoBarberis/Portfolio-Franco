import { useState, useEffect } from 'react';

function ChatArea({ channel, serverName, onMenuClick, isChannelSidebarOpen }) {
  const [isSliding, setIsSliding] = useState(false);
  const [displayContent, setDisplayContent] = useState(channel?.chat);

  useEffect(() => {
    if (channel) {
      setIsSliding(true);
      
      setTimeout(() => {
        setDisplayContent(channel.chat);
        setIsSliding(false);
      }, 200);
    }
  }, [channel]);

  return (
    <div className="flex-1 flex flex-col bg-gray-700 overflow-hidden">
      {/* Header del canal */}
      <header className="bg-gray-800 p-4 border-b border-gray-600 flex-shrink-0">
        <div className="flex items-center gap-2">
          {!isChannelSidebarOpen && (
            <button 
              onClick={onMenuClick}
              className="text-white hover:text-gray-300 mr-2 cursor-pointer transition-colors duration-200"
              title="Mostrar canales"
            >
              ☰
            </button>
          )}
          <span className="text-gray-400">#</span>
          <h1 className="text-white font-semibold">{channel?.channelName || 'general'}</h1>
          <div className="ml-4 text-gray-400 text-sm">
            {serverName}
          </div>
        </div>
      </header>
      
      {/* Área de contenido principal - Renderiza el JSX del canal */}
      <div className="flex-1 overflow-y-auto p-6">
        <div 
          className={`
            transition-all duration-400 ease-in-out transform
            ${isSliding 
              ? 'translate-x-4 opacity-0 scale-95' 
              : 'translate-x-0 opacity-100 scale-100'
            }
          `}
        >
          {displayContent}
        </div>
      </div>
      
      {/* Footer opcional - simular input de Discord */}
      <div className="p-4 bg-gray-800 flex-shrink-0">
        <div className="bg-gray-600 rounded-lg p-3">
          <p className="text-gray-400 text-sm">
            💬 Escríbeme un mensaje... (solo decorativo)
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;