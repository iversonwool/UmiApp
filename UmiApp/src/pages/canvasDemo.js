import React from 'react'
import * as THREE from 'three'

function CanvasDemo() {

  function init() {
    const canvas = document.querySelector('#c')
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })


    const scene = new THREE.Scene()

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: 'green' })
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(-1, 2, 4)
    scene.add(light)

    const camera = new THREE.PerspectiveCamera(75, 2, .1, 5)
    camera.position.z = 2

    function animate(time) {

      const second = time * 0.001

      cube.rotation.x = second
      cube.rotation.y = second
      renderer.render(scene, camera)

      requestAnimationFrame(animate)
      
    }

    requestAnimationFrame(animate)
  }

  React.useEffect(function () {
    init()
  }, [])

  return (
    <canvas id="c" style={{width: 750, height: 375}}>CanvasDemo</canvas>
  )
}

export default CanvasDemo