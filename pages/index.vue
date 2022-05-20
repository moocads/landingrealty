<template>
  <div>
    <Preload v-if="!$store.state.preloaded" />
    <div id="preloadIndex" scroll="no" class="preloaded">
      <div class="allContainer">
        <div class="elementContainer">
          <!-- <div class="skipContainer">
            <span class="skip" @click="skipPreload">
              SKIP >>
            </span>
          </div> -->
          <div class="logoContainer">
            <svg class="logoSVG" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.1 385.39"><defs></defs><title>logo</title><path class="cls-1" d="M211,408.7l-84-84.06V169.06L211,23.3Zm94.05-94.05V162.39L222.11,306.08v91.51Z" transform="translate(-126.95 -23.3)"/></svg>
            <svg class="logoTxt" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406 168.9"><defs></defs><title>logo-textonly</title><path class="cls-1" d="M13,33.4h7V73.6H46.6v5.7H13Zm159.3,0v46h-5.6L137.3,45V79.4h-7v-46H136l29.4,34.4V33.4Zm27,0H220a32.13,32.13,0,0,1,13.8,2.9,22.34,22.34,0,0,1,9.3,8.1,21.83,21.83,0,0,1,3.3,12,22.07,22.07,0,0,1-3.3,12,22.34,22.34,0,0,1-9.3,8.1A31.81,31.81,0,0,1,220,79.4H199.3Zm20.3,40.2A22.76,22.76,0,0,0,230,71.4a17.16,17.16,0,0,0,7-6,16.88,16.88,0,0,0,2.5-9,16,16,0,0,0-2.5-9,15.28,15.28,0,0,0-7-6,22.76,22.76,0,0,0-10.4-2.2H206.3V73.7h13.3Zm49.6-40.2h7v46h-7Zm76,0v46h-5.7L310,45V79.4h-7v-46h5.7l29.4,34.4V33.4ZM406,56.1h6.7V74a28.5,28.5,0,0,1-8.5,4.4,31.31,31.31,0,0,1-10.1,1.5,29.64,29.64,0,0,1-13.4-3,23.5,23.5,0,0,1-9.3-8.3,21.55,21.55,0,0,1-3.4-12,21.32,21.32,0,0,1,3.4-12,22,22,0,0,1,9.3-8.3,28.39,28.39,0,0,1,13.4-3,28,28,0,0,1,10.7,1.8,23.65,23.65,0,0,1,8.2,5.3l-4.4,4.1a20.21,20.21,0,0,0-14.2-5.3,21.67,21.67,0,0,0-10,2.3,17.11,17.11,0,0,0-7,6.3,17.45,17.45,0,0,0,0,18,16.51,16.51,0,0,0,7,6.3,22,22,0,0,0,10,2.3,21.67,21.67,0,0,0,11.5-3V56.1ZM45.7,159.6,35.2,145.5c-1.4.1-2.3.1-3,.1h-12v14h-7v-46h19c6.3,0,11.4,1.4,14.9,4.2,3.7,2.9,5.5,6.7,5.5,11.8a15.25,15.25,0,0,1-2.7,9,15.76,15.76,0,0,1-7.9,5.5l11.6,15.5ZM42,137.3a9.36,9.36,0,0,0,3.6-7.7,9.09,9.09,0,0,0-3.6-7.7c-2.3-1.8-5.7-2.6-10.1-2.6H20V140H31.9C36.3,140,39.7,139.1,42,137.3Zm204.8-23.7h7v40.2h26.6v5.7H246.9V113.6Zm75,5.8H305v-5.7h40.5v5.7H328.7v40.2h-7l.1-40.2Zm77.8,24.3v15.9h-7v-16l-19.4-30h7.5l15.6,24.2L412,113.6h7ZM85.1,44.9l16.6,28.7H68.6L85.1,44.9m0-11.5-26.6,46h53.1l-26.5-46Zm100.4,91.7,16.6,28.7H169l16.5-28.7m0-11.5-26.6,46H212l-26.5-46Zm-56,0H89.1v5.7h40.4Zm0,40.3H89.1v5.7h40.4Zm0-20.2H89.1v5.7h40.4ZM157.8,187h-5.9v-2.2h14.2V187h-5.9v15h-2.5l.1-15Zm13.8,14.1a8.78,8.78,0,0,1-3.3-12.1,7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1,8.78,8.78,0,0,1,3.3,12.1,8.22,8.22,0,0,1-3.3,3.1,10.59,10.59,0,0,1-9.4,0Zm8.1-1.9a5.66,5.66,0,0,0,2.3-2.3,7.42,7.42,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A7.42,7.42,0,0,0,179.7,199.2Zm21.1,2.8-3.7-5.3h-5.3v5.2h-2.5V184.7H196a8,8,0,0,1,5.3,1.6,5.81,5.81,0,0,1,1.9,4.4,5.29,5.29,0,0,1-1,3.4,5.78,5.78,0,0,1-2.9,2.1l4.1,5.7-2.6.1Zm-1.2-8.3a4.1,4.1,0,0,0,0-5.8,5.51,5.51,0,0,0-3.6-1h-4.2v7.8H196A6.16,6.16,0,0,0,199.6,193.7Zm10.7,7.4A8.78,8.78,0,0,1,207,189a7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1A9,9,0,0,1,223,189a8.66,8.66,0,0,1,1.2,4.5A8.92,8.92,0,0,1,223,198a8.22,8.22,0,0,1-3.3,3.1,9.32,9.32,0,0,1-4.7,1.1A9.08,9.08,0,0,1,210.3,201.1Zm8-1.9a5.66,5.66,0,0,0,2.3-2.3,7.42,7.42,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A7.42,7.42,0,0,0,218.3,199.2Zm24.4-14.4V202h-2.1l-10.4-12.9V202h-2.5V184.8h2.1l10.4,12.9V184.8Zm8.6,2.2h-5.9v-2.2h14.2V187h-5.9v15h-2.5l.1-15Zm13.8,14.1a8.78,8.78,0,0,1-3.3-12.1,7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1,8.78,8.78,0,0,1,3.3,12.1,8.22,8.22,0,0,1-3.3,3.1,9.32,9.32,0,0,1-4.7,1.1A9.84,9.84,0,0,1,265.1,201.1Zm8.3-1.9a5.66,5.66,0,0,0,2.3-2.3,7.73,7.73,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A8.08,8.08,0,0,0,273.4,199.2Z" transform="translate(-13 -33.3)"/></svg>
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
    <section class="sec-slogan-1">
      <img src="~/assets/img/building-bg-blue.png" alt="" class="fluid-img" />
      <div class="wrapper">
        <h2>Build a culture of real estate investment</h2>
        <h2>Live an exquisite life</h2>
        <h2>Enhance the quality of life</h2>
        <h2>One-stop-shop for Worry-free services</h2>
      </div>
    </section>
    <ItemDisplay title="resales" :displayData="this.resales" :isHome="true" />
    <section class="sec-slogan-2">
      <img class="quote1" src="/img/home/quote1.svg" alt="Calvin Deng Quote">
      <img class="quote2" src="/img/home/quote2.svg" alt="Calvin Deng Quote">
      <div class="wrapper flex-col-center">
        <h2>We build a culture of real estate investment.</h2>
        <h5>Calvin Deng</h5>
        <p>CEO/Founder, Broker of Record, FRI, BEc, MBA</p>
      </div>
    </section>
    <section class="sec-landing-news">
      <div class="wrapper flex-col-center">
        <h6>Toronto Real Estate Company</h6>
        <h1>LANDING NEWS</h1>
        <div class="news-grid">
          <NuxtLink v-for="(b, i) in blogs" :key="i" :to="`/news/${b.attributes.slug}`">
            <ItemCard
              :img="b.attributes.thumbnail.data.attributes.url"
              :title="b.attributes.title"
              :content="b.attributes.blurb"
              hideTag
            />
          </NuxtLink>
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
        populate: ['images'],
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
        populate: ['images'],
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
        populate: ['images'],
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
        populate: ['images'],
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
        populate: ['images'],
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
        populate: ['images'],
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
    // background: linear-gradient(100deg, #0B2C42 10%, rgba(#0B2C42, 0.48) 30%,rgba(#0B2C42, 0.68) 50%, rgba(#0B2C42, 0.58) 80%), #163f5a 100%;
    position: relative;
    width: 100%;
    height: 100%;
    // background-size: 300% 300%;
    // animation: gradient 15s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
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
        margin-top: 20px;
        opacity: 1;
        // max-height: 50vh;
        width: 200px;
        .cls-1{fill:#fff;}
      }
      
      .logoSVG {
        // animation: shrinkFade 2s ease-in 6s forwards;
        transform-origin: center;
        // max-height: 50vh;
        // width: 100%;
        width: 100px;
        .cls-1{fill:#fff;}
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

.sec-slogan-1 {
  display: flex;
  flex-direction: row-reverse;
  background-color: $navy;
  position: relative;
  padding: 30px 0;
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

.sec-slogan-2 {
  position: relative;
  background-color: $navy;
  .wrapper {
    color: white;
    padding: 70px 0 60px 0;
    text-align: center;
  }

  .quote1, .quote2 {
    position: absolute;
  }

  .quote1 {
    top: 15%;
    left: 5%;
  }
  .quote2 {
    bottom: 15%;
    right: 5%;
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
  .sec-slogan-1 {
    .fluid-img {
      max-width: 80%;
    }
  }
  .news-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media all and (max-width: $sm) {
  .sec-slogan-1 {
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
