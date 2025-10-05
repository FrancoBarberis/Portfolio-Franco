import { UserProfile } from '../components';

function DiscordWindow({ children }) {
  return (
    <div className="h-screen w-full bg-gray-800 flex flex-col overflow-hidden">
      {/* Barra de título vacía */}
      <div className="bg-gray-900 h-6 md:h-8 border-b border-gray-700 flex-shrink-0" />

      {/* Contenido principal */}
      <div className="flex-1 flex overflow-hidden w-full min-h-0">
        {children}
      </div>

      {/* Barra inferior: en desktop usa grid para alinear el input con el inicio del ChatArea */}
      <div className="bg-gray-900 border-t border-gray-700 flex items-center gap-2 flex-shrink-0
                      px-2 py-2 md:px-0 md:py-3 md:pr-4
                      md:grid md:grid-cols-[5rem_15rem_1fr]">
        {/* Perfil: en desktop ocupa las 2 primeras columnas (ServerSidebar 5rem + ChannelSidebar 15rem) */}
        <div className="flex-shrink-0 w-48 px-2 md:w-auto md:px-4 md:col-span-2">
          <UserProfile 
            name="Franco Developer" 
            avatar="🚀" 
            status="online" 
          />
        </div>

        {/* Input alineado exactamente con el inicio del ChatArea en desktop */}
        <div className="flex-1 md:col-start-3 md:px-0">
          <div className="bg-gray-800 rounded-lg px-3 py-3 md:px-4 md:py-3 flex items-center gap-1 md:gap-3">
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