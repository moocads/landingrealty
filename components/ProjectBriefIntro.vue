<template>
  <div class="project-brief-wrap">
    <span> {{ projectStyle }}</span>
    <span v-if="projectType !== 'assignment'">
      <span v-if="status"> | {{ status }} </span>
      <span v-if="price"> | {{ '$' + price }}</span>
      <span v-if="mls">| {{ 'MLS-' + mls }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    projectType: {
      type: String,
      default: '',
    },
    projectStyle: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    mls: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
span {
  text-transform: uppercase;
  color: #727272;
  font-weight: 700;
  font-size: 18px;
  margin: 10px 0 15px 0;
}
.project-brief-wrap {
  margin: 0 0 16px;
}
</style>