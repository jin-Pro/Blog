import React from "react";
import { MovieDataType } from "@Common/Type/Data";
import { MovieContainer, MovieVideo, StyleProps } from "./Movie.style";

type Props = MovieDataType & StyleProps;
export const Movie: React.FC<Props> = React.memo(function ({
  movieId,
  movieTitle,
  movieSrc,
  type,
}) {
  return (
    <MovieContainer data-id={movieId} type={type}>
      <MovieVideo src={movieSrc} type={type} />
      {movieTitle}
    </MovieContainer>
  );
});

Movie.defaultProps = {
  type: "medium",
};
