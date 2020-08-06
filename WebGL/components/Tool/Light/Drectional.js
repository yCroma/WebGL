import * as THREE from 'three'

export default class Directional extends THREE.DirectionalLight {
  constructor (color, intensity) {
    const DirectionalColor = color
    const DirectionalIntensity = intensity
    super(DirectionalColor, DirectionalIntensity)
  }
}
