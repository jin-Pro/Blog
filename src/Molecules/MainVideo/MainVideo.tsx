import { Movie } from "@Atom/.";
import { useMovePageHook } from "@Common/Hook/useMovePage";
import { MovieDataType } from "@Common/Type/Data";
import { wrapPromiseReturnType } from "@Common/Util";
import styled from "styled-components";

type Props = { getMovieFunc: wrapPromiseReturnType<MovieDataType[]> };
export const MainVideo: React.FC<Props> = ({ getMovieFunc }) => {
  const movies = getMovieFunc.get() as MovieDataType[];
  const handleMovePageFn = useMovePageHook();
  if (movies?.length === 0) {
    handleMovePageFn("/main");
    return null;
  }
  return (
    <MainVideoContainer>
      <Movie {...movies[0]} type="large" />
    </MainVideoContainer>
  );
};

const MainVideoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5% 5% 5%;
`;
