import { ThreeEvent } from "@react-three/fiber";
import { useFBX, Vector3 } from "@Three";

export const FBX: React.FC<FBXType> = ({ src, size, handleClickEvent }) => {
  const temp = useFBX(src);

  return (
    <group
      scale={new Vector3(...(size ?? [0.5, 0.5, 0.5]))}
      onClick={handleClickEvent}
      position={new Vector3(...[0, -0.5, 0.5])}
    >
      <primitive object={temp} />
    </group>
  );
};

export type FBXType = {
  src: string;
  size?: number[];
  handleClickEvent?: (event: ThreeEvent<MouseEvent>) => void;
};
