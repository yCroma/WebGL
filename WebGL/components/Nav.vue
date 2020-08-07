<template>
  <section class="nav">
    <nuxt-link to="/">
      テクスチャー課題
    </nuxt-link>
    |
    <nuxt-link to="/fog">
      フォグ
    </nuxt-link>
    |
    <nuxt-link to="/fog/100">
      フォグ(カスタム)
    </nuxt-link>
    |
    <nuxt-link to="/space">
      宇宙
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
