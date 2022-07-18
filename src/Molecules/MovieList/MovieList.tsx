import { useCallback, useMemo, memo } from "react";
import { Movie } from "@Atom/.";
import { useMovePageHook } from "@Common/Hook/useMovePage/.";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { wrapPromiseReturnType } from "@Common/Util";
import {
  EmptyMovieListContainer,
  MoviesContainer,
  VideoSideBarContainer,
} from "./MovieList.style";

export const MovieList: React.FC<Props> = memo(function ({
  titleId,
  getMoviesFunc,
  type,
}) {
  const movies = useMemo(() => getMoviesFunc.get(), [getMoviesFunc]);
  const handleMovePageFn = useMovePageHook();
  const handleGoVideoPage = useCallback(
    videoClickHelper(handleMovePageFn, titleId),
    [handleMovePageFn, titleId]
  );
  const ContainerComponent = useMemo(
    () => (type === "medium" ? MoviesContainer : VideoSideBarContainer),
    [type]
  );
  if (movies?.length === 0)
    return <EmptyMovieListContainer> ~ 텅 </EmptyMovieListContainer>;

  return (
    <ContainerComponent onClick={handleGoVideoPage}>
      {movies?.map((movie) => (
        <Movie key={movie.movieId} {...movie} type={type} />
      ))}
    </ContainerComponent>
  );
});

type Props = {
  titleId: IdType;
  getMoviesFunc: wrapPromiseReturnType<MovieDataType[]>;
  type: "small" | "medium";
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
