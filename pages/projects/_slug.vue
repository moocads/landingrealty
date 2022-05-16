<template>
  <div class="container">
    <div class="wrapper">
      <img src="~/assets/img/sample-img.png" alt="" />
      <div class="info-wrapper">
        <h1>{{ item.attributes.title }}</h1>
        <p>{{ item.attributes.style }}</p>
        <h4>{{ item.attributes.location }}</h4>
        <h2>$ {{ item.attributes.price }}</h2>
        <div class="project-detail">
          <div>
            <IconBedroom />
            {{ item.attributes.bed }}
          </div>
          <a-divider type="vertical" :style="this.detailDividerStyle" />
          <div>
            <IconBathroom />
            {{ item.attributes.bath }}
          </div>
          <a-divider type="vertical" :style="this.detailDividerStyle" />
          <div>
            <IconArea />
            <!-- {{ item.attributes.area }} -->
            2000ft
          </div>
        </div>
        <div class="features-wrapper">
          <h4>features</h4>
          <div class="project-detail features">
            <ul>
              <li>Doorman</li>
              <li>Elevator</li>
              <li>Pets</li>
              <li>Bike Storage</li>
            </ul>
            <a-divider type="vertical" :style="this.featuresDividerStyle" />
            <ul>
              <li>Rooftop</li>
              <li>Gym</li>
              <li>Children's Playroom</li>
              <li>Concierge</li>
            </ul>
            <a-divider type="vertical" :style="this.featuresDividerStyle" />
            <ul>
              <li>Dog Care</li>
              <li>Lounge</li>
              <li>Building Storage</li>
            </ul>
          </div>
          <a href="#" class="main-btn navy">contact agent</a>
        </div>
      </div>
    </div>
    <Subscription />
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailDividerStyle:
        'height: 40px; background-color: #0b2c42; margin: auto',
      featuresDividerStyle:
        'height: 100%; background-color: #d9d9d9; margin: auto',
    }
  },
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
.container {
  padding: 5rem 0 0;
  h1,
  h2,
  h4,
  p {
    margin-bottom: 0;
  }
  h1,
  h2,
  h4 {
    color: $navy;
  }
  h1,
  h2 {
    font-size: 38px;
    font-weight: 900;
  }
  h2 {
    font-weight: 600;
  }
  h4 {
    text-transform: uppercase;
    font-size: 22px;
  }
  p {
    text-transform: capitalize;
    font-size: 16px;
  }
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
}
.info-wrapper {
  display: flex;
  flex-direction: column;
}
.project-detail {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  background-color: #ececec;
  border-radius: 5px;
  margin: 2rem 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 26px;
  }
  div:not(.ant-divider) {
    padding: 0.5rem 0;
  }
  ul {
    color: #727272;
  }
  &.features {
    background-color: transparent;
  }
}
.features-wrapper {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;

  .features {
    margin: 1rem 0 2rem;
  }
}

@media all and (max-width: $md) {
  .wrapper {
    grid-template-columns: 1fr;
    img {
      margin: 0 auto;
    }
  }
}
</style>
