import { ThreeEvent } from "@react-three/fiber";
import { useFBX, Vector3 } from "@Three";

const FBX: React.FC<FBXType> = ({ src, size, handleClickEvent }) => {
  const temp = useFBX(src);

  return (
    <group
      scale={new Vector3(...(size ?? [0.2, 0.2, 0.2]))}
      onClick={handleClickEvent}
    >
      <primitive object={temp} />
    </group>
  );
};

export default FBX;

export type FBXType = {
  src: string;
  size?: number[];
  handleClickEvent?: (event: ThreeEvent<MouseEvent>) => void;
};
