<template>
  <section>
    <canvas ref="canvas" />
    <p>test</p>
  </section>
</template>

<script>
import Work from './Work.js'

export default {
  name: 'Geometry',
  mounted () {
    this.work = new Work({
      $canvas: this.$refs.canvas
    })
  }
}
</script>
