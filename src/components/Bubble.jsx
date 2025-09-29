import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Bubble({icon, tooltip}) {
  return (
    <div>
      <div data-tooltip-id="bubble-tooltip" data-tooltip-content={tooltip} className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:cursor-pointer ">
      <span className="text-white text-2xl font-bold">{icon}</span>
      </div>
      <Tooltip id="bubble-tooltip" place="right" />
    </div>
  );
}

export default Bubble;