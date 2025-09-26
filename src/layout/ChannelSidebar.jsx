import React from 'react';

const ChannelSidebar = ({
  serverName,
  channels,
  activeChannel,
  onChannelSelect
}) => {
  return (
    <div className="w-60 bg-gray-800 flex flex-col">
      {/* Header del servidor */}
      <div className="p-4 border-b border-gray-700 shadow-md">
        <h2 className="text-white font-bold text-lg truncate">{serverName}</h2>
        <div className="flex items-center gap-1 mt-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-400 text-sm">En línea</span>
        </div>
      </div>
      
      {/* Lista de canales */}
      <div className="flex-1 p-3 overflow-y-auto">
        <div className="mb-4">
          <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">
            Canales de texto
          </h3>
          <ul className="space-y-1">
            {channels
              .filter(channel => channel.type === 'text')
              .map((channel) => (
                <li key={channel.id}>
                  <button
                    onClick={() => onChannelSelect(channel.id)}
                    className={`w-full text-left p-2 rounded flex items-center gap-2 transition-colors ${
                      activeChannel === channel.id
                        ? 'bg-gray-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <span className="text-gray-400">#</span>
                    <span className="truncate">{channel.name}</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>

        {/* Canales de voz */}
        {channels.some(channel => channel.type === 'voice') && (
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">
              Canales de voz
            </h3>
            <ul className="space-y-1">
              {channels
                .filter(channel => channel.type === 'voice')
                .map((channel) => (
                  <li key={channel.id}>
                    <button
                      onClick={() => onChannelSelect(channel.id)}
                      className={`w-full text-left p-2 rounded flex items-center gap-2 transition-colors ${
                        activeChannel === channel.id
                          ? 'bg-gray-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <span className="text-gray-400">🔊</span>
                      <span className="truncate">{channel.name}</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelSidebar;