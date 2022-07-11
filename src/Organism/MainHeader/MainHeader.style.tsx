import styled from "styled-components";

export const MainHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 10px 70px 10px 100px;
  box-sizing: border-box;
`;
export const LogoImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 10px;
`;

export const HomeIcon = styled(LogoImg)`
  width: 40px;
  height: 40px;
`;
