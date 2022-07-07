import { MouseEventHandler, useCallback, useEffect, useState } from "react";

export const useGuideOpenHook: ThreeGuidHookType = () => {
  const [open, setOpen] = useState(true);

  const handleExitClick: MouseEventHandler<HTMLImageElement> = useCallback(
    (e) => closeFn({ setOpen, bool: false, e, handleExitPress }),
    []
  );

  const handleExitPress = useCallback(
    (e: Event & any) =>
      closeFn({ setOpen, bool: e.keyCode !== 27, e, handleExitPress }),
    []
  );

  useEffect(() => {
    window.addEventListener("keyup", handleExitPress);
  }, []);

  return [open, handleExitClick];
};

type ThreeGuidHookType = () => [boolean, MouseEventHandler<HTMLDivElement>];
type closeFnArgType = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bool: boolean;
  e: any;
  handleExitPress: (e: Event & any) => void;
};
type closeFnType = (obj: closeFnArgType) => void;

const closeFn: closeFnType = ({ setOpen, bool, e, handleExitPress }) => {
  e.stopPropagation();
  if (bool) return;
  setOpen(false);
  window.removeEventListener("keyup", handleExitPress);
};
