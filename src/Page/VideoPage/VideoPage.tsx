import { useGetVideoData } from "./VideoPage.hook";

export const VideoPage: React.FC = () => {
  const movieInfo = useGetVideoData();
  return <div>{1}</div>;
};
