import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Server({ id, icon, tooltip, onClick, isSelected }) {
  const tooltipId = `server-tooltip-${id}`;
  
  return (
    <>
      <div
        className={`w-16 h-16 ${isSelected ? 'bg-indigo-400' : 'bg-gray-700'} rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-500 transition-colors ${isSelected ? 'ring-2 ring-indigo-300' : ''}`}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltip}
        onClick={onClick}
      >
        <span className="text-white text-2xl font-bold">{icon}</span>
      </div>
      <Tooltip 
        id={tooltipId} 
        place="right"
      />
    </>
  );
}

export default Server;
