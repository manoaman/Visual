import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// ===== Canvas & Renderer =====
const canvas = document.querySelector('#app');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ===== Scene & Camera =====
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1020);

const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
camera.position.set(4, 3, 6);
scene.add(camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// ===== Lights =====
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(3, 5, 2);
scene.add(dirLight);

// ===== Ground =====
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: 0x111827 })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// ===== Cube (interactive) =====
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x4dabf7 })
);
cube.position.set(0, 0.5, 0);
scene.add(cube);

// ===== Shader Sphere =====
const shaderMat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 } },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    precision mediump float;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      float r = 0.5 + 0.5 * sin(uTime + vUv.x * 6.2831);
      float g = 0.5 + 0.5 * sin(uTime * 1.2 + vUv.y * 6.2831);
      float b = 0.5 + 0.5 * sin(uTime * 0.8 + (vUv.x + vUv.y) * 6.2831);
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `
});
const glowSphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.75, 64, 64),
  shaderMat
);
glowSphere.position.set(-3, 0.75, 0);
scene.add(glowSphere);

// ===== Extra Objects =====
const geo = new THREE.TorusKnotGeometry(0.5, 0.18, 128, 16);
for (let i = 0; i < 6; i++) {
  const m = new THREE.MeshStandardMaterial({
    color: new THREE.Color().setHSL(i / 6, 0.6, 0.5)
  });
  const mesh = new THREE.Mesh(geo, m);
  mesh.position.set(Math.cos(i) * 4, 0.5, Math.sin(i) * 4);
  scene.add(mesh);
}

// ===== Interactivity =====
window.addEventListener('pointermove', (e) => {
  const nx = (e.clientX / window.innerWidth) * 2 - 1;
  const ny = (e.clientY / window.innerHeight) * 2 - 1;
  cube.rotation.x += (ny * 0.5 - cube.rotation.x) * 0.05;
  cube.rotation.y += (nx * 0.5 - cube.rotation.y) * 0.05;
});

window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'l') dirLight.visible = !dirLight.visible;
  if (e.key.toLowerCase() === 'c') cube.material.color.set(Math.random() * 0xffffff);
});

// ===== Resize Handler =====
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}
window.addEventListener('resize', resize);
resize();

// ===== Animation Loop =====
const clock = new THREE.Clock();
function tick() {
  const t = clock.getElapsedTime();
  shaderMat.uniforms.uTime.value = t;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();
