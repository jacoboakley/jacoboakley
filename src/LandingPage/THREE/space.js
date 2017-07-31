var THREE = require('three');


var height = window.innerHeight,
    width = window.innerWidth;

var scene = new THREE.Scene(); // Creates a new scene

var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 750 ); // Creates a camera and passes (field of view, aspect ratio, near clipping plane, far clipping plane)
      scene.add(camera);

var renderer = new THREE.WebGLRenderer();
      renderer.setSize( width, height ); // sets size of render to the screen size
      document.body.appendChild( renderer.domElement); // Renders a canvas tag to the DOM

// Listen for resizing of window
window.addEventListener( 'resize', onWindowResize, false );
// Resize Three.js scene on window resize
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

var starsGeometry = new THREE.Geometry(); // creates new geometry

for ( var i = 0; i < 10000; i ++ ) {  // Adds a partilce on each loop i < 10000 = 9999 particles rendered

	var star = new THREE.Vector3(); 
	star.x = THREE.Math.randFloatSpread( 2000 ); // changing number will decrease or increase particle density; the smaller the number the more dense the particles
	star.y = THREE.Math.randFloatSpread( 2000 ); // changing number will decrease or increase particle density; the smaller the number the more dense the particles
	star.z = THREE.Math.randFloatSpread( 2000 ); // changing number will decrease or increase particle density; the smaller the number the more dense the particles

	starsGeometry.vertices.push( star );
}

var starsMaterial = new THREE.PointsMaterial( { color: 0xffffff } );

var starField = new THREE.Points( starsGeometry, starsMaterial );

scene.add( starField );

// Render loop to move through star field
function render() {
  requestAnimationFrame( render ); // requestAnimationFrame will pause when the user navigates to a new tab
  starField.rotation.z += 0.002;
  starField.rotation.x -= 0.002;
  starField.rotation.y += 0.002;  // Runs every frame giving it the animation
  
  renderer.render( scene, camera );
};

render();