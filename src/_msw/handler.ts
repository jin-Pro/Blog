import { IdType, MovieDataType } from "@Common/Type/Data";
import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";

type Props = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => any;

export const mockMovies: Props = (req, res, ctx) => {
  const {
    params: { titleId },
  } = req;
  const data = mockMoviesData[titleId as IdType];
  if (!data) res.networkError("error");
  return res(ctx.json(data));
};

type mockMoviesDataProp = {
  [key: IdType]: MovieDataType[];
};
const mockMoviesData: mockMoviesDataProp = {
  // 1: [
  //   {
  //     movieId: 1,
  //     movieTitle: "html",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 2,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 3,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 4,
  //     movieTitle: "html",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 5,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 6,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 7,
  //     movieTitle: "html",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 8,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 9,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  // ],
  // 2: [
  //   {
  //     movieId: 1,
  //     movieTitle: "js",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 2,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 3,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  // ],
  // 3: [
  //   {
  //     movieId: 1,
  //     movieTitle: "react",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 2,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 3,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  // ],
  // 4: [
  //   {
  //     movieId: 1,
  //     movieTitle: "network",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 2,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 3,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  // ],
  // 5: [
  //   {
  //     movieId: 1,
  //     movieTitle: "os",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 2,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 3,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  // ],
  // "6": [
  //   {
  //     movieId: 1,
  //     movieTitle: "web",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 2,
  //     movieTitle: "test2",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  //   {
  //     movieId: 3,
  //     movieTitle: "test3",
  //     movieSrc: "https://www.youtube.com/embed/RVO02Z1dLF8",
  //   },
  // ],
};
