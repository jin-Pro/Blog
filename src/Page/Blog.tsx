import { MainHeader } from "@Organism/.";
import { Routes, Route } from "react-router-dom";
import { MainPage, VideoPage } from ".";

export const Blog: React.FC = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </>
  );
};
