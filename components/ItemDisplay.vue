<template>
  <section class="item-display">
    <div class="wrapper">
      <h2 v-if="title">{{ $t('types.'+title) }}</h2>
      <div>
        <a-tabs class="custom-tab" default-active-key="tab0">
          <a-tab-pane
            class="flex-col-center"
            v-for="(items, style, i) in displayData"
            :key="'tab' + i"
            :tab="$t('styles.'+style)"
          >
            <div class="sample-grid">
              <div v-for="(item, index) in items" :key="index">
                <NuxtLink
                  :to="localePath(checkTypes(item.attributes.type, item.id))"
                >
                  <!-- <ItemCard
                    :img="checkImageExisted(item.attributes.thumbnail)"
                    :title="item.attributes.address ? item.attributes.address : 'N/A'"
                    :tag="item.attributes.location"
                    :content="item.attributes.price.toString()"
                  /> -->
                  <ItemCard
                    :img="checkImageExisted(item.attributes.thumbnail)"
                    :title="item.attributes.address ? item.attributes.address : 'N/A'"
                    :tag="item.attributes.location"
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
  methods: {
    checkTypes(type, id) {
      let route = ''
      if (type === 'precon') {
        route = `/projects/pre-construction/${id}`
      } else {
        route = `/projects/${id}`
      }
      return route
    },
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
