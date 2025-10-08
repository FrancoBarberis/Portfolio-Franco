function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle, serverName}) {
    return (
        <div className={`
            flex flex-col bg-gray-900 text-white overflow-hidden border-r-2 border-gray-700
            transition-all duration-300 ease-in-out h-full flex-shrink-0
            md:w-60
            ${isOpen 
                ? 'w-full md:w-60' 
                : 'w-0 md:w-60'
            }
        `}>
            <div className={`
                flex flex-col gap-2 h-full min-w-0
                p-3 md:p-4
                transition-opacity duration-200 ease-in-out
                md:opacity-100
                ${isOpen 
                    ? 'opacity-100'
                    : 'opacity-0 md:opacity-100'
                }
            `}>
                {/* Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-gray-700 pr-16 md:pr-0">
                    <h2 className="text-sm md:text-base font-semibold truncate flex-1 min-w-0">
                        {serverName}
                    </h2>

                    {/* X solo en mobile, a la derecha */}
                    <button 
                        onClick={onToggle}
                        className="md:hidden text-white hover:text-gray-300
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50
                                   text-lg md:text-xl leading-none w-8 h-8 flex items-center justify-center flex-shrink-0"
                        aria-label="Ocultar sidebar"
                        title="Ocultar sidebar"
                    >
                        ✕
                    </button>
                </div>
                
                <h3 className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Canales de texto
                </h3>
                
                <div className="flex flex-col gap-1 overflow-y-auto flex-1 min-w-0">
                    {channels.map(channel => (
                        <button 
                            key={channel.id}
                            onClick={() => onChannelSelect(channel)}
                            className={`
                                text-left py-1.5 px-2 mx-1 rounded cursor-pointer
                                transition-all duration-150 ease-in-out
                                flex items-center gap-2 min-w-0
                                ${selectedChannel?.id === channel.id 
                                    ? 'bg-gray-600 text-white' 
                                    : 'text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                                }
                            `}
                        >
                            <span className="text-gray-500 flex-shrink-0 text-xs md:text-sm">#</span>
                            <span className="truncate min-w-0 text-xs md:text-sm font-medium">{channel.channelName}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChannelSidebar;