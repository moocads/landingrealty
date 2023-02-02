
<template>
  <div class="container page-project">
    <ItemDisplay title="pre-construction" :displayData="data" data-aos="fade-up" />
    <Subscription />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Pre-Construction | Landing Realty | A Toronto Real Estate Company"
    };
  },
  async asyncData({ $axios }) {
    const resCondo = await $axios.$get('/assignments', {
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
    const resDetached = await $axios.$get('/assignments', {
      params: {

        filters: {
          type: {
            $eq: 'precon',
          },
          style: {
            $eq: 'detached',
          },
        },
        populate: '*'
      }
    })
    const resTownHouse = await $axios.$get('/assignments', {
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
    const resSemiDetached = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'precon',
          },
          style: {
            $eq: 'semiDetached',
          },
        },
        populate: '*'
      },
    })
    let data = {
      condo: resCondo.data,
      detached: resDetached.data,
      townhouse: resTownHouse.data,
      "semi-detached":resSemiDetached.data
    }
    return {
      data
    }
  },
}
</script>