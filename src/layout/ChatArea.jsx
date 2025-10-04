function ChatArea({ channel, serverName }) {
  return (
    <div className="flex-1 bg-white p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{serverName}</h1>
        <h2 className="text-xl text-gray-600">#{channel.channelName}</h2>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="whitespace-pre-line text-gray-700">
          {channel.chat}
        </div>
      </div>
    </div>
  );
}

export default ChatArea;