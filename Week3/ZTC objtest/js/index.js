var container, stats;
var camera, scene, raycaster, renderer;

 window.onload= onLoad1

function onLoad1(){
  init();
  render();
}





function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 45,window.innerWidth / window.innerHeight,1,10000 );
  var punit=2000;
    camera.position.x+=punit*0.2;
    camera.position.y+=punit*0.4;
    camera.position.z+=punit*3;
    //camera.position.set(0,0,5)
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 2);
  light.position.set( 1, 1, 1 ).normalize();
  scene.add(light);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  container.appendChild( renderer.domElement);
  scene.add(camera)
}
/////////////////////////
function daxiang1(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("dalishi1.mtl", function(materials){
    // alert(materials);
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("dalishi1.obj", function(mesh){
    // alert(mesh)
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
//
function daxiang2(){
  var mtlLoader = new THREE.MTLLoader();
  // console.log(1)
  mtlLoader.load("dalishi2.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("dalishi2.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
//
function daxiang3(){
  var mtlLoader = new THREE.MTLLoader();

  mtlLoader.load("dalishi3.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();

	objLoader.setMaterials(materials);
  objLoader.load("dalishi3.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);

  //renderer.setSize(400,800)
  //renderer.render(scene,camera)

  });
});
}
//
function render() {
  requestAnimationFrame(render);
  renderer.render(scene,camera);
//
//  var sss=  document.getElementById("showdaxiang1"  );
// console.log(sss)
  document.getElementById("showdaxiang1").addEventListener("click",daxiang1);
  document.getElementById("showdaxiang2").addEventListener("click",daxiang2);
  document.getElementById("showdaxiang3").addEventListener("click",daxiang3);
  //
  // var sss=  document.getElementById("showdaxiang1"  );
  // // alert(sss)
  // // alert(sss==null)
  //  sss.addEventListener("click",daxiang1);

}
