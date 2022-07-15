import { Flex } from "@Atom/.";
import { MainNavBar, MovieList } from "@Molecules/.";
import { EmptyMovieListContainer } from "@Molecules/MovieList/MovieList.style";
import { Suspense } from "react";
import { useGetMoviesData } from "./MainBody.hook";

export const MainBody: React.FC = () => {
  const [titleId, getMoviesFunc, handleTitleId] = useGetMoviesData();
  return (
    <Flex justify="flex-start" align="none" height="calc(100vh - 275px)">
      <MainNavBar handleTitleId={handleTitleId} titleId={titleId} />
      <Suspense
        fallback={
          <EmptyMovieListContainer> 로딩중 ...</EmptyMovieListContainer>
        }
      >
        <MovieList
          titleId={titleId}
          getMoviesFunc={getMoviesFunc}
          type="medium"
        />
      </Suspense>
    </Flex>
  );
};
