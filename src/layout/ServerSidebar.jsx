import { Server } from "../components";

function ServerSidebar({servers, onServerSelect, selectedServer}) {
  return (
      <div className="flex flex-col bg-gray-900 p-4 pt-24 gap-4">
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
