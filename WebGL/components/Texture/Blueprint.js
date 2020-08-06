import * as THREE from 'three'
// geometry
import Box from '@/components/Geometry/Box'
import Sphere from '@/components/Geometry/Sphere'
import Tetrahedron from '@/components/Geometry/Tetrahedron'
import Cone from '@/components/Geometry/Cone'
// tool
import BumpMap from '@/components/Tool/Texture/BumpMap'
// image
import Stone from '@/assets/images/stone.jpg'
import StoneBump from '@/assets/images/stone-bump.jpg'

export default class Blueprint extends THREE.Group {
  constructor () {
    // TODO: group を継承させる
    super()
    const geometryList = [
      new Box(2, 2, 2),
      new Sphere(1),
      new Tetrahedron(1, 0),
      new Cone(1, 2, 30)
    ]
    const TextureMaterial = new BumpMap(Stone, StoneBump)
    geometryList.map((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, TextureMaterial)
      this.add(mesh)
      // mesh.position.x = 8 * Math.cos((index / geometryList.length - 1) * Math.PI)
      mesh.position.x = ((index * 2) + 1 - geometryList.length) * 2
    })
  }
}
