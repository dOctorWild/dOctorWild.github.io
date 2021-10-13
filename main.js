import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import imgUrl from './assets/cloud Intelligence.png'
document.getElementById('cloud Intelligence.png').src = imgUrl;

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
const spaceTexture = new THREE.TextureLoader().load('assets/earth+space.jpeg');
scene.background = spaceTexture;
//Cube
const cloudTexture = new THREE.TextureLoader().load('assets/cloud Intelligence.png')
const cloudIntel = new THREE.Mesh(
    new THREE.BoxGeometry(15,15,15),
    new THREE.MeshBasicMaterial({map: cloudTexture})
);

scene.add(cloudIntel);

const moonTexture = new THREE.TextureLoader().load('assets/moonSurface.jpg')
const normalTexture = new THREE.TextureLoader().load('assets/normalMoon.jpeg')

const fireTexture = new THREE.TextureLoader().load('assets/wideFire.jpeg')
const panoramic = new THREE.TextureLoader().load('assets/panoVermaak.jpeg')

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({map: moonTexture,
    normalMap: normalTexture})
);

scene.add(moon);

const fire = new THREE.Mesh(
    new THREE.BoxGeometry(25,25,25),
    new THREE.MeshBasicMaterial({map: fireTexture})
);

scene.add(fire);

const pano = new THREE.Mesh(
    new THREE.BoxGeometry(100,100,200),
    new THREE.MeshBasicMaterial({map: panoramic})
);

scene.add(pano);

cloudIntel.position.z = 30;
cloudIntel.position.x = -10;
moon.position.z = -20;
moon.position.y = 1;
moon.position.x = -10;
fire.position.z = -30;
fire.position.x = 40;
pano.position.z = 40;
pano.position.x = -120;
pano.position.y = -20;

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    cloudIntel.rotation.x += 0.05;
    cloudIntel.rotation.y += 0.075;
    cloudIntel.rotation.z += 0.05;

    moon.rotation.y += 0.01;
    moon.rotation.z += 0.01;

    fire.rotation.x += 0.01;
    fire.rotation.y += 0.015;
    fire.rotation.z += 0.01;

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