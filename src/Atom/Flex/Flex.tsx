import styled from "styled-components";
import { ChildProps } from "..";

export const Flex: React.FC<Props> = ({ children, ...props }) => {
  return <FlexContainer {...props}>{children}</FlexContainer>;
};

const FlexContainer = styled.div<StyleType>`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;

type StyleType = {
  justify?: string;
  align?: string;
  width?: string;
  height?: string;
};
type Props = StyleType & ChildProps;
