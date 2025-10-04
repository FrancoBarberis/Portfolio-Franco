function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle, serverName}) {
    return (
        <div className={`
            flex flex-col gap-2 bg-slate-600 text-white
            transition-all duration-300 ease-in-out
            ${isOpen 
                ? 'flex-shrink-0 flex-grow-0 min-w-60 p-4' // Padding solo cuando abierto
                : 'flex-shrink w-0 min-w-0 overflow-hidden p-0' // Se colapsa completamente
            }
        `}>
            {isOpen && (
                <>
                    <h2 className="text-lg font-semibold mb-4">{serverName}</h2>
                    
                    <div className="flex justify-between items-center mb-4 md:hidden">
                        <h3 className="text-lg font-semibold">Canales</h3>
                        <button 
                            onClick={onToggle}
                            className="text-white hover:text-gray-300"
                        >
                            ✕
                        </button>
                    </div>
                    
                    {channels.map(channel => (
                        <button 
                            key={channel.id}
                            onClick={() => onChannelSelect(channel)}
                            className={`text-left p-2 rounded ${
                                selectedChannel?.id === channel.id 
                                  ? 'bg-blue-600' 
                                  : 'hover:bg-slate-500'
                            }`}
                        >
                            {channel.channelName}
                        </button>
                    ))}
                </>
            )}
        </div>
    );
}

export default ChannelSidebar;