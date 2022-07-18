import { IdType, MovieDataType } from "@Common/Type/Data";
import axios from "axios";

type getMoviesProps = (id: IdType) => Promise<MovieDataType[]>;
export const getFetchMovies: getMoviesProps = async (id) =>
  await axios
    .get(`/movies/${id}`)
    .then((res) => res.data)
    .catch((err) => []);
