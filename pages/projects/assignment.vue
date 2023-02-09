
<template>
  <div class="container page-project" >
    <ItemDisplay title="assignment" :displayData="data" data-aos="fade-up" />
    <Subscription />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Assignment | Landing Realty | A Toronto Real Estate Company"
    };
  },
  async asyncData({ $axios }) {
    const resCondo = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'assignment',
          },
          style: {
            $eq: 'condo',
          },
        },
        populate: '*'
      },
    })
    const resDetached = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'assignment',
          },
          style: {
            $eq: 'detached',
          },
        },
        populate: '*'
      },
    })
    const resTownHouse = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'assignment',
          },
          style: {
            $eq: 'townhouse',
          },
        },
        populate: '*'
      },
    })
    const resSemiDetached = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'assignment',
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
      "semi-detached":resSemiDetached.data,
      townhouse: resTownHouse.data
    }
    return {
      data,
    }
  },
}
</script>

