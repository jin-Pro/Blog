import { ChildProps } from "..";
import { Container } from "./Layout.style";

export const Layout: React.FC<ChildProps> = ({ children }) => (
  <Container>{children}</Container>
);
