import { Server } from "../components";

function ServerSidebar({servers, onServerSelect}) {
  return (
    <div className="flex flex-col bg-amber-700 p-4 pt-24 gap-4">
      {servers.map((server) => (
        <Server
          id={server.id}
          key={server.id}
          icon={server.icon}
          tooltip={server.tooltip}
          channels={server.channels}
          onClick={() => onServerSelect(server)}
        />
      ))}
    </div>
  );
}

export default ServerSidebar;
