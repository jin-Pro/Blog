import { Movie } from "@Atom/.";
import { useMovePageHook } from "@Common/Hook/useMovePage/.";
import { MovieDataType } from "@Common/Type/Data";
import { useCallback } from "react";
import { MoviesContainer } from "./Movies.style";

type Props = { movies: MovieDataType[]; loading: boolean };

export const Movies: React.FC<Props> = ({ movies, loading }) => {
  const handleMovePageFn = useMovePageHook();
  const handleGoVideoPage = useCallback(videoClickHelper(handleMovePageFn), [
    handleMovePageFn,
  ]);
  if (!loading) return <div>...loading</div>;
  if (movies.length === 0) return <div> 준비중입니다.</div>;

  return (
    <MoviesContainer onClick={handleGoVideoPage}>
      {movies.map((movie) => (
        <Movie key={movie.movieId} {...movie} />
      ))}
    </MoviesContainer>
  );
};

const videoClickHelper =
  (handleMovePageFn: (src: string) => void) => (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLLIElement)) {
      return;
    }
    const { id } = e.target?.dataset;
    if (!id) return;
    handleMovePageFn(`/video?id=${id}`);
  };
