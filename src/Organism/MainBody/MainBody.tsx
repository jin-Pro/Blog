import { MainNavBar, Movies } from "@Molecules/.";
import { useGetMoviesData } from "./MainBody.hook";

export const MainBody: React.FC = () => {
  const [movies, handleTitleId] = useGetMoviesData();
  return (
    <div>
      <MainNavBar handleTitleId={handleTitleId} />
      <Movies movies={movies} />
    </div>
  );
};
