
function Bubble({icon, tooltip}) {
  return (
    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:cursor-pointer ">
      <span className="text-white text-2xl font-bold">{icon}</span>
    </div>
  );
}

export default Bubble;