<template>
  <section>
    <canvas ref="const" />
    <p>default fog</p>
  </section>
</template>

<script>
import ConstFog from './ConstFog'

export default {
  name: 'ConstFog',
  mounted () {
    this.const = new ConstFog({
      $canvas: this.$refs.const
    })
  }
}
</script>
