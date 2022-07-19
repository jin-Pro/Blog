import { Suspense } from "react";
import { MainBody, MainTitle } from "@Organism/.";
import * as MovieListStyle from "@Molecules/MovieList/MovieList.style";

export const MainPage: React.FC = () => {
  return (
    <>
      <MainTitle />
      <MainBody>
        <MainBody.NavBar />
        <Suspense
          fallback={
            <MovieListStyle.EmptyMovieListContainer>
              로딩중 ...
            </MovieListStyle.EmptyMovieListContainer>
          }
        >
          <MainBody.MovieList type="medium" />
        </Suspense>
      </MainBody>
    </>
  );
};
