
<template>
  <div class="container" id="preconProjects">
    <ItemDisplay title="pre-construction" :displayData="data" data-aos="fade-up" />
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
            $eq: 'precon',
          },
          style: {
            $eq: 'condo',
          },
        },
        populate: '*'
      }
    })
    const res2 = await $axios.$get('/assignments', {
      params: {

        filters: {
          type: {
            $eq: 'precon',
          },
          style: {
            $eq: 'house',
          },
        },
        populate: '*'
      }
    })
    const res3 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'precon',
          },
          style: {
            $eq: 'townhouse',
          },
        },
        populate: '*'
      }
    })
    let data = {
      condo: res1.data,
      house: res2.data,
      townhouse: res3.data,
    }
    return {
      data
    }
  },
}
</script>

<style lang="scss" scoped>
#preconProjects {
  background-color: white;
}</style>
