import * as THREE from "three";
import "./style.css";
import { createCamera, updateCamera } from "./scene/camera";
import { createControls, createKeyboardPanner } from "./scene/controls";
import { createScene } from "./scene/createScene";
import { addLights } from "./scene/lights";

const canvas = document.querySelector<HTMLCanvasElement>("#farm-canvas");

if (!canvas) {
  throw new Error("Missing #farm-canvas element");
}

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  alpha: false,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = createScene();
addLights(scene);

const camera = createCamera(window.innerWidth / window.innerHeight);
const controls = createControls(camera, canvas);
const panWithKeyboard = createKeyboardPanner(camera, controls);
const clock = new THREE.Clock();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  updateCamera(camera, window.innerWidth / window.innerHeight);
});

function animate(): void {
  const delta = clock.getDelta();
  panWithKeyboard(delta);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
