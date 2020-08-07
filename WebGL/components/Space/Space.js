import * as THREE from 'three'
// Canvasのインポート
import Canvas from '@/components/Tool/Canvas'
// Lightのインポート
import Directional from '@/components/Tool/Light/Drectional'

export default class Space {
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
    // ジオメトリの追加
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(5, 5, 5),
      new THREE.MeshStandardMaterial()
    )
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
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01
    requestAnimationFrame(this.loop.bind(this))
  }

  render () {
    Canvas.render()
  }
}
