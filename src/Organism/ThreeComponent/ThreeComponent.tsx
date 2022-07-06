import { Suspense } from "react";
import { Html, Physics } from "@Three";
import { Character } from "@Atom/.";
import { StaticModel } from "@Molecules/.";
import { LoadingPage } from "@Page/.";

export const ThreeComponent = () => {
  return (
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
  );
};
