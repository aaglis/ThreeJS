// todo projeto em ThreeJS tem por estrutura padrão:
// cena (scene), camera, e renderização (renderer).

const scene = new THREE.Scene();  

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 200);
        //parâmetro 100 significa a abertura da câmera
        // após declarar a abertura, é declarado a proporção entre altura e largura 
        //(no exemplo do cubo, é a largura divida pela altura)
        // o parâmetro 0.1 indica em que ponto minha visão começa
          
const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        //tamanho da tela que será renderizado 


        document.body.appendChild(renderer.domElement);
        //adiciona o redenrizador ao documento html

//criação do cubo animado 
        const geometry = new THREE.BoxGeometry(2, 2, 2);
                                              // valor 1: largura
                                              // valor 2: altura
                                              // valor 3: profundidade
        const material = new THREE.MeshBasicMaterial({ color: 0xB22222 });
                                                     //cor do cubo 

        const cube = new THREE.Mesh(geometry, material);
                                  // associando a geomatria e o material ao cubo


        scene.add(cube); // adicionando o cubo à cena  

        camera.position.z = 5;
        //posição no eixo Z

        function animate() {
            requestAnimationFrame(animate); // a cada frame de atualização do navegador, ele ativa a função animate

            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;
            cube.rotation.z -= 0.03;
            // rotação do cubo


            renderer.render(scene, camera);
            // a função render desenha o cubo na tela a cada frame
        };

        animate();
        // starta a animação