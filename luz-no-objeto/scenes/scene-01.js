const geometry = new THREE.BoxBufferGeometry(); // crio uma geometria (caixa)
const material = new THREE.MeshLambertMaterial({ color: 0xeb3468 }); //crio um material basico 

const cube = new THREE.Mesh(
    geometry, material // mesclo os dois na malha
);

scene.add(cube)// adiciono na cena 


renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)

});