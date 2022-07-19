import { useContext } from "react";
import { NavItem } from "@Atom/.";
import { MoviesContext } from "@Organism/MainBody/MainBody.hook";
import { BlogNavDataType } from "@Common/Type/Data";
import { useGetNavDatas, useHandleNavItemClick } from "./MainNavBar.hook";
import { MainNavBarContainer } from "./MainNavBar.style";

export const MainNavBar: React.FC = () => {
  const datas = useGetNavDatas();
  const { titleId, handleTitleId } = useContext(MoviesContext);
  const handleNavItemClick = useHandleNavItemClick(handleTitleId);
  return (
    <MainNavBarContainer onClick={handleNavItemClick}>
      {datas.map((data: BlogNavDataType) => (
        <NavItem {...data} key={data.id} bool={titleId == data.id} />
      ))}
    </MainNavBarContainer>
  );
};
