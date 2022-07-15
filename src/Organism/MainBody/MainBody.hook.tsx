import { MOVIES_INFO } from "@Common/Cache";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { wrapPromise, wrapPromiseReturnType } from "@Common/Util";
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
  (titleId: IdType) => (movies: MovieDataType[]) => {
    MOVIES_INFO[titleId] = (movies as MovieDataType[]) ?? [];
    return movies ?? [];
  };

export const getMovieDataFunc = (titleId: IdType, cb?: Function) =>
  wrapPromise(postMovies(titleId), cb);

type postMoviesProps = (id: IdType) => Promise<MovieDataType[]>;
const postMovies: postMoviesProps = async (id) =>
  MOVIES_INFO[id]
    ? Promise.resolve(MOVIES_INFO[id])
    : new Promise((resolve, reject) => {
        setTimeout(() => resolve(mockMoviesData[id]), 1000);
      });

type mockMoviesDataProp = {
  [key: IdType]: MovieDataType[];
};
const mockMoviesData: mockMoviesDataProp = {
  "1": [
    {
      movieId: 1,
      movieTitle: "html",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 2,
      movieTitle: "test2",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 3,
      movieTitle: "test3",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 4,
      movieTitle: "html",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 5,
      movieTitle: "test2",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 6,
      movieTitle: "test3",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 7,
      movieTitle: "html",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 8,
      movieTitle: "test2",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 9,
      movieTitle: "test3",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
  ],
  "2": [
    {
      movieId: 1,
      movieTitle: "js",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 2,
      movieTitle: "test2",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 3,
      movieTitle: "test3",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
  ],
  "3": [
    {
      movieId: 1,
      movieTitle: "react",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 2,
      movieTitle: "test2",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 3,
      movieTitle: "test3",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
  ],
  "4": [
    {
      movieId: 1,
      movieTitle: "network",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 2,
      movieTitle: "test2",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 3,
      movieTitle: "test3",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
  ],
  "5": [
    {
      movieId: 1,
      movieTitle: "os",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 2,
      movieTitle: "test2",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
    {
      movieId: 3,
      movieTitle: "test3",
      movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
    },
  ],
  // "6": [
  //   {
  //     movieId: 1,
  //     movieTitle: "web",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 2,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 3,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  // ],
};
