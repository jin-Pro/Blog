import { Container } from "./Layout.style";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Container>{children}</Container>
);
