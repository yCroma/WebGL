import * as THREE from 'three'

export default class Perticle extends THREE.Points {
  constructor () {
    // 形状データを作成
    const geometry = new THREE.Geometry()
    // 配置する範囲
    const SIZE = 3000
    // 配置する個数
    const LENGTH = 1000
    for (let i = 0; i < LENGTH; i++) {
      geometry.vertices.push(
        new THREE.Vector3(
          SIZE * (Math.random() - 0.5),
          SIZE * (Math.random() - 0.5),
          SIZE * (Math.random() - 0.5)
        )
      )
    }
    // マテリアルを作成
    const material = new THREE.PointsMaterial({
      // 一つ一つのサイズ
      size: 10,
      // 色
      color: 0xFFFFFF
    })
    super(geometry, material)
  }
}
