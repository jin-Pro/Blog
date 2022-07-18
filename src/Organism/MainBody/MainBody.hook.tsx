import { IdType } from "@Common/Type/Data";
import { useCallback, useState } from "react";

export const useGetMoviesData: Props = () => {
  const [titleId, setTitleId] = useState<IdType>(1);
  const handleTitleId: handleTitleIdFnType = useCallback(
    (id: IdType) => setTitleId(id),
    []
  );

  return [titleId, handleTitleId];
};

export type handleTitleIdFnType = (id: IdType) => void;
type Props = () => [IdType, handleTitleIdFnType];
