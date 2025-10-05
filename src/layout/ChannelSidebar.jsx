function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle, serverName}) {
    return (
        <div className={`
            flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden border-r border-gray-300 dark:border-gray-700
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
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-300 dark:border-gray-700 pr-16 md:pr-0">
                    <h2 className="text-base font-semibold truncate flex-1 min-w-0">
                        {serverName}
                    </h2>

                    {/* X solo en mobile, a la derecha */}
                    <button 
                        onClick={onToggle}
                        className="md:hidden text-white hover:text-gray-300 transition-colors duration-150
                                   text-xl leading-none w-8 h-8 flex items-center justify-center flex-shrink-0"
                        aria-label="Ocultar sidebar"
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
                                    ? 'bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white' 
                                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300'
                                }
                            `}
                        >
                            <span className="text-gray-500 dark:text-gray-500 flex-shrink-0 text-sm">#</span>
                            <span className="truncate min-w-0 text-sm font-medium">{channel.channelName}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChannelSidebar;