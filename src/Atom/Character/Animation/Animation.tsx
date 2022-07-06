/* eslint-disable react-hooks/rules-of-hooks */
import { Object3D, useFBX, useAnimations, Event } from "@Three";
import { keyBoardStateType } from "../Move/Move.const";

export const useCharacterAnimation = (ref: React.RefObject<Object3D<Event>>) =>
  Object.entries(animationSrcs).reduce((acc: object, [key, src]) => {
    const { animations } = useFBX(`${src}?${new Date()}`);
    const { actions } = useAnimations(animations, ref);
    return { ...acc, [`${key}Actions`]: actions };
  }, {});

export const initAnimation = ({
  forward,
  backward,
  left,
  right,
  action,
  hello,
  dance,
  happy,
  question,
  lose,
}: keyBoardStateType & { action: object & any }) => {
  action.walkingActions["Take 001"].play();
  if (!action) return;
  if (!action.walkingActions["Take 001"]) return;
  !forward && !backward && !left && !right
    ? action.walkingActions["Take 001"].stop()
    : action.walkingActions["Take 001"].play();
  !hello
    ? action.helloActions["Take 001"].stop()
    : action.helloActions["Take 001"].play();
  !dance
    ? action.dancingActions["Take 001"].stop()
    : action.dancingActions["Take 001"].play();
  !happy
    ? action.happyActions["Take 001"].stop()
    : action.happyActions["Take 001"].play();
  !question
    ? action.questionActions["Take 001"].stop()
    : action.questionActions["Take 001"].play();
  !lose
    ? action.loseActions["Take 001"].stop()
    : action.loseActions["Take 001"].play();
};

const animationSrcs = {
  walking: "./3D/Animation/common_people@walk.FBX",
  dancing: "./3D/Animation/common_people@dance.FBX",
  hello: "./3D/Animation/common_people@wave.FBX",
  happy: "./3D/Animation/common_people@victory.FBX",
  question: "./3D/Animation/common_people@shrug.FBX",
  lose: "./3D/Animation/common_people@lose.FBX",
};
