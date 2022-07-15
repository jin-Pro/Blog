import { BlockFbx, FBX } from "@Atom/.";
import { useCallback } from "react";

type Props = {
  handleMovePageFn: (src: string) => void;
};
export const StaticModel: React.FC<Props> = ({ handleMovePageFn }) => {
  const handleGoBlog = useCallback(() => handleMovePageFn("/main"), []);
  return (
    <>
      <FBX src="./3D/aircon.fbx" />
      <FBX src="./3D/board.fbx" />
      <FBX src="./3D/wifi.fbx" />
      <FBX src="./3D/mouse.fbx" />

      <FBX src="./3D/floor.fbx" />

      <FBX src="./3D/colock.fbx" />
      <FBX src="./3D/holder_1.fbx" />
      <FBX src="./3D/holder_2.fbx" />
      <FBX src="./3D/ipad.fbx" />
      <FBX src="./3D/iphone.fbx" />
      <FBX src="./3D/macbook.fbx" />
      <FBX src="./3D/monitor.fbx" handleClickEvent={handleGoBlog} />
      <FBX src="./3D/poster_1.fbx" />
      <FBX src="./3D/poster_2.fbx" />

      <BlockFbx src="./3D/bed.fbx" />
      <BlockFbx src="./3D/chair.fbx" />
      <BlockFbx src="./3D/desk.fbx" />
    </>
  );
};
