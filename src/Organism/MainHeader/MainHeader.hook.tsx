import { useMovePageHook } from "@Common/Hook/useMovePage";
import { useLocation } from "react-router-dom";

export const useLocationHook = () => {
  const handleMovePage = useMovePageHook();
  const { pathname } = useLocation();
  const goHome = () =>
    handleMovePage(pathname.includes("video") ? "/main" : "/");
  const goMail = () => window.open("mailto:dnjun2@ajou.ac.kr");
  const goVelog = () => window.open("https://velog.io/@0_jin");
  const goGit = () => window.open("https://github.com/jin-Pro");

  const goNotion = () =>
    window.open(
      "https://luxuriant-oboe-e56.notion.site/4c3b1480d2ef47159578cafd13f0eadd"
    );

  return {
    goHome,
    goMail,
    goVelog,
    goGit,
    goNotion,
  };
};
