import { Flex } from "@Atom/.";
import { useLocationHook } from "./MainHeader.hook";
import { LogoImg, MainHeaderContainer } from "./MainHeader.style";

export const MainHeader: React.FC = () => {
  const { goHome, goMail, goVelog, goGit, goNotion } = useLocationHook();
  return (
    <MainHeaderContainer>
      <LogoImg src="./Asset/home.svg" alt="home" onClick={goHome} />

      <Flex justify="end">
        <LogoImg src="./Asset/mail.svg" alt="mail" onClick={goMail} />
        <LogoImg src="./Asset/velog.jpeg" alt="Velog" onClick={goVelog} />
        <LogoImg src="./Asset/git.png" alt="Github" onClick={goGit} />
        <LogoImg src="./Asset/notion.svg" alt="이력서" onClick={goNotion} />
      </Flex>
    </MainHeaderContainer>
  );
};
