<i18n>
{
  "en": {
    "intro":"Landing Realty Inc. Brokerage is a Full-Service real estate company serving Greater Toronto Area and other cities across Ontario, Canada. We provide a wide variety of real estate services to homeowners & investors including residential/commercial resales, pre-construction sales, rentals, property management, and real estate investment.",
    "contactUs":"CONTACT US",
    "articlesF":"FEATURED ARTICLES",
    "links":"USEFUL LINKS",
    "home":"Home",
    "about":"About",
    "articles":"Articles",
    "contact":"Contact",
    "precon":"Pre-Construction",
    "resale":"Resale",
    "callUs":"Call Us",
    "emailUs":"Email Us"
  },
  "zh":{
    "intro":"Landing Realty Inc. 是一家提供全方位服务的房地产公司，服务于大多伦多地区和加拿大安大略省的其他城市。我们为房主和投资者提供各种房地产服务，包括住宅/商业转售、楼花销售、租赁、房产管理和房地产投资。",
    "contactUs":"联系我们",
    "articlesF":"最新资讯",
    "links":"相关链接",
    "home":"主页",
    "about":"关于",
    "projects":"项目",
    "articles":"资讯",
    "contact":"联系",
    "precon":"楼花",
    "resale":"转售",
    "callUs":"电话",
    "emailUs":"邮件"
  },
  "tc":{
    "intro":"Landing Realty Inc. 是一家提供全方位服務的房地產公司，服務於大多倫多地區和加拿大安大略省的其他城市。我們為房主和投資者提供各種房地產服務，包括住宅/商業轉售、樓花銷售、租賃、房產管理和房地產投資。",
    "contactUs":"聯繫我們",
    "articlesF":"最新資訊",
    "links":"相關鏈接",
    "home":"主頁",
    "about":"關於",
    "projects":"項目",
    "articles":"資訊",
    "contact":"聯繫",
    "precon":"樓花",
    "resale":"轉售",
    "callUs":"電話",
    "emailUs":"郵件"
  }
}
</i18n>
<template>
  <footer>
    <div class="footer-container" data-aos="fade-up">
      <a-row type="flex" :gutter="[36,36]">
        <a-col :xl="{span:6}" :lg="{span:12}" :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
          <section>
            <img class="logo" src="~/assets/img/nav-logo.png" alt="" />
            <p class="detail">
              {{$t('intro')}}
            </p>
            <div class="social-icons">
              <a href="https://www.facebook.com/Landing-Realty-Inc-Brokerage-101415599156399/?notif_id=1647380398693885&notif_t=aymt_page_post_reminder_14d_notification&ref=notif" target="_blank">
                <img src="/img/icons/fb.png" alt="Landing Realty Facebook">
              </a>
              <a href="https://www.instagram.com/landingrealty/" target="_blank">
                <img src="/img/icons/ins.png" alt="Landing Realty Instagram">
              </a>
              <a class="wechat">
                <img src="/img/icons/wechat.png" alt="Landing Realty WeChat" @click="wechatQR = !wechatQR; redQR = false">
                <img v-if="wechatQR" class="qr" src="/img/home/wechat-qr.jpg" alt="Landing Realty Wechat QR" @click="wechatQR = !wechatQR; redQR = false">
              </a>
              <a class="red">
                <img src="/img/icons/red.png" alt="Landing Realty Red" @click="redQR = !redQR; wechatQR = false">
                <img v-if="redQR" class="qr" src="/img/home/red-qr.png" alt="Landing Realty Red QR" @click="redQR = !redQR; wechatQR = false">
              </a>
            </div>
          </section>
        </a-col>
        <a-col :xl="{span:8}" :lg="{span:12}" :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
          <section>
            <div class="title">
              <h4>{{$t('articlesF')}}</h4>
            </div>
            <div class="articles">
              <div v-for="b in articles" :key="b.id">
                <NuxtLink class="articles-block" :to="localePath(`/articles/${b.attributes.slug}`)">
                  <img
                    v-if="b.attributes.thumbnail.data"
                    :src="b.attributes.thumbnail.data.attributes.url"
                    :alt="b.attributes.title"
                  />
                  <div class="articles-content">
                    <h5 v-if="$i18n.locale === 'en'">{{ b.attributes.title }}</h5>
                    <h5 v-if="$i18n.locale === 'zh'">{{ b.attributes.title_zh }}</h5>
                    <h5 v-if="$i18n.locale === 'tc'">{{ b.attributes.title_tc }}</h5>
                    <!-- <p>{{b.attributes.blurb}}</p> -->
                  </div>
                </NuxtLink>
              </div>
            </div>
          </section>
        </a-col>
        <a-col :xl="{span:6}" :lg="{span:12}" :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
          <section class="contact-block">
            <div class="title">
              <h4>{{$t('contactUs')}}</h4>
            </div>
            <ul class="contact-list">
              <li class="phone">
                <a href="tel:9056047171">
                  <a-icon type="phone" theme="filled" />
                  <span>
                    (905) 604-7171
                  </span>
                </a>
              </li>
              <li class="fax">
                <a href="tel:9056047171">
                  <a-icon type="printer" theme="filled" />
                  <span>
                    (905) 604-7161
                  </span>
                </a>
              </li>
              <li class="email">
                <a href="mailto:info@landingrealestate.com">
                  <a-icon type="mail" theme="filled" />
                  <span>
                    info@landingrealestate.com
                  </span>
                </a>
              </li>
              <li class="address">
                <a href="https://goo.gl/maps/anNTEMmDad13bScA6">
                  <a-icon type="environment" theme="filled" />
                  <span>
                    145 Royal Crest Ct Unit48, 
                  </span>
                  <span>
                    Markham, ON L3R 9Z4
                  </span>
                </a>
              </li>
            </ul>
            <!-- <a href="https://goo.gl/maps/anNTEMmDad13bScA6">
              <img src="~/assets/img/map.jpg" alt="map" class="img-fluid" />
            </a> -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2877.753929098095!2d-79.3273869!3d43.8401999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d553793c0919%3A0x2caa026b569ff136!2sLanding%20Realty%20Inc.!5e0!3m2!1sen!2sca!4v1654548615104!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </a-col>
        <a-col :xl="{span:4}" :lg="{span:12}" :md="{span:12}" :sm="{span:12}" :xs="{span:24}">
          <section>
            <div class="title">
              <h4>{{$t('links')}}</h4>
            </div>
            <ul class="links">
              <li><NuxtLink :to="localePath('/')">{{$t('home')}}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/about')">{{$t('about')}}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/projects/pre-construction')">{{$t('precon')}}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/projects/resales')">{{$t('resale')}}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/articles')">{{$t('articles')}}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/contact')">{{$t('contact')}}</NuxtLink></li>
            </ul>
          </section>
        </a-col>
      </a-row>
    </div>
    <div class="mobile">
      <div class="contactBar">
        <div class="call">
          <a href="tel:9056047171">
            <a-icon type="phone" theme="filled" style="transform:scaleX(-1)" />
            {{$t('callUs')}}
          </a>
        </div>
        <div class="divide"></div>
        <div class="mail">
          <a href="mailto:info@landingrealestate.com">
            <a-icon type="mail" theme="filled" />
            {{$t('emailUs')}}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      articles: undefined,
      wechatQR: false,
      redQR: false,
    }
  },
  created() {
    this.$axios
      .$get('/blogs', {
        params: {
          populate: ['thumbnail'],
          pagination: {
            start: 0,
            limit: 3,
          },
          filters: {
            featured: {
              $eq:true
            }
          }
        },
      })
      .then((res) => {
        this.articles = res.data
      })
  },
}
</script>

<style lang="scss" scoped>
footer {
  min-height: 100px;
  background-image: url(~assets/img/footer-bg.jpg);
  background-position: center;
  background-size: cover;
  padding: 50px 10vw 100px 10vw;

  p {
    color: white;
  }

  .social-icons {
    display: flex;
    a {
      margin-right: 5px;
      position: relative;
    }

    img {
      width: 50px;
      height: 50px;
    }

    .qr {
      position: absolute;
      left: 100%;
      // bottom: 100%;
      width: 150px;
      height: 150px;
      z-index: 100;

      @media (max-width:992px) {
        left: 50%;
        top: 110%;
        transform: translate(-50%);  
      }
    }
  }

}

.logo, .title {
  height: 60px;
  margin-bottom: 15px;
}

.title {
  display: flex;
  align-items: flex-end;
}

h4, h5 {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
}

h4 {
  text-transform: uppercase;
}

.contact-block {
  .phone, .fax, .email, .address {
    margin-bottom: 5px;
    
    i {
      margin-right: 10px;
    }
  }

  .phone {
    i {
      transform: scaleX(-1);
    }
  }

  .address {
    span:last-of-type {
      display: block;
      padding-left: 25px;
    }
  }
  // img {
  //   // height: 250px;
  //   // width: 80%;
  //   border-radius: 10px;
  // }

  ul.contact-list {
    padding-left: 0px;
    list-style: none;

    li {
      a{
        color: white;
      }
    }
  }

  iframe {
    margin-top: 20px;
    width: 100%;
    height: 150px;
    border-radius: 10px;
  }
}


.articles {
  display: flex;
  flex-direction: column;
}
.articles-block {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 25%;
    height: 50px;
    margin-right: 10px;
    object-fit: cover;
  }

  &:hover {
    h5 {
      text-decoration: underline;
    }
  }
}
.articles-content {
  width: 75%;
  display: flex;
  flex-direction: column;

  h5 {
    font-weight: 700;
    margin-bottom: 0;
    display: -webkit-box;
    line-height: 1.5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
ul.links {
  list-style: none;
  padding-left: 0;
  li {
    margin-bottom: 5px;

    a {
      color: white;
    }
  }
}

.mobile {
  display: none;
  padding-bottom: 70px;
  align-items: center;

  .contactBar {
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: $navy;
    color: white;
    display: flex;
    justify-content: space-evenly;
    height: 70px;
    align-items: center;
    box-shadow: 0 -5px 20px 10px rgb(97, 113, 127, 29%);

    .divide {
      height: 100%;
      width: 1.5px;
      background-color: white;
      opacity: 0.2;
    }

    .call, .mail {
      width: 49%;
      font-size: 20px;
      height: 100%;

      a {
        display: flex;
        width: 100%;
        height: 100%;
        color: inherit;
        justify-content: center;
        align-items: center;
      }

      i {
        margin-right: 15px;
      }
    }
  }

  @media (max-width:992px) {
    display: block;
  }

  @media (max-width: 576px) {
    .contactBar {
      height: 60px;
  
      .call, .mail {
        a {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
