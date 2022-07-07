import { useFBX } from "@Three";
import { FBXType } from "../FBX/FBX";
import { 포지션 } from "./BlockFbx.const";
import { useBlockFbxData, useBlockFbxRef } from "./BlockFbx.hook";

export const BlockFbx: React.FC<FBXType> = ({ src, handleClickEvent }) => {
  const fbx = useFBX(src);
  const { geometry, material } = useBlockFbxData(fbx);
  const { ref } = useBlockFbxRef(fbx);

  return (
    <>
      <mesh
        castShadow
        position={포지션}
        receiveShadow
        geometry={geometry}
        material={material}
        onClick={handleClickEvent}
      />
      <mesh ref={ref} />
    </>
  );
};
