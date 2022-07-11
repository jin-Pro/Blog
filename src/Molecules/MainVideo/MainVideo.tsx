import { Movie } from "@Atom/.";
import { useMovePageHook } from "@Common/Hook/useMovePage";
import { MainVideoType } from "@Page/VideoPage/VideoPage.hook";
import styled from "styled-components";

type Props = { movie: MainVideoType };
export const MainVideo: React.FC<Props> = ({ movie }) => {
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

const MainVideoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5% 5% 5%;
`;
