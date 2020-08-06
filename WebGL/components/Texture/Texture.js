import * as THREE from 'three'
import Canvas from '@/components/Tool/Canvas'
import Box from '@/components/Geometry/Box'
import BumpMap from '@/components/Tool/Texture/BumpMap'
import Stone from '@/assets/images/stone.jpg'
import StoneBump from '@/assets/images/stone-bump.jpg'

export default class Texture {
  constructor (props) {
    this.props = props
    this.init()
  }

  init () {
    Canvas.init(this.props.$canvas)
    this.geometry = new Box(5, 5, 5)
    this.material = new BumpMap(Stone, StoneBump)
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    Canvas.scene.add(this.mesh)
    window.addEventListener('resize', this.resize.bind(this))
    this.loop()
  }

  resize () {
    Canvas.resize()
  }

  loop () {
    this.render()

    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01
    /*
    this.mesh2.rotation.x += 0.01
    this.mesh2.rotation.y += 0.01
    */

    requestAnimationFrame(this.loop.bind(this))
  }

  render () {
    Canvas.render()
  }
}
