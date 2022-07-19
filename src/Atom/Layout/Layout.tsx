import { ChildProps } from "@Common/Type/Data";
import { Container } from "./Layout.style";

export const Layout: React.FC<ChildProps> = ({ children }) => (
  <Container>{children}</Container>
);
