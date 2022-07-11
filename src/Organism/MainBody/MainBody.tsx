import { Flex } from "@Atom/.";
import { MainNavBar, Movies } from "@Molecules/.";
import { useGetMoviesData } from "./MainBody.hook";

export const MainBody: React.FC = () => {
  const [id, movies, handleTitleId, loading] = useGetMoviesData();
  return (
    <Flex justify="flex-start" align="none">
      <MainNavBar handleTitleId={handleTitleId} id={id} />

      <Movies movies={movies} loading={loading} />
    </Flex>
  );
};
