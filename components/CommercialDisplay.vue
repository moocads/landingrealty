<i18n>
{
  "en": {
    "view":"VIEW ALL",
    "commercial":"Commercial"
  },
  "zh":{
    "view":"查看全部",
    "commercial":"商业"
  },
  "tc":{
    "view":"查看全部",
    "commercial":"商業"
  }
}
</i18n>
<template>
  <section class="item-display">
    <div class="wrapper">
      <h2>{{ $t('commercial') }}</h2>
      <div class="sample-grid">
        <div v-for="(item, index) in displayData.data" :key="index">
          <NuxtLink :to="localePath(`/projects/${item.id}`)">
            <ItemCard
              :img="checkImageExisted(item.attributes.thumbnail)"
              :title="item.attributes.address"
              :tag="item.attributes.location"
              :content="item.attributes.price.toString()"
            />
          </NuxtLink>
        </div>
      </div>
      <NuxtLink
        v-if="isHome"
        :to="localePath(`/projects/${this.title}`)"
        class="main-btn"
      >
        {{ $t('view') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    displayData: Object,
    isHome: { type: Boolean, default: false },
  },
  methods: {
    checkImageExisted(img){
      if(!img.data){
        return '/img/300x400.svg'
      }else{
        return img.data[0].attributes.url
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.item-display {
  padding: 50px 0 80px 0;
  .main-btn {
    display: block;
    margin: auto;
    width: 200px;
  }

  @media (max-width: 992px) {
    padding: 50px 0 50px 0;
  }
}

.sample-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  width: 100%;
  margin: 2rem auto;
}

.flex-col-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 38px;
  line-height: 45px;
  color: $navy;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
}

@media all and (max-width: $md) {
  .sample-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media all and (max-width: 576px) {
  .sample-grid {
    grid-template-columns: 1fr;
  }
}
</style>
