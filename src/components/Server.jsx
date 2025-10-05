import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Server({ id, icon, tooltip, onClick, isSelected }) {
  const tooltipId = `server-tooltip-${id}`;
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar tooltips solo en dispositivos con hover (mouse) y puntero fino
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setShowTooltip(mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else if (mq.addListener) {
      // Compatibilidad con navegadores antiguos
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);
  
  return (
    <>
      <div
        className={`w-full aspect-square ${isSelected ? 'bg-indigo-400' : 'bg-gray-700'} rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-500 transition-colors ${isSelected ? 'ring-2 ring-inset ring-indigo-300' : ''}`}
        data-tooltip-id={showTooltip ? tooltipId : undefined}
        data-tooltip-content={showTooltip ? tooltip : undefined}
        onClick={onClick}
      >
        <span className="text-white text-2xl font-bold">{icon}</span>
      </div>
      {showTooltip && (
        <Tooltip 
          id={tooltipId} 
          place="right"
        />
      )}
    </>
  );
}

export default Server;
