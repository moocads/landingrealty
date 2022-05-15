<template>
  <div class="container">
    <ItemDisplay title="resales" :items="res.data"/>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.$get('/assignments')
    return {
      res
    }
  },
}
</script>

<style lang="scss" scoped></style>
