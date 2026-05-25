import * as THREE from "three";
import {
  createDirtPathCorner,
  createDirtPathCrossing,
  createDirtPathTile,
  createGrassGroundTile,
  createRaisedCropBedBase,
  createStonePathTile,
} from "../assets/ground";
import {
  createFlowerHedgeBlock,
  createHedgeBlock,
  createLowStoneWallSegment,
  createWoodenFencePost,
  createWoodenFenceSegment,
  createWoodenGate,
} from "../assets/fences";
import { createBarn, createFarmNoticeBoard, createGreenhouse, createShed } from "../assets/buildings";
import {
  createCropBedBorder,
  createSmallFlowerCrop,
  createTrellisCropRow,
  createVoxelCabbageCrop,
  createVoxelCarrotRow,
  createVoxelCornStalkRow,
  createVoxelPumpkinCrop,
  createVoxelTomatoPlantRow,
  createVoxelWheatRow,
} from "../assets/crops";
import { createTractorWithTrailer } from "../assets/vehicles";
import { createBlackAndWhiteVoxelCow, createCowPenFence, createCowWaterTrough } from "../assets/animals";
import {
  createBarrel,
  createBlueWaterBarrel,
  createBucket,
  createFlowerPot,
  createHayBale,
  createHayBaleStack,
  createMailbox,
  createBirdhouse,
  createPitchfork,
  createRake,
  createShovel,
  createSack,
  createWheelbarrow,
  createWoodenCrate,
} from "../assets/props";
import {
  createBush,
  createDecorativeStoneCluster,
  createFloweringBush,
  createFruitTree,
  createGrassTuft,
  createLargeVoxelTree,
  createSmallRock,
  createSmallVoxelTree,
} from "../assets/vegetation";
import { group, setPosition } from "../assets/core";
import type { FarmMaterials } from "../textures/generateTextures";

function addAt(parent: THREE.Group, child: THREE.Object3D, x: number, z: number, rotation = 0): void {
  child.position.set(x, child.position.y, z);
  child.rotation.y = rotation;
  parent.add(child);
}

function addGround(parent: THREE.Group, materials: FarmMaterials): void {
  const paths = new Set<string>();
  for (let z = -9; z <= 11; z += 1) {
    for (let x = -1; x <= 1; x += 1) paths.add(`${x},${z}`);
  }
  for (let x = -12; x <= 12; x += 1) {
    for (let z = -2; z <= 0; z += 1) paths.add(`${x},${z}`);
  }
  for (let x = -9; x <= -1; x += 1) paths.add(`${x},${-4}`);
  for (let x = 3; x <= 9; x += 1) paths.add(`${x},${-4}`);
  for (let z = 8; z <= 13; z += 1) paths.add(`0,${z}`);

  for (let x = -15; x <= 15; x += 1) {
    for (let z = -11; z <= 11; z += 1) {
      addAt(parent, createGrassGroundTile(materials), x, z);
      if (paths.has(`${x},${z}`)) {
        const isCross = Math.abs(x) <= 1 && z >= -2 && z <= 0;
        const isCorner = (x === -1 || x === 1) && (z === -4 || z === 8);
        const tile = isCross
          ? createDirtPathCrossing(materials)
          : isCorner
            ? createDirtPathCorner(materials)
            : createDirtPathTile(materials);
        addAt(parent, tile, x, z);
      }
    }
  }

  for (const z of [9, 10, 12, 13]) {
    addAt(parent, createStonePathTile(materials), 0, z);
  }
}

function addPerimeter(parent: THREE.Group, materials: FarmMaterials): void {
  for (let x = -14; x <= 14; x += 2) {
    if (Math.abs(x) > 1) {
      addAt(parent, createWoodenFenceSegment(materials, 1.8), x, 10.6);
    }
    addAt(parent, createWoodenFenceSegment(materials, 1.8), x, -10.6);
    addAt(parent, createWoodenFencePost(materials), x - 0.9, 10.6);
    addAt(parent, createWoodenFencePost(materials), x - 0.9, -10.6);
  }
  for (let z = -9; z <= 9; z += 2) {
    const left = createWoodenFenceSegment(materials, 1.8);
    const right = createWoodenFenceSegment(materials, 1.8);
    addAt(parent, left, -14.6, z, Math.PI / 2);
    addAt(parent, right, 14.6, z, Math.PI / 2);
    addAt(parent, createWoodenFencePost(materials), -14.6, z - 0.9);
    addAt(parent, createWoodenFencePost(materials), 14.6, z - 0.9);
  }

  const gate = createWoodenGate(materials);
  addAt(parent, gate, 0, 10.72);

  for (let x = -14; x <= 14; x += 2) {
    const block = x % 4 === 0 ? createFlowerHedgeBlock(materials) : createHedgeBlock(materials);
    addAt(parent, block, x, 11.25);
    addAt(parent, createLowStoneWallSegment(materials), x, -11.15);
  }
  for (let z = -10; z <= 10; z += 2) {
    addAt(parent, z % 4 === 0 ? createFlowerHedgeBlock(materials) : createHedgeBlock(materials), -15.25, z);
    addAt(parent, createLowStoneWallSegment(materials), 15.25, z, Math.PI / 2);
  }
}

function addCropGrid(
  parent: THREE.Group,
  materials: FarmMaterials,
  originX: number,
  originZ: number,
  cols: number,
  rows: number,
  createCrop: () => THREE.Group,
  spacing = 0.72,
): void {
  const bed = createRaisedCropBedBase(materials, cols * spacing + 0.6, rows * spacing + 0.55);
  addAt(parent, bed, originX, originZ);
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const crop = createCrop();
      addAt(
        parent,
        crop,
        originX + (col - (cols - 1) / 2) * spacing,
        originZ + (row - (rows - 1) / 2) * spacing,
      );
    }
  }
}

function addCropFields(parent: THREE.Group, materials: FarmMaterials): void {
  addCropGrid(parent, materials, -10.8, 1.5, 4, 3, () => createVoxelCabbageCrop(materials));
  addCropGrid(parent, materials, 2.9, 6.1, 3, 4, () => createVoxelCabbageCrop(materials));
  addCropGrid(parent, materials, 8.5, 2.2, 4, 3, () => createVoxelCornStalkRow(materials), 1.0);
  addCropGrid(parent, materials, 8.8, 7.1, 3, 3, () => createVoxelPumpkinCrop(materials), 1.08);

  const wheatBed = createRaisedCropBedBase(materials, 5.4, 3.4);
  addAt(parent, wheatBed, -10.3, 6.7);
  for (let z = -1.1; z <= 1.1; z += 0.55) addAt(parent, createVoxelWheatRow(materials), -10.3, 6.7 + z);

  const carrotBed = createRaisedCropBedBase(materials, 4.0, 3.4);
  addAt(parent, carrotBed, -3.8, 6.8);
  for (let z = -1.1; z <= 1.1; z += 0.8) addAt(parent, createVoxelCarrotRow(materials), -3.8, 6.8 + z);

  const tomatoBed = createRaisedCropBedBase(materials, 4.0, 3.2);
  addAt(parent, tomatoBed, -4.1, 1.5);
  for (let z = -1; z <= 1; z += 0.78) addAt(parent, createVoxelTomatoPlantRow(materials), -4.1, 1.5 + z);

  const trellisBed = createCropBedBorder(materials, 2.4, 3.2);
  addAt(parent, trellisBed, 5.0, -3.9);
  for (let z = -0.9; z <= 0.9; z += 0.9) addAt(parent, createTrellisCropRow(materials), 5.0, -3.9 + z);

  for (const [x, z] of [
    [11.6, -9.2],
    [12.9, -9.2],
    [-13.2, 9.4],
    [-12.5, -8.6],
    [1.9, -6.6],
  ]) {
    addAt(parent, createSmallFlowerCrop(materials), x, z);
  }
}

function addBuildings(parent: THREE.Group, materials: FarmMaterials): void {
  addAt(parent, createBarn(materials), -8.6, -6.5);
  addAt(parent, createGreenhouse(materials), 6.9, -6.8);
  addAt(parent, createShed(materials), 12.0, -6.3);
  addAt(parent, createFarmNoticeBoard(materials), 2.7, -4.2, -0.15);
}

function addAnimalsAndVehicles(parent: THREE.Group, materials: FarmMaterials): void {
  addAt(parent, createCowPenFence(materials), -11.4, -4.0);
  addAt(parent, createBlackAndWhiteVoxelCow(materials), -12.0, -3.2, -0.16);
  addAt(parent, createCowWaterTrough(materials), -9.6, -2.8);

  const tractor = createTractorWithTrailer(materials);
  tractor.rotation.y = -0.28;
  addAt(parent, tractor, 0.6, 1.1, -0.28);
}

function addProps(parent: THREE.Group, materials: FarmMaterials): void {
  addAt(parent, createHayBaleStack(materials), -5.3, -3.5);
  addAt(parent, createHayBale(materials), 12.8, -1.0);
  addAt(parent, createHayBaleStack(materials), 13.1, -0.1);
  addAt(parent, createWoodenCrate(materials), 12.1, 0.2);
  addAt(parent, createBarrel(materials), -4.2, -3.8);
  addAt(parent, createBlueWaterBarrel(materials), 9.7, -4.7);
  addAt(parent, createWheelbarrow(materials), 11.4, -2.3, -0.45);
  addAt(parent, createShovel(materials), -6.5, -4.6, 0.3);
  addAt(parent, createRake(materials), -6.1, -4.5, -0.25);
  addAt(parent, createPitchfork(materials), -5.8, -4.6, 0.1);
  addAt(parent, createBucket(materials), -3.1, -3.8);
  addAt(parent, createSack(materials), -6.4, -3.7);
  addAt(parent, createMailbox(materials), -4.8, 11.9);
  addAt(parent, createBirdhouse(materials), 5.7, 11.3);
  addAt(parent, createFlowerPot(materials), 8.0, -4.2);
  addAt(parent, createFlowerPot(materials), 8.7, -4.2);
  addAt(parent, createFlowerPot(materials), 7.3, -4.2);
}

function addVegetation(parent: THREE.Group, materials: FarmMaterials): void {
  addAt(parent, createLargeVoxelTree(materials), -2.6, -8.9);
  addAt(parent, createSmallVoxelTree(materials), -11.7, -9.2);
  addAt(parent, createSmallVoxelTree(materials), 12.4, -9.0);
  addAt(parent, createFruitTree(materials), 12.0, -8.5);
  addAt(parent, createFruitTree(materials), 13.4, -8.7);

  for (const [x, z] of [
    [-14.2, 8.2],
    [-13.5, -7.7],
    [-1.5, 9.8],
    [3.8, -8.7],
    [13.8, 5.8],
    [14.0, 8.9],
  ]) {
    addAt(parent, createFloweringBush(materials), x, z);
  }

  for (const [x, z] of [
    [-7.2, -1.2],
    [-2.1, -5.0],
    [3.3, 0.8],
    [5.1, 1.7],
    [1.8, 4.2],
    [-1.8, 8.5],
    [6.6, 9.2],
  ]) {
    addAt(parent, createSmallRock(materials), x, z);
  }

  for (const [x, z] of [
    [-15.1, -10.6],
    [15.0, 10.6],
    [-14.4, 10.7],
    [14.3, -10.7],
  ]) {
    addAt(parent, createDecorativeStoneCluster(materials), x, z);
  }

  for (let i = 0; i < 42; i += 1) {
    const x = -13 + ((i * 7) % 27);
    const z = -9 + ((i * 11) % 19);
    if (Math.abs(x) < 2 || Math.abs(z) < 1.5) continue;
    addAt(parent, i % 3 === 0 ? createBush(materials) : createGrassTuft(materials), x + 0.22, z - 0.18);
  }
}

export function createFarmLayout(materials: FarmMaterials): THREE.Group {
  const farm = group("modular-voxel-farm-diorama");
  addGround(farm, materials);
  addPerimeter(farm, materials);
  addBuildings(farm, materials);
  addCropFields(farm, materials);
  addAnimalsAndVehicles(farm, materials);
  addProps(farm, materials);
  addVegetation(farm, materials);
  return farm;
}
