import { BlockFbx } from "@Atom/.";

export const StaticModel: React.FC = () => {
  return <BlockFbx src="./3D/test.fbx" handleClickEvent={() => alert("1")} />;
};
