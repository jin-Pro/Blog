import { Canvas } from "@Three";
import { Layout } from "@Atom/.";
import { ThreeComponent, ThreeGuide } from "@Organism/.";
import { useMovePageHook } from "@Common/Hook/useMovePage";

export const BasicPage: React.FC = () => {
  const handleMovePageFn = useMovePageHook();
  return (
    <Layout>
      <ThreeGuide />
      <Canvas>
        <ambientLight />
        <pointLight position={[100, 100, 100]} intensity={1} />
        <ThreeComponent handleMovePageFn={handleMovePageFn} />
      </Canvas>
    </Layout>
  );
};
