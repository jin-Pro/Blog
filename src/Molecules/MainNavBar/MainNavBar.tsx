import { NavItem } from "@Atom/NavItem/NavItem";
import { BlogNavDataType } from "@Common/Type/Data";
import { useGetNavDatas } from "./MainNavBar.hook";

export const MainNavBar: React.FC = () => {
  const datas = useGetNavDatas();
  return (
    <nav>
      {datas.map((data: BlogNavDataType) => (
        <NavItem {...data} key={data.id} />
      ))}
    </nav>
  );
};
