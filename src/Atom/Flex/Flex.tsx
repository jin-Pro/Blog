import styled from "styled-components";

export const Flex: React.FC<Props> = ({ children, ...props }) => {
  return <FlexContainer {...props}>{children}</FlexContainer>;
};

const FlexContainer = styled.div<propsType>`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;

type propsType = {
  justify?: string;
  align?: string;
  width?: string;
  height?: string;
};
type Props = propsType & {
  children: React.ReactNode;
};
