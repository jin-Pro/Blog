import { Suspense } from "react";
import { Flex } from "@Atom/.";
import { MainVideo, MovieList, MainVideoSkeleton } from "@Molecules/.";
import { useGetURLData } from "./VideoPage.hook";
import styled from "styled-components";

export const VideoPage: React.FC = () => {
  const [id, titleId] = useGetURLData();
  return (
    <VideoPageContainer>
      <Suspense fallback={<MainVideoSkeleton />}>
        <MainVideo id={id} titleId={titleId} />
      </Suspense>
      <Suspense fallback={<div>사이드 영상</div>}>
        <MovieList titleId={titleId} type="small" />
      </Suspense>
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
