import { Flex } from "@Atom/.";
import styled from "styled-components";
import { VideoBody } from "@Organism/.";
import { Suspense } from "react";
import { MainVideoSkeleton } from "@Molecules/.";

export const VideoPage: React.FC = () => {
  return (
    <VideoPageContainer>
      <VideoBody>
        <Suspense fallback={<MainVideoSkeleton />}>
          <VideoBody.MainVideo />
        </Suspense>
        <Suspense fallback={<div>사이드 영상</div>}>
          <VideoBody.MovieList type="small" />
        </Suspense>
      </VideoBody>
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
