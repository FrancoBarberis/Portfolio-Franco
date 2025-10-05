function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle, serverName}) {
    return (
        <div className={`
            flex flex-col bg-gray-900 text-white overflow-hidden border-r border-gray-700
            transition-all duration-300 ease-in-out h-full
            md:w-60 md:flex-shrink-0
            ${isOpen 
                ? 'w-full max-w-xs flex-shrink-0' 
                : 'w-0 md:w-60'
            }
        `}>
            <div className={`
                flex flex-col gap-2 h-full min-w-0
                p-3 md:p-4
                transition-opacity duration-300 ease-in-out
                md:opacity-100
                ${isOpen 
                    ? 'opacity-100 delay-150'
                    : 'opacity-0 md:opacity-100'
                }
            `}>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-700">
                    <h2 className="text-base font-semibold truncate flex-1 min-w-0 text-white">{serverName}</h2>
                    
                    <button 
                        onClick={onToggle}
                        className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 
                                 flex-shrink-0 ml-2 text-lg w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700
                                 md:hidden"
                        title="Ocultar sidebar"
                    >
                        ✕
                    </button>
                </div>
                
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
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
                            <span className="text-gray-500 flex-shrink-0 text-sm">#</span>
                            <span className="truncate min-w-0 text-sm font-medium">{channel.channelName}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChannelSidebar;