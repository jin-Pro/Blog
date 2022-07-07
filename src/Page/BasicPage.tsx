import { Canvas } from "@Three";
import { Layout } from "@Atom/.";
import { ThreeComponent, ThreeGuide } from "@Organism/.";

export const BasicPage: React.FC = () => {
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
