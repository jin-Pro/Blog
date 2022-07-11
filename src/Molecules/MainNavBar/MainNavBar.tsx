import { NavItem } from "@Atom/NavItem/NavItem";
import { BlogNavDataType, IdType } from "@Common/Type/Data";
import { handleTitleIdFnType } from "@Organism/MainBody/MainBody.hook";
import { useCallback } from "react";
import { useGetNavDatas } from "./MainNavBar.hook";
import { MainNavBarContainer } from "./MainNavBar.style";

type Props = { handleTitleId: handleTitleIdFnType; titleId: IdType };

export const MainNavBar: React.FC<Props> = ({ handleTitleId, titleId }) => {
  const datas = useGetNavDatas();

  const handleNavItemClick = useCallback(navClickFnHelper(handleTitleId), [
    handleTitleId,
  ]);

  return (
    <MainNavBarContainer onClick={handleNavItemClick}>
      {datas.map((data: BlogNavDataType) => (
        <NavItem {...data} key={data.id} bool={titleId == data.id} />
      ))}
    </MainNavBarContainer>
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
