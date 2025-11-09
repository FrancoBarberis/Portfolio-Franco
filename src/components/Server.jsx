import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


function Server({ id, icon, tooltip, onClick, isSelected }) {
  const neonHighlight = isSelected
    ? "border-2 border-indigo-400 shadow-[0_0_12px_2px_rgba(99,102,241,0.7)] animate-pulse"
    : "border-2 border-transparent";

  const classes = [
    "w-full aspect-square rounded-xl flex items-center justify-center",
    "shadow-lg cursor-pointer transition-colors",
    isSelected
      ? "bg-indigo-400 ring-2 ring-inset ring-indigo-300"
      : "bg-gray-700 hover:bg-indigo-400/50",
    neonHighlight,
  ].join(" ");

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      <span className="text-white text-2xl font-bold">{icon}</span>
    </div>
  );
}

export default Server;
