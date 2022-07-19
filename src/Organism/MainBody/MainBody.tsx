import React from "react";
import { Flex } from "@Atom/.";
import { MainNavBar, MovieList, MovieListProps } from "@Molecules/.";
import { MoviesContext, useMoviesContext } from "./MainBody.hook";
import { ChildProps } from "@Common/Type/Data";

export const MainBody: Props = ({ children }) => {
  const value = useMoviesContext();
  return (
    <MoviesContext.Provider value={value}>
      <Flex justify="flex-start" align="none" height="calc(100vh - 275px)">
        {children}
      </Flex>
    </MoviesContext.Provider>
  );
};

MainBody.NavBar = MainNavBar;
MainBody.MovieList = MovieList;

type Props = subComponent & React.FC<ChildProps>;
type subComponent = {
  NavBar: React.FC;
  MovieList: React.FC<MovieListProps>;
};
