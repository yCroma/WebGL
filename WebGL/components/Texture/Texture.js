import Canvas from '@/components/Tool/Canvas'
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
