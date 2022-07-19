import { Movie } from "@Atom/.";
import { useMainVideoData } from "./MainVideo.hook";
import { useMovePageHook } from "@Common/Hook/useMovePage";
import styled from "styled-components";

export const MainVideo: React.FC = () => {
  const movie = useMainVideoData();
  const handleMovePageFn = useMovePageHook();
  if (!movie) {
    handleMovePageFn("/main");
    return null;
  }
  return (
    <MainVideoContainer>
      <Movie {...movie} type="large" />
    </MainVideoContainer>
  );
};

export const MainVideoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5% 5% 5%;
`;
