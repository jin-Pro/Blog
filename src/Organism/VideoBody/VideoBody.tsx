import {
  MainVideo,
  MovieList,
  MainVideoSkeleton,
  MovieListProps,
} from "@Molecules/.";
import { useVideoInfoContext, VideoDataContext } from "./VideoBody.hook";
import { ChildProps } from "@Common/Type/Data";

type SubComponent = {
  MainVideo: React.FC;
  MovieList: React.FC<MovieListProps>;
};
type Props = SubComponent & React.FC<ChildProps>;
export const VideoBody: Props = ({ children }) => {
  const value = useVideoInfoContext();
  return (
    <VideoDataContext.Provider value={value}>
      {children}
    </VideoDataContext.Provider>
  );
};

VideoBody.MainVideo = MainVideo;
VideoBody.MovieList = MovieList;
