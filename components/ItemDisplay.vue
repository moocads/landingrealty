<template>
  <section class="sec-pre-construction">
    <div class="wrapper">
      <h1>{{ title }}</h1>
      <div>
        <a-tabs class="custom-tab" default-active-key="1" @change="callback">
          <a-tab-pane class="flex-col-center" key="1" tab="Condon">
            <div class="sample-grid">
              <ItemCard title="alias" tag="markham" content="20000" />
              <ItemCard title="FREDERICK" tag="North York" content="20000" />
              <ItemCard
                title="Upper east"
                tag="Richmond hill"
                content="20000"
              />
            </div>
            <a class="main-btn">View All</a>
          </a-tab-pane>
          <a-tab-pane key="2" tab="House" force-render>
            <div class="sample-grid">
              <ItemCard title="alias" tag="markham" content="20000" />
              <ItemCard title="FREDERICK" tag="North York" content="20000" />
              <ItemCard
                title="Upper east"
                tag="Richmond hill"
                content="20000"
              />
            </div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="Townhouse">
            <div class="sample-grid">
              <ItemCard title="alias" tag="markham" content="20000" />
              <ItemCard title="FREDERICK" tag="North York" content="20000" />
              <ItemCard
                title="Upper east"
                tag="Richmond hill"
                content="20000"
              />
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    callback(key) {
      console.log(key)
    },
  },
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
  .sample-grid{
    grid-template-columns: 1fr;
  }
}

</style>
