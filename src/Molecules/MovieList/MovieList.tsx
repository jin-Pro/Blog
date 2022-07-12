import { Movie } from "@Atom/.";
import { useMovePageHook } from "@Common/Hook/useMovePage/.";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { useCallback } from "react";
import {
  EmptyMovieListContainer,
  MoviesContainer,
  VideoSideBarContainer,
} from "./MovieList.style";

type Props = {
  movies: MovieDataType[];
  loading: boolean;
  titleId: IdType;
  type: "small" | "medium";
};

export const MovieList: React.FC<Props> = ({
  titleId,
  movies,
  loading,
  type,
}) => {
  const handleMovePageFn = useMovePageHook();
  const handleGoVideoPage = useCallback(
    videoClickHelper(handleMovePageFn, titleId),
    [handleMovePageFn, titleId]
  );
  if (!loading)
    return <EmptyMovieListContainer> 로딩중 ...</EmptyMovieListContainer>;
  if (movies.length === 0)
    return <EmptyMovieListContainer> ~ 텅 </EmptyMovieListContainer>;

  const ContainerComponent =
    type === "medium" ? MoviesContainer : VideoSideBarContainer;

  return (
    <ContainerComponent onClick={handleGoVideoPage}>
      {movies.map((movie) => (
        <Movie key={movie.movieId} {...movie} type={type} />
      ))}
    </ContainerComponent>
  );
};

const videoClickHelper =
  (handleMovePageFn: (src: string) => void, titleId: IdType) =>
  (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLLIElement)) {
      return;
    }
    const { id } = e.target?.dataset;
    if (!id) return;
    handleMovePageFn(`/video?titleId=${titleId}?id=${id}`);
  };
