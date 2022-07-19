import { Flex } from "@Atom/.";
import styled from "styled-components";
import { VideoBody } from "@Organism/.";

export const VideoPage: React.FC = () => {
  return (
    <VideoPageContainer>
      <VideoBody />
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
