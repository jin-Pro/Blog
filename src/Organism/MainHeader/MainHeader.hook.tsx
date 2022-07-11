import { useMovePageHook } from "@Common/Hook/useMovePage";
import { useCallback } from "react";

export const useLocationHook = () => {
  const handleMovePage = useMovePageHook();
  const goHome = useCallback(() => handleMovePage("/"), []);
  const goMail = useCallback(() => window.open("mailto:dnjun2@ajou.ac.kr"), []);
  const goVelog = useCallback(() => window.open("https://velog.io/@0_jin"), []);
  const goGit = useCallback(
    () => window.open("https://github.com/jin-Pro"),
    []
  );
  const goNotion = useCallback(
    () =>
      window.open(
        "https://luxuriant-oboe-e56.notion.site/4c3b1480d2ef47159578cafd13f0eadd"
      ),
    []
  );

  return {
    goHome,
    goMail,
    goVelog,
    goGit,
    goNotion,
  };
};
