import * as THREE from "three";

export type FarmTextureName =
  | "grass"
  | "dirtPath"
  | "cropSoil"
  | "redBarnWood"
  | "greenRoofTiles"
  | "greenhouseGlass"
  | "woodenFence"
  | "stoneWall"
  | "hay"
  | "wheat"
  | "cropLeaves"
  | "pumpkin"
  | "tractorRedMetal"
  | "blackRubberWheels"
  | "cowPattern"
  | "flowers";

export type FarmMaterials = Record<
  FarmTextureName,
  THREE.MeshStandardMaterial
> & {
  white: THREE.MeshStandardMaterial;
  dark: THREE.MeshStandardMaterial;
  soilDark: THREE.MeshStandardMaterial;
  waterBlue: THREE.MeshStandardMaterial;
  glass: THREE.MeshStandardMaterial;
  metal: THREE.MeshStandardMaterial;
};

const atlasCells: Record<FarmTextureName, [number, number]> = {
  grass: [0, 0],
  dirtPath: [1, 0],
  cropSoil: [2, 0],
  redBarnWood: [3, 0],
  greenRoofTiles: [0, 1],
  greenhouseGlass: [1, 1],
  woodenFence: [2, 1],
  stoneWall: [3, 1],
  hay: [0, 2],
  wheat: [1, 2],
  cropLeaves: [2, 2],
  pumpkin: [3, 2],
  tractorRedMetal: [0, 3],
  blackRubberWheels: [1, 3],
  cowPattern: [2, 3],
  flowers: [3, 3],
};

const atlasUrl = "/textures/voxel-farm-material-atlas.png";

function createAtlasTexture(
  atlas: THREE.Texture,
  cell: [number, number],
): THREE.Texture {
  const texture = atlas.clone();
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(0.25, 0.25);
  texture.offset.set(cell[0] * 0.25, 1 - (cell[1] + 1) * 0.25);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapNearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function texturedMaterial(
  atlas: THREE.Texture,
  cell: [number, number],
  roughness = 0.85,
): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    map: createAtlasTexture(atlas, cell),
    roughness,
  });
}

export function generateFarmMaterials(): FarmMaterials {
  const atlas = new THREE.TextureLoader().load(atlasUrl);
  atlas.colorSpace = THREE.SRGBColorSpace;
  atlas.magFilter = THREE.NearestFilter;
  atlas.minFilter = THREE.NearestMipmapNearestFilter;

  const materials = Object.fromEntries(
    Object.entries(atlasCells).map(([name, cell]) => [
      name,
      texturedMaterial(atlas, cell),
    ]),
  ) as Record<FarmTextureName, THREE.MeshStandardMaterial>;

  return {
    ...materials,
    white: new THREE.MeshStandardMaterial({ color: "#fff3d5", roughness: 0.8 }),
    dark: new THREE.MeshStandardMaterial({ color: "#24221e", roughness: 0.8 }),
    soilDark: new THREE.MeshStandardMaterial({ color: "#3e2615", roughness: 0.95 }),
    waterBlue: new THREE.MeshStandardMaterial({ color: "#51aeda", roughness: 0.45 }),
    glass: new THREE.MeshStandardMaterial({
      map: createAtlasTexture(atlas, atlasCells.greenhouseGlass),
      color: "#bdefff",
      transparent: true,
      opacity: 0.58,
      roughness: 0.18,
      metalness: 0,
    }),
    metal: new THREE.MeshStandardMaterial({ color: "#6f7a76", roughness: 0.58 }),
  };
}
