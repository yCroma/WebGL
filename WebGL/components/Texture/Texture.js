// Canvas の追加
import Canvas from '@/components/Tool/Canvas'
// Light の追加
import Directional from '@/components/Tool/Light/Drectional'
import Blueprint from '@/components/Texture/Blueprint'

export default class Texture {
  constructor (props) {
    this.props = props
    this.init()
  }

  init () {
    Canvas.init(this.props.$canvas)
    // camera の調整
    Canvas.camera.position.set(0, 0, 20)
    // Light の追加
    this.directional = new Directional(0xFFFFFF, 1.0)
    this.directional.position.set(1, 1, 1)
    Canvas.scene.add(this.directional)
    // Blueprint内にgeometryとmaterialの情報がまとまっている
    this.mesh = new Blueprint()
    this.mesh.position.set(0, 0, 0)
    Canvas.scene.add(this.mesh)
    window.addEventListener('resize', this.resize.bind(this))
    this.loop()
  }

  resize () {
    Canvas.resize()
  }

  loop () {
    this.render()
    this.mesh.rotation.y += 0.01
    requestAnimationFrame(this.loop.bind(this))
  }

  render () {
    Canvas.render()
  }
}
