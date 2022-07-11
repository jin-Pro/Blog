import { Flex } from "@Atom/.";
import styled from "styled-components";

export const MoviesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 70px;
  padding-bottom: 10px;
  box-sizing: border-box;
  justify-content: space-around;
  width: calc(100% - 300px);
  height: 100%;
  overflow: auto;
`;

export const VideoSideBarContainer = styled.ul`
  height: 100%;
  padding-bottom: 5%;
  overflow: auto;
`;

export const EmptyMovieListContainer = styled(Flex)`
  font-size: 32px;
  width: calc(100% - 300px);
`;
