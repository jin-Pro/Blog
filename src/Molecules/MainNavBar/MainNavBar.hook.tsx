import { BlogNavDataType } from "@Common/Type/Data";
import { handleTitleIdFnType } from "@Organism/MainBody/MainBody.hook";
import { useCallback } from "react";

type useGetNavDatasProps = () => BlogNavDataType[];
export const useGetNavDatas: useGetNavDatasProps = () => {
  return data;
};

export const useHandleNavItemClick: HelperFn = (handleTitleId) => {
  const handleNavItemClick = useCallback(navClickFnHelper(handleTitleId), [
    handleTitleId,
  ]);
  return handleNavItemClick;
};

type HelperFn = (
  handleTitleId: handleTitleIdFnType
) => (e: React.SyntheticEvent) => void;
const navClickFnHelper: HelperFn = (handleTitleId) => (e) => {
  if (!(e.target instanceof HTMLDivElement)) {
    return;
  }
  const { id } = e.target?.dataset;
  if (!id) return;
  handleTitleId(id);
};

const data: BlogNavDataType[] = [
  { id: 1, title: "HTML & CSS" },
  { id: 2, title: "JavaScript" },
  { id: 3, title: "React" },
  { id: 4, title: "Network" },
  { id: 5, title: "OS" },
  { id: 6, title: "Web" },
];
