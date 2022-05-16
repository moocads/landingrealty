<template>
  <div>
    <Preload v-if="!$store.state.preloaded" />
    <section class="sec-landing">
      <div class="sec-content">
        <img id="home-logo" src="/img/logo/logo-text.svg" alt="logo" />
        <!-- <img id="home-logo" src="~/assets/img/home-logo.png" alt="logo" /> -->
        <p>Client First, Client’s Need Is Our # 1 Priority</p>
        <NuxtLink to="/about" class="main-btn">Learn More</NuxtLink>
      </div>
    </section>
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
    <ItemDisplay title="pre-construction" :displayData="this.precon" isHome="true"/>
    <section class="sec-slogen-1">
      <img src="~/assets/img/building-bg-blue.png" alt="" class="fluid-img" />
      <div class="wrapper">
        <h2>Build a culture of real estate investment</h2>
        <h2>Live an exquisite life</h2>
        <h2>Enhance the quality of life</h2>
        <h2>One-stop-shop for Worry-free services</h2>
      </div>
    </section>
    <ItemDisplay title="resales" :displayData="this.resales" isHome="true"/>
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
          <ItemCard
            img="blog-demo-img-01.jpg"
            title="How to invest home"
            content="Lorem ipsum dolor sit amet"
            hideTag
          />
          <ItemCard
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
          />
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
    return {
      precon,
      resales,
    }
  },
  data() {
    return {
      preload: true,
    }
  },
  components: { ItemCard, Subscription },
}
</script>

<style lang="scss" scoped>
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
