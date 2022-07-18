import { Movie } from "@Atom/.";
import { useMovePageHook } from "@Common/Hook/useMovePage";
import { IdType } from "@Common/Type/Data";
import { getFetchMovies } from "@Organism/MainBody/MainBody.util";
import { useQuery } from "react-query";
import styled from "styled-components";

type Props = { id: IdType; titleId: IdType };
export const MainVideo: React.FC<Props> = ({ id, titleId }) => {
  const { data: movies } = useQuery(
    ["Movie", titleId],
    () => getFetchMovies(titleId),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    }
  );
  const movie = movies?.filter(({ movieId }) => movieId == id)[0];
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
