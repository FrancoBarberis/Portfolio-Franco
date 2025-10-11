import { useState } from 'react';
import { playHighPopSound } from '../utils/audioUtils';

function ChannelSidebar({channels, onChannelSelect, selectedChannel, isOpen, onToggle, serverName, audioEnabled = true}) {

    const [hoveredChannelId, setHoveredChannelId] = useState(null);
    
    const handleChannelClick = (channel) => {
        playHighPopSound(audioEnabled);
        onChannelSelect(channel);
    };

    const handleToggle = () => {
        playHighPopSound(audioEnabled);
        onToggle();
    };

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
                transition-all duration-300 ease-in-out
                md:opacity-100 md:translate-x-0
                ${isOpen 
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-full md:opacity-100 md:translate-x-0'
                }
            `}>
                {/* Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-gray-700 pr-16 md:pr-0">
                    <h2 className="text-sm md:text-base font-semibold truncate flex-1 min-w-0">
                        {serverName}
                    </h2>
                    {/* X solo en mobile, a la derecha */}
                    <button 
                        onClick={handleToggle}
                        className="md:hidden text-white hover:text-gray-300
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50
                                   text-lg md:text-xl leading-none w-8 h-8 flex items-center justify-center flex-shrink-0"
                        aria-label="Ocultar sidebar"
                        title="Ocultar sidebar"
                    >
                        ✕
                    </button>
                </div>
                {/* Lista de canales */}
                <div className="flex flex-col gap-1 mt-4">
                    {channels.map(channel => (
                        <button
                            key={channel.id}
                            onClick={() => handleChannelClick(channel)}
                            onMouseEnter={() => setHoveredChannelId(channel.id)}
                            onMouseLeave={() => setHoveredChannelId(null)}
                            className={`
                                text-left py-1.5 px-2 mx-1 rounded cursor-pointer
                                transition-all duration-150 ease-in-out
                                flex items-center gap-2 min-w-0 relative
                                ${selectedChannel?.id === channel.id 
                                    ? 'bg-gray-600 text-white' 
                                    : 'text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                                }
                            `}
                        >
                            <span className="text-gray-500 flex-shrink-0 text-xs md:text-sm">#</span>
                            <span className="truncate min-w-0 text-xs md:text-sm font-medium">{channel.channelName}</span>
                            {channel.tooltip && (
                                <div
                                    className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg transition-opacity duration-200 ${hoveredChannelId === channel.id ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
                                    style={{ minWidth: '80px', zIndex: 50 }}
                                >
                                    {channel.tooltip}
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChannelSidebar;