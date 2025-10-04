function ChatArea({ channel, serverName, onMenuClick, isChannelSidebarOpen }) {
  return (
    <div className="flex-1 bg-white p-6">
      <div className="mb-4">
        <div className="flex items-center gap-4">
          {/* Botón menú solo en mobile */}
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded"
          >
            ☰
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{serverName}</h1>
            <h2 className="text-xl text-gray-600">#{channel.channelName}</h2>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="text-gray-700">
          {typeof channel.chat === 'string' ? (
            <div className="whitespace-pre-line">{channel.chat}</div>
          ) : (
            channel.chat
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatArea;