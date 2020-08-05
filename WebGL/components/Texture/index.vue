<template>
  <section>
    <canvas ref="texture" />
    <p>texture test</p>
  </section>
</template>

<script>
import Texture from './Texture'

export default {
  name: 'Texture',
  mounted () {
    // TODO:Canvasの共通化
    this.texture = new Texture({
      $canvas: this.$refs.texture
    })
  }
}
</script>
