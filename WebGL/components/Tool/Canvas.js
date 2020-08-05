import * as THREE from 'three'

class Canvas {
  constructor () {
    this.scene = null
    this.size = {
      windowW: null,
      windowH: null
    }
  }

  init ($canvas) {
    // レンダラーの作成
    this.setSize()
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.size.windowW, this.size.windowH)
    // シーンの作成
    this.scene = new THREE.Scene()
    // カメラの作成
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.size.windowW / this.size.windowH,
      0.1,
      10000
    )
    this.camera.position.set(0, 0, 10)
    this.camera.lookAt(0, 0, 0)
    // ライトの作成
    this.directionalLight = new THREE.DirectionalLight('0xffffff')
    this.directionalLight.position.set(1, 1, 1)
    this.scene.add(this.directionalLight)
  }

  setSize () {
    this.size = {
      windowW: window.innerWidth * 0.8,
      windowH: window.innerHeight * 0.8
    }
  }

  resize () {
    // サイズ取得
    this.setSize()
    // レンダラーのサイズを調整
    this.renderer.setSize(this.size.windowW, this.size.windowH)
    // カメラのアスペクト比を正す
    this.camera.aspect = this.size.windowW / this.size.windowH
    this.camera.updateProjectionMatrix()
  }

  render () {
    this.renderer.render(this.scene, this.camera)
  }
}

export default new Canvas()
