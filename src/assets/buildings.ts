import * as THREE from "three";
import { box, group, setPosition } from "./core";
import type { FarmMaterials } from "../textures/generateTextures";

export function createRedBarnBody(materials: FarmMaterials): THREE.Group {
  return group("red-barn-body", [
    box("barn-red-block", [3.8, 3.1, 3.1], [0, 1.55, 0], materials.redBarnWood),
    box("barn-white-left-trim", [0.16, 2.7, 0.12], [-1.35, 1.45, 1.58], materials.white),
    box("barn-white-right-trim", [0.16, 2.7, 0.12], [1.35, 1.45, 1.58], materials.white),
    box("barn-white-lintel", [2.86, 0.18, 0.12], [0, 2.75, 1.58], materials.white),
  ]);
}

export function createGreenBarnRoof(materials: FarmMaterials): THREE.Group {
  return group("green-barn-roof", [
    box("roof-ridge", [4.4, 0.45, 0.7], [0, 3.72, 0], materials.greenRoofTiles),
    box("roof-left-step-1", [4.25, 0.5, 1.0], [0, 3.36, -0.52], materials.greenRoofTiles),
    box("roof-left-step-2", [4.15, 0.48, 1.0], [0, 3.0, -1.05], materials.greenRoofTiles),
    box("roof-right-step-1", [4.25, 0.5, 1.0], [0, 3.36, 0.52], materials.greenRoofTiles),
    box("roof-right-step-2", [4.15, 0.48, 1.0], [0, 3.0, 1.05], materials.greenRoofTiles),
    box("roof-white-front-trim", [4.6, 0.2, 0.18], [0, 2.9, 1.68], materials.white),
  ]);
}

export function createBarnFrontDoor(materials: FarmMaterials): THREE.Group {
  return group("barn-front-door", [
    box("door-red-left", [0.78, 1.45, 0.14], [-0.42, 0.82, 1.66], materials.redBarnWood),
    box("door-red-right", [0.78, 1.45, 0.14], [0.42, 0.82, 1.66], materials.redBarnWood),
    box("door-white-x-a", [1.45, 0.15, 0.16], [0, 0.85, 1.76], materials.white),
    box("door-white-x-b", [1.45, 0.15, 0.16], [0, 0.85, 1.78], materials.white),
    box("door-top", [1.65, 0.16, 0.16], [0, 1.5, 1.76], materials.white),
  ]);
}

export function createBarnWindow(materials: FarmMaterials): THREE.Group {
  return group("barn-window", [
    box("window-frame", [0.72, 0.55, 0.12], [0, 2.22, 1.66], materials.white),
    box("window-dark", [0.5, 0.34, 0.14], [0, 2.22, 1.73], materials.dark),
    box("window-cross-v", [0.08, 0.48, 0.16], [0, 2.22, 1.82], materials.white),
    box("window-cross-h", [0.56, 0.08, 0.16], [0, 2.22, 1.83], materials.white),
  ]);
}

export function createBarnSideLeanTo(materials: FarmMaterials): THREE.Group {
  return group("barn-side-lean-to", [
    box("lean-to-roof", [2.1, 0.36, 2.1], [2.8, 1.95, -0.1], materials.greenRoofTiles),
    box("lean-to-post-a", [0.18, 1.2, 0.18], [1.95, 0.6, 0.8], materials.woodenFence),
    box("lean-to-post-b", [0.18, 1.2, 0.18], [3.55, 0.6, 0.8], materials.woodenFence),
    box("lean-to-shadow", [1.7, 0.18, 1.2], [2.75, 0.85, 0.12], materials.hay),
  ]);
}

export function createBarn(materials: FarmMaterials): THREE.Group {
  return group("barn", [
    createRedBarnBody(materials),
    createGreenBarnRoof(materials),
    createBarnFrontDoor(materials),
    createBarnWindow(materials),
    createBarnSideLeanTo(materials),
  ]);
}

export function createGreenhouseFrame(materials: FarmMaterials): THREE.Group {
  return group("greenhouse-frame", [
    box("greenhouse-base", [3.5, 0.22, 3.0], [0, 0.12, 0], materials.white),
    box("front-left-frame", [0.16, 2.45, 0.16], [-1.65, 1.32, 1.5], materials.white),
    box("front-right-frame", [0.16, 2.45, 0.16], [1.65, 1.32, 1.5], materials.white),
    box("rear-left-frame", [0.16, 2.2, 0.16], [-1.65, 1.2, -1.5], materials.white),
    box("rear-right-frame", [0.16, 2.2, 0.16], [1.65, 1.2, -1.5], materials.white),
    box("roof-ridge-frame", [0.18, 0.18, 3.2], [0, 3.15, 0], materials.white),
    box("roof-front-frame", [3.6, 0.18, 0.18], [0, 2.35, 1.58], materials.white),
  ]);
}

export function createGreenhouseGlassPanels(materials: FarmMaterials): THREE.Group {
  return group("greenhouse-glass-panels", [
    box("greenhouse-front-glass", [2.95, 1.52, 0.1], [0, 1.35, 1.56], materials.glass),
    box("greenhouse-left-glass", [0.1, 1.6, 2.64], [-1.7, 1.45, 0], materials.glass),
    box("greenhouse-right-glass", [0.1, 1.6, 2.64], [1.7, 1.45, 0], materials.glass),
    box("greenhouse-roof-left", [1.68, 0.16, 3.05], [-0.72, 2.72, 0], materials.glass),
    box("greenhouse-roof-right", [1.68, 0.16, 3.05], [0.72, 2.72, 0], materials.glass),
  ]);
}

export function createGreenhouseDoor(materials: FarmMaterials): THREE.Group {
  return group("greenhouse-door", [
    box("greenhouse-door-panel", [0.76, 1.35, 0.16], [0, 0.8, 1.68], materials.greenRoofTiles),
    box("greenhouse-door-window", [0.42, 0.48, 0.18], [0, 1.03, 1.78], materials.dark),
    box("greenhouse-door-knob", [0.08, 0.08, 0.08], [0.32, 0.72, 1.82], materials.hay),
  ]);
}

export function createGreenhouse(materials: FarmMaterials): THREE.Group {
  return group("greenhouse", [
    createGreenhouseFrame(materials),
    createGreenhouseGlassPanels(materials),
    createGreenhouseDoor(materials),
  ]);
}

export function createSmallGreenShed(materials: FarmMaterials): THREE.Group {
  return group("small-green-shed", [
    box("shed-green-body", [1.75, 2.0, 1.65], [0, 1, 0], materials.cropLeaves),
    box("shed-door", [0.68, 1.2, 0.12], [0, 0.72, 0.88], materials.woodenFence),
  ]);
}

export function createShedBrownRoof(materials: FarmMaterials): THREE.Group {
  return group("shed-brown-roof", [
    box("shed-roof-left", [1.95, 0.32, 1.1], [0, 2.08, -0.35], materials.woodenFence),
    box("shed-roof-right", [1.95, 0.32, 1.1], [0, 2.08, 0.35], materials.woodenFence),
  ]);
}

export function createShed(materials: FarmMaterials): THREE.Group {
  return group("shed", [createSmallGreenShed(materials), createShedBrownRoof(materials)]);
}

export function createFarmNoticeBoard(materials: FarmMaterials): THREE.Group {
  return group("farm-notice-board", [
    box("notice-left-post", [0.12, 0.95, 0.12], [-0.48, 0.48, 0], materials.woodenFence),
    box("notice-right-post", [0.12, 0.95, 0.12], [0.48, 0.48, 0], materials.woodenFence),
    box("notice-board-face", [1.16, 0.72, 0.1], [0, 0.88, 0], materials.hay),
    box("notice-green-paper", [0.38, 0.42, 0.12], [-0.22, 0.9, 0.06], materials.cropLeaves),
    box("notice-white-paper", [0.34, 0.38, 0.12], [0.25, 0.88, 0.06], materials.white),
  ]);
}

export function createBuildingCluster(materials: FarmMaterials): THREE.Group {
  return group("building-cluster", [
    setPosition(createBarn(materials), -8.8, 0, -6.8),
    setPosition(createGreenhouse(materials), 7.0, 0, -7.0),
    setPosition(createShed(materials), 12.1, 0, -6.6),
    setPosition(createFarmNoticeBoard(materials), 3.2, 0, -4.4),
  ]);
}
