import * as THREE from 'three'

export default class Ambient extends THREE.AmbientLight {
  constructor (color, intensity) {
    const AmbientColor = color
    const AmbientIntensity = intensity
    super(AmbientColor, AmbientIntensity)
  }
}
