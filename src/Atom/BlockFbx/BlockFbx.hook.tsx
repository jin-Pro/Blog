import {
  useConvexPolyhedron,
  threeToCannon,
  Object3D,
  BufferGeometry,
  Material,
  Group,
} from "@Three";

import { 옵션, makeVertices, 포지션, 로테이션 } from "./BlockFbx.const";

export const useBlockFbxData: useBlockFbxDataType = (fbx) => {
  const { geometry, material } = fbx.children[0] as fbxChildrenType;
  return { geometry, material };
};

export const useBlockFbxRef: useBlockFbxRefType = (fbx) => {
  const {
    shape: { vertices, faces, faceNormals, uniqueEdges, boundingSphereRadius },
  } = threeToCannon(fbx, 옵션) as any;

  const [ref] = useConvexPolyhedron(
    () => ({
      type: "Static",
      args: [
        makeVertices(vertices),
        faces,
        makeVertices(faceNormals),
        makeVertices(uniqueEdges),
        boundingSphereRadius,
      ],
      mass: 100,
      onCollide: undefined,
    }),
    undefined,
    [makeVertices(vertices), 포지션, 로테이션]
  );

  return { ref };
};

type fbxChildrenDataType = {
  geometry: BufferGeometry;
  material: Material;
};
type fbxChildrenType = Object3D<Event> & fbxChildrenDataType;
type useBlockFbxDataType = (fbx: Group) => fbxChildrenDataType;
type useBlockFbxRefType = (fbx: Group) => any;
