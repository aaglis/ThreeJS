
//propriedas para serem usadas durante a criação do projeto
const options = {
    targetSelector: '#scene', //trago a div
    width: 800, height: 600, // defino uma altura e largura
    backgroundColor: 0x222222
}

// crio o renderer usando WebGL
const renderer = new THREE.WebGLRenderer({
     antialias: true // tira os "ruidos" do projeto, deixando mais suave.
     });

renderer.setPixelRatio(window.devicePixelRatio); //define o pixel ratio de acordo com a tela de cada usuário

// defino a altura e largura do renderer
renderer.setSize(options.width, options.height);


//trago o renderer para o html usando dom
document.querySelector(options.targetSelector).appendChild(renderer.domElement);


//crio uma cena
const scene = new THREE.Scene();

//mudo a cor do fundo da cena 
scene.background = new THREE.Color(options.backgroundColor);


//crio a camera (perspectiva)
const camera = new THREE.PerspectiveCamera(50, options.width / options.height);

//posição da camera no eixo z
camera.position.z = 5


//crio a luz 
/*const light = new THREE.AmbientLight(
    0x404040, 4
);

scene.add(light)// adiciono a luz na cena*/

const light = new THREE.HemisphereLight(
    0xFFFFBB, 0x080820, 2
);


scene.add(light)


//adiciono todos os parâmetros dentro do controle x3
const x3 = new THREEx3({
    THREE,
    OrbitControls: THREE.OrbitControls,
    camera,
    renderer,
    scene
})

x3.add(camera, { open: false });
x3.add(light, { helper: { visible: false } });
