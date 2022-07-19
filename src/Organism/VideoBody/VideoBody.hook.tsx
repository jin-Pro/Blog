import { IdType } from "@Common/Type/Data";
import { useLocation } from "react-router-dom";

export const useGetURLData: Props = () => {
  const { search } = useLocation();
  const { id, titleId } = getUrlData(search);
  return [id, titleId];
};

type Props = () => [IdType, IdType];

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
