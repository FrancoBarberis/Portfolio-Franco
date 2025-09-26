import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChannelSidebar from './ChannelSidebar';
import ChatArea from './ChatArea';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [activeChannel, setActiveChannel] = useState('general');

  // Configuración de canales por sección
  const sectionChannels = {
    about: [
      { id: 'general', name: 'general', type: 'text' as const },
      { id: 'biografia', name: 'biografía', type: 'text' as const },
      { id: 'experiencia', name: 'experiencia', type: 'text' as const },
    ],
    projects: [
      { id: 'general', name: 'general', type: 'text' as const },
      { id: 'web-apps', name: 'web-apps', type: 'text' as const },
      { id: 'mobile', name: 'mobile', type: 'text' as const },
      { id: 'apis', name: 'apis', type: 'text' as const },
    ],
    skills: [
      { id: 'general', name: 'general', type: 'text' as const },
      { id: 'frontend', name: 'frontend', type: 'text' as const },
      { id: 'backend', name: 'backend', type: 'text' as const },
      { id: 'database', name: 'database', type: 'text' as const },
    ],
    contact: [
      { id: 'general', name: 'general', type: 'text' as const },
      { id: 'redes', name: 'redes-sociales', type: 'text' as const },
    ],
  };

  const sectionNames = {
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setActiveChannel('general'); // Reset al canal general
  };

  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar de servidores */}
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      
      {/* Sidebar de canales */}
      <ChannelSidebar
        serverName={sectionNames[activeSection as keyof typeof sectionNames]}
        channels={sectionChannels[activeSection as keyof typeof sectionChannels]}
        activeChannel={activeChannel}
        onChannelSelect={setActiveChannel}
      />
      
      {/* Área principal de contenido */}
      <div className="flex-1 flex flex-col">
        <ChatArea>
          {children}
        </ChatArea>
      </div>
    </div>
  );
};

export default MainLayout;