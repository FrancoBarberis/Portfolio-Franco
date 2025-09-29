import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Bubble({ icon, tooltip, id }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative"
    >
      <div
        data-tooltip-id="{id}"
        data-tooltip-content={tooltip}
        className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:cursor-pointer "
      >
        <span className="text-white text-2xl font-bold">{icon}</span>
      </div>
      {active && (
        <Tooltip
          id="{id}"
          place="right"
          delayShow={150}
          className="tooltip-slide"
        />
      )}
    </div>
  );
}

export default Bubble;
