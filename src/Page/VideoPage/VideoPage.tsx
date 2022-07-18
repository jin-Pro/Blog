import { Flex } from "@Atom/.";
import { MainVideo, MovieList, MainVideoSkeleton } from "@Molecules/.";
import { Suspense } from "react";
import styled from "styled-components";
import { useGetVideoData } from "./VideoPage.hook";

export const VideoPage: React.FC = () => {
  const [titleId, getMovieFunc, getMoviesFunc] = useGetVideoData();
  return (
    <VideoPageContainer>
      <Suspense fallback={<MainVideoSkeleton />}>
        <MainVideo getMovieFunc={getMovieFunc} />
      </Suspense>
      <Suspense fallback={<div>사이드 영상</div>}>
        <MovieList
          titleId={titleId}
          getMoviesFunc={getMoviesFunc}
          type="small"
        />
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
