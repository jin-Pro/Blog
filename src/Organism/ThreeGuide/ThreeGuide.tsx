import { useGuideOpenHook } from "./ThreeGuide.hook";
import { ThreeGuideContainer, ThreeGuideCloseButton } from "./ThreeGuide.style";

export const ThreeGuide = () => {
  const [open, handleExitClick] = useGuideOpenHook();
  if (!open) return null;
  return (
    <ThreeGuideContainer>
      <img src="./Asset/GuideImage.svg" alt="조작가이드" />
      <ThreeGuideCloseButton
        onClick={handleExitClick}
        src="./Asset/CloseButton.svg"
        alt="조작가이드 끄기 버튼"
      />
    </ThreeGuideContainer>
  );
};
