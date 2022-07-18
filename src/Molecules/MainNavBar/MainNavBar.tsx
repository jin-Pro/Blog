/* eslint-disable eqeqeq */
import { NavItem } from "@Atom/NavItem/NavItem";
import { BlogNavDataType, IdType } from "@Common/Type/Data";
import { handleTitleIdFnType } from "@Organism/MainBody/MainBody.hook";
import { useCallback } from "react";
import { useGetNavDatas } from "./MainNavBar.hook";
import { MainNavBarContainer } from "./MainNavBar.style";

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

type Props = { handleTitleId: handleTitleIdFnType; titleId: IdType };
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
