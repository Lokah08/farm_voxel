import * as THREE from "three";
import { box, group } from "./core";
import { createWoodenFenceSegment } from "./fences";
import type { FarmMaterials } from "../textures/generateTextures";

export function createBlackAndWhiteVoxelCow(materials: FarmMaterials): THREE.Group {
  return group("black-and-white-voxel-cow", [
    box("cow-body", [1.15, 0.68, 0.48], [0, 0.72, 0], materials.cowPattern),
    box("cow-head", [0.48, 0.46, 0.44], [-0.78, 0.78, 0.02], materials.cowPattern),
    box("cow-muzzle", [0.22, 0.22, 0.32], [-1.08, 0.72, 0.02], materials.white),
    box("cow-leg-a", [0.14, 0.48, 0.14], [-0.36, 0.25, 0.18], materials.dark),
    box("cow-leg-b", [0.14, 0.48, 0.14], [0.36, 0.25, 0.18], materials.dark),
    box("cow-leg-c", [0.14, 0.48, 0.14], [-0.36, 0.25, -0.18], materials.dark),
    box("cow-leg-d", [0.14, 0.48, 0.14], [0.36, 0.25, -0.18], materials.dark),
    box("cow-ear-a", [0.16, 0.12, 0.12], [-0.78, 1.06, 0.3], materials.dark),
    box("cow-ear-b", [0.16, 0.12, 0.12], [-0.78, 1.06, -0.26], materials.dark),
  ]);
}

export function createCowPenFence(materials: FarmMaterials): THREE.Group {
  const pen = group("cow-pen-fence");
  const positions: [number, number, number, number][] = [
    [-1.8, 0, -1.35, 0],
    [-0.6, 0, -1.35, 0],
    [0.6, 0, -1.35, 0],
    [1.8, 0, -1.35, 0],
    [-1.8, 0, 1.35, 0],
    [-0.6, 0, 1.35, 0],
    [0.6, 0, 1.35, 0],
    [1.8, 0, 1.35, 0],
  ];
  positions.forEach(([x, y, z, r]) => {
    const segment = createWoodenFenceSegment(materials, 1.1);
    segment.position.set(x, y, z);
    segment.rotation.y = r;
    pen.add(segment);
  });
  for (const x of [-2.4, -1.2, 0, 1.2, 2.4]) {
    pen.add(box("pen-post-front", [0.18, 0.84, 0.18], [x, 0.42, 1.35], materials.woodenFence));
    pen.add(box("pen-post-back", [0.18, 0.84, 0.18], [x, 0.42, -1.35], materials.woodenFence));
  }
  return pen;
}

export function createCowWaterTrough(materials: FarmMaterials): THREE.Group {
  return group("cow-water-trough", [
    box("trough-base", [0.86, 0.34, 0.44], [0, 0.22, 0], materials.stoneWall),
    box("trough-water", [0.66, 0.06, 0.28], [0, 0.42, 0], materials.waterBlue),
  ]);
}
