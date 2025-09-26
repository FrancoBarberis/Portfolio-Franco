import { Bubble } from '../components';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const sections = [
    { 
      id: 'about', 
      name: 'Sobre mí', 
      icon: '👨‍💻',
      color: 'bg-blue-600'
    },
    { 
      id: 'projects', 
      name: 'Proyectos', 
      icon: '🚀',
      color: 'bg-green-600'
    },
    { 
      id: 'skills', 
      name: 'Habilidades', 
      icon: '⚡',
      color: 'bg-purple-600'
    },
    { 
      id: 'contact', 
      name: 'Contacto', 
      icon: '📧',
      color: 'bg-red-600'
    }
  ];

  return (
    <div className="w-18 bg-gray-900 flex flex-col items-center py-3">
      {/* Logo/Home */}
      <div className="mb-4">
        <Bubble
          icon="🏠"
          name="Inicio"
          isActive={activeSection === 'home'}
          onClick={() => onSectionChange('home')}
          color="bg-indigo-600"
        />
      </div>
      
      {/* Separador */}
      <div className="w-8 h-0.5 bg-gray-700 mb-4"></div>
      
      {/* Secciones del portfolio */}
      {sections.map((section) => (
        <Bubble
          key={section.id}
          icon={section.icon}
          name={section.name}
          isActive={activeSection === section.id}
          onClick={() => onSectionChange(section.id)}
          color={section.color}
        />
      ))}
    </div>
  );
};

export default Sidebar;