<i18n>
{
  "en":{
    "n":"North",
    "ne":"Northeast",
    "e":"East",
    "se":"Southeast",
    "s":"South",
    "sw":"Southwest",
    "w":"West",
    "nw":"Northwest",
    "coming": "Coming Soon",
    "sale": "On Sale Now",
    "final": "Final Release",
    "sold": "Sold Out",
    "soldOver": "Sold Over Asking"
  },
  "zh":{
    "n":"北",
    "ne":"东-北",
    "e":"东",
    "se":"东-南",
    "s":"南",
    "sw":"西-南",
    "w":"西",
    "nw":"西-北",
    "coming": "即将上线",
    "sale": "正在卖",
    "final": "最后几家",
    "sold": "卖完了",
    "soldOver": "高价卖出"
  }
}
</i18n>
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
    <div class="project-main">
      <div class="wrapper">
        <a-row type="flex" :gutter="[{xl: 60, lg: 30, md: 0, sm: 0, xs: 0},24]">
          <a-col :xl="{span:10}" :lg="{span:10}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <ProjectDetailsSlider :images="item.attributes.images.data" />
          </a-col>
          <a-col :xl="{span:14}" :lg="{span:14}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <div class="info-wrapper">
              <h1>{{ item.attributes.type==='precon' ? item.attributes.title : item.attributes.type==='resell' ? 'MLS ' + item.attributes.mls : ''}}</h1>
              <span class="propertyStyle">{{ item.attributes.style }}</span>
              <!-- <h4>{{ item.attributes.location }}</h4> -->
              <div class="project-basics">
                <a-row type="flex" :gutter="[15,20]">
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
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'resell'">
                    <span>
                      Basements
                    </span>
                    <h3>
                      {{item.attributes.basement ? item.attributes.basement : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'resell'">
                    <span>
                      Exposure
                    </span>
                    <h3>
                      {{item.attributes.exposure ? $t(item.attributes.exposure) : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                    <span>
                      Sale Status
                    </span>
                    <h3>
                      {{item.attributes.status ? $t(item.attributes.status) : 'N/A'}}
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
                <div class="deposit" v-if="item.attributes.type === 'precon'">
                  <h4>deposit structure</h4>
                  <p>{{item.attributes.deposit ? item.attributes.deposit : 'N/A'}}</p>
                </div>
                <div class="btn-container">
                  <a-row type="flex" :gutter="[12,12]">
                    <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                      <a href="#" class="main-btn navy" style="border-radius: 5px;">contact agent</a>
                    </a-col>
                    <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}" v-if="item.attributes.floorPlan.data">
                      <a :href="item.attributes.floorPlan.data.attributes.url" target="_blank" class="main-btn gray" style="border-radius: 5px;"> floorplan </a>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="project-intro" v-if="item.attributes.type === 'precon'">
      <div class="wrapper">
        <h2>Project Introduction</h2>
        <p>{{item.attributes.description}}</p>
      </div>
    </div>
    <div class="amenities">
      <div class="wrapper">
        <h2>Neighborhood</h2>
        <a-row type="flex" :gutter="[{xs: 0, sm:15, md:50, lg: 50, xl:50}, 30]">
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
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
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
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
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <h3>Area</h3>
            <div class="icon-container">
              <div class="icon">
                <img src="/img/projects/transit.SVG" alt="Landing Realty Transit">
                <h4>Transit</h4>
                <p>{{item.attributes.area ? item.attributes.area.transit : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/shopping.SVG" alt="Landing Realty Shopping">
                <h4>Shopping</h4>
                <p>{{item.attributes.area ? item.attributes.area.shopping : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/school.SVG" alt="Landing Realty School">
                <h4>Schools</h4>
                <p>{{item.attributes.area ? item.attributes.area.school : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/hospital.SVG" alt="Landing Realty Hospital">
                <h4>Hospitals</h4>
                <p>{{item.attributes.area ? item.attributes.area.hospital : ' '}}</p>
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
          <a-col :xl="{span: 6}" :lg="{span: 6}" :md="{span: 12}" :sm="{span: 12}" :xs="{span: 24}" v-for="(rec, index) in recommended" :key="index">
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
import saleStatus from '~/utils/saleStatus'
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
      saleStatus
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
          pageSize: 4,
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
  }

  h1 {
    font-weight: 900;
  }

  h2 {
    font-weight: 600;

    @media (max-width:768px) {
      font-size: 34px;
    }
  }
  h3 {
    font-size: 28px;
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
  margin-bottom: 50px;

  .img-slider {
    max-width: 100%;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;

    .propertyStyle {
      text-transform: uppercase;
      color: #727272;
      font-weight: 600;
      font-size: 18px;
      margin: 10px 0 15px 0;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
}
.project-basics {
  // text-align: center;

  span {
    font-size: 14px;
    color: #727272;
  }
  h3 {
    margin-top: 0px;
    font-size: 18px;
    font-weight: 600;
    color: $navy;

    
    @media(max-width: 768px) {
      font-size: 16px;
    }
  }
}

.project-detail {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  background-color: #ececec;
  border-radius: 5px;
  margin: 30px 0 0 0;
  padding: 15px 0 10px 0;

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
    margin-bottom: 0 !important;
    color: #727272;
  }
}

.features-wrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .features {
    padding: 15px 0 25px 0;

    ul {
      columns: 4;
      -webkit-columns: 4;
      -moz-columns: 4;
      padding-left: 20px;
      list-style: none;

      li {
        margin-bottom: 5px;
        position: relative;

        &::before {
          content: "\2022"; 
          position: absolute;
          font-weight: bold;
          width: 20px; 
          left: -12px;
          opacity: 0.5;
        }
      }

      @media (max-width: 1200px) and (min-width: 992px) {
        columns: 3;
        -webkit-columns: 3;
        -moz-columns: 3;
      }

      @media (max-width: 768px) {
        columns: 3;
        -webkit-columns: 3;
        -moz-columns: 3;
      }

      @media (max-width: 576px) {
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
      }
    }

  }

  .deposit {
    margin-bottom: 30px;
    
    p {
      font-size: 14px;
      font-weight: 300;
      text-transform: none;
      padding: 15px 0;
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

.amenities {
  background-color: $navy;
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

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

  .ant-row-flex {
    width: 105%;

    @media (max-width:992px) {
      width: 100%;
    }
  }

  .icon-container {
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
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
        font-size: 15px;
        padding: 0 10px;
        width: 150%;
      }

      &:hover {
        p {
          opacity: 0.7;
        }
      }
    }

    @media (max-width: 992px) {
      .icon {        
        p {
          width: 100%;
          font-size: 13px;
          opacity: 0.7;
        }
      }

    }

    @media(max-width: 768px) {
      .icon {
        width:50%;
        margin-bottom: 30px;
      }
    }
  }
}

.recommended {
  padding: 50px 0 100px 0;

  h2 {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 30px 0 60px 0;
  }
}

@media all and (max-width: $md) {
  .wrapper {
    grid-template-columns: 1fr;
    // padding: 0 2rem;
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
    // text-align: center;
  }
  .features {
    text-align: left;
  }
}
</style>
