export type keyBoardStateType = {
  backward: boolean;
  forward: boolean;
  left: boolean;
  right: boolean;
  boost: boolean;
  space: boolean;
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

export type KeyConfig = KeyMap & {
  keys?: string[];
};
