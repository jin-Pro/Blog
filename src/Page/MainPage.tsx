import { Suspense } from "react";
import { Physics, Html, Canvas } from "@Three";
import { Character, Layout } from "@Atom/.";
import { LoadingPage } from ".";
import { StaticModel } from "@Molecules/.";
// import Keyboard from "@Common/Three/Keyboard";

export const MainPage: React.FC = () => {
  return (
    <Layout>
      <Canvas>
        <ambientLight />
        <pointLight position={[100, 100, 100]} intensity={1} />
        <Physics gravity={[0, 0, 0]}>
          <Suspense
            fallback={
              <Html>
                <LoadingPage />
              </Html>
            }
          >
            <StaticModel />
          </Suspense>
          <Suspense fallback={null}>
            <Character />
          </Suspense>
        </Physics>
        {/* <Keyboard /> */}
      </Canvas>
    </Layout>
  );
};
