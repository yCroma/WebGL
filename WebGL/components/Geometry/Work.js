import * as THREE from 'three'
// import Geometry from './Geometry'

export default class Work {
  constructor (props) {
    this.props = props
    this.width = 0
    this.height = 0
    this.renderer = null
    this.scene = null
    this.camera = null
    this.init()
  }

  init ($canvas) {
    this.width = 960
    this.height = 540
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.props.$canvas
    })
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height)
    this.camera.position.set(0, 0, 1000)
    // this.geometry = new Geometry()
    this.geometry = new THREE.BoxGeometry(400, 400, 400)
    this.material = new THREE.MeshNormalMaterial()
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    // this.scene.add(this.geometry)
    this.scene.add(this.mesh)
    this.loop()
  }

  loop () {
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.loop.bind(this))
  }
}
