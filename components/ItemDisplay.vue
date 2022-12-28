<i18n>
{
  "en": {
    "view":"VIEW ALL",
    "condo":"Condo",
    "house":"House",
    "townhouse":"Townhouse",
    "pre-construction":"Pre-Construction",
    "resales":"Resale"
  },
  "zh":{
    "view":"查看全部",
    "condo":"公寓",
    "house":"独立屋",
    "townhouse":"镇屋",
    "pre-construction":"楼花",
    "resales":"转售"
  },
  "tc":{
    "view":"查看全部",
    "condo":"公寓",
    "house":"獨立屋",
    "townhouse":"鎮屋",
    "pre-construction":"樓花",
    "resales":"轉售"
  }
}
</i18n>
<template>
  <section class="item-display">
    <div class="wrapper">
      <h2 v-if="title">{{ $t(title) }}</h2>
      <div>
        <a-tabs class="custom-tab" default-active-key="tab0">
          <a-tab-pane
            class="flex-col-center"
            v-for="(items, style, i) in displayData"
            :key="'tab' + i"
            :tab="$t(style)"
          >
            <div class="sample-grid">
              <div v-for="(item, index) in items" :key="index">
                <NuxtLink :to="localePath(`/projects/${item.id}`)">
                  <ItemCard
                    :img="item.attributes.thumbnail.data.attributes.url"
                    :title="
                      item.attributes.type === 'precon' && $i18n.locale === 'en'
                        ? item.attributes.title
                        : item.attributes.type === 'precon' &&
                          $i18n.locale === 'zh'
                        ? item.attributes.title_zh
                        : item.attributes.type === 'precon' &&
                          $i18n.locale === 'tc'
                        ? item.attributes.title_tc
                        : item.attributes.type === 'resell'
                        ? 'MLS ' + item.attributes.mls
                        : ''
                    "
                    :tag="item.attributes.location"
                    :content="item.attributes.price.toString()"
                  />
                </NuxtLink>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
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
    title: String,
    displayData: Object,
    isHome: { type: Boolean, default: false },
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
