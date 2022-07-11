import styled, { css } from "styled-components";

export type StyleProps = { type?: string };

const LargeStyle = css`
  width: 100%;
  height: 100%;
  font-size: 24px;
`;
const MediumStyle = css`
  width: 300px;
  margin-bottom: 50px;
  cursor: pointer;
`;
const SmallStyle = css`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const MovieContainer = styled.li<StyleProps>`
  ${({ type }) => type === "large" && LargeStyle};
  ${({ type }) => type === "medium" && MediumStyle};
  ${({ type }) => type === "small" && SmallStyle};
`;

const LargeVideoStyle = css`
  width: 100%;
  height: calc(100% - 32px);
  margin-bottom: 20px;
`;
const MediumVideoStyle = css`
  width: 100%;
  height: 200px;
`;
const SmallVideoStyle = css`
  width: 90%;
  height: 80%;
`;

export const MovieVideo = styled.iframe<StyleProps>`
  ${({ type }) => type === "large" && LargeVideoStyle};
  ${({ type }) => type === "medium" && MediumVideoStyle};
  ${({ type }) => type === "small" && SmallVideoStyle};
`;
