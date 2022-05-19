<template>
  <div class="container" id="projectDetails">
    <div class="wrapper">
      <nuxt-link :to="`/projects/${item.attributes.type === 'resell' ? 'resales' : 'pre-construction'}`">
        <a-button type="primary" class="back-btn">
          Back
        </a-button>
      </nuxt-link>
    </div>
    <div class="wrapper project-main">
      <img src="~/assets/img/sample-img.png" alt="" />
      <div class="info-wrapper">
        <h1 v-if="item.attributes.type==='precon'">{{ item.attributes.title }}</h1>
        <p>{{ item.attributes.style }}</p>
        <!-- <h4>{{ item.attributes.location }}</h4> -->
        <div class="project-basics">
          <a-row type="flex" :gutter="[12,12]">
            <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
              <span>
                Starting from
              </span>
              <h3>
                $ {{item.attributes.price}}
              </h3>
            </a-col>
            <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
              <span>
                Maintenance (per sqft)
              </span>
              <h3>
                {{item.attributes.maintenance ? `$ ${item.attributes.maintenance}` : "N/A"}}
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
          </a-row>
        </div>
        <div class="project-detail" v-if="item.attributes.type === 'resell'">
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
            {{item.attributes.size}}
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
              <a-col :md="{span:12}" :sm="{span:24}" v-if="item.attributes.floorplan">
                <a href="#" class="main-btn gray"> floorplan </a>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
    <div class="project-intro" v-if="item.attributes.type === 'precon'">
      <div class="wrapper">
        <h2>Project Introduction</h2>
        <p>{{item.attributes.description}}</p>
      </div>
    </div>
    <div class="environment">
      <div class="wrapper">
        <h2>Environment</h2>
        <a-row type="flex" :gutter="[24,24]">
          <a-col :md="{span:12}" :sm="{span:24}" :xs="{span:24}">
            <h3>Entertainment</h3>
            <div class="icon-container">
              <div class="icon">
                <div class="placeholder">
                </div>
                <h3>See</h3>
                <p>{{item.attributes.entertainment ? item.attributes.entertainment.see : ' '}}</p>
              </div>
              <div class="icon">
                <div class="placeholder">
                </div>
                <h3>Hear</h3>
                <p>{{item.attributes.entertainment ? item.attributes.entertainment.hear : ' '}}</p>
              </div>
              <div class="icon">
                <div class="placeholder">
                </div>
                <h3>Taste</h3>
                <p>{{item.attributes.entertainment ? item.attributes.entertainment.taste : ' '}}</p>
              </div>
              <div class="icon">
                <div class="placeholder">
                </div>
                <h3>Play</h3>
                <p>{{item.attributes.entertainment ? item.attributes.entertainment.play : ' '}}</p>
              </div>
            </div>
          </a-col>
          <a-col :md="{span:12}" :sm="{span:24}" :xs="{span:24}">
            <h3>Wellness</h3>
            <div class="icon-container">
              <div class="icon">
                <div class="placeholder">
                </div>
                <h3>Nature</h3>
                <p>{{item.attributes.wellness ? item.attributes.wellness.nature : ' '}}</p>
              </div>
              <div class="icon">
                <div class="placeholder">
                </div>
                <h3>Workout</h3>
                <p>{{item.attributes.wellness ? item.attributes.wellness.workout : ' '}}</p>
              </div>
              <div class="icon">
                <div class="placeholder">
                </div>
                <h3>Relax</h3>
                <p>{{item.attributes.wellness ? item.attributes.wellness.relax : ' '}}</p>
              </div>
              <div class="icon">
                <div class="placeholder">
                </div>
                <h3>Nourish</h3>
                <p>{{item.attributes.wellness ? item.attributes.wellness.nourish : ' '}}</p>
              </div>
            </div>
          </a-col>
        </a-row>
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
  created() {
    console.log(this.item)
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
.back-btn {
  background-color: $navy;
  border-color: $navy;
  margin-bottom: 30px;
}
.project-main {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
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

    svg {
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

  h2, h3, p {
    color: white;
  }

  h2 {
    margin-bottom: 30px;
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
  
      .placeholder {
        height: 70px;
        width: 70px;
        background-color: gray;
        margin-bottom: 20px;
      }
      p {
        line-height: 20px;
        opacity: 0;
        transition: all 0.5s ease;
      }

      &:hover {
        p {
          opacity: 1;
        }
      }
    }
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
