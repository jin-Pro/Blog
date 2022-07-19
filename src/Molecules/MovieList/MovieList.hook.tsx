import { useCallback, useContext } from "react";
import { useQuery } from "react-query";
import { MovieListProps } from "./MovieList";
import { useMovePageHook } from "@Common/Hook/useMovePage";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { VideoDataContext } from "@Organism/VideoBody/VideoBody.hook";
import { MoviesContext } from "@Organism/MainBody/MainBody.hook";
import { getFetchMovies } from "@Organism/MainBody/MainBody.util";

type useGetMoviesDataType = ({ type }: MovieListProps) => {
  titleId: IdType;
  movies: MovieDataType[] | undefined;
};
export const useGetMoviesData: useGetMoviesDataType = ({ type }) => {
  const context = type === "small" ? VideoDataContext : MoviesContext;
  const { titleId } = useContext(context as any);
  const { data: movies } = useQuery(
    ["MovieList", titleId],
    () => getFetchMovies(titleId),
    { refetchOnWindowFocus: false }
  );
  return { titleId, movies };
};

type useHandleVideoPageType = (
  titleId: IdType
) => (e: React.SyntheticEvent) => void;
export const useHandleVideoPage: useHandleVideoPageType = (titleId) => {
  const handleMovePageFn = useMovePageHook();
  const handleGoVideoPage = useCallback(
    videoClickHelper(handleMovePageFn, titleId),
    [handleMovePageFn, titleId]
  );
  return handleGoVideoPage;
};

type videoClickHelperType = (
  handleMovePageFn: (src: string) => void,
  titleId: IdType
) => (e: React.SyntheticEvent) => void;
const videoClickHelper: videoClickHelperType =
  (handleMovePageFn, titleId) => (e) => {
    if (!(e.target instanceof HTMLLIElement)) {
      return;
    }
    const { id } = e.target?.dataset;
    if (!id) return;
    handleMovePageFn(`/video?titleId=${titleId}?id=${id}`);
  };
