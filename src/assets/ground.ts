import * as THREE from "three";
import { box, group } from "./core";
import type { FarmMaterials } from "../textures/generateTextures";

const tileY = 0.05;

export function createGrassGroundTile(materials: FarmMaterials): THREE.Mesh {
  return box("grass-ground-tile", [1, tileY, 1], [0, 0, 0], materials.grass);
}

export function createDirtPathTile(materials: FarmMaterials): THREE.Mesh {
  return box("dirt-path-tile", [1, tileY + 0.02, 1], [0, 0.01, 0], materials.dirtPath);
}

export function createStonePathTile(materials: FarmMaterials): THREE.Mesh {
  return box("stone-path-tile", [0.82, tileY + 0.04, 0.82], [0, 0.02, 0], materials.stoneWall);
}

export function createCropSoilTile(materials: FarmMaterials): THREE.Mesh {
  return box("crop-soil-tile", [1, tileY + 0.03, 1], [0, 0.015, 0], materials.cropSoil);
}

export function createDirtPathCorner(materials: FarmMaterials): THREE.Group {
  return group("dirt-path-corner", [
    box("corner-main", [1, tileY + 0.02, 1], [0, 0.01, 0], materials.dirtPath),
    box("corner-stone", [0.28, tileY + 0.05, 0.28], [0.32, 0.04, 0.32], materials.stoneWall),
  ]);
}

export function createDirtPathCrossing(materials: FarmMaterials): THREE.Group {
  return group("dirt-path-crossing", [
    box("crossing-dirt", [1, tileY + 0.02, 1], [0, 0.01, 0], materials.dirtPath),
    box("crossing-stone-a", [0.22, tileY + 0.05, 0.22], [-0.26, 0.04, 0.22], materials.stoneWall),
    box("crossing-stone-b", [0.18, tileY + 0.05, 0.18], [0.28, 0.04, -0.18], materials.stoneWall),
  ]);
}

export function createRaisedCropBedBase(
  materials: FarmMaterials,
  width: number,
  depth: number,
): THREE.Group {
  return group("raised-crop-bed-base", [
    box("crop-bed-soil", [width, 0.16, depth], [0, 0.08, 0], materials.cropSoil),
    box("crop-bed-front-border", [width + 0.28, 0.22, 0.18], [0, 0.16, depth / 2 + 0.08], materials.woodenFence),
    box("crop-bed-back-border", [width + 0.28, 0.22, 0.18], [0, 0.16, -depth / 2 - 0.08], materials.woodenFence),
    box("crop-bed-left-border", [0.18, 0.22, depth + 0.28], [-width / 2 - 0.08, 0.16, 0], materials.woodenFence),
    box("crop-bed-right-border", [0.18, 0.22, depth + 0.28], [width / 2 + 0.08, 0.16, 0], materials.woodenFence),
  ]);
}
