import { Flex } from "@Atom/.";
import { MainVideo, MovieList } from "@Molecules/.";
import styled from "styled-components";
import { useGetVideoData } from "./VideoPage.hook";

export const VideoPage: React.FC = () => {
  const [titleId, movies, movie] = useGetVideoData();
  return (
    <VideoPageContainer>
      <MainVideo movie={movie} />
      <MovieList
        titleId={titleId}
        movies={movies}
        loading={true}
        type="small"
      />
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
