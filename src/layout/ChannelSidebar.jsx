function ChannelSidebar({channels}){
    return (
        <div className="bg-red-800 flex flex-col p-4 pt-24 gap-4">
            {channels.map(channel => (
                <button key={channel.id}>{channel.channelName}</button>
            ))}
        </div>
    )
}

export default ChannelSidebar;