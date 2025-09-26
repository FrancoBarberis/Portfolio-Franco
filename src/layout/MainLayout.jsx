import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChannelSidebar from './ChannelSidebar';
import ChatArea from './ChatArea';

const MainLayout = ({ children }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [activeChannel, setActiveChannel] = useState('general');

  // Configuración de canales por sección
  const sectionChannels = {
    about: [
      { id: 'general', name: 'general', type: 'text' },
      { id: 'biografia', name: 'biografía', type: 'text' },
      { id: 'experiencia', name: 'experiencia', type: 'text' },
    ],
    projects: [
      { id: 'general', name: 'general', type: 'text' },
      { id: 'web-apps', name: 'web-apps', type: 'text' },
      { id: 'mobile', name: 'mobile', type: 'text' },
      { id: 'apis', name: 'apis', type: 'text' },
    ],
    skills: [
      { id: 'general', name: 'general', type: 'text' },
      { id: 'frontend', name: 'frontend', type: 'text' },
      { id: 'backend', name: 'backend', type: 'text' },
      { id: 'database', name: 'database', type: 'text' },
    ],
    contact: [
      { id: 'general', name: 'general', type: 'text' },
      { id: 'redes', name: 'redes-sociales', type: 'text' },
    ],
  };

  const sectionNames = {
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
  };

  const handleSectionChange = (sectionId) => {
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
        serverName={sectionNames[activeSection]}
        channels={sectionChannels[activeSection]}
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