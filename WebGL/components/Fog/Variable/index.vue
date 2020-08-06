<template>
  <section>
    <p>
      URIの部分を1~999でいじるとオブジェクトの個数が変化します。<br>
      現在のURI http://www.webgl.cromalog.com/fog/{{ $route.params.id }}<br>
      サーバー側でレンダリングしているので、あまりいじめないようお願いします。
    </p>
    <p>オブジェクトの個数：{{ $route.params.id }}</p>
    <canvas ref="variable" />
    <p>variable fog</p>
  </section>
</template>

<script>
import VariableFog from './VariableFog'

export default {
  name: 'VariableFog',
  mounted () {
    this.variable = new VariableFog({
      $canvas: this.$refs.variable,
      $geometries: this.$route.params.id
    })
  }
}
</script>
