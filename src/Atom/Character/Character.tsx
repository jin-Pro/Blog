import { useFBX, useSphere } from "@Three";

export const Character: React.FC = () => {
  // const {
  //   position: { x, y, z },
  // } = characterState;
  const temp = useFBX(`./3D/character.fbx?${new Date()}`);

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.05],
    position: [0, -5, -10],
    type: "Dynamic",
  }));

  // actions.current[idx] = useGetAnimations({ animationSrcs, ref });
  // characterRefs.current[idx] = ref;
  // apis.current[idx] = api;

  return (
    <group ref={ref as any} scale={0.03}>
      <primitive object={temp} />
    </group>
  );
};
