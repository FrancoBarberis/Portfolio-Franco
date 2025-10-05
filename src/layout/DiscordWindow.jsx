import { useState } from 'react';
import { UserProfile } from '../components';

function DiscordWindow({ children, userName = "Franco Barberis", userAvatar = "🚀", userStatus = "open to work" }) {
  const [audioEnabled, setAudioEnabled] = useState(true);

  return (
    <div className="h-screen w-full bg-gray-800 flex flex-col overflow-hidden">
      {/* Barra de título vacía */}
      <div className="bg-gray-900 h-6 md:h-8 border-b border-gray-700 flex-shrink-0" />

      {/* Contenido principal */}
      <div className="flex-1 flex overflow-hidden w-full min-h-0">
        {children}
      </div>

      {/* Barra inferior */}
      <div className="bg-gray-900 border-t border-gray-700 flex items-center gap-2 flex-shrink-0
                      px-2 py-2 md:px-0 md:py-3 md:pr-4
                      md:grid md:grid-cols-[5rem_15rem_1fr]">
        {/* Perfil: ocupa las 2 primeras columnas en desktop; en mobile, usa todo el ancho disponible */}
        <div className="px-2 md:px-4 md:col-span-2">
          <UserProfile 
            name={userName}
            avatar={userAvatar}
            status={userStatus}
            audioEnabled={audioEnabled}
            onToggleAudio={() => setAudioEnabled(v => !v)}
            onOpenSettings={() => {/* abrir modal/config */}}
          />
        </div>

        {/* Input solo en desktop, con aclaración de demo y emoji */}
        <div className="hidden md:block md:col-start-3 md:px-0">
          <div className="bg-gray-800 rounded-lg px-4 py-3 flex items-center gap-3" title="Demo: no envía mensajes">
            <span className="text-gray-500 text-sm">💬</span>
            <input 
              type="text" 
              placeholder="Puedes probar escribir un mensaje (aunque realmente no funciona 😅)"
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscordWindow;