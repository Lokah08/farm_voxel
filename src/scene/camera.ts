import * as THREE from "three";

const frustumSize = 21;

export function createCamera(aspect: number): THREE.OrthographicCamera {
  const camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    0.1,
    200,
  );
  camera.position.set(18, 18, 18);
  camera.lookAt(0, 0, 0);
  camera.zoom = 0.82;
  camera.updateProjectionMatrix();
  return camera;
}

export function updateCamera(camera: THREE.OrthographicCamera, aspect: number): void {
  camera.left = (frustumSize * aspect) / -2;
  camera.right = (frustumSize * aspect) / 2;
  camera.top = frustumSize / 2;
  camera.bottom = frustumSize / -2;
  camera.updateProjectionMatrix();
}
