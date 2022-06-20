<i18n>
{
  "en": {
    "slogan":"Client First, Client's Need Is Our # 1 Priority",
    "learn":"Learn More",
    "realEstate":"Toronto Real Estate Company",
    "extraordinary":"EXTRAORDINARY, LANDED",
    "intro":"Landing Realty Inc. Brokerage is a Full-Service real estate company serving Greater Toronto Area and other cities across Ontario, Canada. We provide a wide variety of real estate services to homeowners & investors including residential/commercial resales, pre-construction sales, rentals, property management, and real estate investment.",
    "slogan2-1":"Build a culture of real estate investment",
    "slogan2-2":"Live an exquisite life",
    "slogan2-3":"Enhance the quality of life",
    "slogan2-4":"One-stop-shop for Worry-free services",
    "quote-1":"We build a culture of real estate investment.",
    "quote-2":"Calvin Deng",
    "quote-3":"CEO/Founder, Broker of Record, FRI, BEc, MBA",
    "articles":"LANDING ARTICLES"
  },
  "zh":{
    "slogan":"客户至上，客户的需求是我们的第一要务",
    "learn":"了解更多",
    "realEstate":"多伦多房地产公司",
    "extraordinary":"异国他乡，落地生根",
    "intro":"Landing Realty Inc. 是一家提供全方位服务的房地产公司，服务于大多伦多地区和加拿大安大略省的其他城市。我们为房主和投资者提供各种房地产服务，包括住宅/商业转售、楼花销售、租赁、房地产管理和房地产投资。",
    "slogan2-1":"创建房地产投资文化",
    "slogan2-2":"过上精致生活",
    "slogan2-3":"提升生活品质",
    "slogan2-4":"一站式无忧服务",
    "quote-1":"我们创建了一种房地产投资的文化。",
    "quote-2":"邓翀",
    "quote-3":"大麦置业CEO、安省持牌房产经纪、多伦多地产院士、MBA、经济学学士",
    "articles":"地产资讯"
  }
}
</i18n>
<template>
  <div>
    <Preload v-if="!$store.state.preloaded" />
    <div id="preloadIndex" scroll="no" class="preloaded">
      <div class="allContainer">
        <canvas width="2" height="2"></canvas>
        <div class="elementContainer">
          <div class="logoContainer">
            <svg class="logoSVG" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.1 385.39"><defs></defs><title>logo</title><path class="cls-1" d="M211,408.7l-84-84.06V169.06L211,23.3Zm94.05-94.05V162.39L222.11,306.08v91.51Z" transform="translate(-126.95 -23.3)"/></svg>
            <svg class="logoTxt" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406 168.9"><defs></defs><title>logo-textonly</title><path class="cls-1" d="M13,33.4h7V73.6H46.6v5.7H13Zm159.3,0v46h-5.6L137.3,45V79.4h-7v-46H136l29.4,34.4V33.4Zm27,0H220a32.13,32.13,0,0,1,13.8,2.9,22.34,22.34,0,0,1,9.3,8.1,21.83,21.83,0,0,1,3.3,12,22.07,22.07,0,0,1-3.3,12,22.34,22.34,0,0,1-9.3,8.1A31.81,31.81,0,0,1,220,79.4H199.3Zm20.3,40.2A22.76,22.76,0,0,0,230,71.4a17.16,17.16,0,0,0,7-6,16.88,16.88,0,0,0,2.5-9,16,16,0,0,0-2.5-9,15.28,15.28,0,0,0-7-6,22.76,22.76,0,0,0-10.4-2.2H206.3V73.7h13.3Zm49.6-40.2h7v46h-7Zm76,0v46h-5.7L310,45V79.4h-7v-46h5.7l29.4,34.4V33.4ZM406,56.1h6.7V74a28.5,28.5,0,0,1-8.5,4.4,31.31,31.31,0,0,1-10.1,1.5,29.64,29.64,0,0,1-13.4-3,23.5,23.5,0,0,1-9.3-8.3,21.55,21.55,0,0,1-3.4-12,21.32,21.32,0,0,1,3.4-12,22,22,0,0,1,9.3-8.3,28.39,28.39,0,0,1,13.4-3,28,28,0,0,1,10.7,1.8,23.65,23.65,0,0,1,8.2,5.3l-4.4,4.1a20.21,20.21,0,0,0-14.2-5.3,21.67,21.67,0,0,0-10,2.3,17.11,17.11,0,0,0-7,6.3,17.45,17.45,0,0,0,0,18,16.51,16.51,0,0,0,7,6.3,22,22,0,0,0,10,2.3,21.67,21.67,0,0,0,11.5-3V56.1ZM45.7,159.6,35.2,145.5c-1.4.1-2.3.1-3,.1h-12v14h-7v-46h19c6.3,0,11.4,1.4,14.9,4.2,3.7,2.9,5.5,6.7,5.5,11.8a15.25,15.25,0,0,1-2.7,9,15.76,15.76,0,0,1-7.9,5.5l11.6,15.5ZM42,137.3a9.36,9.36,0,0,0,3.6-7.7,9.09,9.09,0,0,0-3.6-7.7c-2.3-1.8-5.7-2.6-10.1-2.6H20V140H31.9C36.3,140,39.7,139.1,42,137.3Zm204.8-23.7h7v40.2h26.6v5.7H246.9V113.6Zm75,5.8H305v-5.7h40.5v5.7H328.7v40.2h-7l.1-40.2Zm77.8,24.3v15.9h-7v-16l-19.4-30h7.5l15.6,24.2L412,113.6h7ZM85.1,44.9l16.6,28.7H68.6L85.1,44.9m0-11.5-26.6,46h53.1l-26.5-46Zm100.4,91.7,16.6,28.7H169l16.5-28.7m0-11.5-26.6,46H212l-26.5-46Zm-56,0H89.1v5.7h40.4Zm0,40.3H89.1v5.7h40.4Zm0-20.2H89.1v5.7h40.4ZM157.8,187h-5.9v-2.2h14.2V187h-5.9v15h-2.5l.1-15Zm13.8,14.1a8.78,8.78,0,0,1-3.3-12.1,7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1,8.78,8.78,0,0,1,3.3,12.1,8.22,8.22,0,0,1-3.3,3.1,10.59,10.59,0,0,1-9.4,0Zm8.1-1.9a5.66,5.66,0,0,0,2.3-2.3,7.42,7.42,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A7.42,7.42,0,0,0,179.7,199.2Zm21.1,2.8-3.7-5.3h-5.3v5.2h-2.5V184.7H196a8,8,0,0,1,5.3,1.6,5.81,5.81,0,0,1,1.9,4.4,5.29,5.29,0,0,1-1,3.4,5.78,5.78,0,0,1-2.9,2.1l4.1,5.7-2.6.1Zm-1.2-8.3a4.1,4.1,0,0,0,0-5.8,5.51,5.51,0,0,0-3.6-1h-4.2v7.8H196A6.16,6.16,0,0,0,199.6,193.7Zm10.7,7.4A8.78,8.78,0,0,1,207,189a7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1A9,9,0,0,1,223,189a8.66,8.66,0,0,1,1.2,4.5A8.92,8.92,0,0,1,223,198a8.22,8.22,0,0,1-3.3,3.1,9.32,9.32,0,0,1-4.7,1.1A9.08,9.08,0,0,1,210.3,201.1Zm8-1.9a5.66,5.66,0,0,0,2.3-2.3,7.42,7.42,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A7.42,7.42,0,0,0,218.3,199.2Zm24.4-14.4V202h-2.1l-10.4-12.9V202h-2.5V184.8h2.1l10.4,12.9V184.8Zm8.6,2.2h-5.9v-2.2h14.2V187h-5.9v15h-2.5l.1-15Zm13.8,14.1a8.78,8.78,0,0,1-3.3-12.1,7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1,8.78,8.78,0,0,1,3.3,12.1,8.22,8.22,0,0,1-3.3,3.1,9.32,9.32,0,0,1-4.7,1.1A9.84,9.84,0,0,1,265.1,201.1Zm8.3-1.9a5.66,5.66,0,0,0,2.3-2.3,7.73,7.73,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A8.08,8.08,0,0,0,273.4,199.2Z" transform="translate(-13 -33.3)"/></svg>
          </div>
          <p class="heroTxt">{{$t('slogan')}}</p>
          <NuxtLink class="heroBtn main-btn" :to="localePath('/about')">{{$t('learn')}}</NuxtLink>
        </div>
      </div>
    </div>
    <section class="sec-intro">
      <div class="wrapper">
        <div data-aos="fade-up">
          <h6>{{$t('realEstate')}}</h6>
          <h3>{{$t('extraordinary')}}</h3>
          <p>
            {{$t('intro')}}
          </p>
          <NuxtLink :to="localePath('/about')" class="main-btn">{{$t('learn')}}</NuxtLink>
        </div>
      </div>
    </section>
    <Subscription />
    <ItemDisplay
      title="pre-construction"
      :displayData="this.precon"
      :isHome="true"
      data-aos="fade-up"
    />
    <section class="sec-slogan-1">
      <img src="~/assets/img/building-bg-blue.png" alt="" class="fluid-img" />
      <div class="wrapper" data-aos="fade-up">
        <h2>{{$t('slogan2-1')}}</h2>
        <h2>{{$t('slogan2-2')}}</h2>
        <h2>{{$t('slogan2-3')}}</h2>
        <h2>{{$t('slogan2-4')}}</h2>
      </div>
    </section>
    <ItemDisplay title="resales" :displayData="this.resales" :isHome="true" data-aos="fade-up" />
    <section class="sec-slogan-2">
      <img class="quote1" src="/img/home/quote1.svg" alt="Calvin Deng Quote">
      <img class="quote2" src="/img/home/quote2.svg" alt="Calvin Deng Quote">
      <div class="wrapper flex-col-center" data-aos="fade-up">
        <h2>{{$t('quote-1')}}</h2>
        <h5>{{$t('quote-2')}}</h5>
        <p>{{$t('quote-3')}}</p>
      </div>
    </section>
    <section class="sec-landing-articles">
      <div class="wrapper flex-col-center" data-aos="fade-up">
        <h6>{{$t('realEstate')}}</h6>
        <h1>{{$t('articles')}}</h1>
        <div class="articles-grid">
          <NuxtLink v-for="(b, i) in articles" :key="i" :to="`/articles/${b.attributes.slug}`">
            <ItemCard
              :img="b.attributes.thumbnail.data.attributes.url"
              :title="$i18n.locale === 'en' ? b.attributes.title : $i18n.locale === 'zh' ? b.attributes.title_zh : ''"
              :content="b.attributes.blurb"
              hideTag
            />
          </NuxtLink>
        </div>
        <NuxtLink :to="localePath('/articles')" class="main-btn">{{$t('learn')}}</NuxtLink>
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
    const allArticles = await $axios.$get('/blogs', {
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
      articles: allArticles.data,
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
  },
  // mounted() {
  //   const canvas = document.querySelector('canvas');
  //   const ctx = canvas.getContext('2d');

  //   function Pixel( x, y ) {
  //     this.x = x;
  //     this.y = y;
  //     // this.hue = Math.floor( Math.random() * 360 );
  //     this.opacity = Math.floor( Math.random() * 100 )
  //     let direction = Math.random() > 0.5 ? -1 : 1;
  //     // let direction = 1;
  //     // this.velocity = ( Math.random() * 10 ) * 0.01 * direction;
  //     this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;

  //     console.log(this.velocity)
  //   }

  //   Pixel.prototype.update = function() {
  //     // this.hue += this.velocity;
  //     this.opacity += this.velocity;
  //     // console.log(this.hue, this.opacity)
  //     let direction = Math.random() > 0.5 ? -1 : 1;
  //     // this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
  //     this.velocity = Math.random() * direction;
  //     // console.log(this.velocity)
  //   };

  //   Pixel.prototype.render = function( ctx ) {
  //     // let hue = Math.round( this.hue );
  //     // let hue = this.hue;
  //     let opacity = this.opacity;
  //     // ctx.fillStyle = `rgba(11,44,66, ${opacity / 100})`;
  //     // ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
  //     ctx.fillStyle = `hsl(204, 100%, ${Math.floor(opacity)}%)`;
  //     ctx.fillRect( this.x, this.y, 1, 1 );
  //     // console.log(
  //     //   // 'hue', (Math.floor(hue / 360 * 100)),
  //     //   'opacity', (opacity / 100)
  //     // )
  //   }

  //   let pixels = [
  //     new Pixel( 0, 0 ),
  //     new Pixel( 1, 0 ),
  //     new Pixel( 0, 1 ),
  //     new Pixel( 1, 1 ),
  //   ];

  //   function animate() {
  //     pixels.forEach( function( pixel ) {
  //       pixel.update();
  //       pixel.render( ctx );
  //     });
  //     requestAnimationFrame( animate );
  //   }

  //   animate();
  // }
}
</script>

<style lang="scss" scoped>
#preloadIndex {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: #fff;


  .allContainer {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(105.4deg, #0B2C42 20%, rgba(11, 44, 66, 0.78),rgba(11, 44, 66, 0.58),rgba(11, 44, 66, 0.78), #0B2C42,#0B2C42,rgba(11, 44, 66, 0.88), rgba(11, 44, 66, 0.68), rgba(11, 44, 66, 0.48));
    // background: linear-gradient(100deg, #0B2C42 10%, rgba(#0B2C42, 0.48) 30%,rgba(#0B2C42, 0.68) 50%, rgba(#0B2C42, 0.58) 80%), #163f5a 100%;
    background-size: 400% 400%;
    animation: gradient 60s linear infinite;

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
    canvas {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      transform: scale(2);
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

h6 {
  font-size: 18px;
  line-height: 21px;
  color: $navy;
  font-weight: 300;
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
    margin: 20px 0 35px 0;
  }
  h3 {
    font-size: 24px;
    line-height: 28.13px;
    font-weight: 700;
    margin-bottom: 0;
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

  h2, h5, p {
    position: relative;
    z-index: 10;
  }
}

.sec-landing-articles {
  padding: 4rem 0;
  color: $navy;
}
.articles-grid {
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
  .articles-grid {
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
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
