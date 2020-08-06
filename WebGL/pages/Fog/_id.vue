<template>
  <div class="container">
    <div>
      <VariableFog />
    </div>
  </div>
</template>

<script>
import VariableFog from '@/components/Fog/Variable'

export default {
  validate ({ params }) {
    return /^[1-9][0-9][0-9]$/.test(params.id)
  },
  components: {
    VariableFog
  }
}
</script>
