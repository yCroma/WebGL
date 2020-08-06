import Canvas from '@/components/Tool/Canvas'
// ライトのインポート
import Directional from '@/components/Tool/Light/Drectional'
import Ambient from '@/components/Tool/Light/Ambient'
// メッシュの設計
import Blueprint from '@/components/Fog/Const/Blueprint'

export default class ConstFog {
  constructor (props) {
    this.props = props
    this.init()
  }

  init () {
    // キャンバスの初期化
    Canvas.init(this.props.$canvas)
    // ライトの追加
    this.directional = new Directional(0xF0F000, 1.0)
    Canvas.scene.add(this.directional)
    this.ambient = new Ambient(0x000000, 1.0)
    Canvas.scene.add(this.ambient)
    // 設計のメッシュ化
    this.mesh = new Blueprint()
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
