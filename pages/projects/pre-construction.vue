<template>
  <div class="container">
    <ItemDisplay title="pre-construction" :items="data" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.$get('/assignments', {
      filters: {
        type: {
          $eq: 'precon',
        },
      },
    })

    return {
      // data: res.data.filter((d) => d.attributes.type === 'precon'),
      data: res.data
    }
  },
}
</script>

<style lang="scss" scoped></style>
