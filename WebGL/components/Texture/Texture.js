// import * as THREE from 'three'
import Canvas from '@/components/Tool/Canvas'
import Geometry from '@/components/Texture/Geometry'

export default class Texture {
  constructor (props) {
    this.props = props
    this.init()
  }

  init () {
    Canvas.init(this.props.$canvas)
    this.box = new Geometry()
    Canvas.scene.add(this.box)
    window.addEventListener('resize', this.resize.bind(this))
    this.loop()
  }

  resize () {
    Canvas.resize()
  }

  loop () {
    this.render()

    this.box.rotation.x += 0.01
    this.box.rotation.y += 0.01

    requestAnimationFrame(this.loop.bind(this))
  }

  render () {
    Canvas.render()
  }
}
