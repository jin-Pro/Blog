import { Movie } from "@Atom/.";
import { MovieDataType } from "@Common/Type/Data";

type Props = { movies: MovieDataType[]; loading: boolean };

export const Movies: React.FC<Props> = ({ movies, loading }) => {
  if (!loading) return <div>...loading</div>;
  if (movies.length === 0) return <div> 준비중입니다.</div>;
  return (
    <ul>
      {movies.map((movie) => (
        <Movie key={movie.movieId} {...movie} />
      ))}
    </ul>
  );
};
