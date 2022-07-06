import { useFBX } from "@Three";
import { FBXType } from "../FBX";
import { 포지션 } from "./BlockFbx.c";
import { useBlockFbxData, useBlockFbxRef } from "./BlockFbx.h";

export const BlockFbx: React.FC<FBXType> = ({ src }) => {
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
      />
      <mesh ref={ref} />
    </>
  );
};
