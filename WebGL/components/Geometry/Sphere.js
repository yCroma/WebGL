import * as THREE from 'three'

export default class Sphere extends THREE.SphereGeometry {
  constructor (radius) {
    const SphereRadius = radius
    super(SphereRadius)
  }
}
