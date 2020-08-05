import * as THREE from 'three'

export default class Geometry {
  constructor () {
    this.geometry = null
    this.material = null
    this.mesh = null
    this.init()
  }

  init () {
    this.geometry = new THREE.BoxGeometry(400, 400, 400)
    this.material = new THREE.MeshNormalMaterial()
    this.mesh = new THREE.Mesh(this.geometry, this.material)
  }
}
