import { MOVIES_INFO } from "@Common/Cache";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { wrapPromise, wrapPromiseReturnType } from "@Common/Util";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export type handleTitleIdFnType = (id: IdType) => void;
type Props = () => [
  IdType,
  wrapPromiseReturnType<MovieDataType[]>,
  handleTitleIdFnType
];

export const useGetMoviesData: Props = () => {
  const [titleId, setTitleId] = useState<IdType>(1);
  const [getMoviesFunc, setMoviesFunc] = useState(
    getMovieDataFunc(titleId, cachingMovieData(titleId))
  );

  const handleTitleId: handleTitleIdFnType = useCallback(
    (id: IdType) => setTitleId(id),
    []
  );

  useEffect(() => {
    setMoviesFunc(getMovieDataFunc(titleId, cachingMovieData(titleId)));
  }, [titleId]);

  return [titleId, getMoviesFunc, handleTitleId];
};

export const cachingMovieData =
  (titleId: IdType) =>
  (movies: MovieDataType[] | { data: MovieDataType[] }) => {
    return (MOVIES_INFO[titleId] = (movies as MovieDataType[]) ?? []);
  };

export const getMovieDataFunc = (titleId: IdType, cb?: Function) =>
  wrapPromise(postMovies(titleId), cb);

type postMoviesProps = (id: IdType) => Promise<MovieDataType[]>;
const postMovies: postMoviesProps = async (id) =>
  MOVIES_INFO[id]
    ? Promise.resolve(MOVIES_INFO[id])
    : axios.get(`/movies/${id}`).then((res) => res.data);
