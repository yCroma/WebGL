import * as THREE from 'three'
// Canvasのインポート
import Canvas from '@/components/Tool/Canvas'
// Lightのインポート
import Ambient from '@/components/Tool/Light/Ambient'
// Perticleのインポート
import Perticle from '@/components/Geometry/Perticle'
// 球体のインポート
import Sphere from '@/components/Geometry/Sphere'
// Mappingのインポート
import Map from '@/components/Tool/Texture/Map'
// Mappingする画像のインポート
import Sun from '@/assets/images/sunmap.jpg'

export default class Space {
  constructor (props) {
    this.props = props
    this.init()
  }

  init () {
    // キャンバスの初期化
    Canvas.init(this.props.$canvas)
    // ライトの追加
    Canvas.scene.add(this.directional)
    this.ambient = new Ambient(0xFFFFFF, 1.0)
    Canvas.scene.add(this.ambient)
    // ジオメトリの追加
    this.sphere = new Sphere(1.0)
    this.TextureMap = new Map(Sun)
    this.sun = new THREE.Mesh(this.sphere, this.TextureMap)
    Canvas.scene.add(this.sun)
    // パーティクルの追加
    this.BgPerticle = new Perticle()
    Canvas.scene.add(this.BgPerticle)
    // リサイズ
    window.addEventListener('resize', this.resize.bind(this))
    this.loop()
  }

  resize () {
    Canvas.resize()
  }

  loop () {
    this.render()
    this.sun.rotation.y += 0.0001
    this.BgPerticle.rotateY(0.001)
    requestAnimationFrame(this.loop.bind(this))
  }

  render () {
    Canvas.render()
  }
}
