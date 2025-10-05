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
  <div className="flex-1 flex flex-col bg-white dark:bg-gray-600 min-w-0 h-full"> 
      {/* Header del canal */}
      <header className="bg-gray-100 dark:bg-gray-800 px-3 md:px-4 pt-3 md:pt-4 pb-3 border-b border-gray-300 dark:border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          {!isChannelSidebarOpen && (
            <button 
              onClick={onMenuClick}
              className="md:hidden text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 mr-2 transition-colors duration-200"
              title="Mostrar canales"
              aria-label="Mostrar canales"
            >
              ☰
            </button>
          )}
          <span className="text-gray-500 dark:text-gray-400">#</span>
          <h1 className="text-gray-900 dark:text-white text-base font-semibold truncate">{channel?.channelName || 'general'}</h1>
          <div className="ml-4 text-gray-500 dark:text-gray-400 text-sm truncate">
            {serverName}
          </div>
        </div>
      </header>
      
      {/* Área de contenido principal con scroll controlado */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-6 py-4 min-h-0">
          <div
            className={`
              w-full
              transition-opacity duration-200 ease-out
              motion-reduce:transition-none
              ${isSliding ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <div className="break-words">
              {displayContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;