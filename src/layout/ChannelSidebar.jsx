function ChannelSidebar({channels, onChannelSelect, selectedChannel}) {
    return (
        <div className="flex flex-col gap-2 bg-slate-600 text-white w-52 p-4">
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