import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Server({ id, icon, tooltip, onClick, isSelected }) {
  return (
    <>
      <div
        className={`w-16 h-16 ${isSelected ? 'bg-indigo-400' : 'bg-gray-700'} rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-500 transition-colors ${isSelected ? 'ring-2 ring-indigo-300' : ''}`}
        data-tooltip-id={String(id)}
        data-tooltip-content={tooltip}
        onClick={onClick}
      >
        <span className="text-white text-2xl font-bold">{icon}</span>
      </div>
      <Tooltip 
        id={String(id)} 
        place="right"
        opacity={1}
        className="custom-tooltip"
        style={{ 
          backgroundColor: '#111827 !important', 
          color: 'white !important',
          border: '2px solid #E5E7EB !important',
          borderRadius: '6px !important',
          fontSize: '14px !important',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5) !important',
          padding: '8px 12px !important'
        }}
      />
    </>
  );
}

export default Server;
