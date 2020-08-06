import * as THREE from 'three'
// geometry
import Box from '@/components/Geometry/Box'

export default class Blueprint extends THREE.Group {
  constructor (geometries) {
    super()
    const AddGeometries = geometries
    for (let i = 0; i < AddGeometries; i++) {
      const mesh = new THREE.Mesh(
        new Box(5, 5, 5),
        new THREE.MeshStandardMaterial()
      )
      mesh.position.x = (Math.random() - 0.5) * 200
      mesh.position.y = (Math.random() - 0.5) * 200
      mesh.position.z = (Math.random() - 0.5) * 200
      mesh.rotation.x = Math.random() * 2 * Math.PI
      mesh.rotation.y = Math.random() * 2 * Math.PI
      mesh.rotation.z = Math.random() * 2 * Math.PI
      // class自身にadd
      this.add(mesh)
    }
  }
}
