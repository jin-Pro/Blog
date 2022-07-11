import { BlogNavDataType } from "@Common/Type/Data";

export const NavItem: React.FC<BlogNavDataType> = ({ id, title }) => {
  return <div data-id={id}>{title}</div>;
};
