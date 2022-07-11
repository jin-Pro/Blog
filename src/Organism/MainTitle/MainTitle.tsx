import { Flex } from "@Atom/.";
import styled from "styled-components";

export const MainTitle: React.FC = () => {
  return <MainTitleContainer height="200px">jin-Pro</MainTitleContainer>;
};

const MainTitleContainer = styled(Flex)`
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
  color: #ffffff;
  font-size: 64px;
`;
