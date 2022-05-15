<template>
  <div class="container">
    <div class="wrapper">
        <img src="~/assets/img/sample-img.png" alt="">
        <div class="info-wrapper">
            <h1>{{item.attributes.title}}</h1>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, route }) {
    const res = await $axios.$get(`/assignments/${route.params.slug}`, {
      params: {
        populate: '*',
      },
    })
    return {
      item: res.data,
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
}
</style>
