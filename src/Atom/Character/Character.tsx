import { useFBX, useSphere } from "@Three";
import { useCharacterAnimation } from "./Animation/Animation";
import { useCharacterMove } from "./Move/Move";

export const Character: React.FC = () => {
  const temp = useFBX(`./3D/character.fbx?${new Date()}`);

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.05],
    position: [0, -5, -10],
    type: "Dynamic",
  }));

  useCharacterMove(api, useCharacterAnimation(ref));

  return (
    <group ref={ref as any} scale={0.03}>
      <primitive object={temp} />
    </group>
  );
};
