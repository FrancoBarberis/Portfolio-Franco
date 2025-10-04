function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle, serverName}) {
    return (
        <div className={`
            flex flex-col bg-slate-600 text-white
            transition-all duration-300 ease-in-out
            ${isOpen 
                ? 'flex-shrink-0 w-60 p-4' // Ancho fijo cuando abierto
                : 'flex-shrink-[999] w-0 min-w-0 max-w-0 overflow-hidden p-0' // Colapso agresivo
            }
        `}>
            {isOpen && (
                <div className="flex flex-col gap-2 min-w-0"> {/* Contenedor interno */}
                    <h2 className="text-lg font-semibold mb-4 truncate">{serverName}</h2>
                    
                    <div className="flex justify-between items-center mb-4 md:hidden">
                        <h3 className="text-lg font-semibold">Canales</h3>
                        <button 
                            onClick={onToggle}
                            className="text-white hover:text-gray-300 flex-shrink-0"
                        >
                            ✕
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-2 overflow-y-auto"> {/* Scroll interno */}
                        {channels.map(channel => (
                            <button 
                                key={channel.id}
                                onClick={() => onChannelSelect(channel)}
                                className={`text-left p-2 rounded truncate hover:cursor-pointer ${
                                    selectedChannel?.id === channel.id 
                                      ? 'bg-blue-600' 
                                      : 'hover:bg-slate-500'
                                }`}
                            >
                                {channel.channelName}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChannelSidebar;