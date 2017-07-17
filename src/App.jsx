import React from 'react';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';

/* My Components */
import Nametag from './Jumbotron/Nametag.jsx';

import * as THREE from 'three'


const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, width/height, 0.01, 500);
  camera.position.z = 300;
  camera.lookAt(scene.position); // Camera always points at the scene no matter where it is

var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild( renderer.domElement);

var geometry = new THREE.SphereGeometry(75, 16, 16); // radius, segments, rings
var material = new THREE.MeshLambertMaterial( { color: 0x8a0099 });
  material.wireframe = true; // set to false to make object solid
var sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

var light = new THREE.PointLight(0xFFFFFF);
  light.position.set(10, 50, 150);
  scene.add(light);

// Resize Three.js scene on window resize
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

// Create sphere rotation
function render() {
  requestAnimationFrame( render );
  sphere.rotation.y += 0.01;
  
  renderer.render( scene, camera ); 
};

render();


/* My App */
class App extends React.Component {
  render() {
    return (
      <div>
        <Nametag />
      </div>
    );
  }
}

export default App;
