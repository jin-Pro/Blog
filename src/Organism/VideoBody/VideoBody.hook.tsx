import React from "react";
import { IdType } from "@Common/Type/Data";
import { useLocation } from "react-router-dom";

export type dataType = { id: IdType; titleId: IdType };
const INIT_DATA: dataType = { id: 1, titleId: 1 };
export const VideoDataContext = React.createContext(INIT_DATA);

type Props = () => dataType;
export const useVideoInfoContext: Props = () => {
  const { search } = useLocation();
  const { id, titleId } = getUrlData(search);
  return { id, titleId };
};

type getUrlFnType = (search: string) => dataType;
const getUrlData: getUrlFnType = (search) => {
  try {
    const [_, titleIdContainer, idContainer] = search.split("?");
    const [__, titleId] = titleIdContainer.split("=");
    const [___, id] = idContainer.split("=");
    return { id, titleId };
  } catch (e) {
    return INIT_DATA;
  }
};
