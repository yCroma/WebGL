import Canvas from '@/components/Tool/Canvas'
// ライトのインポート
import Directional from '@/components/Tool/Light/Drectional'
import Ambient from '@/components/Tool/Light/Ambient'
// 設計図のインポート
import Blueprint from '@/components/Fog/Variable/Blueprint'

export default class VariableFog {
  constructor (props) {
    this.props = props
    this.init()
  }

  init () {
    // キャンバスの初期化
    Canvas.init(this.props.$canvas)
    // ライトの追加
    this.directional = new Directional(0xFFFFFF, 1.0)
    Canvas.scene.add(this.directional)
    this.ambient = new Ambient(0x0000FF, 1.0)
    Canvas.scene.add(this.ambient)
    // 設計図
    this.mesh = new Blueprint(this.props.$geometries)
    Canvas.scene.add(this.mesh)
    // リサイズ
    window.addEventListener('resize', this.resize.bind(this))
    this.loop()
  }

  resize () {
    Canvas.resize()
  }

  loop () {
    this.render()
    this.mesh.rotateY(0.001)
    requestAnimationFrame(this.loop.bind(this))
  }

  render () {
    Canvas.render()
  }
}
