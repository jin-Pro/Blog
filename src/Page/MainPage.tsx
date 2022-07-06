import { Canvas } from "@Three";
import { Layout } from "@Atom/.";
import { ThreeComponent } from "@Organism/.";

export const MainPage: React.FC = () => {
  return (
    <Layout>
      <Canvas>
        <ambientLight />
        <pointLight position={[100, 100, 100]} intensity={1} />
        <ThreeComponent />
      </Canvas>
    </Layout>
  );
};
