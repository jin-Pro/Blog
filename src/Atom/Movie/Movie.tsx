import { MovieDataType } from "@Common/Type/Data";

export const Movie: React.FC<MovieDataType> = ({ movieId, movieTitle }) => {
  return <li>{movieTitle}</li>;
};
