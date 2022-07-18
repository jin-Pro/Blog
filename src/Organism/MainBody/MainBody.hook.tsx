import { IdType, MovieDataType } from "@Common/Type/Data";
import { wrapPromiseReturnType } from "@Common/Util";
import { useCallback, useMemo, useState } from "react";
import { getMovieDataFunc, cachingMovieData } from "./MainBody.util";

export const useGetMoviesData: Props = () => {
  const [titleId, setTitleId] = useState<IdType>(1);
  const getMoviesFunc = useMemo(
    () => getMovieDataFunc(titleId, cachingMovieData(titleId)),
    [titleId]
  );
  const handleTitleId: handleTitleIdFnType = useCallback(
    (id: IdType) => setTitleId(id),
    []
  );

  return [titleId, getMoviesFunc, handleTitleId];
};

export type handleTitleIdFnType = (id: IdType) => void;
type Props = () => [
  IdType,
  wrapPromiseReturnType<MovieDataType[]>,
  handleTitleIdFnType
];
