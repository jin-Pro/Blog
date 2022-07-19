import React, { useCallback, useState } from "react";
import { IdType } from "@Common/Type/Data";

const INIT_TITLE_ID: IdType = 1;
const INIT_HANDLE = (id: IdType) => {
  return;
};

const INIT_MOVIES_CONTECT: TitleIdType = {
  titleId: INIT_TITLE_ID,
  handleTitleId: INIT_HANDLE,
};

export const MoviesContext = React.createContext(INIT_MOVIES_CONTECT);

export const useMoviesContext: Props = () => {
  const [titleId, setTitleId] = useState<IdType>(INIT_TITLE_ID);
  const handleTitleId: handleTitleIdFnType = useCallback(
    (id: IdType) => setTitleId(id),
    []
  );

  return { titleId, handleTitleId };
};

export type handleTitleIdFnType = (id: IdType) => void;
export type TitleIdType = {
  titleId: IdType;
  handleTitleId: handleTitleIdFnType;
};
type Props = () => TitleIdType;
