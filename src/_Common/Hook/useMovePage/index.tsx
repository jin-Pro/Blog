import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useMovePageHook = () => {
  const navigator = useNavigate();
  const handleMovePage = useCallback((src: string) => navigator(src), []);
  return handleMovePage;
};
