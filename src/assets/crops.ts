import * as THREE from "three";
import { box, group } from "./core";
import type { FarmMaterials } from "../textures/generateTextures";

export function createCropBedBorder(materials: FarmMaterials, width = 3.8, depth = 3.8): THREE.Group {
  return group("crop-bed-border", [
    box("border-front", [width, 0.2, 0.14], [0, 0.14, depth / 2], materials.woodenFence),
    box("border-back", [width, 0.2, 0.14], [0, 0.14, -depth / 2], materials.woodenFence),
    box("border-left", [0.14, 0.2, depth], [-width / 2, 0.14, 0], materials.woodenFence),
    box("border-right", [0.14, 0.2, depth], [width / 2, 0.14, 0], materials.woodenFence),
  ]);
}

export function createVoxelCabbageCrop(materials: FarmMaterials): THREE.Group {
  return group("voxel-cabbage-crop", [
    box("cabbage-base", [0.46, 0.24, 0.46], [0, 0.2, 0], materials.cropLeaves),
    box("cabbage-top", [0.34, 0.28, 0.34], [0.02, 0.45, -0.02], materials.grass),
    box("cabbage-core", [0.18, 0.16, 0.18], [0, 0.62, 0], materials.cropLeaves),
  ]);
}

export function createVoxelWheatRow(materials: FarmMaterials): THREE.Group {
  const row = group("voxel-wheat-row");
  for (let i = 0; i < 5; i += 1) {
    const x = (i - 2) * 0.34;
    row.add(
      box("wheat-stalk", [0.08, 0.74, 0.08], [x, 0.42, 0], materials.wheat),
      box("wheat-head", [0.16, 0.28, 0.12], [x, 0.88, 0], materials.hay),
    );
  }
  return row;
}

export function createVoxelCarrotRow(materials: FarmMaterials): THREE.Group {
  const row = group("voxel-carrot-row");
  for (let i = 0; i < 5; i += 1) {
    const x = (i - 2) * 0.36;
    row.add(
      box("carrot-root", [0.16, 0.2, 0.16], [x, 0.2, 0], materials.pumpkin),
      box("carrot-leaf", [0.18, 0.36, 0.18], [x, 0.48, 0], materials.cropLeaves),
    );
  }
  return row;
}

export function createVoxelTomatoPlantRow(materials: FarmMaterials): THREE.Group {
  const row = group("voxel-tomato-plant-row");
  for (let i = 0; i < 4; i += 1) {
    const x = (i - 1.5) * 0.46;
    row.add(
      box("tomato-stem", [0.1, 0.72, 0.1], [x, 0.42, 0], materials.cropLeaves),
      box("tomato-leaves", [0.36, 0.28, 0.28], [x, 0.72, 0], materials.cropLeaves),
      box("tomato-red-fruit", [0.13, 0.13, 0.13], [x + 0.11, 0.68, 0.12], materials.tractorRedMetal),
      box("tomato-orange-fruit", [0.13, 0.13, 0.13], [x - 0.11, 0.58, -0.1], materials.pumpkin),
    );
  }
  return row;
}

export function createVoxelCornStalkRow(materials: FarmMaterials): THREE.Group {
  const row = group("voxel-corn-stalk-row");
  for (let i = 0; i < 4; i += 1) {
    const x = (i - 1.5) * 0.56;
    row.add(
      box("corn-stalk", [0.16, 1.26, 0.16], [x, 0.68, 0], materials.cropLeaves),
      box("corn-leaf-left", [0.34, 0.14, 0.12], [x - 0.18, 0.7, 0], materials.cropLeaves),
      box("corn-leaf-right", [0.34, 0.14, 0.12], [x + 0.18, 0.92, 0], materials.cropLeaves),
      box("corn-cob", [0.16, 0.34, 0.12], [x + 0.12, 0.88, 0.13], materials.wheat),
    );
  }
  return row;
}

export function createVoxelPumpkinCrop(materials: FarmMaterials): THREE.Group {
  return group("voxel-pumpkin-crop", [
    box("pumpkin-main", [0.62, 0.42, 0.58], [0, 0.28, 0], materials.pumpkin),
    box("pumpkin-side-a", [0.26, 0.38, 0.5], [-0.34, 0.28, 0], materials.pumpkin),
    box("pumpkin-side-b", [0.26, 0.38, 0.5], [0.34, 0.28, 0], materials.pumpkin),
    box("pumpkin-stem", [0.12, 0.22, 0.12], [0, 0.62, 0], materials.cropLeaves),
  ]);
}

export function createTrellisCropRow(materials: FarmMaterials): THREE.Group {
  const trellis = group("trellis-crop-row");
  for (let i = 0; i < 3; i += 1) {
    const x = (i - 1) * 0.55;
    trellis.add(
      box("trellis-post", [0.1, 1.28, 0.1], [x, 0.66, 0], materials.woodenFence),
      box("trellis-leaves", [0.34, 0.52, 0.22], [x, 0.78, 0.02], materials.cropLeaves),
      box("trellis-flower", [0.1, 0.1, 0.1], [x + 0.1, 1.0, 0.15], materials.flowers),
    );
  }
  trellis.add(box("trellis-top-rail", [1.35, 0.1, 0.1], [0, 1.25, 0], materials.woodenFence));
  return trellis;
}

export function createSmallFlowerCrop(materials: FarmMaterials): THREE.Group {
  return group("small-flower-crop", [
    box("flower-stem-a", [0.08, 0.28, 0.08], [-0.12, 0.2, 0], materials.cropLeaves),
    box("flower-stem-b", [0.08, 0.34, 0.08], [0.12, 0.23, 0.08], materials.cropLeaves),
    box("flower-head-a", [0.18, 0.16, 0.18], [-0.12, 0.4, 0], materials.flowers),
    box("flower-head-b", [0.18, 0.16, 0.18], [0.12, 0.48, 0.08], materials.flowers),
  ]);
}
