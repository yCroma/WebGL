import * as THREE from 'three'

export default class Tetrahedron extends THREE.TetrahedronGeometry {
  constructor (radius, detail) {
    const TetrahedronRadius = radius
    const TetrahedronDetail = detail
    super(TetrahedronRadius, TetrahedronDetail)
  }
}
