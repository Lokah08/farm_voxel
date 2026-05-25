import * as THREE from "three";

export type Size3 = [number, number, number];
export type Vec3 = [number, number, number];

export function box(
  name: string,
  size: Size3,
  position: Vec3,
  material: THREE.Material,
): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function group(name: string, children: THREE.Object3D[] = []): THREE.Group {
  const root = new THREE.Group();
  root.name = name;
  children.forEach((child) => root.add(child));
  return root;
}

export function setPosition<T extends THREE.Object3D>(object: T, x: number, y: number, z: number): T {
  object.position.set(x, y, z);
  return object;
}

export function setShadows(object: THREE.Object3D): void {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

export function makeColorMaterial(color: string): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.85 });
}
