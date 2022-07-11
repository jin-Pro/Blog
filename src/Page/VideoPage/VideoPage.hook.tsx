import { useLocation } from "react-router-dom";

export const useGetVideoData = () => {
  const { search } = useLocation();
  const [_, titleIdContainer, idContainer] = search.split("?");
  const [_x, titleId] = titleIdContainer.split("=");
  const [_y, id] = idContainer.split("=");
  console.log(titleId);
  console.log(id);
};
