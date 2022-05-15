<template>
  <section class="sec-pre-construction">
    <div class="wrapper">
      <h1>{{ title }}</h1>
      <div>
        <a-tabs class="custom-tab" default-active-key="1">
          <a-tab-pane
            class="flex-col-center"
            v-for="(type, i) in types"
            :key="i"
            :tab="type"
          >
            <div class="sample-grid">
              <div v-for="(item, index) in items" :key="index">
                <NuxtLink
                  :to="`/projects/${item.id}`"
                  v-if="type === item.attributes.style"
                >
                  <ItemCard
                    :title="item.attributes.title"
                    :tag="item.attributes.location"
                    :content="item.attributes.price.toString()"
                  />
                </NuxtLink>
              </div>

              <!-- <ItemCard title="alias" tag="markham" content="20000" />
              <ItemCard title="FREDERICK" tag="North York" content="20000" />
              <ItemCard
                title="Upper east"
                tag="Richmond hill"
                content="20000"
              /> -->
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <!-- <a v-if="isHome" class="main-btn">View All</a> -->
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
    // isHome: {type: Boolean, default: false}
  },
  data() {
    return {
      slug: {
        precon: 'pre-construction',
        resell: 'resales',
      },
      types: ['condo', 'house', 'townhouse'],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.sec-pre-construction {
  padding: 7rem 0;
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
