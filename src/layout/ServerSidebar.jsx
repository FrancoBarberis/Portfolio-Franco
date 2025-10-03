import { Server } from "../components";

function ServerSidebar({servers}) {
  return (
    <div className="flex flex-col bg-amber-700">
      {servers.map((server) => (
        <Server
          id={server.id}
          key={server.id}
          icon={server.icon}
          tooltip={server.tooltip}
          channels={server.channels}
        />
      ))}
    </div>
  );
}

export default ServerSidebar;
