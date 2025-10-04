function ChannelSidebar({channels}){
    return (
        <div className="bg-red-800">
            {channels.map(channel => (
                <button key={channel.id}>{channel.channelName}</button>
            ))}
        </div>
    )
}

export default ChannelSidebar;