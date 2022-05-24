<template>
  <section class="item-display">
    <div class="wrapper">
      <h2 v-if="title">{{ title }}</h2>
      <div>
        <a-tabs class="custom-tab" default-active-key="tab0">
          <a-tab-pane
            class="flex-col-center"
            v-for="(items, style,i) in displayData"
            :key="'tab'+i"
            :tab="style"
          >
            <div class="sample-grid">
              <div v-for="(item, index) in items" :key="index">
                <NuxtLink :to="`/projects/${item.id}`">
                  <ItemCard
                    :img="item.attributes.images.data[0].attributes.url"
                    :title="item.attributes.type === 'precon' ? item.attributes.title : item.attributes.type === 'resell' ? 'MLS ' + item.attributes.mls : ''"
                    :tag="item.attributes.location"
                    :content="item.attributes.price.toString()"
                  />
                </NuxtLink>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <NuxtLink v-if="isHome" :to="`/projects/${this.title}`" class="main-btn">
        View All
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
  created() {
    console.log(this.displayData)
  }
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

  @media (max-width:992px) {
    padding: 50px 0 50px 0;
  }
}

.sample-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 27px;
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
