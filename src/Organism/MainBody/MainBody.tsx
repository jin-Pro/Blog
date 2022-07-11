import { Flex } from "@Atom/.";
import { MainNavBar, Movies } from "@Molecules/.";
import { useGetMoviesData } from "./MainBody.hook";

export const MainBody: React.FC = () => {
  const [titleId, movies, handleTitleId, loading] = useGetMoviesData();
  return (
    <Flex justify="flex-start" align="none" height="calc(100vh - 275px)">
      <MainNavBar handleTitleId={handleTitleId} titleId={titleId} />
      <Movies titleId={titleId} movies={movies} loading={loading} />
    </Flex>
  );
};
