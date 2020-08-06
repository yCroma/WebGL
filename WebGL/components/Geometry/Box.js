import * as THREE from 'three'

export default class Box extends THREE.BoxGeometry {
  constructor (x, y, z) {
    const BoxX = x
    const BoxY = y
    const BoxZ = z
    super(BoxX, BoxY, BoxZ)
  }
}
