import * as THREE from "three";

export function addLights(scene: THREE.Scene): void {
  const ambient = new THREE.AmbientLight("#fff3d0", 1.35);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight("#fff7da", 3.1);
  sun.position.set(9, 16, 8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -20;
  sun.shadow.camera.right = 20;
  sun.shadow.camera.top = 18;
  sun.shadow.camera.bottom = -18;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 50;
  sun.shadow.bias = -0.0007;
  scene.add(sun);
}
