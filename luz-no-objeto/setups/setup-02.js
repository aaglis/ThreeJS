const options = {
    targetSelector: '#scene', //trago a div
    width: 800, height: 600, // defino uma altura e largura
    backgroundColor: 0x222222
}

const renderer = new THREE.WebGLRenderer (); // crio o renderer usando WebGL

renderer.setSize(options.width, options.height); // defino a altura e largura do renderer


document.querySelector(options.targetSelector).appendChild(renderer.domElement);
//trago o renderer para o html usando dom

const scene = new THREE.Scene();
scene.background = new THREE.Color (options.backgroundColor)

const camera = new THREE.PerspectiveCamera(50, options.width / options.height);

camera.position.z = 5

const light = new THREE.AmbientLight(
    0x404040, 4
);

scene.add(light)