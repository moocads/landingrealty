<template>
  <div>
    <Preload v-if="!$store.state.preloaded" />
    <div id="preloadIndex" scroll="no" class="preloaded">
      <div class="allContainer">
        <!-- <div class="bgContainer">
          </div> -->
        <div class="elementContainer">
          <!-- <div class="skipContainer">
            <span class="skip" @click="skipPreload">
              SKIP >>
            </span>
          </div> -->
          <div class="logoContainer">
            <svg class="logoSVG" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.1 385.39"><defs><style>.cls-1{fill:#fff;}</style></defs><title>logo</title><path class="cls-1" d="M211,408.7l-84-84.06V169.06L211,23.3Zm94.05-94.05V162.39L222.11,306.08v91.51Z" transform="translate(-126.95 -23.3)"/></svg>
            <svg version="1.1" class="logoTxt" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 432 230" style="enable-background:new 0 0 432 230;" xml:space="preserve">
            <style type="text/css">
              .st0{display:none;}
              .st1{display:inline;fill:url(#SVGID_1_);}
              .st2{fill:#FFFFFF;}
            </style>
            <g id="Ref" class="st0">
            </g>
            <g id="Instruction">
            </g>
            <g id="Superceded" class="st0">
            </g>
            <g id="Background" class="st0">
              
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-9.094947e-13" y1="-58" x2="432" y2="-490" gradientTransform="matrix(1 0 0 1 0 288)">
                <stop  offset="0" style="stop-color:#0B2C42"/>
                <stop  offset="0.6667" style="stop-color:#005E76"/>
              </linearGradient>
              <rect y="-202" class="st1" width="432" height="432"/>
            </g>
            <path class="st2" d="M13,33.4h7v40.2h26.6v5.7H13V33.4z M172.3,33.4v46h-5.6L137.3,45v34.4h-7v-46h5.7l29.4,34.4V33.4H172.3z
              M199.3,33.4H220c5.2,0,9.7,1,13.8,2.9c4,1.9,7.1,4.7,9.3,8.1c2.2,3.4,3.3,7.5,3.3,12s-1.1,8.5-3.3,12c-2.2,3.4-5.3,6.2-9.3,8.1
              c-4,1.9-8.6,2.9-13.8,2.9h-20.7V33.4z M219.6,73.6c4,0,7.4-0.7,10.4-2.2c3-1.5,5.3-3.4,7-6c1.6-2.6,2.5-5.6,2.5-9
              c0-3.4-0.8-6.4-2.5-9c-1.6-2.6-4-4.7-7-6c-3-1.5-6.4-2.2-10.4-2.2h-13.3v34.5H219.6z M269.2,33.4h7v46h-7V33.4z M345.2,33.4v46h-5.7
              L310,45v34.4h-7v-46h5.7l29.4,34.4V33.4H345.2z M406,56.1h6.7v17.9c-2.5,1.9-5.2,3.3-8.5,4.4c-3.3,1.1-6.6,1.5-10.1,1.5
              c-4.9,0-9.4-1-13.4-3c-4-2.1-7.1-4.8-9.3-8.3c-2.3-3.6-3.4-7.5-3.4-12s1.1-8.5,3.4-12c2.3-3.6,5.3-6.4,9.3-8.3c4-2.1,8.5-3,13.4-3
              c4,0,7.5,0.5,10.7,1.8c3.1,1.2,5.9,3,8.2,5.3l-4.4,4.1c-4-3.6-8.6-5.3-14.2-5.3c-3.7,0-7.1,0.8-10,2.3c-3,1.5-5.3,3.6-7,6.3
              s-2.5,5.7-2.5,9s0.8,6.3,2.5,9c1.6,2.7,4,4.8,7,6.3c3,1.5,6.3,2.3,10,2.3c4.4,0,8.2-1,11.5-3V56.1L406,56.1L406,56.1z M45.7,159.6
              l-10.5-14.1c-1.4,0.1-2.3,0.1-3,0.1h-12v14h-7v-46h19c6.3,0,11.4,1.4,14.9,4.2c3.7,2.9,5.5,6.7,5.5,11.8c0,3.6-1,6.6-2.7,9
              c-1.9,2.5-4.5,4.4-7.9,5.5l11.6,15.5L45.7,159.6L45.7,159.6z M42,137.3c2.3-1.8,3.6-4.4,3.6-7.7c0-3.3-1.2-5.9-3.6-7.7
              c-2.3-1.8-5.7-2.6-10.1-2.6H20V140h11.9C36.3,140,39.7,139.1,42,137.3z M246.8,113.6h7v40.2h26.6v5.7h-33.5V113.6z M321.8,119.4H305
              v-5.7h40.5v5.7h-16.8v40.2h-7L321.8,119.4L321.8,119.4z M399.6,143.7v15.9h-7v-16l-19.4-30h7.5l15.6,24.2l15.7-24.2h7L399.6,143.7z
              M85.1,44.9l16.6,28.7H68.6L85.1,44.9 M85.1,33.4l-26.6,46h53.1L85.1,33.4L85.1,33.4z M185.5,125.1l16.6,28.7h-33.1L185.5,125.1
              M185.5,113.6l-26.6,46H212L185.5,113.6L185.5,113.6z M129.5,113.6H89.1v5.7h40.4V113.6z M129.5,153.9H89.1v5.7h40.4V153.9z
              M129.5,133.7H89.1v5.7h40.4V133.7z M157.8,187h-5.9v-2.2h14.2v2.2h-5.9V202h-2.5L157.8,187L157.8,187z M171.6,201.1
              c-1.4-0.8-2.5-1.8-3.3-3.1c-0.8-1.4-1.2-2.9-1.2-4.5s0.4-3.1,1.2-4.5c0.8-1.4,1.9-2.5,3.3-3.1c1.4-0.8,3-1.1,4.7-1.1
              c1.8,0,3.3,0.4,4.7,1.1c1.4,0.8,2.5,1.8,3.3,3.1c0.8,1.4,1.2,2.9,1.2,4.5c0,1.6-0.4,3.1-1.2,4.5c-0.8,1.4-1.9,2.3-3.3,3.1
              c-1.4,0.8-3,1.1-4.7,1.1S173,201.9,171.6,201.1z M179.7,199.2c1-0.5,1.8-1.4,2.3-2.3s0.8-2.2,0.8-3.4s-0.3-2.3-0.8-3.4
              c-0.5-1-1.4-1.8-2.3-2.3c-1-0.5-2.2-0.8-3.4-0.8c-1.2,0-2.5,0.3-3.4,0.8c-1.1,0.5-1.8,1.4-2.5,2.3c-0.5,1-0.8,2.2-0.8,3.4
              s0.3,2.3,0.8,3.4c0.5,1,1.4,1.8,2.5,2.3c1,0.5,2.2,0.8,3.4,0.8C177.5,200,178.8,199.7,179.7,199.2z M200.8,202l-3.7-5.3
              c-0.4,0-0.8,0-1.1,0h-4.2v5.2h-2.5v-17.2h6.7c2.2,0,4,0.5,5.3,1.6c1.2,1.1,1.9,2.6,1.9,4.4c0,1.4-0.3,2.5-1,3.4
              c-0.7,1-1.6,1.6-2.9,2.1l4.1,5.7L200.8,202L200.8,202z M199.6,193.7c0.8-0.7,1.2-1.6,1.2-2.9s-0.4-2.2-1.2-2.9c-0.8-0.7-2.1-1-3.6-1
              h-4.2v7.8h4.2C197.5,194.6,198.8,194.4,199.6,193.7z M210.3,201.1c-1.4-0.8-2.5-1.8-3.3-3.1c-0.8-1.4-1.2-2.9-1.2-4.5
              s0.4-3.1,1.2-4.5c0.8-1.4,1.9-2.5,3.3-3.1c1.4-0.8,3-1.1,4.7-1.1c1.8,0,3.3,0.4,4.7,1.1c1.4,0.8,2.5,1.8,3.3,3.1s1.2,2.9,1.2,4.5
              c0,1.6-0.4,3.1-1.2,4.5c-0.8,1.4-1.9,2.3-3.3,3.1c-1.4,0.8-3,1.1-4.7,1.1S211.6,201.9,210.3,201.1z M218.3,199.2
              c1-0.5,1.8-1.4,2.3-2.3s0.8-2.2,0.8-3.4s-0.3-2.3-0.8-3.4c-0.5-1-1.4-1.8-2.3-2.3c-1-0.5-2.2-0.8-3.4-0.8s-2.5,0.3-3.4,0.8
              c-1.1,0.5-1.8,1.4-2.5,2.3c-0.5,1-0.8,2.2-0.8,3.4s0.3,2.3,0.8,3.4c0.5,1,1.4,1.8,2.5,2.3c1,0.5,2.2,0.8,3.4,0.8
              S217.4,199.7,218.3,199.2z M242.7,184.8V202h-2.1l-10.4-12.9V202h-2.5v-17.2h2.1l10.4,12.9v-12.9H242.7z M251.3,187h-5.9v-2.2h14.2
              v2.2h-5.9V202h-2.5L251.3,187L251.3,187z M265.1,201.1c-1.4-0.8-2.5-1.8-3.3-3.1c-0.8-1.4-1.2-2.9-1.2-4.5s0.4-3.1,1.2-4.5
              c0.8-1.4,1.9-2.5,3.3-3.1c1.4-0.8,3-1.1,4.7-1.1c1.8,0,3.3,0.4,4.7,1.1c1.4,0.8,2.5,1.8,3.3,3.1c0.8,1.4,1.2,2.9,1.2,4.5
              c0,1.6-0.4,3.1-1.2,4.5c-0.8,1.4-1.9,2.3-3.3,3.1c-1.4,0.8-3,1.1-4.7,1.1C268.2,202.2,266.6,201.9,265.1,201.1z M273.4,199.2
              c1-0.5,1.8-1.4,2.3-2.3c0.5-1,0.8-2.2,0.8-3.4s-0.3-2.3-0.8-3.4c-0.5-1-1.4-1.8-2.3-2.3c-1-0.5-2.2-0.8-3.4-0.8
              c-1.2,0-2.5,0.3-3.4,0.8c-1.1,0.5-1.8,1.4-2.5,2.3c-0.5,1-0.8,2.2-0.8,3.4s0.3,2.3,0.8,3.4c0.5,1,1.4,1.8,2.5,2.3
              c1,0.5,2.2,0.8,3.4,0.8C271.2,200,272.3,199.7,273.4,199.2z"/>
            <g id="RAW_-_DO_NOT_CHANGE" class="st0">
            </g>
            </svg>
          </div>
          <p class="heroTxt">Client First, Client’s Need Is Our # 1 Priority</p>
          <NuxtLink class="heroBtn main-btn" to="/about">Learn More</NuxtLink>
        </div>
      </div>
    </div>
    <!-- <section class="sec-landing">
    </section> -->
    <section class="sec-intro">
      <div class="wrapper">
        <div>
          <p>Toronto Real Estate Company</p>
          <h3>EXTRAORDINARY, LANDED</h3>
          <p>
            Landing Realty Inc. Brokerage is a Full-Service real estate company
            serving Greater Toronto Area and other cities across Ontario,
            Canada. We provide a wide variety of real estate services to
            homeowners & investors including residential/commercial resales,
            pre-construction sales, rentals, property management, and real
            estate investment.
          </p>
          <NuxtLink to="/about" class="main-btn">Learn More</NuxtLink>
        </div>
      </div>
    </section>
    <Subscription />
    <ItemDisplay
      title="pre-construction"
      :displayData="this.precon"
      :isHome="true"
    />
    <section class="sec-slogen-1">
      <img src="~/assets/img/building-bg-blue.png" alt="" class="fluid-img" />
      <div class="wrapper">
        <h2>Build a culture of real estate investment</h2>
        <h2>Live an exquisite life</h2>
        <h2>Enhance the quality of life</h2>
        <h2>One-stop-shop for Worry-free services</h2>
      </div>
    </section>
    <ItemDisplay title="resales" :displayData="this.resales" :isHome="true" />
    <section class="sec-slogen-2">
      <div class="wrapper flex-col-center">
        <h2>We build a culture of real estate investment.</h2>
        <h5>Calvin Deng</h5>
        <p>CEO/Founder, Broker of Record, FRI, BEc, MBA</p>
      </div>
    </section>
    <section class="sec-landing-news">
      <div class="wrapper flex-col-center">
        <h6>Toronto Real Estate Company</h6>
        <h1>Landing news</h1>
        <div class="news-grid">
          <NuxtLink v-for="(b, i) in blogs" :key="i" :to="`/news/${b.attributes.slug}`">
            <ItemCard
              img="blog-demo-img-01.jpg"
              :title="b.attributes.title"
              content="Lorem ipsum dolor sit amet"
              hideTag
            />
          </NuxtLink>

          <!-- <ItemCard
            img="blog-demo-img-02.jpg"
            title="How to invest home"
            content="Lorem ipsum dolor sit amet"
            hideTag
          />
          <ItemCard
            img="blog-demo-img-03.jpg"
            title="How to invest home"
            content="Lorem ipsum dolor sit amet"
            hideTag
          />
          <ItemCard
            img="blog-demo-img-04.jpg"
            title="How to invest home"
            content="Lorem ipsum dolor sit amet"
            hideTag
          /> -->
        </div>
        <NuxtLink to="news" class="main-btn">Learn More</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
import ItemCard from '~/components/ItemCard.vue'
import Subscription from '~/components/Subscription.vue'
export default {
  async asyncData({ $axios }) {
    const res1 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'precon',
          },
          style: {
            $eq: 'condo',
          },
        },
        pagination: {
          pageSize: 3,
        },
      },
    })
    const res2 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'precon',
          },
          style: {
            $eq: 'house',
          },
        },
        pagination: {
          pageSize: 3,
        },
      },
    })
    const res3 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'precon',
          },
          style: {
            $eq: 'townhouse',
          },
        },
        pagination: {
          pageSize: 3,
        },
      },
    })
    const res4 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'resell',
          },
          style: {
            $eq: 'condo',
          },
        },
        pagination: {
          pageSize: 3,
        },
      },
    })
    const res5 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'resell',
          },
          style: {
            $eq: 'house',
          },
        },
        pagination: {
          pageSize: 3,
        },
      },
    })
    const res6 = await $axios.$get('/assignments', {
      params: {
        filters: {
          type: {
            $eq: 'resell',
          },
          style: {
            $eq: 'townhouse',
          },
        },
        pagination: {
          pageSize: 3,
        },
      },
    })
    let precon = {
      condo: res1.data,
      house: res2.data,
      townhouse: res3.data,
    }
    let resales = {
      condo: res4.data,
      house: res5.data,
      townhouse: res6.data,
    }
    const allBlogs = await $axios.$get('/blogs', {
      params: {
        populate: ['thumbnail'],
        pagination: {
          start: 0,
          limit: 4,
        },
      },
    })
    return {
      precon,
      resales,
      blogs: allBlogs.data,
    }
  },
  data() {
    return {
      preload: true,
    }
  },
  components: { ItemCard, Subscription },
  created() {
    setTimeout(() => {
      this.$store.commit('setPreload', true)
    }, 10000)
  },
  methods: {
    skipPreload () {
      this.$store.commit('setPreload', true)
    }
  }
}
</script>

<style lang="scss" scoped>
#preloadIndex {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: #fff;
  // animation: fade 1.5s ease-in 9s forwards;

  // .skipContainer {
  //   position: fixed;
  //   top: 30px;
  //   right: 30px;
  //   z-index: 1001;
  //   opacity: 0;
  //   animation: fadeIn 0.5s ease-in 2s forwards, fade 0.5s ease-in 8.5s forwards;

  //   .skip {
  //     transition: all 0.3s ease;
  //     opacity: 0.3;
  //     font-weight: 700;
  //     color: white;
  //     font-size: 14px;
    
  //     &:hover {
  //       cursor: pointer;
  //       opacity: 0.8;
  //     }
  //   }
  // }

  .allContainer {
    background: linear-gradient(105.4deg, #0B2C42 21.18%, rgba(11, 44, 66, 0.48) 91.93%);
    position: relative;
    width: 100%;
    height: 100%;
  }

  .bgContainer {
    background: linear-gradient(105.4deg, #0B2C42 21.18%, rgba(11, 44, 66, 0.48) 91.93%);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    animation: fade 1s ease-in 9s forwards;
  }

  .elementContainer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;

    .heroTxt {
      font-size: 18px;
      color: white;
      margin-bottom: 30px;
    }

    .logoContainer {
      padding-top: 60px;
      margin-bottom: 30px;
      max-height: 100vh;
      max-width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform-origin: center;
      
      .logoTxt {
        opacity: 1;
        // max-height: 50vh;
        width: 200px;
      }
      
      .logoSVG {
        // animation: shrinkFade 2s ease-in 6s forwards;
        transform-origin: center;
        // max-height: 50vh;
        // width: 100%;
        width: 100px;
      }
      
      .logoSVG path {
        stroke: white;
        stroke-width: 0.5;
        stroke-dasharray: 1000;
        fill-opacity: 1;
        stroke-opacity: 0;
        stroke-dashoffset: 0;
        transform-origin: center;
        max-height: 50vh;
      }
    }
  }
}



.sec-landing {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    105.4deg,
    #0b2c42 21.18%,
    rgba(11, 44, 66, 0.48) 91.93%
  );
  mix-blend-mode: multiply;
  width: 100%;
  padding: 10%;
  min-height: 100vh;
}
.sec-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: auto;
    margin-bottom: 30px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 4rem;
  }
}

.sec-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 15vw;
  .wrapper > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  p {
    font-size: 16px;
    line-height: 27px;
  }
  h3 {
    font-size: 24px;
    line-height: 28.13px;
    font-weight: 700;
  }
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
}

h2 {
  font-size: 34px;
  font-weight: 900;
  line-height: 39.84px;
  color: white;
}

.sec-slogen-1 {
  display: flex;
  flex-direction: row-reverse;
  background-color: $navy;
  position: relative;
  .fluid-img {
    max-width: 50%;
  }
  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      margin: 0;
    }
    h2:nth-child(odd) {
      color: #b3b3b3;
    }
  }
}

h5 {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
}

.sec-slogen-2 {
  background-color: $navy;
  .wrapper {
    color: white;
    padding: 5rem 0 3rem;
    text-align: center;
  }
}

h6 {
  font-size: 18px;
  line-height: 21px;
}

.sec-landing-news {
  padding: 4rem 0;
  color: $navy;
  h6 {
    color: $navy;
  }
}
.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin: 3rem 0;
  width: 100%;
}

@media all and (max-width: $lg) {
  .sec-subscribe {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

@media all and (max-width: $md) {
  .sec-subscribe {
    display: flex;
    flex-direction: column-reverse;
    .left-block {
      position: static;
      display: flex;
      justify-content: center;
      img {
        position: static;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      label {
        margin-bottom: 0.5rem;
        text-align: center;
      }
    }
  }
  .sample-grid {
    grid-template-columns: 1fr;
  }
  .sec-slogen-1 {
    .fluid-img {
      max-width: 80%;
    }
  }
  .news-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media all and (max-width: $sm) {
  .sec-slogen-1 {
    height: 550px;
    .fluid-img {
      max-width: 100%;
    }
  }
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
