import { Server } from "../components";

function ServerSidebar({ servers, onServerSelect, selectedServer }) {
  return (
  <div className="flex flex-col bg-gray-100 dark:bg-gray-900 border-r-2 border-gray-400 dark:border-gray-700 flex-shrink-0 h-full w-16 md:w-20">
      {/* Wrapper interno con padding: no afecta el borde ni el ancho total */}
      <div className="flex flex-col gap-3 md:gap-4 p-2 md:p-4">
        {servers.map((server) => (
          <Server
            id={server.id}
            key={server.id}
            icon={server.icon}
            tooltip={server.tooltip}
            channels={server.channels}
            onClick={() => onServerSelect(server)}
            isSelected={selectedServer && selectedServer.id === server.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ServerSidebar;
