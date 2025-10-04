function ChatArea({ channel, serverName, onMenuClick, isChannelSidebarOpen }) {
  return (
    <div className="flex-1 flex flex-col bg-gray-700 overflow-hidden">
      {/* Header del canal */}
      <header className="bg-gray-800 p-4 border-b border-gray-600 flex-shrink-0">
        <div className="flex items-center gap-2">
          <button 
            onClick={onMenuClick}
            className="md:hidden text-white hover:text-gray-300 mr-2"
          >
            ☰
          </button>
          <span className="text-gray-400">#</span>
          <h1 className="text-white font-semibold">{channel?.channelName || 'general'}</h1>
          <div className="ml-4 text-gray-400 text-sm">
            {serverName}
          </div>
        </div>
      </header>
      
      {/* Área de contenido principal - Renderiza el JSX del canal */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl text-white">
          {channel?.chat || (
            <div>
              <h3 className="text-2xl font-bold mb-4">Bienvenido</h3>
              <p>Selecciona un canal para ver su contenido.</p>
            </div>
          )}
        </div>
      </main>
      
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