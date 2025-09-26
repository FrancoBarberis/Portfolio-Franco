import Bubble from './components/Bubble';
import { MainLayout, Sidebar } from './layout';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen min-w-fit">
      <MainLayout>
        <Sidebar>
          <Bubble icon={"👤"} tooltip={"Sobre mí"} />
          <Bubble icon={"💼"} tooltip={"Proyectos"} />
          <Bubble icon={"🛠️"} tooltip={"Habilidades"} />
          <Bubble icon={"📞"} tooltip={"Contacto"} />
        </Sidebar>
      </MainLayout>
    </div>
  );
}

export default App;