export type IdType = string | number;

export type BlogNavDataType = {
  id: IdType;
  title: string;
};

export type MovieDataType = {
  movieId: IdType;
  movieTitle: string;
  movieSrc: string;
};

export type ChildProps = { children: React.ReactNode };
