import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Server({ id, icon, tooltip, onClick, isSelected }) {

  const classes = [
    "w-full aspect-square rounded-xl flex items-center justify-center",
    "shadow-lg cursor-pointer transition-colors",
    isSelected
      ? "bg-indigo-400 ring-2 ring-inset ring-indigo-300"
      : "bg-gray-700 hover:bg-indigo-400/50",
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
