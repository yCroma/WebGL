import * as THREE from 'three'

export default class BumpMap extends THREE.MeshPhongMaterial {
  constructor (Image, ImageBump) {
    const Loader = new THREE.TextureLoader()
    const Texture = Loader.load(Image)
    const TextureBump = Loader.load(ImageBump)
    super({
      map: Texture, bumpMap: TextureBump, bumpScale: 0.05
    })
  }
}
