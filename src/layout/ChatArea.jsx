import React from 'react';

const ChatArea = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col bg-gray-700">
      {/* Header del canal */}
      <header className="bg-gray-800 p-4 border-b border-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">#</span>
          <h1 className="text-white font-semibold">general</h1>
          <div className="ml-4 text-gray-400 text-sm">
            Bienvenido a mi portfolio
          </div>
        </div>
      </header>
      
      {/* Área de contenido principal */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl">
          {children}
        </div>
      </main>
      
      {/* Footer opcional - simular input de Discord */}
      <div className="p-4 bg-gray-800">
        <div className="bg-gray-600 rounded-lg p-3">
          <p className="text-gray-400 text-sm">
            💬 Escríbeme un mensaje... (solo decorativo)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;