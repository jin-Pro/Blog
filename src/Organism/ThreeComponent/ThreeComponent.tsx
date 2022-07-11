import { Physics } from "@Three";
import { Character } from "@Atom/.";
import { StaticModel } from "@Molecules/.";

export const ThreeComponent: React.FC<Props> = ({ handleMovePageFn }) => {
  return (
    <Physics gravity={[0, 0, 0]}>
      <StaticModel handleMovePageFn={handleMovePageFn} />
      <Character />
    </Physics>
  );
};

type Props = {
  handleMovePageFn: (src: string) => void;
};
