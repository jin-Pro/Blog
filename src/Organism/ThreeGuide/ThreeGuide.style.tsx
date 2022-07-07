import styled from "styled-components";

export const ThreeGuideContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 30%;
  z-index: 1;
`;

export const ThreeGuideCloseButton = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  top: calc(25% + 10px);
  left: calc(30% + 570px - 60px);
  cursor: pointer;
`;
