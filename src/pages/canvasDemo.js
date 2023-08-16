import React from 'react'
import * as THREE from 'three'

function CanvasDemo() {
  
  function init() {
    const canvas = document.querySelector('#c')
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })


    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xaaaaaa)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    const hue = Math.random()
    material.color.setHSL(hue, 1, .5)
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(-1, 2, 4)
    scene.add(light)

    const camera = new THREE.PerspectiveCamera(75, 2, .1, 8)
    camera.position.z = 3

    function resizeRendererToDisplaySize(r) {
      const c = r.domElement
      const pixelRatio = window.devicePixelRatio

      const width = c.clientWidth * pixelRatio
      const height = c.clientHeight * pixelRatio 
      const needResize = c.width !== width || c.height !== height
      if (needResize) {
        r.setSize(width, height, false)
      }
      return needResize
    }

    function animate(time) {

      const second = time * 0.001

      cube.rotation.x = second
      cube.rotation.y = second

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight

        camera.updateProjectionMatrix()
      }

      renderer.render(scene, camera)

      requestAnimationFrame(animate)
      
    }

    requestAnimationFrame(animate)
  }

  React.useEffect(function () {
    init()
  }, [])

  return (
    <canvas id="c" style={{width: '100%', height: '100vh', display: 'block'}}>CanvasDemo</canvas>
  )
}

export default CanvasDemo