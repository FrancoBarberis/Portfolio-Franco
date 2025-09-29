import Bubble from './components/Bubble';
import { MainLayout, Sidebar } from './layout';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen min-w-fit">
      <MainLayout>
        <Sidebar>
          <Bubble icon={"👤"} tooltip={"Sobre mí"} id={"tooltip-1"} />
          <Bubble icon={"💼"} tooltip={"Proyectos"} id={"tooltip-2"}/>
          <Bubble icon={"🛠️"} tooltip={"Habilidades"} id={"tooltip-3"} />
          <Bubble icon={"📞"} tooltip={"Contacto"} id = {"tooltip-4"} />
        </Sidebar>
      </MainLayout>
    </div>
  );
}

export default App;