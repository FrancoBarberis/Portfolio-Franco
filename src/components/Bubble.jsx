import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Bubble({ icon, tooltip, id }) {
  return (
    <div
      data-tooltip-id={id}
      data-tooltip-content={tooltip}
      className="relative w-auto h-auto p-3.5 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:cursor-pointer"
    >
      <span className="text-m text-white">{icon}</span>

      <Tooltip
        id={id}
        place="right"
        delayShow={50}
        className="tooltip-slide"
      />
    </div>
  );
}

export default Bubble;
