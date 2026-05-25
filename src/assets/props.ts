import * as THREE from "three";
import { box, group } from "./core";
import type { FarmMaterials } from "../textures/generateTextures";

export function createHayBale(materials: FarmMaterials): THREE.Group {
  return group("hay-bale", [
    box("hay-main", [0.72, 0.5, 0.5], [0, 0.26, 0], materials.hay),
    box("hay-band-a", [0.08, 0.54, 0.54], [-0.22, 0.28, 0], materials.wheat),
    box("hay-band-b", [0.08, 0.54, 0.54], [0.22, 0.28, 0], materials.wheat),
  ]);
}

export function createHayBaleStack(materials: FarmMaterials): THREE.Group {
  const stack = group("hay-bale-stack");
  stack.add(createHayBale(materials));
  const top = createHayBale(materials);
  top.position.set(0.34, 0.52, 0);
  stack.add(top);
  const side = createHayBale(materials);
  side.position.set(-0.42, 0, 0.1);
  stack.add(side);
  return stack;
}

export function createWoodenCrate(materials: FarmMaterials): THREE.Group {
  return group("wooden-crate", [
    box("crate-body", [0.58, 0.46, 0.58], [0, 0.24, 0], materials.woodenFence),
    box("crate-top-gap", [0.46, 0.05, 0.46], [0, 0.49, 0], materials.dark),
  ]);
}

export function createBarrel(materials: FarmMaterials): THREE.Group {
  return group("barrel", [
    box("barrel-body", [0.42, 0.72, 0.42], [0, 0.36, 0], materials.woodenFence),
    box("barrel-band-top", [0.48, 0.08, 0.48], [0, 0.56, 0], materials.metal),
    box("barrel-band-bottom", [0.48, 0.08, 0.48], [0, 0.18, 0], materials.metal),
  ]);
}

export function createBlueWaterBarrel(materials: FarmMaterials): THREE.Group {
  return group("blue-water-barrel", [
    box("blue-barrel-body", [0.42, 0.72, 0.42], [0, 0.36, 0], materials.waterBlue),
    box("blue-barrel-band-top", [0.48, 0.08, 0.48], [0, 0.56, 0], materials.metal),
    box("blue-barrel-band-bottom", [0.48, 0.08, 0.48], [0, 0.18, 0], materials.metal),
  ]);
}

export function createWheelbarrow(materials: FarmMaterials): THREE.Group {
  return group("wheelbarrow", [
    box("wheelbarrow-bin", [0.82, 0.34, 0.52], [0, 0.5, 0], materials.metal),
    box("wheelbarrow-wheel", [0.22, 0.32, 0.14], [-0.5, 0.27, 0], materials.blackRubberWheels),
    box("wheelbarrow-handle-a", [0.58, 0.08, 0.08], [0.58, 0.54, 0.24], materials.woodenFence),
    box("wheelbarrow-handle-b", [0.58, 0.08, 0.08], [0.58, 0.54, -0.24], materials.woodenFence),
  ]);
}

export function createShovel(materials: FarmMaterials): THREE.Group {
  return group("shovel", [
    box("shovel-handle", [0.08, 0.92, 0.08], [0, 0.46, 0], materials.woodenFence),
    box("shovel-head", [0.24, 0.22, 0.1], [0, 0.04, 0], materials.metal),
  ]);
}

export function createRake(materials: FarmMaterials): THREE.Group {
  return group("rake", [
    box("rake-handle", [0.07, 0.95, 0.07], [0, 0.48, 0], materials.woodenFence),
    box("rake-head", [0.42, 0.08, 0.08], [0, 0.03, 0], materials.metal),
    box("rake-tooth-a", [0.05, 0.16, 0.05], [-0.14, -0.04, 0], materials.metal),
    box("rake-tooth-b", [0.05, 0.16, 0.05], [0, -0.04, 0], materials.metal),
    box("rake-tooth-c", [0.05, 0.16, 0.05], [0.14, -0.04, 0], materials.metal),
  ]);
}

export function createPitchfork(materials: FarmMaterials): THREE.Group {
  const fork = createRake(materials);
  fork.name = "pitchfork";
  fork.scale.set(0.72, 1.1, 0.72);
  return fork;
}

export function createBucket(materials: FarmMaterials): THREE.Group {
  return group("bucket", [
    box("bucket-body", [0.36, 0.32, 0.36], [0, 0.18, 0], materials.metal),
    box("bucket-water", [0.26, 0.04, 0.26], [0, 0.36, 0], materials.waterBlue),
  ]);
}

export function createSack(materials: FarmMaterials): THREE.Group {
  return group("sack", [
    box("sack-main", [0.46, 0.6, 0.36], [0, 0.32, 0], materials.hay),
    box("sack-neck", [0.26, 0.18, 0.24], [0, 0.68, 0], materials.wheat),
  ]);
}

export function createMailbox(materials: FarmMaterials): THREE.Group {
  return group("mailbox", [
    box("mailbox-post", [0.14, 0.88, 0.14], [0, 0.44, 0], materials.woodenFence),
    box("mailbox-red", [0.52, 0.36, 0.34], [0, 0.96, 0], materials.tractorRedMetal),
    box("mailbox-flag", [0.08, 0.24, 0.28], [0.32, 1.04, 0], materials.white),
  ]);
}

export function createBirdhouse(materials: FarmMaterials): THREE.Group {
  return group("birdhouse", [
    box("birdhouse-post", [0.12, 0.84, 0.12], [0, 0.42, 0], materials.woodenFence),
    box("birdhouse-body", [0.48, 0.42, 0.36], [0, 0.92, 0], materials.hay),
    box("birdhouse-roof", [0.58, 0.16, 0.44], [0, 1.2, 0], materials.greenRoofTiles),
    box("birdhouse-hole", [0.12, 0.12, 0.08], [0, 0.92, 0.2], materials.dark),
  ]);
}

export function createFlowerPot(materials: FarmMaterials): THREE.Group {
  return group("flower-pot", [
    box("pot", [0.38, 0.32, 0.38], [0, 0.18, 0], materials.pumpkin),
    box("pot-leaves", [0.36, 0.28, 0.36], [0, 0.48, 0], materials.cropLeaves),
    box("pot-flowers", [0.24, 0.16, 0.24], [0, 0.66, 0], materials.flowers),
  ]);
}
