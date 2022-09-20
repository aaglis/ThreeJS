const geometry = new THREE.BoxBufferGeometry(); // crio uma geometria (caixa)
const material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); //crio um material basico 

const cube = new THREE.Mesh(
    geometry, material // mesclo os dois na malha
);

scene.add(cube)// adiciono na cena 


// adicionando o cubo no controle do x3
x3.add(cube, { label: 'cube' })


renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)

    x3.tick();

    //mostra o fps do projeto
    x3.fps(() => {
        renderer.render(scene, camera)
    })

});