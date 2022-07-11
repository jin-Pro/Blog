import { Movie } from "@Atom/.";
import { useMovePageHook } from "@Common/Hook/useMovePage/.";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { useCallback } from "react";
import { MoviesContainer, VideoSideBarContainer } from "./MovieList.style";

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
  if (!loading) return <div>...loading</div>;
  if (movies.length === 0) return <div> 준비중입니다.</div>;

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
