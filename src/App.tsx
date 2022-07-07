import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, BasicPage } from "@Page/.";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;
