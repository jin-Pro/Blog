import { Triplet, ShapeOptions, ShapeType } from "@Three";

export const makeVertices = (vertices: any[]): any =>
  vertices?.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);

export const 옵션: ShapeOptions = {
  type: ShapeType.HULL,
};
export const 포지션: Triplet = [0, 0, 0];
export const 로테이션: Triplet = [0, -0.09, 0];
