<template>
  <div class="container" id="projectDetails">
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <nuxt-link :to="`/`">
            Home
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <nuxt-link :to="`/projects/${item.attributes.type === 'resell' ? 'resales' : 'pre-construction'}`">
            {{item.attributes.type === 'resell' ? 'Resale' : 'Pre-Construction'}}
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          {{item.attributes.type==='precon' ? item.attributes.title : item.attributes.type==='resell' ? 'MLS ' + item.attributes.mls : ''}}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <br>
      <br>
    </div>
    <div class="wrapper project-main">
      <a-row type="flex" :gutter="[24,24]">
        <a-col :xl="{span:10}" :lg="{span:10}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
          <ProjectDetailsSlider :images="item.attributes.images.data" />
        </a-col>
        <a-col :xl="{span:14}" :lg="{span:14}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
          <div class="info-wrapper">
            <h1>{{ item.attributes.type==='precon' ? item.attributes.title : item.attributes.type==='resell' ? 'MLS ' + item.attributes.mls : ''}}</h1>
            <p>{{ item.attributes.style }}</p>
            <!-- <h4>{{ item.attributes.location }}</h4> -->
            <div class="project-basics">
              <a-row type="flex" :gutter="[12,12]">
                <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                  <span>
                    Starting from
                  </span>
                  <h3>
                    $ {{item.attributes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}
                  </h3>
                </a-col>
                <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                  <span>
                    Maintenance (per sqft)
                  </span>
                  <h3>
                    {{item.attributes.maintenance ? `$ ${item.attributes.maintenance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : "N/A"}}
                  </h3>
                </a-col>
                <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                  <span>
                    Major Intersection
                  </span>
                  <h3>
                    {{item.attributes.address ? item.attributes.address : 'N/A'}}
                  </h3>
                </a-col>
                <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'precon'">
                  <span>
                    Starting Date
                  </span>
                  <h3>
                    {{item.attributes.start ? item.attributes.start : 'N/A'}}
                  </h3>
                </a-col>
                <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'precon'">
                  <span>
                    Closing Date
                  </span>
                  <h3>
                    {{item.attributes.closing ? item.attributes.closing : 'N/A'}}
                  </h3>
                </a-col>
                <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'resell'">
                  <span>
                    Floor
                  </span>
                  <h3>
                    {{item.attributes.floor ? item.attributes.floor : 'N/A'}}
                  </h3>
                </a-col>
                <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'resell'">
                  <span>
                    Suite
                  </span>
                  <h3>
                    {{item.attributes.suite ? item.attributes.suite : 'N/A'}}
                  </h3>
                </a-col>
                <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                  <span>
                    Size
                  </span>
                  <h3>
                    {{item.attributes.size ? item.attributes.size + ' sqft' : 'N/A'}}
                  </h3>
                </a-col>
              </a-row>
            </div>
            <div class="project-detail" v-if="item.attributes.type === 'resell'">
              <div>
                <IconBedroom />
                <p>{{ item.attributes.bed ? item.attributes.bed : 'N/A' }}</p>
              </div>
              <a-divider type="vertical" :style="this.detailDividerStyle" />
              <div>
                <IconBathroom />
                <p>{{ item.attributes.bath ? item.attributes.bath : 'N/A'}}</p>
              </div>
              <a-divider type="vertical" :style="this.detailDividerStyle" />
              <!-- <div>
                <IconArea />
                <p>
                  {{item.attributes.size ? item.attributes.size : "N/A"}}
                </p>
              </div> -->
              <div>
                <img src="/img/projects/sofa.png" alt="Living Room Icon">
                <p>
                  {{item.attributes.livingRoom ? item.attributes.livingRoom : "N/A"}}
                </p>
              </div>
            </div>
            <div class="features-wrapper">
              <h4>features</h4>
              <div class="features">
                <ul>
                  <li v-for="(feature, index) in item.attributes.features" :key="index">{{feature}}</li>
                </ul>
              </div>
              <div class="btn-container">
                <a-row type="flex" :gutter="[12,12]">
                  <a-col :md="{span:12}" :sm="{span:24}">
                    <a href="#" class="main-btn navy"> contact agent</a>
                  </a-col>
                  <a-col :md="{span:12}" :sm="{span:24}" v-if="item.attributes.floorPlan.data">
                    <a :href="item.attributes.floorPlan.data.attributes.url" target="_blank" class="main-btn gray"> floorplan </a>
                  </a-col>
                </a-row>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="project-intro" v-if="item.attributes.type === 'precon'">
      <div class="wrapper">
        <h2>Project Introduction</h2>
        <p>{{item.attributes.description}}</p>
      </div>
    </div>
    <div class="environment">
      <div class="wrapper">
        <h2>Neighborhood</h2>
        <a-row type="flex" :gutter="[24,24]">
          <a-col :md="{span:12}" :sm="{span:24}" :xs="{span:24}">
            <h3>Entertainment</h3>
            <div class="icon-container">
              <div class="icon">
                <img src="/img/projects/eye-solid.svg" alt="Landing Realty See">
                <h4>See</h4>
                <p>{{item.attributes.entertainment ? item.attributes.entertainment.see : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/headphones-simple-solid.svg" alt="Landing Realty Hear">
                <h4>Hear</h4>
                <p>{{item.attributes.entertainment ? item.attributes.entertainment.hear : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/utensils-solid.svg" alt="Landing Realty Taste">
                <h4>Taste</h4>
                <p>{{item.attributes.entertainment ? item.attributes.entertainment.taste : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/champagne-glasses-solid.svg" alt="Landing Realty Play">
                <h4>Play</h4>
                <p>{{item.attributes.entertainment ? item.attributes.entertainment.play : ' '}}</p>
              </div>
            </div>
          </a-col>
          <a-col :md="{span:12}" :sm="{span:24}" :xs="{span:24}">
            <h3>Wellness</h3>
            <div class="icon-container">
              <div class="icon">
                <img src="/img/projects/leaf-solid.svg" alt="Landing Realty Nature">
                <h4>Nature</h4>
                <p>{{item.attributes.wellness ? item.attributes.wellness.nature : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/dumbbell-solid.svg" alt="Landing Realty Workout">
                <h4>Workout</h4>
                <p>{{item.attributes.wellness ? item.attributes.wellness.workout : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/spa-solid.svg" alt="Landing Realty Relax">
                <h4>Relax</h4>
                <p>{{item.attributes.wellness ? item.attributes.wellness.relax : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/heart-pulse-solid.svg" alt="Landing Realty Nourish">
                <h4>Nourish</h4>
                <p>{{item.attributes.wellness ? item.attributes.wellness.nourish : ' '}}</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="recommended">
      <div class="wrapper">
        <h2>Recommended</h2>
        <a-row :gutter="[36,36]">
          <a-col :lg="{span: 8}" :md="{span: 12}" :sm="{span: 24}" v-for="(rec, index) in recommended" :key="index">
            <NuxtLink :to="`/projects/${rec.id}`">
              <ItemCard
                :img="rec.attributes.images.data[0].attributes.url"
                :title="rec.attributes.type === 'precon' ? rec.attributes.title : rec.attributes.type === 'resell' ? 'MLS ' + rec.attributes.mls : ''"
                :tag="rec.attributes.location"
                :content="rec.attributes.price.toString()"
              />
            </NuxtLink>
          </a-col>
        </a-row>
      </div>
    </div>
    <Subscription />
  </div>
</template>
<script>
// import ProjectDetailsSlider from "../../components/ProjectDetailsSlider.vue";
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
      recommended: undefined
    }
  },
  created() {
    // console.log(this.item.attributes.type, this.item.attributes.style)
    this.$axios.$get('/assignments', {
      params: {
        filters: {
          id: {
            $ne: this.item.id
          },
          type: {
            $eq: this.item.attributes.type,
          },
          style: {
            $eq: this.item.attributes.style,
          },
        },
        populate: ['images'],
        pagination: {
          pageSize: 3,
        },
      },
    }).then(res => {
      this.recommended = res.data
    })
  },
  components: {
    // ProjectDetailsSlider
}
}
</script>

<style lang="scss" scoped>
#projectDetails {
  background-color: white;
}

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
    // text-transform: uppercase;
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

  .ant-row-flex {
    width: 100%;
  }
}
.back-btn {
  background-color: $navy;
  border-color: $navy;
  margin-bottom: 30px;
}
.project-main {
  // display: grid;
  // grid-template-columns: 2fr 3fr;
  // gap: 3rem;
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;

  .img-slider {
    max-width: 100%;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;

    p {
      text-transform: uppercase;
      color: #727272;
      font-weight: 600;
      font-size: 18px;
      margin: 15px 0 20px 0;
    }
  }
}
.project-basics {
  // text-align: center;

  span {
    font-size: 14px;
    color: #727272;
  }
  h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    color: $navy;
  }
}

.project-detail {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  background-color: #ececec;
  border-radius: 5px;
  margin: 2rem 0;
  padding: 20px 0 15px 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    svg, img {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
    }
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
    margin-bottom: 0;
  }
}
.features-wrapper {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;

  .features {
    padding: 20px 0;

    ul {
      columns: 3;
      -webkit-columns: 3;
      -moz-columns: 3;

      li {
        margin-bottom: 5px;
      }
    }

  }

  .btn-container {
    a {
      display: block;
      width: 100%;
      font-size: 16px;
    }
  }
}
.project-intro {
  background-color: #F4F4F4;
  padding: 50px 0;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    text-transform: none;
  }
}

.environment {
  background-color: $navy;
  padding: 50px 0 60px 0;

  h2, h3, h4, p {
    color: white;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 30px;
  }

  h3 {
    font-size: 20px;
  }

  .icon-container {
    display: flex;
    margin-top: 30px;
    // justify-content: space-between;
  
    .icon {
      width: 25%;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
  
      img {
        width: 30px;
        height: 30px;
        filter: invert(1);
      }

      h4 {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 16px;
        text-transform: none;
      }

      p {
        line-height: 20px;
        opacity: 0;
        transition: all 0.5s ease;
        font-size: 16px;
      }

      &:hover {
        p {
          opacity: 1;
        }
      }
    }
  }
}

.recommended {
  padding: 50px 0 100px 0;

  h2 {
    margin-bottom: 30px;
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
