import * as THREE from "three";
import { box, group } from "./core";
import type { FarmMaterials } from "../textures/generateTextures";

export function createWoodenFencePost(materials: FarmMaterials): THREE.Group {
  return group("wooden-fence-post", [
    box("post-column", [0.22, 0.9, 0.22], [0, 0.45, 0], materials.woodenFence),
    box("post-cap", [0.32, 0.16, 0.32], [0, 0.96, 0], materials.hay),
  ]);
}

export function createWoodenFenceSegment(materials: FarmMaterials, length = 1): THREE.Group {
  return group("wooden-fence-segment", [
    box("fence-rail-top", [length, 0.16, 0.14], [0, 0.66, 0], materials.woodenFence),
    box("fence-rail-bottom", [length, 0.14, 0.12], [0, 0.34, 0], materials.woodenFence),
  ]);
}

export function createWoodenGate(materials: FarmMaterials): THREE.Group {
  return group("wooden-gate", [
    box("gate-left-post", [0.24, 1.1, 0.24], [-0.72, 0.55, 0], materials.woodenFence),
    box("gate-right-post", [0.24, 1.1, 0.24], [0.72, 0.55, 0], materials.woodenFence),
    box("gate-top-rail", [1.25, 0.16, 0.16], [0, 0.72, 0], materials.woodenFence),
    box("gate-bottom-rail", [1.25, 0.16, 0.16], [0, 0.36, 0], materials.woodenFence),
    box("gate-cross-a", [1.18, 0.12, 0.12], [0, 0.54, 0.02], materials.hay),
    box("gate-cross-b", [1.18, 0.12, 0.12], [0, 0.54, -0.02], materials.hay),
  ]);
}

export function createLowStoneWallSegment(materials: FarmMaterials): THREE.Group {
  return group("low-stone-wall-segment", [
    box("stone-a", [0.5, 0.38, 0.42], [-0.28, 0.19, 0], materials.stoneWall),
    box("stone-b", [0.44, 0.5, 0.46], [0.2, 0.25, 0.02], materials.stoneWall),
    box("stone-c", [0.34, 0.32, 0.38], [0.58, 0.16, -0.02], materials.stoneWall),
  ]);
}

export function createHedgeBlock(materials: FarmMaterials): THREE.Group {
  return group("hedge-block", [
    box("hedge-leaves-main", [0.95, 0.62, 0.58], [0, 0.31, 0], materials.cropLeaves),
    box("hedge-leaves-top", [0.62, 0.28, 0.42], [0.06, 0.76, -0.02], materials.grass),
  ]);
}

export function createFlowerHedgeBlock(materials: FarmMaterials): THREE.Group {
  const hedge = createHedgeBlock(materials);
  hedge.name = "flower-hedge-block";
  hedge.add(
    box("flower-pixels-a", [0.12, 0.12, 0.12], [-0.22, 0.76, 0.2], materials.flowers),
    box("flower-pixels-b", [0.12, 0.12, 0.12], [0.18, 0.72, -0.18], materials.flowers),
    box("flower-pixels-c", [0.1, 0.1, 0.1], [0.36, 0.64, 0.14], materials.flowers),
  );
  return hedge;
}
