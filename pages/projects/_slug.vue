<template>
  <div class="container">
    <a-breadcrumb class="wrapper">
      <a-breadcrumb-item>
        <NuxtLink to="/projects/pre-construction"> Pre-construction </NuxtLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        {{ item.attributes.title }}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-content wrapper">
      <img src="~/assets/img/sample-img.png" alt="" />
      <section class="info-wrapper">
        <h1>{{ item.attributes.title }}</h1>
        <h5>{{ item.attributes.style }}</h5>
        <div class="basic-info">
          <div>
            <p>Starting from</p>
            <h5>$ 990,000</h5>
          </div>
          <div>
            <p>Maintenance Fee (Monthly)</p>
            <h5>$ 1,200</h5>
          </div>
          <div>
            <p>Major Intersection</p>
            <h5>Yonge st & Bloor St.</h5>
          </div>
          <div>
            <p>Starting Date</p>
            <h5>2022-07-05</h5>
          </div>
          <div>
            <p>Closing Date</p>
            <h5>2023-07-05</h5>
          </div>
        </div>
        <!-- <h4>{{ item.attributes.location }}</h4>
        <h2>$ {{ item.attributes.price }}</h2> -->
        <div class="project-detail">
          <div>
            <IconBedroom />
            <p>{{ item.attributes.bed }}</p>
          </div>
          <a-divider type="vertical" :style="this.detailDividerStyle" />
          <div>
            <IconBathroom />
            <p>{{ item.attributes.bath }}</p>
          </div>
          <a-divider type="vertical" :style="this.detailDividerStyle" />
          <div>
            <IconArea />
            <!-- {{ item.attributes.area }} -->
            <p>2000~3000</p>
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
          <div class="btn-group">
            <a href="#" class="main-btn navy">contact agent</a>
            <a href="#" class="main-btn grey">FLOORPLAN</a>
          </div>
        </div>
      </section>
    </div>
    <section class="project-intro">
      <div class="wrapper">
        <h3>Project Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit
          congue cursus eget sed mi ultrices auctor. Aliquam at quis mi donec.
          Lorem ultricies feugiat pretium amet imperdiet id donec nisl. Diam
          tortor etiam aliquam tellus neque faucibus. Feugiat in odio elementum
          risus. Eget nibh malesuada sollicitudin risus feugiat dolor,
          vestibulum vulputate. At tincidunt non proin ut id sit mauris quam
          curabitur.
        </p>
      </div>
    </section>
    <section class="amentites">
      <div class="wrapper">
        <h3>AMENITIES</h3>
        <div class="amenities-grid">
          <div>
            <h4>Culture</h4>
            <div class="amenity">
              <div>See</div>
              <div>Hear</div>
              <div>Read</div>
              <div>Watch</div>
            </div>
          </div>
          <a-divider type="vertical" :style="this.amenitiesDividerStyle" />
          <div>
            <h4>Wellness</h4>
            <div class="amenity">
              <div>See</div>
              <div>Hear</div>
              <div>Read</div>
              <div>Watch</div>
            </div>
          </div>
          <div>
            <h4>Pets</h4>
            <div class="amenity">
              <div>See</div>
              <div>Hear</div>
              <div>Read</div>
            </div>
          </div>
          <a-divider type="vertical" :style="this.amenitiesDividerStyle" />
          <div>
            <h4>Culinary</h4>
            <div class="amenity">
              <div>See</div>
              <div>Hear</div>
              <div>Read</div>
              <div>Watch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      amenitiesDividerStyle:
        'height: 90%; background-color: #white; margin: auto',
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
  h3,
  h5,
  p {
    margin-bottom: 0;
  }
  h1,
  h2,
  h3,
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
  h3 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 700;
  }
  h4 {
    text-transform: uppercase;
    font-size: 22px;
  }
  h5 {
    text-transform: uppercase;
    font-size: 18px;
    color: $grey;
  }
  p {
    text-transform: capitalize;
    font-size: 16px;
  }
}
.main-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
}
.info-wrapper {
  display: flex;
  flex-direction: column;
}
.basic-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
  div {
    display: flex;
    flex-direction: column;
    p {
      font-size: 14px;
    }
    h5 {
      color: $navy;
    }
  }
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
  p {
    font-size: 20px;
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
.btn-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.project-intro {
  padding: 3rem 0;
  background-color: #f4f4f4;
}
.amentites {
  padding: 3rem 0;
  background-color: $navy;
  color: white;
  h3,
  h4 {
    color: white;
  }
}
.amenities-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
}
.amenity {
  display: flex;
  margin-bottom: 0.5rem;
  div {
    margin-right: 0.5rem;
  }
}
@media all and (max-width: $md) {
  .wrapper {
    grid-template-columns: 1fr;
    padding: 0 2rem;
    img {
      margin: 0 auto;
    }
  }
  .btn-group {
    grid-template-columns: 1fr;
  }
  .basic-info {
    grid-template-columns: 1fr 1fr;
  }
}

@media all and (max-width: $sm) {
  .wrapper {
    padding: 0;
  }
  .info-wrapper {
    text-align: center;
  }
  .features {
    text-align: left;
  }
}
</style>
