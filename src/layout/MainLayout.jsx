import ServerSidebar from "./ServerSidebar";
import ChannelSidebar from "./ChannelSidebar";
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

  return (
    <div className="bg-blue-950 min-h-screen flex flex-row">
      <ServerSidebar servers={servidores} onServerSelect={setSelectedServer} />
      <ChannelSidebar channels={selectedServer.channels} />
    </div>
  );
}

export default MainLayout;