import ServerSidebar from "./ServerSidebar";
import ChannelSidebar from "./ChannelSidebar";

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

  return (
    <div className="bg-blue-950 min-h-screen">
      <ServerSidebar servers={servidores} />
    </div>
  );
}

export default MainLayout;