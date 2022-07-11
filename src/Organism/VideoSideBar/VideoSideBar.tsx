import { Movie } from "@Atom/.";
import { MovieDataType } from "@Common/Type/Data";
import styled from "styled-components";

type Props = { movies: MovieDataType[] };
export const VideoSideBar: React.FC<Props> = ({ movies }) => {
  return (
    <VideoSideBarContainer>
      {movies.map((movie) => (
        <Movie key={movie.movieId} type="small" {...movie} />
      ))}
    </VideoSideBarContainer>
  );
};

const VideoSideBarContainer = styled.ul`
  height: 100%;
  padding-bottom: 5%;
  overflow: auto;
`;
