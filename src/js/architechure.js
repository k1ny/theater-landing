import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {AmbientLight, DirectionalLight, PMREMGenerator} from "three";
import {OrbitControls, RoomEnvironment} from "three/addons";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false


scene.rotation.y = -Math.PI / 3
camera.position.set(0, 0, 24)
controls.update()


document.getElementById('container-3d').appendChild( renderer.domElement )

const ambientLight = new AmbientLight(0xffffff, 0.3)
camera.add( ambientLight )

const mainLight = new DirectionalLight(0xffffff, 0.8 * Math.PI);
mainLight.position.set(0.5, 0, 0.866);
camera.add(mainLight)

const pmremGenerator = new PMREMGenerator(renderer)
scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture

const loader = new GLTFLoader();

loader.load( 'СНТ.glb', function ( gltf ) {
  scene.add( gltf.scene );
}, undefined, function ( error ) {
  console.error( error );
});

function animate() {
  requestAnimationFrame(animate)

  controls.update()
  renderer.render(scene, camera)
}

animate()