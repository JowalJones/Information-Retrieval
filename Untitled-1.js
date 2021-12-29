<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="https://getfirebug.com/firebug-lite-debug.js"></script>
<meta name="description" content="CS4406 Computer Graphics - Assignment #2" />
  	<meta charset="utf-8" />
	<title>Assignment 2</title>

</style>
<meta charset=utf-8 />
<title> CS4406 Computer Graphics - ProgrammingAsignment U#2 </title>
  
<style id="jsbin-css">
</style>
</head>
<body>
<div id="container">
</div>
</body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/94/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/6.2.1/math.min.js"></script>
    <script type="text/javascript"></script>
<script>

	// set the scene size
	var WIDTH = 500, HEIGHT = 500;
	// set some camera attributes
	var VIEW_ANGLE = 45, ASPECT = WIDTH / HEIGHT, NEAR = 1, FAR = 1000;
	// get the element to attach
	var $container = $('#container');
	// create a WebGL renderer, camera, and a scene
        var renderer = new THREE.WebGLRenderer();
	var scene = new THREE.Scene();
	var clock = new THREE.Clock();
	var camera = new THREE.PerspectiveCamera(VIEW_ANGLE,ASPECT,NEAR,FAR);
	 // the camera starts at 0,0,0 so pull it back
	camera.position.z = 30;    	
	// add the camera to the scene
	scene.add(camera)
	// set up the camera controls.  Please keep in mind that what this does is move the entire scene around.
	// because the entire scene is moving the position of the camera and lights in relation to objects within 
	// the scene doesn't change so the lighting on the surface of the object(s) will not change either

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);
        document.body.appendChild(renderer.domElement);

	// attach the render-supplied DOM element
	$container.append(renderer.domElement);
	// ----------------------------------------------------------------------------------------
	//  END OF THE STANDARD CODE FOR THE ASSIGNMENT
	// ----------------------------------------------------------------------------------------

        // create the material
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // To create clour red the hex value is 0XFF0000
        // for Blue color the hex value is 0X0000FF
        // Note that changing the mesh clolor will require to make sure that the ambient light 
        // contains red or blue otherwise the mesh is invisible




const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( heartShape );

const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );


renderer.render( scene, camera );




	// ----------------------------------------------------------------------------------------
	// END OF YOUR CUSTOM CODE FOR THE ASSIGNMENT
	// The rendering functions that follow are standard and can be used for this assignment.  
	// You are welcome to customize them or create your own if you desire, however, you can 
	// simply use the code provided.


	// Standard functions for rendering the scene.  Notice how we have the animate function 
	// which submits a call to requestAnimationFrame to call animate.   This creates a loop
	// that will render the scene again whenever something within the scene changes.
	// Standard functions for rendering the scene.  Notice how we have the animate function 
	// which submits a call to requestAnimationFrame to call animate.   This creates a loop
	// that will render the scene again whenever something within the scene changes.



	function render() {
		cameraControls.update();
		renderer.render(scene, camera);
	}
	</script>
</html>
</html>
