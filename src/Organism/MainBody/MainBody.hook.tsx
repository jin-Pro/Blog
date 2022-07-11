import { IdType, MovieDataType } from "@Common/Type/Data";
import { useCallback, useEffect, useState } from "react";

export type handleTitleIdFnType = (id: IdType) => void;
type Props = () => [MovieDataType[], handleTitleIdFnType];

export const useGetMoviesData: Props = () => {
  const [titleId, setTitleId] = useState<IdType>(1);
  const [movies, setMovies] = useState<MovieDataType[]>([]);

  const handleTitleId: handleTitleIdFnType = useCallback(
    (id: number | string) => setTitleId(id),
    []
  );

  useEffect(() => {
    handleMovies(titleId, setMovies);
  }, [titleId]);

  return [movies, handleTitleId];
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
  id: IdType,
  setMovies: React.Dispatch<React.SetStateAction<MovieDataType[]>>
) => void;

const handleMovies: handleMoviesProps = async (id, setMovies) => {
  const movies = await postMovies(id);
  setMovies(movies);
};

type mockMoviesDataProp = {
  [key: IdType]: MovieDataType[];
};
const mockMoviesData: mockMoviesDataProp = {
  "1": [
    {
      movieId: 1,
      movieTitle: "html",
    },
    {
      movieId: 2,
      movieTitle: "test2",
    },
    {
      movieId: 3,
      movieTitle: "test3",
    },
  ],
  "2": [
    {
      movieId: 1,
      movieTitle: "js",
    },
    {
      movieId: 2,
      movieTitle: "test2",
    },
    {
      movieId: 3,
      movieTitle: "test3",
    },
  ],
  "3": [
    {
      movieId: 1,
      movieTitle: "react",
    },
    {
      movieId: 2,
      movieTitle: "test2",
    },
    {
      movieId: 3,
      movieTitle: "test3",
    },
  ],
  "4": [
    {
      movieId: 1,
      movieTitle: "network",
    },
    {
      movieId: 2,
      movieTitle: "test2",
    },
    {
      movieId: 3,
      movieTitle: "test3",
    },
  ],
  "5": [
    {
      movieId: 1,
      movieTitle: "os",
    },
    {
      movieId: 2,
      movieTitle: "test2",
    },
    {
      movieId: 3,
      movieTitle: "test3",
    },
  ],
  "6": [
    {
      movieId: 1,
      movieTitle: "web",
    },
    {
      movieId: 2,
      movieTitle: "test2",
    },
    {
      movieId: 3,
      movieTitle: "test3",
    },
  ],
};
