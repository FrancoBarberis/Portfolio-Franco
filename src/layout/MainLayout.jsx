import { ServerSidebar, ChannelSidebar, ChatArea, DiscordWindow } from "./";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function MainLayout() {
  // Sincroniza la visibilidad de la ChannelSidebar con el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      setIsChannelSidebarOpen(isDesktop);
    };
    window.addEventListener('resize', handleResize);
    // Ejecuta una vez al montar para corregir el estado inicial
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [audioEnabled, setAudioEnabled] = useState(true);
  
  const servidores = [
    {
      id: 1,
      icon: "🎓",
      tooltip: "Resumen",
      path: "resumen",
      channels: [
        {
          id: 11,
          channelName: "Sobre mí",
          path: "sobre-mi",
        },
        {
          id: 12,
          channelName: "Estudios",
          path: "estudios",
        },
        {
          id: 13,
          channelName: "Certificados",
          path: "certificados",
        },
        {
          id: 14,
          channelName: "Contacto",
          path: "contacto",
        },
      ],
    },
    {
      id: 2,
      icon: "🧠",
      tooltip: "Skills",
      path: "skills",
      channels: [
        {
          id: 21,
          channelName: "Hard Skills",
          path: "hard-skills",
        },
        {
          id: 22,
          channelName: "Soft Skills",
          path: "soft-skills",
        },
      ],
    },
    {
      id: 3,
      icon: "💼",
      tooltip: "Proyectos",
      path: "proyectos",
      channels: [
        {
          id: 31,
          channelName: "TburgerLabs",
          path: "tburgerlabs",
        },
        {
          id: 32,
          channelName: "Poketris", 
          path: "poketris",
        }
      ],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { serverPath, channelPath } = useParams();

  const [selectedServer, setSelectedServer] = useState(() => {
    if (serverPath) {
      return servidores.find((s) => s.path === serverPath) || servidores[0];
    }
    return servidores[0];
  });

  const [selectedChannel, setSelectedChannel] = useState(() => {
    if (channelPath && selectedServer) {
      return (
        selectedServer.channels.find((c) => c.path === channelPath) ||
        selectedServer.channels[0]
      );
    }
    return selectedServer.channels[0];
  });

  const [isChannelSidebarOpen, setIsChannelSidebarOpen] = useState(
    window.innerWidth >= 768
  );

  // Sincronizar con URL cuando cambian los parámetros
  useEffect(() => {
    if (serverPath) {
      const server = servidores.find((s) => s.path === serverPath);
      if (server && server.id !== selectedServer?.id) {
        setSelectedServer(server);
        
        if (channelPath) {
          const channel = server.channels.find((c) => c.path === channelPath);
          if (channel) {
            setSelectedChannel(channel);
          } else {
            setSelectedChannel(server.channels[0]);
            navigate(`/${server.path}/${server.channels[0].path}`, { replace: true });
          }
        } else {
          setSelectedChannel(server.channels[0]);
          navigate(`/${server.path}/${server.channels[0].path}`, { replace: true });
        }
      }
    } else {
      // Si no hay path, redirigir a la ruta por defecto
      navigate(`/${servidores[0].path}/${servidores[0].channels[0].path}`, { replace: true });
    }
  }, [serverPath, channelPath]);

  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) {
      setIsChannelSidebarOpen(false);
    }
    navigate(`/${selectedServer.path}/${channel.path}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  };

  const handleServerChange = (server) => {
    const isDesktop = window.innerWidth >= 768;

    if (selectedServer.id === server.id && isChannelSidebarOpen && !isDesktop) {
      setIsChannelSidebarOpen(false);
    } else {
      if (selectedServer.id !== server.id) {
        setSelectedServer(server);
        setSelectedChannel(server.channels[0]);
        navigate(`/${server.path}/${server.channels[0].path}`);
      } else {
        setSelectedServer(server);
      }

      setIsChannelSidebarOpen(isDesktop ? true : true);
    }
  };

  return (
    <DiscordWindow onAudioEnabledChange={setAudioEnabled}>
  <div className="flex flex-row h-full min-h-0 overflow-hidden w-full relative z-0">
        <ServerSidebar
          servers={servidores}
          onServerSelect={handleServerChange}
          selectedServer={selectedServer}
          audioEnabled={audioEnabled}
        />

        <ChannelSidebar
          channels={selectedServer.channels}
          onChannelSelect={handleChannelChange}
          selectedChannel={selectedChannel}
          isOpen={isChannelSidebarOpen}
          onToggle={() => setIsChannelSidebarOpen(!isChannelSidebarOpen)}
          serverName={selectedServer.tooltip}
          audioEnabled={audioEnabled}
        />

        <ChatArea
          channel={selectedChannel}
          serverName={selectedServer.tooltip}
          onMenuClick={() => setIsChannelSidebarOpen(!isChannelSidebarOpen)}
          isChannelSidebarOpen={isChannelSidebarOpen}
          audioEnabled={audioEnabled}
        />
      </div>
    </DiscordWindow>
  );
}

export default MainLayout;
