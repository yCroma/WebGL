import * as THREE from 'three'

export default class Geometry extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.BoxGeometry(5, 5, 5)
    const material = new THREE.MeshNormalMaterial()
    super(geometry, material)
  }
}
