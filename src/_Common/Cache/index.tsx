import { IdType, MovieDataType } from "@Common/Type/Data";

export const MOVIES_INFO: moviesInfoType = {};

type moviesInfoType = {
  [key: IdType]: MovieDataType[];
};
