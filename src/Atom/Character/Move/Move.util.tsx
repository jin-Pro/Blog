import { PublicApi, Vector3 } from "@Three";
import { initAnimation } from "../Animation/Animation";
import {
  keyMap,
  DefaultKeyboardState,
  keyBoardStateType,
  SPEED,
} from "./Move.const";

export const keyHandler =
  (api: PublicApi, action: object & any) =>
  (bool: boolean) =>
  ({ key, target }: KeyboardEvent) => {
    if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;

    keyMap[key].pressed = bool;

    const keyState = Object.values(keyMap).reduce(
      (state, { fn, pressed }) => (pressed ? { ...state, ...fn(bool) } : state),
      DefaultKeyboardState
    );
    const { direction, characterDir } = getDirection(keyState);
    initAnimation({
      ...keyState,
      action,
    });
    api.velocity.set(direction.x, 0, direction.z);
    api.rotation.set(0, characterDir, 0);
  };

export const getDirection = ({
  forward,
  left,
  right,
  backward,
}: keyBoardStateType) => {
  const characterDir =
    forward || left || right
      ? forward
        ? left || right
          ? left
            ? (Math.PI * 5) / 4
            : (Math.PI * 3) / 4
          : Math.PI
        : backward
        ? left || right
          ? left
            ? (Math.PI * 7) / 4
            : Math.PI / 4
          : Math.PI
        : left
        ? (3 * Math.PI) / 2
        : Math.PI / 2
      : 0;
  const fowardSpeed = forward || backward ? (forward && !backward ? 1 : -1) : 0;
  const sideSpeed = left || right ? (right ? 1 : -1) : 0;

  const fowardVector = new Vector3();
  const sideVector = new Vector3();
  const direction = new Vector3();

  fowardVector.set(0, 0, fowardSpeed);
  sideVector.set(sideSpeed, 0, 0);

  direction
    .subVectors(fowardVector, sideVector)
    .normalize()
    .multiplyScalar(SPEED);

  return {
    direction,
    characterDir,
  };
};
