import { IdType, MovieDataType } from "@Common/Type/Data";
import { wrapPromiseReturnType } from "@Common/Util";
import {
  cachingMovieData,
  getMovieDataFunc,
} from "@Organism/MainBody/MainBody.util";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

type Props = () => [
  IdType,
  wrapPromiseReturnType<MovieDataType[]>,
  wrapPromiseReturnType<MovieDataType[]>
];

export const useGetVideoData: Props = () => {
  const { search } = useLocation();
  const { id, titleId } = useMemo(() => getUrlData(search), [search]);
  const helperFn = useCallback(getMovieHelperFn(id), [id]);

  const [getMovieFunc, setMovieFunc] = useState(
    getMovieDataFunc(titleId, helperFn)
  );
  const [getMoviesFunc, setMoviesFunc] = useState(
    getMovieDataFunc(titleId, cachingMovieData(titleId))
  );

  useEffect(() => {
    setMoviesFunc(getMovieDataFunc(titleId));
    setMovieFunc(getMovieDataFunc(titleId, helperFn));
  }, [titleId, helperFn]);

  return [titleId, getMovieFunc, getMoviesFunc];
};

type helperFnType = (
  id: IdType
) => (movies: MovieDataType[]) => MovieDataType[];
const getMovieHelperFn: helperFnType = (id) => (movies) =>
  movies.filter(({ movieId }) => movieId == id);

type getUrlFnType = (search: string) => {
  id: IdType;
  titleId: IdType;
};
const getUrlData: getUrlFnType = (search) => {
  try {
    const [_, titleIdContainer, idContainer] = search.split("?");
    const [__, titleId] = titleIdContainer.split("=");
    const [___, id] = idContainer.split("=");
    return { id, titleId };
  } catch (e) {
    return { id: 1, titleId: 1 };
  }
};
