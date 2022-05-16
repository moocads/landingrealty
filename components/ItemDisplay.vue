<template>
  <section class="sec-pre-construction">
    <div class="wrapper">
      <h1>{{ title }}</h1>
      <div>
        <a-tabs class="custom-tab" default-active-key="tab0">
          <a-tab-pane
            class="flex-col-center"
            v-for="(items, style,i) in this.displayData"
            :key="'tab'+i"
            :tab="style"
          >
            <div class="sample-grid">
              <div v-for="(item, index) in items" :key="index">
                <NuxtLink :to="`/projects/${item.id}`">
                  <ItemCard
                    :title="item.attributes.title"
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
  methods: {},
  created() {
    console.log(this.displayData)
  },
}
</script>

<style lang="scss" scoped>
.sec-pre-construction {
  padding: 7rem 0;
  .main-btn {
    display: block;
    margin: auto;
    width: 200px;
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

h1 {
  font-size: 38px;
  line-height: 45px;
  color: $navy;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
}

@media all and (max-width: $md) {
  .sample-grid {
    grid-template-columns: 1fr;
  }
}
</style>
