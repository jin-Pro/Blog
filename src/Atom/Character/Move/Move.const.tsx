export const SPEED = -3;

export const DefaultKeyboardState: keyBoardStateType = {
  backward: false,
  forward: false,
  left: false,
  right: false,
  hello: false,
  dance: false,
  happy: false,
  question: false,
  lose: false,
};

export const keyMap: { [key: string]: KeyMap } = [
  { keys: ["ArrowUp", "w", "W"], fn: (forward: boolean) => ({ forward }) },
  { keys: ["ArrowDown", "s", "S"], fn: (backward: boolean) => ({ backward }) },
  { keys: ["ArrowLeft", "a", "A"], fn: (left: boolean) => ({ left }) },
  { keys: ["ArrowRight", "d", "D"], fn: (right: boolean) => ({ right }) },
  { keys: ["1"], fn: (hello: boolean) => ({ hello }) },
  { keys: ["2"], fn: (dance: boolean) => ({ dance }) },
  { keys: ["3"], fn: (happy: boolean) => ({ happy }) },
  { keys: ["4"], fn: (question: boolean) => ({ question }) },
  { keys: ["5"], fn: (lose: boolean) => ({ lose }) },
].reduce<{ [key: string]: KeyMap }>((out, { keys, fn }) => {
  keys.forEach((key) => {
    out[key] = { fn, pressed: false, up: true };
  });
  return out;
}, {});

export type keyBoardStateType = {
  backward: boolean;
  forward: boolean;
  left: boolean;
  right: boolean;
  hello: boolean;
  dance: boolean;
  happy: boolean;
  question: boolean;
  lose: boolean;
};

export type KeyMap = {
  fn: (pressed: boolean) => object;
  up?: boolean;
  pressed?: boolean;
};
