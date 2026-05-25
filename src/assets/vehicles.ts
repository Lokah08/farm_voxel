import * as THREE from "three";
import { box, group } from "./core";
import type { FarmMaterials } from "../textures/generateTextures";

export function createRedTractorBody(materials: FarmMaterials): THREE.Group {
  return group("red-tractor-body", [
    box("tractor-hood", [1.18, 0.55, 0.78], [-0.45, 0.62, 0], materials.tractorRedMetal),
    box("tractor-engine-front", [0.22, 0.44, 0.7], [-1.14, 0.56, 0], materials.dark),
    box("tractor-rear-block", [0.82, 0.82, 0.86], [0.42, 0.76, 0], materials.tractorRedMetal),
  ]);
}

export function createTractorCabin(materials: FarmMaterials): THREE.Group {
  return group("tractor-cabin", [
    box("cabin-post-left", [0.08, 0.9, 0.08], [0.18, 1.25, -0.38], materials.dark),
    box("cabin-post-right", [0.08, 0.9, 0.08], [0.62, 1.25, -0.38], materials.dark),
    box("cabin-glass", [0.55, 0.5, 0.08], [0.4, 1.38, -0.42], materials.glass),
    box("cabin-roof", [0.92, 0.18, 0.82], [0.4, 1.82, 0], materials.tractorRedMetal),
  ]);
}

export function createTractorWheels(materials: FarmMaterials): THREE.Group {
  return group("tractor-wheels", [
    box("rear-wheel-left", [0.52, 0.82, 0.22], [0.46, 0.45, 0.52], materials.blackRubberWheels),
    box("rear-wheel-right", [0.52, 0.82, 0.22], [0.46, 0.45, -0.52], materials.blackRubberWheels),
    box("front-wheel-left", [0.4, 0.56, 0.2], [-0.88, 0.34, 0.5], materials.blackRubberWheels),
    box("front-wheel-right", [0.4, 0.56, 0.2], [-0.88, 0.34, -0.5], materials.blackRubberWheels),
    box("wheel-hub-a", [0.24, 0.24, 0.24], [0.46, 0.45, 0.66], materials.metal),
    box("wheel-hub-b", [0.18, 0.18, 0.18], [-0.88, 0.34, 0.62], materials.metal),
  ]);
}

export function createTractorExhaust(materials: FarmMaterials): THREE.Group {
  return group("tractor-exhaust", [
    box("exhaust-pipe", [0.12, 0.9, 0.12], [-0.65, 1.08, -0.32], materials.dark),
    box("exhaust-cap", [0.22, 0.08, 0.22], [-0.65, 1.55, -0.32], materials.dark),
  ]);
}

export function createWoodenTrailer(materials: FarmMaterials): THREE.Group {
  return group("wooden-trailer", [
    box("trailer-bed", [1.65, 0.28, 1.2], [1.72, 0.5, 0], materials.woodenFence),
    box("trailer-left-side", [1.65, 0.65, 0.16], [1.72, 0.86, -0.6], materials.woodenFence),
    box("trailer-right-side", [1.65, 0.65, 0.16], [1.72, 0.86, 0.6], materials.woodenFence),
    box("trailer-front-side", [0.16, 0.65, 1.2], [0.9, 0.86, 0], materials.woodenFence),
    box("trailer-hitch", [0.7, 0.12, 0.12], [0.35, 0.45, 0], materials.metal),
  ]);
}

export function createTrailerWheels(materials: FarmMaterials): THREE.Group {
  return group("trailer-wheels", [
    box("trailer-wheel-left", [0.38, 0.5, 0.2], [1.72, 0.32, 0.72], materials.blackRubberWheels),
    box("trailer-wheel-right", [0.38, 0.5, 0.2], [1.72, 0.32, -0.72], materials.blackRubberWheels),
  ]);
}

export function createTractorWithTrailer(materials: FarmMaterials): THREE.Group {
  return group("tractor-with-trailer", [
    createRedTractorBody(materials),
    createTractorCabin(materials),
    createTractorWheels(materials),
    createTractorExhaust(materials),
    createWoodenTrailer(materials),
    createTrailerWheels(materials),
  ]);
}
