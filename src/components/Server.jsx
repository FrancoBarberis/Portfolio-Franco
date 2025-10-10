import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Server({ id, icon, tooltip, onClick, isSelected }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipId = `server-tooltip-${id}`;

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setShowTooltip(!!mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  const classes = [
    "w-full aspect-square rounded-xl flex items-center justify-center",
    "shadow-lg cursor-pointer transition-colors",
    isSelected
      ? "bg-indigo-400 ring-2 ring-inset ring-indigo-300"
      : "bg-gray-700 hover:bg-indigo-400/50",
  ].join(" ");

  return (
    <>
      <div
        className={classes}
        data-tooltip-id={showTooltip ? tooltipId : undefined}
        data-tooltip-content={showTooltip ? tooltip : undefined}
        onClick={onClick}
      >
  <span className="text-white text-2xl font-bold">{icon}</span>
      </div>

      {showTooltip && <Tooltip id={tooltipId} place="right" />}
    </>
  );
}

export default Server;
