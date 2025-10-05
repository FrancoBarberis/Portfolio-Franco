import { UserProfile } from './';

function DiscordWindow({ children }) {
  return (
    <div className="h-screen w-full bg-gray-800 flex flex-col overflow-hidden">
      {/* Barra de título vacía - más pequeña en móvil */}
      <div className="bg-gray-900 h-6 md:h-8 border-b border-gray-700 flex-shrink-0">
      </div>

      {/* Contenido principal de la aplicación */}
      <div className="flex-1 flex overflow-hidden w-full min-h-0">
        {children}
      </div>

      {/* Barra inferior con perfil de usuario e input - responsive */}
      <div className="bg-gray-900 px-2 py-2 md:px-0 md:py-3 border-t border-gray-700 flex items-center gap-2 md:gap-0 flex-shrink-0">
        {/* Perfil de usuario - completo en ambas versiones */}
        <div className="flex-shrink-0 w-48 md:w-72 px-2 md:px-4">
          <UserProfile 
            name="Franco Developer" 
            avatar="🚀" 
            status="online" 
          />
        </div>
        
        {/* Spacer para ChannelSidebar en desktop */}
        <div className="hidden md:block w-60"></div>
        
        {/* Input de mensaje - más compacto en móvil */}
        <div className="flex-1 md:px-6">
          <div className="bg-gray-800 rounded-lg px-2 py-1 md:px-4 md:py-3 flex items-center gap-1 md:gap-3">
            <span className="text-gray-500 text-xs md:text-sm hidden md:inline">💬</span>
            <input 
              type="text" 
              placeholder="Mensaje..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-xs md:text-sm"
            />
            <button className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm hidden md:inline">📎</button>
            <button className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">😊</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscordWindow;