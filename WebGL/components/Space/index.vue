<template>
  <div>
    <p>test_component_1</p>
    <canvas ref="space" />
  </div>
</template>

<script>
import Space from './Space'

export default {
  mounted () {
    this.space = new Space({
      $canvas: this.$refs.space
    })
  }
}
</script>
