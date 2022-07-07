import { Canvas } from "@Three";
import { Layout } from "@Atom/.";
import { ThreeComponent, ThreeGuide } from "@Organism/.";

export const MainPage: React.FC = () => {
  return (
    <Layout>
      <ThreeGuide />
      <Canvas>
        <ambientLight />
        <pointLight position={[100, 100, 100]} intensity={1} />
        <ThreeComponent />
      </Canvas>
    </Layout>
  );
};
