import { ThreeEvent } from "@react-three/fiber";
import { useFBX } from "@Three";

const FBX: React.FC<FBXType> = ({ src, size }) => {
  const temp = useFBX(src);

  return (
    <group scale={size}>
      <primitive object={temp} />
    </group>
  );
};

export default FBX;

export type FBXType = {
  src: string;
  size?: number;
  handleClickEvent?: (event: ThreeEvent<MouseEvent>) => void;
};
