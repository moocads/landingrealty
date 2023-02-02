<i18n>
{
  "en":{
    "recommended":"Recommended"
  },
  "zh":{
    "recommended":"推荐"
  },
  "tc":{
    "recommended":"推薦"
  }
}
</i18n>
<template>
  <div class="recommended">
    <div class="wrapper">
      <h2>{{ $t('recommended') }}</h2>
      <a-row :gutter="[36, 36]">
        <a-col
          :xl="{ span: 6 }"
          :lg="{ span: 6 }"
          :md="{ span: 12 }"
          :sm="{ span: 12 }"
          :xs="{ span: 24 }"
          v-for="(rec, index) in recData"
          :key="index"
        >
          <NuxtLink :to="localePath(`/projects/${rec.id}`)">
            <ItemCard
              :img="rec.attributes.images.data[0].attributes.url"
              :title="rec.attributes.address"
              :tag="rec.attributes.location"
              :content="rec.attributes.price.toString()"
            />
          </NuxtLink>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recData: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="scss" scoped>
.recommended {
  padding: 50px 0 100px 0;
  @media (max-width: 768px) {
    padding: 30px 0 60px 0;
  }
}
h2 {
  font-size: 38px;
  margin-bottom: 30px;
  text-transform: capitalize;
  font-weight: bold;
}
@media all and (max-width: 768px) {
  .recommended {
    padding: 30px 0 60px 0;
  }
  h2 {
    font-size: 34px;
  }
}
</style>