export {};
// /* eslint-disable no-param-reassign */
// /* eslint-disable no-unused-expressions */
// import { useEffect, useState } from "react";
// import { keyBoardStateType, KeyConfig, KeyMap } from ".";

// let keyMap: { [key: string]: KeyMap };

// function useKeys(keyConfig: KeyConfig[]) {
//   const userId = useRecoilValue(myUserIdAtom);
//   const position = useRecoilValue(myPositionAtom);
//   const [isPressed, setPressed] = useState(false);
//   useEffect(() => {
//     keyMap = keyConfig.reduce<{ [key: string]: KeyMap }>(
//       (out, { keys, fn, up = true }) => {
//         keys &&
//           keys.forEach((key) => {
//             out[key] = { fn, pressed: false, up };
//           });
//         return out;
//       },
//       {}
//     );
//   }, []);

//   useEffect(() => {
//     if (isPressed) return;
//     if (!userId) return;
//     Socket.instance?.emit("keyDown", {
//       userId,
//       keyState: DefaultKeyboardState,
//       position,
//     });
//   }, [position]);

//   useEffect(() => {
//     const downHandler = ({ key, target }: KeyboardEvent) => {
//       if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
//       const { pressed, up } = keyMap[key];
//       keyMap[key].pressed = true;
//       setPressed(true);
//       const keyState = Object.values(keyMap).reduce(
//         (state, { fn: _fn, pressed: _pressed }) => {
//           if (_pressed) return { ...state, ..._fn(true) };
//           return state;
//         },
//         DefaultKeyboardState
//       );

//       if (up || !pressed)
//         Socket.instance?.emit("keyDown", { userId, keyState, position });
//     };

//     const upHandler = ({ key, target }: KeyboardEvent) => {
//       if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
//       const { fn, up } = keyMap[key];
//       keyMap[key].pressed = false;
//       Object.values(keyMap).every(({ pressed }) => !pressed) &&
//         setPressed(false);

//       if (up)
//         Socket.instance?.emit("keyUp", {
//           userId,
//           keyState: fn(false),
//           position,
//         });
//     };

//     window.addEventListener("keydown", downHandler);
//     window.addEventListener("keyup", upHandler, { passive: true });

//     return () => {
//       window.removeEventListener("keydown", downHandler);
//       window.removeEventListener("keyup", upHandler);
//     };
//   }, [keyConfig]);
// }

// const Keyboard = () => {
//   useKeys([
//     { keys: ["ArrowUp", "w", "W"], fn: (forward) => ({ forward }) },
//     { keys: ["ArrowDown", "s", "S"], fn: (backward) => ({ backward }) },
//     { keys: ["ArrowLeft", "a", "A"], fn: (left) => ({ left }) },
//     { keys: ["ArrowRight", "d", "D"], fn: (right) => ({ right }) },
//     { keys: ["1"], fn: (hello) => ({ hello }) },
//     { keys: ["2"], fn: (dance) => ({ dance }) },
//     { keys: ["3"], fn: (happy) => ({ happy }) },
//     { keys: ["4"], fn: (question) => ({ question }) },
//     { keys: ["5"], fn: (lose) => ({ lose }) },
//   ]);
//   return null;
// };

// export default Keyboard;

// export const DefaultKeyboardState: keyBoardStateType = {
//   backward: false,
//   forward: false,
//   left: false,
//   right: false,
//   boost: false,
//   space: false,
//   hello: false,
//   dance: false,
//   happy: false,
//   question: false,
//   lose: false,
// };
