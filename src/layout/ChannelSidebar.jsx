function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle, serverName}) {
    return (
        <div className={`
            flex flex-col bg-slate-600 text-white overflow-hidden
            ${isOpen 
                ? 'w-screen md:w-60 transition-all duration-150 ease-out' 
                : 'w-0 min-w-0 transition-all duration-100 ease-out delay-75' // Muy rápido
            }
        `}>
            <div className={`
                flex flex-col gap-2 h-full p-4 min-w-80 md:min-w-0
                transition-opacity duration-75 ease-out
                ${isOpen 
                    ? 'opacity-100' // Contenido visible
                    : 'opacity-0'   // Contenido se desvanece primero
                }
            `}>
                {/* Header con título del servidor y botón X */}
                <div className="flex justify-between items-center mb-4 pr-2">
                    <h2 className="text-lg font-semibold truncate mr-4">{serverName}</h2>
                    
                    {/* Botón X simplificado - solo la X */}
                    <button 
                        onClick={onToggle}
                        className="text-white hover:text-gray-300 cursor-pointer transition-colors duration-200 
                                 flex-shrink-0 ml-auto text-xl font-bold"
                        title="Ocultar sidebar"
                    >
                        ✕
                    </button>
                </div>
                
                {/* Título de sección */}
                <h3 className="text-sm font-semibold text-gray-300 uppercase mb-2">
                    Canales de texto
                </h3>
                
                {/* Lista de canales */}
                <div className="flex flex-col gap-1 overflow-y-auto flex-1">
                    {channels.map(channel => (
                        <button 
                            key={channel.id}
                            onClick={() => onChannelSelect(channel)}
                            className={`
                                text-left p-3 rounded cursor-pointer
                                transition-all duration-200 ease-in-out
                                flex items-center gap-2
                                ${selectedChannel?.id === channel.id 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-gray-300 hover:bg-slate-500 hover:text-white'
                                }
                            `}
                        >
                            <span className="text-gray-400">#</span>
                            <span className="truncate">{channel.channelName}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChannelSidebar;