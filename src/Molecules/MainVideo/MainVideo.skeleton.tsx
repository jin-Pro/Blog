import React from "react";
import { MovieContainer } from "@Atom/Movie/Movie.style";
import styled from "styled-components";
import { MainVideoContainer } from "./MainVideo";

export const MainVideoSkeleton: React.FC = React.memo(function () {
  return (
    <MainVideoContainer>
      <MovieContainer type="large">
        <Skeleton />
      </MovieContainer>
    </MainVideoContainer>
  );
});

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  font-size: 24px;
  background: linear-gradient(
    40deg,
    rgb(199, 121, 208),
    rgb(75, 192, 200),
    #2b3074
  );
  -webkit-animation: huerotator 10s infinite alternate;
  animation: huerotator 10s infinite alternate;

  @keyframes huerotator {
    0% {
      -webkit-filter: hue-rotate(0deg);
      filter: hue-rotate(0deg);
    }

    100% {
      -webkit-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
`;
