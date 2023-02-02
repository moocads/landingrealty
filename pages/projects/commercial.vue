
<template>
  <div class="container page-project">
    <CommercialDisplay :displayData="data" data-aos="fade-up" />
    <Subscription />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Commercial | Landing Realty | A Toronto Real Estate Company"
    };
  },
  async asyncData({ $axios }) {
    const allCommercialData = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'commercial',
          },
        },
        populate: '*'
      },
    })
  
    let data = allCommercialData
    return {
      data,
    }
  },
}
</script>
