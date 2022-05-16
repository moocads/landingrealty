<template>
  <div class="container">
    <ItemDisplay title="resales" :displayData="data" />
    <Subscription />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res1 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'resell',
          },
          style: {
            $eq: 'condo',
          },
        },
      },
    })
    const res2 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'resell',
          },
          style: {
            $eq: 'house',
          },
        },
      },
    })
    const res3 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'resell',
          },
          style: {
            $eq: 'townhouse',
          },
        },
      },
    })
    let data = {
      condo: res1.data,
      house: res2.data,
      townhouse: res3.data,
    }
    return {
      data,
    }
  },
}
</script>

<style lang="scss" scoped></style>
