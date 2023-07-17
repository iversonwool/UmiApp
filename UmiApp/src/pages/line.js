import React from 'react'
import * as THREE from 'three'

function LineDemo() {

  function init() {

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)


    const scene = new THREE.Scene()
    const material = new THREE.LineBasicMaterial({ color: 'cyan' })
    const points = [
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(0, 10, 0),
      new THREE.Vector3(10, 0, 0),
      new THREE.Vector3(0, -10, 0),
      new THREE.Vector3(-10, 0, 0),
    ]
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const line = new THREE.Line(geometry, material)
    scene.add(line)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    document.getElementById('line').append(renderer.domElement)
  
    renderer.render(scene, camera)
  }

  React.useEffect(function () {
    init()
  }, [])

  return (
    <div id="line"></div>
  )
}

export default LineDemo