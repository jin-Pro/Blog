import { useContext } from "react";
import { useQuery } from "react-query";
import { getFetchMovies } from "@Organism/MainBody/MainBody.util";
import { VideoDataContext } from "@Organism/VideoBody/VideoBody.hook";

export const useMainVideoData = () => {
  const { id, titleId } = useContext(VideoDataContext);
  const { data: movies } = useQuery(
    ["Movie", titleId],
    () => getFetchMovies(titleId),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    }
  );
  const movie = movies?.filter(({ movieId }) => movieId == id)[0];
  return movie;
};
