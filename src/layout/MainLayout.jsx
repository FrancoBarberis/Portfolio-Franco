import ServerSidebar from "./ServerSidebar";
import ChannelSidebar from "./ChannelSidebar";
import ChatArea from "./ChatArea";
import { useState } from 'react';

function MainLayout() {
  const servidores = [
    {
      id: 1,
      icon: "👤",
      tooltip: "Sobre mí",
      channels: [
        {
          id: 11,
          channelName: "Sobre mí",
          chat: "Componente de chat",
        },
        {
          id: 12,
          channelName: "Habilidades",
          chat: "Componente de chat",}
      ],
    },
    {
      id: 2,
      icon: "💼",
      tooltip: "Proyectos",
      channels: [
        {
          id: 21,
          channelName: "TburgerLabs",
          chat: "Componente de chat",
        },
      ],
    },
  ];
  const [selectedServer, setSelectedServer] = useState(servidores[0]);
  const [selectedChannel, setSelectedChannel] = useState(servidores[0].channels[0]);
  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
  }
  const handleServerChange = (server) => {
    setSelectedServer(server);
    setSelectedChannel(server.channels[0]); // Seleccionar primer canal del nuevo servidor
  };

  return (
    <div className="bg-blue-950 min-h-screen flex flex-row">
      <ServerSidebar servers={servidores} onServerSelect={handleServerChange} />
      <ChannelSidebar channels={selectedServer.channels} onChannelSelect={handleChannelChange} selectedChannel={selectedChannel} />
      <ChatArea channel={selectedChannel} serverName={selectedServer.tooltip} />
      
    </div>
  );
}

export default MainLayout;