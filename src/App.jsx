import { MainLayout } from "./layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:serverPath/:channelPath" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/resumen/sobre-mi" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;