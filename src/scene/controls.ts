import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function createControls(
  camera: THREE.OrthographicCamera,
  canvas: HTMLCanvasElement,
): OrbitControls {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minZoom = 0.48;
  controls.maxZoom = 2.4;
  controls.target.set(0, 0.6, 0);
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.minPolarAngle = Math.PI * 0.18;
  controls.update();
  return controls;
}

export function createKeyboardPanner(
  camera: THREE.OrthographicCamera,
  controls: OrbitControls,
): (delta: number) => void {
  const keys = new Set<string>();
  window.addEventListener("keydown", (event) => keys.add(event.key.toLowerCase()));
  window.addEventListener("keyup", (event) => keys.delete(event.key.toLowerCase()));

  return (delta: number) => {
    const speed = 6 * delta;
    const move = new THREE.Vector3();

    if (keys.has("w") || keys.has("arrowup")) move.z -= speed;
    if (keys.has("s") || keys.has("arrowdown")) move.z += speed;
    if (keys.has("a") || keys.has("arrowleft")) move.x -= speed;
    if (keys.has("d") || keys.has("arrowright")) move.x += speed;

    if (move.lengthSq() === 0) return;
    camera.position.add(move);
    controls.target.add(move);
  };
}
