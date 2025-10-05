import { Server } from "../components";

function ServerSidebar({ servers, onServerSelect, selectedServer }) {
  return (
    <div className="flex flex-col bg-gray-900 border-r border-gray-700 flex-shrink-0 h-full
                    px-1 py-3 gap-3 w-16 
                    md:p-4 md:gap-4 md:w-auto md:pt-4">
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
  );
}

export default ServerSidebar;
