import { useCallback, useEffect } from "react";
import { PublicApi } from "@Three";
import { keyHandler } from "./Move.util";

export const useCharacterMove = (api: PublicApi, action: object & any) => {
  const setKeyHandler = useCallback(keyHandler(api, action), []);
  const downHandler = useCallback(setKeyHandler(true), []);
  const upHandler = useCallback(setKeyHandler(false), []);

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
};
