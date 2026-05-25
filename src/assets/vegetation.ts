import * as THREE from "three";
import { box, group } from "./core";
import type { FarmMaterials } from "../textures/generateTextures";

export function createLargeVoxelTree(materials: FarmMaterials): THREE.Group {
  return group("large-voxel-tree", [
    box("large-tree-trunk", [0.55, 2.25, 0.55], [0, 1.12, 0], materials.woodenFence),
    box("large-tree-crown-a", [2.1, 1.0, 1.85], [0, 2.45, 0], materials.cropLeaves),
    box("large-tree-crown-b", [1.5, 1.0, 1.35], [-0.35, 3.05, 0.25], materials.grass),
    box("large-tree-crown-c", [1.0, 0.82, 1.0], [0.72, 3.12, -0.26], materials.cropLeaves),
    box("large-tree-top", [0.78, 0.58, 0.78], [0.05, 3.62, 0], materials.grass),
  ]);
}

export function createSmallVoxelTree(materials: FarmMaterials): THREE.Group {
  return group("small-voxel-tree", [
    box("small-tree-trunk", [0.32, 1.1, 0.32], [0, 0.55, 0], materials.woodenFence),
    box("small-tree-crown", [1.12, 0.78, 1.0], [0, 1.35, 0], materials.cropLeaves),
    box("small-tree-top", [0.72, 0.44, 0.62], [0.1, 1.82, -0.05], materials.grass),
  ]);
}

export function createFruitTree(materials: FarmMaterials): THREE.Group {
  const tree = createSmallVoxelTree(materials);
  tree.name = "fruit-tree";
  tree.add(
    box("fruit-a", [0.12, 0.12, 0.12], [0.26, 1.48, 0.35], materials.tractorRedMetal),
    box("fruit-b", [0.12, 0.12, 0.12], [-0.28, 1.58, -0.18], materials.pumpkin),
    box("fruit-c", [0.12, 0.12, 0.12], [0.04, 1.92, 0.12], materials.tractorRedMetal),
  );
  return tree;
}

export function createBush(materials: FarmMaterials): THREE.Group {
  return group("bush", [
    box("bush-main", [0.7, 0.48, 0.62], [0, 0.24, 0], materials.cropLeaves),
    box("bush-top", [0.44, 0.22, 0.38], [0.06, 0.58, -0.04], materials.grass),
  ]);
}

export function createFloweringBush(materials: FarmMaterials): THREE.Group {
  const bush = createBush(materials);
  bush.name = "flowering-bush";
  bush.add(
    box("bush-flower-a", [0.1, 0.1, 0.1], [-0.18, 0.6, 0.18], materials.flowers),
    box("bush-flower-b", [0.1, 0.1, 0.1], [0.24, 0.52, -0.12], materials.flowers),
  );
  return bush;
}

export function createGrassTuft(materials: FarmMaterials): THREE.Group {
  return group("grass-tuft", [
    box("tuft-a", [0.08, 0.28, 0.08], [-0.1, 0.14, 0], materials.cropLeaves),
    box("tuft-b", [0.08, 0.36, 0.08], [0, 0.18, 0.08], materials.grass),
    box("tuft-c", [0.08, 0.24, 0.08], [0.12, 0.12, -0.04], materials.cropLeaves),
  ]);
}

export function createSmallRock(materials: FarmMaterials): THREE.Group {
  return group("small-rock", [
    box("rock-a", [0.34, 0.2, 0.28], [0, 0.1, 0], materials.stoneWall),
    box("rock-b", [0.18, 0.16, 0.2], [0.15, 0.22, -0.02], materials.stoneWall),
  ]);
}

export function createDecorativeStoneCluster(materials: FarmMaterials): THREE.Group {
  return group("decorative-stone-cluster", [
    box("cluster-stone-a", [0.4, 0.36, 0.38], [-0.28, 0.18, 0.06], materials.stoneWall),
    box("cluster-stone-b", [0.32, 0.48, 0.34], [0.12, 0.24, -0.04], materials.stoneWall),
    box("cluster-stone-c", [0.28, 0.26, 0.3], [0.42, 0.13, 0.08], materials.stoneWall),
  ]);
}
