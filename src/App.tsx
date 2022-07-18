import React from "react";
import { Routes, Route } from "react-router-dom";
import { BasicPage, Blog } from "@Page/.";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicPage />} />
      <Route path="*" element={<Blog />} />
    </Routes>
  );
};

export default App;
