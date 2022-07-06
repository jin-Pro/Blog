import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "@Page/.";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default App;
