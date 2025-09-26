import Bubble from './components/Bubble';
import { MainLayout } from './layout';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen min-w-fit">
      <MainLayout>
        <Bubble />
      </MainLayout>
    </div>
  );
}

export default App;