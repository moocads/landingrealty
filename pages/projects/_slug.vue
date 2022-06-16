<i18n>
{
  "en":{
    "home":"Home",
    "resell":"Resale",
    "precon":"Pre-Construction",
    "start":"Starting from",
    "maintenance":"Maintenance/sqft",
    "intersection":"Major Intersection",
    "starting":"Starting Date",
    "closing":"Closing Date",
    "floor":"Floor",
    "suite":"Suite",
    "size":"Size",
    "basements":"Basements",
    "exposure":"Exposure",
    "status":"Sale Status",
    "features":"Features",
    "see":"See",
    "hear":"Hear",
    "taste":"Taste",
    "play":"Play",
    "wellness":"Wellness",
    "nature":"Nature",
    "workout":"Workout",
    "relax":"Relax",
    "nourish":"Nourish",
    "area":"Area",
    "transit":"Transit",
    "shopping":"Shopping",
    "schools":"Schools",
    "hospitals":"Hospitals",
    "recommended":"Recommended",
    "intro":"Project Introduction",
    "neighborhood":"Neighborhood",
    "deposit":"Deposit Structure",
    "depositL":"Canadian/PR",
    "depositI":"International",
    "contact":"CONTACT AGENT",
    "floorplan":"FLOORPLAN",
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
    "home":"主页",
    "resell":"转售",
    "precon":"楼花",
    "start":"起价",
    "maintenance":"管理费/平方尺",
    "intersection":"主要枢纽",
    "starting":"动工日期",
    "closing":"交接日期",
    "floor":"楼层",
    "suite":"单元号",
    "size":"面积",
    "basements":"地下室",
    "exposure":"朝向",
    "status":"出售状态",
    "features":"设施",
    "Elevator":"电梯",
    "Gym":"健身房",
    "Building Storage":"储物室",
    "Locker":"储物柜",
    "Pets":"允许宠物",
    "Garage":"车库",
    "Dog Care":"狗狗设施",
    "Game Room":"游戏室",
    "Pool":"游泳池",
    "Building Laundry":"洗衣房",
    "Concierge":"前台",
    "BBQ":"烧烤台",
    "Rooftop":"天台",
    "Bike Storage":"自行车库",
    "Lounge":"休息室",
    "Playground":"儿童设施",
    "entertainment":"娱乐",
    "see":"视觉享受",
    "hear":"听觉享受",
    "taste":"味觉享受",
    "play":"日常享受",
    "wellness":"家康养生",
    "nature":"接触自然",
    "workout":"健身场所",
    "relax":"身心放松",
    "nourish":"滋补养身",
    "area":"周围地区",
    "transit":"公共交通",
    "shopping":"日常购物",
    "schools":"学校教育",
    "hospitals":"医疗设施",
    "recommended":"推荐",
    "intro":"项目介绍",
    "neighborhood":"周边设施",
    "deposit":"付款流程",
    "depositL":"加拿大公民及永久居民",
    "depositI":"非加拿大公民及永久居民",
    "contact":"联系经纪",
    "floorplan":"户型图",
    "n":"北",
    "ne":"东-北",
    "e":"东",
    "se":"东-南",
    "s":"南",
    "sw":"西-南",
    "w":"西",
    "nw":"西-北",
    "coming": "即将上线",
    "sale": "在售",
    "final": "尾盘在售",
    "sold": "售罄",
    "soldOver": "高价卖出"
  }
}
</i18n>
<template>
  <div class="container" id="projectDetails">
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <nuxt-link :to="localePath(`/`)">
            {{$t('home')}}
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <nuxt-link :to="localePath(`/projects/${item.attributes.type === 'resell' ? 'resales' : 'pre-construction'}`)">
            {{$t(item.attributes.type)}}
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-if="$i18n.locale === 'en'">
          {{item.attributes.type==='precon' ? item.attributes.title : item.attributes.type==='resell' ? 'MLS ' + item.attributes.mls : ''}}
        </a-breadcrumb-item>
        <a-breadcrumb-item v-if="$i18n.locale === 'zh'">
          {{item.attributes.type==='precon' ? item.attributes.title_zh : item.attributes.type==='resell' ? 'MLS ' + item.attributes.mls : ''}}
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
              <h1 v-if="$i18n.locale === 'en'">{{ item.attributes.type==='precon' ? item.attributes.title : item.attributes.type==='resell' ? 'MLS ' + item.attributes.mls : ''}}</h1>
              <h1 v-if="$i18n.locale === 'zh'">{{ item.attributes.type==='precon' ? item.attributes.title_zh : item.attributes.type==='resell' ? 'MLS ' + item.attributes.mls : ''}}</h1>
              <span class="propertyStyle">{{ item.attributes.style }}</span>
              <!-- <h4>{{ item.attributes.location }}</h4> -->
              <div class="project-basics">
                <a-row type="flex" :gutter="[15,20]">
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                    <span>
                      {{$t('start')}}
                    </span>
                    <h3>
                      $ {{item.attributes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                    <span>
                      {{$t('maintenance')}}
                    </span>
                    <h3>
                      {{item.attributes.maintenance ? `$ ${item.attributes.maintenance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : "N/A"}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                    <span>
                      {{$t('intersection')}}
                    </span>
                    <h3>
                      {{item.attributes.address ? item.attributes.address : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'precon'">
                    <span>
                      {{$t('starting')}}
                    </span>
                    <h3>
                      {{item.attributes.start ? item.attributes.start : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'precon'">
                    <span>
                      {{$t('closing')}}
                    </span>
                    <h3>
                      {{item.attributes.closing ? item.attributes.closing : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'resell'">
                    <span>
                      {{$t('floor')}}
                    </span>
                    <h3>
                      {{item.attributes.floor ? item.attributes.floor : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'resell'">
                    <span>
                      {{$t('suite')}}
                    </span>
                    <h3>
                      {{item.attributes.suite ? item.attributes.suite : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                    <span>
                      {{$t('size')}}
                    </span>
                    <h3>
                      {{item.attributes.size ? item.attributes.size + ' sqft' : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'resell'">
                    <span>
                      {{$t('basements')}}
                    </span>
                    <h3>
                      {{item.attributes.basement ? item.attributes.basement : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}" v-if="item.attributes.type === 'resell'">
                    <span>
                      {{$t('exposure')}}
                    </span>
                    <h3>
                      {{item.attributes.exposure ? $t(item.attributes.exposure) : 'N/A'}}
                    </h3>
                  </a-col>
                  <a-col :lg="{span: 8}" :md="{span: 8}" :sm="{span: 12}" :xs="{span:12}">
                    <span>
                      {{$t('status')}}
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
                <h4>{{$t('features')}}</h4>
                <div class="features">
                  <ul>
                    <li v-for="(feature, index) in item.attributes.features" :key="index">{{$t(feature)}}</li>
                  </ul>
                </div>
                <div class="deposit" v-if="item.attributes.type === 'precon'">
                  <h4>{{$t('deposit')}}</h4>
                  <a-row :gutter="[30,30]">
                    <a-col :sm="{span:12}" :xs="{span:24}">
                      <h6><strong>{{$t('depositL')}}</strong></h6>
                      <p v-if="$i18n.locale==='en'" v-html="item.attributes.deposit ? item.attributes.deposit : 'N/A'"></p>
                      <p v-if="$i18n.locale==='zh'" v-html="item.attributes.deposit_zh ? item.attributes.deposit_zh : 'N/A'"></p>
                    </a-col>
                    <a-col :sm="{span:12}" :xs="{span:24}">
                      <h6><strong>{{$t('depositI')}}</strong></h6>
                      <p v-if="$i18n.locale==='en'" v-html="item.attributes.depositIntl ? item.attributes.depositIntl : ''"></p>
                      <p v-if="$i18n.locale==='zh'" v-html="item.attributes.depositIntl_zh ? item.attributes.depositIntl_zh : ''"></p>
                    </a-col>
                  </a-row>
                </div>
                <div class="btn-container">
                  <a-row type="flex" :gutter="[12,12]">
                    <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
                      <a href="#" class="main-btn navy" style="border-radius: 5px;">{{$t('contact')}}</a>
                    </a-col>
                    <a-col :md="{span:12}" :sm="{span:12}" :xs="{span:24}" v-if="item.attributes.floorPlan.data">
                      <a target="_blank" class="main-btn gray" style="border-radius: 5px;" @click="floorPlanModal = true"> {{$t('floorplan')}} </a>
                      <a-modal v-model="floorPlanModal" :footer="null">
                        <h3 style="color:#0b2c42; font-size: 20px;">Floorplans Available</h3>
                        <br>
                        <a v-for="(file, index) in item.attributes.floorPlan.data" :key="index" style="color:#0b2c42; text-decoration: underline; display: block" :href="file.attributes.url" target="_blank"><a-icon type="file"></a-icon>  {{file.attributes.name}}</a>
                      </a-modal>
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
        <h2>{{$t('intro')}}</h2>
        <p v-if="$i18n.locale === 'en'">{{item.attributes.description}}</p>
        <p v-if="$i18n.locale === 'zh'">{{item.attributes.description_zh}}</p>
      </div>
    </div>
    <div class="amenities">
      <div class="wrapper">
        <h2>{{$t('neighborhood')}}</h2>
        <a-row type="flex" :gutter="[{xs: 0, sm:15, md:50, lg: 50, xl:50}, 30]">
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <h3>{{$t('entertainment')}}</h3>
            <div class="icon-container">
              <div class="icon">
                <img src="/img/projects/eye-solid.svg" alt="Landing Realty See">
                <h4>{{$t('hear')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.entertainment ? item.attributes.entertainment.see : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.entertainment ? item.attributes.entertainment.see_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/headphones-simple-solid.svg" alt="Landing Realty Hear">
                <h4>{{$t('hear')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.entertainment ? item.attributes.entertainment.hear : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.entertainment ? item.attributes.entertainment.hear_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/utensils-solid.svg" alt="Landing Realty Taste">
                <h4>{{$t('taste')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.entertainment ? item.attributes.entertainment.taste : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.entertainment ? item.attributes.entertainment.taste_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/champagne-glasses-solid.svg" alt="Landing Realty Play">
                <h4>{{$t('play')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.entertainment ? item.attributes.entertainment.play : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.entertainment ? item.attributes.entertainment.play_zh : ' '}}</p>
              </div>
            </div>
          </a-col>
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <h3>{{$t('wellness')}}</h3>
            <div class="icon-container">
              <div class="icon">
                <img src="/img/projects/leaf-solid.svg" alt="Landing Realty Nature">
                <h4>{{$t('nature')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.wellness ? item.attributes.wellness.nature : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.wellness ? item.attributes.wellness.nature_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/dumbbell-solid.svg" alt="Landing Realty Workout">
                <h4>{{$t('workout')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.wellness ? item.attributes.wellness.workout : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.wellness ? item.attributes.wellness.workout_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/spa-solid.svg" alt="Landing Realty Relax">
                <h4>{{$t('relax')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.wellness ? item.attributes.wellness.relax : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.wellness ? item.attributes.wellness.relax_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/heart-pulse-solid.svg" alt="Landing Realty Nourish">
                <h4>{{$t('nourish')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.wellness ? item.attributes.wellness.nourish : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.wellness ? item.attributes.wellness.nourish_zh : ' '}}</p>
              </div>
            </div>
          </a-col>
          <a-col :lg="{span:12}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <h3>{{$t('area')}}</h3>
            <div class="icon-container">
              <div class="icon">
                <img src="/img/projects/transit.SVG" alt="Landing Realty Transit">
                <h4>{{$t('area')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.area ? item.attributes.area.transit : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.area ? item.attributes.area.transit_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/shopping.SVG" alt="Landing Realty Shopping">
                <h4>{{$t('shopping')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.area ? item.attributes.area.shopping : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.area ? item.attributes.area.shopping_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/school.SVG" alt="Landing Realty School">
                <h4>{{$t('schools')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.area ? item.attributes.area.school : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.area ? item.attributes.area.school_zh : ' '}}</p>
              </div>
              <div class="icon">
                <img src="/img/projects/hospital.SVG" alt="Landing Realty Hospital">
                <h4>{{$t('hospitals')}}</h4>
                <p v-if="$i18n.locale === 'en'">{{item.attributes.area ? item.attributes.area.hospital : ' '}}</p>
                <p v-if="$i18n.locale === 'zh'">{{item.attributes.area ? item.attributes.area.hospital_zh : ' '}}</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="recommended">
      <div class="wrapper">
        <h2>{{$t('recommended')}}</h2>
        <a-row :gutter="[36,36]">
          <a-col :xl="{span: 6}" :lg="{span: 6}" :md="{span: 12}" :sm="{span: 12}" :xs="{span: 24}" v-for="(rec, index) in recommended" :key="index">
            <NuxtLink :to="localePath(`/projects/${rec.id}`)">
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
      recommended: undefined,
      floorPlanModal: false 
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
  h6 {
    margin-top: 10px;
    font-size: 16px;
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
      padding-bottom: 15px;
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
