import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import CILogo from './assets/cloudIntelligence.png';
import highResSpace from './assets/highresSpace.jpg';
import moon from './assets/moonSurface.jpg';
import normal from './assets/normalMoon.jpeg';
import fire from './assets/wideFire.jpeg';

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
pointLight.position.set(-355,355,-355);

const ambientLight = new THREE.AmbientLight(0xe1e6ed);
scene.add(ambientLight, pointLight);

/*const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);*/

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color:0xffffff});
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(500));

    star.position.set(x, y, z);
    scene.add(star);
}
Array(5000).fill().forEach(addStar);
//Space
const spaceTexture = new THREE.TextureLoader().load(highResSpace);
scene.background = spaceTexture;
//Cube
const cloudTexture = new THREE.TextureLoader().load(CILogo)
const cloudIntel = new THREE.Mesh(
    new THREE.BoxGeometry(65,20,65),
    new THREE.MeshBasicMaterial({map: cloudTexture})
);

scene.add(cloudIntel);

const moonTexture = new THREE.TextureLoader().load(moon)
const normalTexture = new THREE.TextureLoader().load(normal)

const jupiterObj = new THREE.Mesh(
    new THREE.SphereGeometry(24, 32, 32),
    new THREE.MeshStandardMaterial({map: moonTexture,
    normalMap: normalTexture})
);

scene.add(jupiterObj);

const fireTexture = new THREE.TextureLoader().load(fire)
const fireObj = new THREE.Mesh(
    new THREE.BoxGeometry(25,25,25),
    new THREE.MeshBasicMaterial({map: fireTexture})
);

scene.add(fireObj);

cloudIntel.position.z = 60;
cloudIntel.position.x = 39;
cloudIntel.position.y = 50;
jupiterObj.position.z = -100;
jupiterObj.position.y = 1;
jupiterObj.position.x = -10;
fireObj.position.z = -30;
fireObj.position.x = 40;

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    cloudIntel.rotation.x += 0.05;
    cloudIntel.rotation.y += 0.075;
    cloudIntel.rotation.z += 0.05;

    jupiterObj.rotation.y += 0.01;

    fireObj.rotation.x += 0.01;
    fireObj.rotation.y += 0.015;
    fireObj.rotation.z += 0.01;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.035;
    camera.position.y = t * -0.025;
}

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    jupiterObj.rotation.y += 0.01;
    cloudIntel.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();