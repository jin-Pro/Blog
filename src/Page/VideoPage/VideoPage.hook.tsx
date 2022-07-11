import { MOVIES_INFO } from "@Common/Cache";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { handleMovies } from "@Organism/MainBody/MainBody.hook";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export type MainVideoType = MovieDataType | undefined;
type Props = () => [MovieDataType[], MainVideoType];

export const useGetVideoData: Props = () => {
  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [movie, setMovie] = useState<MovieDataType>();

  const { search } = useLocation();
  const { id, titleId } = useMemo(() => getUrlData(search), [search]);

  const helperFn = useCallback(getMovieHelperFn(id), [id]);

  useEffect(() => {
    handleMovies(titleId, setMovies, () =>
      setMovie(MOVIES_INFO[titleId].filter(helperFn)[0])
    );
  }, [titleId, helperFn]);

  return [movies, movie];
};

type helperFnType = (
  id: IdType
) => ({ movieId }: { movieId: IdType }) => boolean;
const getMovieHelperFn: helperFnType =
  (id) =>
  ({ movieId }) =>
    movieId == id;

type getUrlFnType = (search: string) => {
  id: IdType;
  titleId: IdType;
};
const getUrlData: getUrlFnType = (search) => {
  const [_, titleIdContainer, idContainer] = search.split("?");
  const [__, titleId] = titleIdContainer.split("=");
  const [___, id] = idContainer.split("=");
  return { id, titleId };
};
