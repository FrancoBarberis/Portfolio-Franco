function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle}) {
    return (
        <div className={`
            flex flex-col gap-2 bg-slate-600 text-white p-4
            transition-all duration-300 ease-in-out
            ${isOpen 
                ? 'w-80 md:w-52' 
                : 'w-0 md:w-52 overflow-hidden md:overflow-visible'
            }
        `}>
            {/* Header con botón cerrar solo en mobile cuando está abierto */}
            {isOpen && (
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <h3 className="text-lg font-semibold">Canales</h3>
                    <button 
                        onClick={onToggle}
                        className="text-white hover:text-gray-300"
                    >
                        ✕
                    </button>
                </div>
            )}
            
            {/* Lista de canales */}
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
        </div>
    );
}

export default ChannelSidebar;