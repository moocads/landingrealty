
<template>
  <div class="container" id="resaleProjects">
    <ItemDisplay title="resales" :displayData="data" data-aos="fade-up" />
    <Subscription />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Resales | Landing Realty | A Toronto Real Estate Company"
    };
  },
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
        populate: '*'
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
        populate: '*'
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
        populate: '*'
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

<style lang="scss" scoped>
#resaleProjects {
  background-color: white;
}
</style>
