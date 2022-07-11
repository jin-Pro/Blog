import { Movie } from "@Atom/.";
import { MovieDataType } from "@Common/Type/Data";

type Props = { movies: MovieDataType[] };

export const Movies: React.FC<Props> = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <Movie key={movie.movieId} {...movie} />
      ))}
    </ul>
  );
};
