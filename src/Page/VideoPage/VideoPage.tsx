import { Flex } from "@Atom/.";
import { MainVideo } from "@Molecules/.";
import { VideoSideBar } from "@Organism/.";
import styled from "styled-components";
import { useGetVideoData } from "./VideoPage.hook";

export const VideoPage: React.FC = () => {
  const [movies, movie] = useGetVideoData();
  return (
    <VideoPageContainer>
      <MainVideo movie={movie} />
      <VideoSideBar movies={movies} />
    </VideoPageContainer>
  );
};

const VideoPageContainer = styled(Flex)`
  width: 100vw;
  height: calc(100vh - 74px);
  background-color: #181818;
  * {
    color: #ffffff;
  }
  padding-top: 30px;
`;
