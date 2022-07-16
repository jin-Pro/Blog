import { useFBX, useSphere } from "@Three";
import { useCharacterAnimation } from "./Animation/Animation";
import { useCharacterMove } from "./Move/Move";

export const Character: React.FC = () => {
  const temp = useFBX(`./3D/character.fbx?${new Date()}`);

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.01],
    position: [0, -2, 0],
    type: "Dynamic",
  }));

  useCharacterMove(api, useCharacterAnimation(ref));

  return (
    <group ref={ref as any} scale={0.02}>
      <primitive object={temp} />
    </group>
  );
};
