import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xFFFFFF)
pointLight.position.set(25,25,25);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color:0xffffff});
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}
Array(200).fill().forEach(addStar);
//Space
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;
//Cube
const cloudTexture = new THREE.TextureLoader().load('cloud Intelligence.png')
const cloudIntel = new THREE.Mesh(
    new THREE.BoxGeometry(15,15,15),
    new THREE.MeshBasicMaterial({map: cloudTexture})
);

scene.add(cloudIntel);

const moonTexture = new THREE.TextureLoader().load('moonSurface.jpg')
const normalTexture = new THREE.TextureLoader().load('normalMoon.jpeg')

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({map: moonTexture,
    normalMap: normalTexture})
);

scene.add(moon);

cloudIntel.position.z = 30;
cloudIntel.position.x = -10;
moon.position.z = -20;
moon.position.y = 1;
moon.position.x = -10;

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    cloudIntel.rotation.x += 0.05;
    cloudIntel.rotation.y += 0.075;
    cloudIntel.rotation.z += 0.05;

    moon.rotation.y += 0.01;
    moon.rotation.z += 0.01;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.035;
    camera.position.y = t * -0.025;
}

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.x += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();