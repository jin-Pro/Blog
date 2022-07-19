import { Suspense } from "react";
import { MainVideo, MovieList, MainVideoSkeleton } from "@Molecules/.";
import { useGetURLData } from "./VideoBody.hook";

export const VideoBody: React.FC = () => {
  const [id, titleId] = useGetURLData();
  return (
    <>
      <Suspense fallback={<MainVideoSkeleton />}>
        <MainVideo id={id} titleId={titleId} />
      </Suspense>
      <Suspense fallback={<div>사이드 영상</div>}>
        <MovieList titleId={titleId} type="small" />
      </Suspense>
    </>
  );
};
