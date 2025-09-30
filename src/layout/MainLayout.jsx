
function MainLayout({ children }) {
  return (
    <div className="bg-gray-900 min-h-screen min-w-screen flex flex-row">
      {children}
    </div>
  );
}

export default  MainLayout;