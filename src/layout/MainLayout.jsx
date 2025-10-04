import { ServerSidebar, ChannelSidebar, ChatArea } from './';
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
          chat: (
            <div>
              <h3 className="text-2xl font-bold mb-4">¡Hola! Soy Franco</h3>
              <p className="mb-4">
                Desarrollador full-stack con <strong>3 años de experiencia </strong> 
                especializado en React y Node.js.
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Frontend: React, TypeScript, Tailwind CSS</li>
                <li>Backend: Node.js, Express, PostgreSQL</li>
                <li>DevOps: Docker, AWS, Git</li>
              </ul>
              <p>
                📧 <a href="mailto:franco@email.com" className="text-blue-600 hover:underline">
                  franco@email.com
                </a>
              </p>
            </div>
          )
        },
        {
          id: 12,
          channelName: "Habilidades",
          chat: (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-100 px-3 py-1 rounded-full text-sm">Vue.js</span>
                  <span className="bg-purple-100 px-3 py-1 rounded-full text-sm">TypeScript</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-red-100 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>
          )
        }
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
          chat: (
            <div>
              <img src="/proyecto1.jpg" alt="TburgerLabs" className="w-full max-w-md mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">TburgerLabs - Sistema de Pedidos</h3>
              <p className="mb-4">
                Aplicación web completa para gestión de pedidos de restaurante con 
                <strong> React + Node.js + PostgreSQL</strong>.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Características:</h4>
                <ul className="list-disc ml-6">
                  <li>Panel de administración</li>
                  <li>Sistema de pedidos en tiempo real</li>
                  <li>Integración con pagos</li>
                  <li>Dashboard de estadísticas</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Ver Demo
                </a>
                <a href="#" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                  GitHub
                </a>
              </div>
            </div>
          )
        }
      ],
    },
  ];
  const [selectedServer, setSelectedServer] = useState(servidores[0]);
  const [selectedChannel, setSelectedChannel] = useState(servidores[0].channels[0]);
  const [isChannelSidebarOpen, setIsChannelSidebarOpen] = useState(false);

  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
    setIsChannelSidebarOpen(false);
  }

  const handleServerChange = (server) => {
    if (selectedServer.id === server.id && isChannelSidebarOpen) {
      // Si es el mismo servidor y la sidebar está abierta, colapsar
      setIsChannelSidebarOpen(false);
    } else {
      // Si es un servidor diferente, comportamiento normal
      if (selectedServer.id !== server.id) {
        setSelectedServer(server);
        setSelectedChannel(server.channels[0]);
      } else {
        setSelectedServer(server);
        // Mantener el canal actual si es el mismo servidor
      }
      
      setIsChannelSidebarOpen(true);
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-row overflow-hidden">
      <ServerSidebar 
        servers={servidores} 
        onServerSelect={handleServerChange}
        selectedServer={selectedServer} 
      />
      
      <ChannelSidebar 
        channels={selectedServer.channels} 
        onChannelSelect={handleChannelChange} 
        selectedChannel={selectedChannel}
        isOpen={isChannelSidebarOpen}
        onToggle={() => setIsChannelSidebarOpen(!isChannelSidebarOpen)}
        serverName={selectedServer.tooltip}
      />
      
      <ChatArea 
        channel={selectedChannel} 
        serverName={selectedServer.tooltip}
        onMenuClick={() => setIsChannelSidebarOpen(!isChannelSidebarOpen)}
        isChannelSidebarOpen={isChannelSidebarOpen}
      />
    </div>
  );
}

export default MainLayout;