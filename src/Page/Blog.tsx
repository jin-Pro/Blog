import { MainHeader } from "@Organism/.";
import { Routes, Route } from "react-router-dom";
import { MainPage, VideoPage } from ".";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export const Blog: React.FC = () => {
  return (
    <>
      <MainHeader />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};
