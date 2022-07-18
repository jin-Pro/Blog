import React from "react";
import { FBX } from "@Atom/.";
import { MODEL_SRC } from "./StaticModel.constant";

export const StaticModel: React.FC<Props> = React.memo(function ({
  handleGoBlog,
}) {
  return (
    <>
      {MODEL_SRC.map((src, i) => (
        <FBX src={src} key={i} />
      ))}
      <FBX src="./3D/monitor.fbx" handleClickEvent={handleGoBlog} />
    </>
  );
});

type Props = { handleGoBlog: () => void };
