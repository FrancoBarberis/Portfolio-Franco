import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Server({ icon, tooltip, id, channels }) {
  return (
    <div
      data-tooltip-id={String(id)}
      data-tooltip-content={tooltip}
      className="relative w-auto h-auto p-3.5 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:cursor-pointer"
    >
      <span className="text-m text-white">{icon}</span>

      <Tooltip id={String(id)} place="right" delayShow={50} className="tooltip-slide" />
    </div>
  );
}

export default Server;
