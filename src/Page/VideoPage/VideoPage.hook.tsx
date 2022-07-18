import { IdType, MovieDataType } from "@Common/Type/Data";
import { wrapPromiseReturnType } from "@Common/Util";
import {
  cachingMovieData,
  getMovieDataFunc,
} from "@Organism/MainBody/MainBody.util";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useGetVideoData: Props = () => {
  const { search } = useLocation();
  const { id, titleId } = getUrlData(search);
  const helperFn = getMovieHelperFn(id);
  const getMovieFunc = getMovieDataFunc(titleId, helperFn);
  const getMoviesFunc = useMemo(
    () => getMovieDataFunc(titleId, cachingMovieData(titleId)),
    [titleId]
  );

  return [titleId, getMovieFunc, getMoviesFunc];
};

type Props = () => [
  IdType,
  wrapPromiseReturnType<MovieDataType[]>,
  wrapPromiseReturnType<MovieDataType[]>
];

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
