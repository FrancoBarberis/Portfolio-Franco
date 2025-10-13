import { MainLayout } from "./layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 10;
      if (current >= 100) {
        current = 100;
        setProgress(current);
        setTimeout(() => {
          setLoading(false);
        }, 400);
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 350);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

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