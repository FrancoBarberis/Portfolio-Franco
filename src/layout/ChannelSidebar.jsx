function ChannelSidebar({channels}){
    return (
        <div className="bg-red-800">
            {channels.map(channel => (
                <button>{channel.channelName}</button>
            ))}
        </div>
    )
}

export default ChannelSidebar;      