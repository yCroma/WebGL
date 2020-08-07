import * as THREE from 'three'

export default class BumpMap extends THREE.MeshPhongMaterial {
  constructor (Image) {
    const Loader = new THREE.TextureLoader()
    const Texture = Loader.load(Image)
    super({
      map: Texture
    })
  }
}
