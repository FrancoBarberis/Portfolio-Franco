import Bubble from "../components/Bubble";

function Sidebar({ children }) {
  return (
    <div className="max-w-fit flex flex-col items-center gap-4 bg-red-600 text-white h-screen p-3 ">
      {children}
    </div>
  );
}   

export default Sidebar;