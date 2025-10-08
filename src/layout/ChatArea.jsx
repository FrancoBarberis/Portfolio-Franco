import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AboutMe, Studies, Certificates, HardSkills, SoftSkills, TburgerLabs, Contact } from '../pages';

// Mapeo de rutas a componentes
const routeComponents = {
  'sobre-mi': AboutMe,
  'estudios': Studies,
  'certificados': Certificates,
  'contacto': Contact,
  'hard-skills': HardSkills,
  'soft-skills': SoftSkills,
  'tburgerlabs': TburgerLabs,
};

function ChatArea({ channel, serverName, onMenuClick, isChannelSidebarOpen }) {
  const { channelPath } = useParams();
  const [isSliding, setIsSliding] = useState(false);
  const [displayContent, setDisplayContent] = useState(null);

  useEffect(() => {
    if (channelPath) {
      setIsSliding(true);
      
      setTimeout(() => {
        const Component = routeComponents[channelPath];
        setDisplayContent(Component ? <Component /> : <div>Contenido no encontrado</div>);
        setIsSliding(false);
      }, 200);
    }
  }, [channelPath]);

  return (
  <div className="flex-1 flex flex-col bg-gray-600 min-w-0 h-full"> 
      {/* Header del canal */}
      <header className="bg-gray-800 px-3 md:px-4 pt-3 md:pt-4 pb-3 border-b-2 border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          {!isChannelSidebarOpen && (
            <button 
              onClick={onMenuClick}
              className="md:hidden text-white hover:text-gray-300 mr-2 transition-colors duration-200 text-lg md:text-xl"
              title="Mostrar canales"
              aria-label="Mostrar canales"
            >
              ☰
            </button>
          )}
          <span className="text-gray-400 text-sm md:text-base">#</span>
          <h1 className="text-white text-sm md:text-base font-semibold truncate">{channel?.channelName || 'general'}</h1>
          <div className="ml-4 text-gray-400 text-xs md:text-sm truncate">
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