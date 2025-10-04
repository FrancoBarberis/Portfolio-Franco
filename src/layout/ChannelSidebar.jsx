function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle, serverName}) {
    return (
        <div className={`
            flex flex-col bg-slate-600 text-white overflow-hidden
            transition-all duration-500 ease-out
            ${isOpen 
                ? 'flex-shrink-0 w-60 opacity-100' 
                : 'flex-shrink w-0 min-w-0 opacity-0'
            }
        `}>
            <div className={`
                flex flex-col gap-2 min-w-60 h-full
                transition-all duration-500 ease-out
                ${isOpen 
                    ? 'p-4 translate-x-0' 
                    : 'p-0 -translate-x-full'
                }
            `}>
                <h2 className="text-lg font-semibold mb-4 truncate">{serverName}</h2>
                
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Canales</h3>
                    <button 
                        onClick={onToggle}
                        className="text-white hover:text-gray-300 flex-shrink-0 cursor-pointer transition-colors duration-200"
                        title="Ocultar sidebar"
                    >
                        ✕
                    </button>
                </div>
                
                <div className="flex flex-col gap-2 overflow-y-auto">
                    {channels.map(channel => (
                        <button 
                            key={channel.id}
                            onClick={() => onChannelSelect(channel)}
                            className={`
                                text-left p-2 rounded truncate cursor-pointer
                                transition-all duration-200 ease-in-out
                                ${selectedChannel?.id === channel.id 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-gray-300 hover:bg-slate-500 hover:text-white'
                                }
                            `}
                        >
                            # {channel.channelName}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChannelSidebar;