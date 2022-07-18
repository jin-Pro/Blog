import { Physics } from "@Three";
import { Character } from "@Atom/.";
import { StaticModel } from "@Molecules/.";

export const ThreeComponent: React.FC<Props> = ({ handleGoBlog }) => {
  return (
    <Physics gravity={[0, 0, 0]}>
      <StaticModel handleGoBlog={handleGoBlog} />
      <Character />
    </Physics>
  );
};

type Props = { handleGoBlog: () => void };
