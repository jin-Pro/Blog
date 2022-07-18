import { MOVIES_INFO } from "@Common/Cache";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { wrapPromise } from "@Common/Util";
import axios from "axios";

export const cachingMovieData =
  (titleId: IdType) =>
  (movies: MovieDataType[] | { data: MovieDataType[] }) => {
    return (MOVIES_INFO[titleId] = (movies as MovieDataType[]) ?? []);
  };

export const getMovieDataFunc = (titleId: IdType, cb?: Function) =>
  wrapPromise(getMovies(titleId), cb);

type getMoviesProps = (id: IdType) => Promise<MovieDataType[]>;
const getMovies: getMoviesProps = async (id) =>
  MOVIES_INFO[id]
    ? Promise.resolve(MOVIES_INFO[id])
    : axios.get(`/movies/${id}`).then((res) => res.data);
