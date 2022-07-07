import { Physics } from "@Three";
import { Character } from "@Atom/.";
import { StaticModel } from "@Molecules/.";

export const ThreeComponent = () => {
  return (
    <Physics gravity={[0, 0, 0]}>
      <StaticModel />
      <Character />
    </Physics>
  );
};
