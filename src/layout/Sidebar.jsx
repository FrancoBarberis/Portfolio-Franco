import Bubble from "../components/Bubble";

function Sidebar({ children }) {
  return (
    <div className="w-28 flex flex-col items-center gap-4 bg-red-600 text-white h-screen p-4 pt-16">
      {children}
    </div>
  );
}   

export default Sidebar;