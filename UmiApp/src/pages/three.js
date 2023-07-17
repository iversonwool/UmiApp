import React from 'react'
import * as THREE from 'three'

function Three() {
  const divRef = React.useRef()

  function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    divRef.current?.append(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 'magenta' });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    
      renderer.render(scene, camera);
    }
    
    animate();
  }

  React.useEffect(() => {
    init();
  }, [])


  return (
    <div ref={divRef}></div>
  )
}

export default Three