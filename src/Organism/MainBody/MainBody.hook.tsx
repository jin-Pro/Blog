import { IdType, MovieDataType } from "@Common/Type/Data";
import { wrapPromiseReturnType } from "@Common/Util";
import { useCallback, useEffect, useState } from "react";
import { getMovieDataFunc, cachingMovieData } from "./MainBody.util";

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

export type handleTitleIdFnType = (id: IdType) => void;
type Props = () => [
  IdType,
  wrapPromiseReturnType<MovieDataType[]>,
  handleTitleIdFnType
];
