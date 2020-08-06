import * as THREE from 'three'

export default class PerspectiveCamera extends THREE.PerspectiveCamera {
  constructor (fov, aspect_ratio, near, far) {
    super (fov, aspect_ratio, near, far)
  }
}