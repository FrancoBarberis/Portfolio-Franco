import { ServerSidebar, ChannelSidebar, ChatArea, DiscordWindow } from './';
import { useState, useEffect } from 'react';

function MainLayout() {
  const servidores = [
    {
      id: 1,
      icon: "👤",
      tooltip: "Resumen",
      channels: [
        {
          id: 11,
          channelName: "Sobre mí",
          chat: (
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">¡Hola! Soy Franco</h3>
              <p>
                Soy desarrollador Full Stack con foco en experiencias limpias y usables. 
                Tengo experiencia realizando varios tipos de proyectos: sitios corporativos, paneles administrativos,
                e-commerce y soluciones a medida.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Stack principal</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Frontend: React, TypeScript, Tailwind CSS</li>
                  <li>Backend: Node.js, Express, PostgreSQL</li>
                  <li>DevOps: Docker, AWS, Git</li>
                </ul>
              </div>
              <p>
                📧 <a href="mailto:francobarberissic3@gmail.com" className="text-blue-600 hover:underline">
                  francobarberissic3@gmail.com
                </a>
              </p>
            </div>
          )
        },
        {
          id: 12,
          channelName: "Estudios",
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
        },
        {
          id: 13,
          channelName: "Certificados",
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
      icon: "🧠",
      tooltip: "Skills",
      channels: [
        {
          id: 21,
          channelName: "Hard Skills",
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
        },
        {
          id: 22,
          channelName: "Soft Skills",
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
    {
      id: 3,
      icon: "💼",
      tooltip: "Proyectos",
      channels: [
        {
          id: 31,
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
  const [isChannelSidebarOpen, setIsChannelSidebarOpen] = useState(window.innerWidth >= 768);

  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
    setIsChannelSidebarOpen(false);
  }

  const handleServerChange = (server) => {
    const isDesktop = window.innerWidth >= 768; // md breakpoint
    
    if (selectedServer.id === server.id && isChannelSidebarOpen && !isDesktop) {
      // Solo colapsar en mobile si es el mismo servidor y la sidebar está abierta
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
      
      // En desktop siempre abierto, en mobile toggle
      setIsChannelSidebarOpen(isDesktop ? true : true);
    }
  };

  return (
    <DiscordWindow>
      <div className="flex flex-row h-full overflow-hidden w-full">
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
    </DiscordWindow>
  );
}

export default MainLayout;