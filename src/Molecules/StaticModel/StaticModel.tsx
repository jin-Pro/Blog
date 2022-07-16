import { FBX } from "@Atom/.";
import { useCallback } from "react";
import { MODEL_SRC } from "./StaticModel.constant";

type Props = {
  handleMovePageFn: (src: string) => void;
};
export const StaticModel: React.FC<Props> = ({ handleMovePageFn }) => {
  const handleGoBlog = useCallback(() => handleMovePageFn("/main"), []);
  return (
    <>
      {MODEL_SRC.map((src) => (
        <FBX src={src} />
      ))}
      <FBX src="./3D/monitor.fbx" handleClickEvent={handleGoBlog} />
    </>
  );
};
