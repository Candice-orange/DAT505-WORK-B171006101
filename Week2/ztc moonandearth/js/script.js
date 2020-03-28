var scene,camera,renderer;

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,30,100000);
  renderer = new THREE.WebGLRenderer({
    antialias:true
  })
  renderer.setClearColor("#000000")
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

var geometry,material,mesh;
function geometry(){
  var light1 = new THREE.AmbientLight(0xffffff,0.5);
  scene.add(light1);
  var light2 = new THREE.PointLight(0xffffff,0.5);
  scene.add(light2);

  var geometry = new THREE.SphereGeometry(200,200,200);

  var ImageLoader = new THREE.ImageLoader();
  ImageLoader.load('earthtexture.jpg',function(img){
    var texture = new THREE.Texture(img);
    texture.needsUpdate = true;
    var material = new THREE.MeshLambertMaterial({
      map:texture,
    })

    mesh1= new THREE.Mesh(geometry,material);
    mesh1.position.z = -1000;
    scene.add(mesh1);
  })

  var geometry2 = new THREE.SphereGeometry(100,100,100);
  var ImageLoader2 = new THREE.ImageLoader();
  ImageLoader2.load('moontexture.jpg',function(img){
    var texture2 = new THREE.Texture(img);
    texture2.needsUpdate = true;
    var material2 = new THREE.MeshLambertMaterial({
      map:texture2,
    })

    mesh2= new THREE.Mesh(geometry2,material2);
    mesh2.position.z = -1000;
    mesh2.position.x = +250;
    scene.add(mesh2);
})
}


let angle = 0;
function render(){
  requestAnimationFrame(render);
  //自转
  mesh1.rotation.y += 0.005;

  renderer.render(scene,camera);
  //公转
  angle += 0.01;
  var x = 400*Math.sin(angle)
  var z = 400*Math.cos(angle)-1000
  mesh2.position.set(x,x,z);

}


init();
geometry();
render();
