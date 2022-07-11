import { BlogNavDataType } from "@Common/Type/Data";

export const useGetNavDatas: () => BlogNavDataType[] = () => {
  return data;
};

const data: BlogNavDataType[] = [
  { id: 1, title: "HTML & CSS" },
  { id: 2, title: "JavaScript" },
  { id: 3, title: "React" },
  { id: 4, title: "Network" },
  { id: 5, title: "OS" },
  { id: 6, title: "Web" },
];
