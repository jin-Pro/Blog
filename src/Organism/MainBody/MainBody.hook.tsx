import { MOVIES_INFO } from "@Common/Cache";
import { IdType, MovieDataType } from "@Common/Type/Data";
import { useCallback, useEffect, useState } from "react";

export type handleTitleIdFnType = (id: IdType) => void;
type Props = () => [IdType, MovieDataType[], handleTitleIdFnType, boolean];

export const useGetMoviesData: Props = () => {
  const [titleId, setTitleId] = useState<IdType>(1);
  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleTitleId: handleTitleIdFnType = useCallback(
    (id: IdType) => setTitleId(id),
    []
  );

  useEffect(() => {
    handleMovies(titleId, setMovies, () => setLoading(true));
  }, [titleId]);

  return [titleId, movies, handleTitleId, loading];
};

type postMoviesProps = (id: IdType) => Promise<MovieDataType[]>;
const postMovies: postMoviesProps = async (id) => {
  //   const res = await axios.post("http://localhost:3000", { id });
  try {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(mockMoviesData[id]), 1000);
    });
    return res as MovieDataType[];
  } catch (e) {
    return [];
  }
};

type handleMoviesProps = (
  titleId: IdType,
  setMovies: React.Dispatch<React.SetStateAction<MovieDataType[]>>,
  fn?: Function
) => void;
export const handleMovies: handleMoviesProps = async (
  titleId,
  setMovies,
  fn
) => {
  const movies = MOVIES_INFO[titleId]
    ? MOVIES_INFO[titleId]
    : await postMovies(titleId);
  MOVIES_INFO[titleId] = movies;
  setMovies(movies);
  if (fn instanceof Function) fn();
};

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
  "6": [
    {
      movieId: 1,
      movieTitle: "web",
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
};
