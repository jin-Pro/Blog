import { BlockFbx } from "@Atom/.";
import FBX from "@Atom/FBX/FBX";
import { useCallback } from "react";

type Props = {
  handleMovePageFn: (src: string) => void;
};
export const StaticModel: React.FC<Props> = ({ handleMovePageFn }) => {
  const handleGoBlog = useCallback(() => handleMovePageFn("/main"), []);
  return (
    <>
      <FBX src="./3D/aircon.fbx" />
      <FBX src="./3D/bed_1.fbx" />
      <FBX src="./3D/bed_2.fbx" />
      <FBX src="./3D/bed_3.fbx" />
      <FBX src="./3D/bed_4.fbx" />
      <FBX src="./3D/board.fbx" />
      <FBX src="./3D/chair.fbx" />
      <FBX src="./3D/wifi.fbx" />
      <FBX src="./3D/mouse.fbx" />
      <FBX src="./3D/monitor_1.fbx" handleClickEvent={handleGoBlog} />
      <FBX src="./3D/monitor_2.fbx" />
      <FBX src="./3D/deskpad.fbx" />
      <FBX src="./3D/desk.fbx" />
      <FBX src="./3D/clock.fbx" />

      <FBX src="./3D/floor.fbx" size={[0.1, 0.1, 0.1]} />
      <FBX src="./3D/wall.fbx" />
    </>
  );
};
