import { MovieDataType } from "@Common/Type/Data";
import { MovieContainer, MovieVideo } from "./Movie.style";

export const Movie: React.FC<MovieDataType> = ({
  movieId,
  movieTitle,
  movieSrc,
}) => {
  return (
    <MovieContainer data-id={movieId}>
      <MovieVideo src={movieSrc} />
      {movieTitle}
    </MovieContainer>
  );
};
