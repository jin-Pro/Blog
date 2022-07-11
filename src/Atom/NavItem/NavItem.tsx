import { BlogNavDataType } from "@Common/Type/Data";
import styled from "styled-components";

type ContainerProps = { bool: boolean };
type Props = BlogNavDataType & ContainerProps;

export const NavItem: React.FC<Props> = ({ id, title, bool }) => {
  return (
    <NavItemContainer data-id={id} bool={bool}>
      {title}
    </NavItemContainer>
  );
};

const NavItemContainer = styled.div<ContainerProps>`
  cursor: pointer;
  font-size: 20px;
  padding: calc(calc(calc(100vh - 275px) / 6 - 20px) / 2);
  box-sizing: border-box;
  background-color: ${({ bool }) => bool && "#b8b4b4"};
  :hover {
    background-color: #b8b4b4;
  }
`;
