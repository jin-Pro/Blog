import { useMemo, memo } from "react";
import { Movie } from "@Atom/.";
import * as MovieListStyle from "./MovieList.style";
import { useGetMoviesData, useHandleVideoPage } from "./MovieList.hook";

export const MovieList: React.FC<MovieListProps> = memo(function ({ type }) {
  const { titleId, movies } = useGetMoviesData();
  const handleGoVideoPage = useHandleVideoPage(titleId);
  const ContainerComponent = useMemo(
    () =>
      type === "medium"
        ? MovieListStyle.MoviesContainer
        : MovieListStyle.VideoSideBarContainer,
    [type]
  );
  if (movies?.length === 0)
    return (
      <MovieListStyle.EmptyMovieListContainer>
        ~ 텅
      </MovieListStyle.EmptyMovieListContainer>
    );

  return (
    <ContainerComponent onClick={handleGoVideoPage}>
      {movies?.map((movie) => (
        <Movie key={movie.movieId} {...movie} type={type} />
      ))}
    </ContainerComponent>
  );
});

export type MovieListProps = {
  type: "small" | "medium";
};
