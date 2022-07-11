import { NavItem } from "@Atom/NavItem/NavItem";
import { BlogNavDataType } from "@Common/Type/Data";
import { handleTitleIdFnType } from "@Organism/MainBody/MainBody.hook";
import { useCallback } from "react";
import { useGetNavDatas } from "./MainNavBar.hook";

type Props = { handleTitleId: handleTitleIdFnType };

export const MainNavBar: React.FC<Props> = ({ handleTitleId }) => {
  const datas = useGetNavDatas();

  const handleNavItemClick = useCallback(navClickFnHelper(handleTitleId), [
    handleTitleId,
  ]);

  return (
    <nav onClick={handleNavItemClick}>
      {datas.map((data: BlogNavDataType) => (
        <NavItem {...data} key={data.id} />
      ))}
    </nav>
  );
};

const navClickFnHelper =
  (handleTitleId: handleTitleIdFnType) => (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
    const { id } = e.target?.dataset;
    if (!id) return;
    handleTitleId(id);
  };
