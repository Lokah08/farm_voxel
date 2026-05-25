import * as THREE from "three";
import { generateFarmMaterials } from "../textures/generateTextures";
import { createFarmLayout } from "../layout/farmLayout";

export function createScene(): THREE.Scene {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#244917");

  const materials = generateFarmMaterials();
  const farm = createFarmLayout(materials);
  scene.add(farm);

  return scene;
}
