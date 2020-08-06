import * as THREE from 'three'

export default class Cone extends THREE.ConeGeometry {
  constructor (radius, height, segments) {
    const ConeRadius = radius
    const ConeHeight = height
    const ConeSegments = segments
    super(ConeRadius, ConeHeight, ConeSegments)
  }
}
