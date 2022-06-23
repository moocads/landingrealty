<i18n>
{
  "en":{
    "promo":"AD",
    "articles":"REAL ESTATE ARTICLES",
    "articlesF":"Featured Articles"
  },
  "zh":{
    "promo":"广告",
    "articles":"房产资讯",
    "articlesF":"热点资讯"
  }
}
</i18n>
<template>
  <div id="articles">
    <section class="title">
      <div class="wrapper">
        <h1 data-aos="fade-up">{{$t('articles')}}</h1>
      </div>
    </section>
    <section class="articleList" data-aos="fade-up">
      <div class="wrapper">
        <a-row type="flex" :gutter="[40,0]">
          <a-col :lg="{span:16}" :md="{span:15}" :sm="{span:24}" :xs="{span:24}">
            <div v-for="b in articles" :key="b.id" class="eachArticle">
              <nuxt-link :to="localePath(`/articles/${b.attributes.slug}`)">
                <a-row type="flex" :gutter="[{ xs: 10, sm: 15, md: 25, lg: 25, xl:25 },0]">
                  <a-col :lg="{span:7}" :md="{span:8, offset: 0}" :sm="{span:7, offset: 0}" :xs="{span:7, offset: 0}">
                    <div class="img">
                      <img v-if="b.attributes.thumbnail.data" :src="b.attributes.thumbnail.data.attributes.url" :alt="b.attributes.title">
                    </div>
                  </a-col>
                  <a-col :lg="{span:17}" :md="{span:16, offset: 0}" :sm="{span:17, offset: 0}" :xs="{span:17, offset: 0}">
                    <div class="text">
                      <h3 v-if="$i18n.locale === 'en'">{{b.attributes.title}}</h3>
                      <h3 v-if="$i18n.locale === 'zh'">{{b.attributes.title_zh}}</h3>
                      <span><a-icon type="clock-circle" />  {{b.attributes.date}}</span>
                      <p v-if="$i18n.locale === 'en'">{{b.attributes.blurb}}</p>
                      <p v-if="$i18n.locale === 'zh'">{{b.attributes.blurb_zh}}</p>
                    </div>
                  </a-col>
                </a-row>
              </nuxt-link>
            </div>
          </a-col>
          <a-col :lg="{span:8}" :md="{span:9}" :sm="{span:24}" :xs="{span:24}">
            <div class="featured">
              <h2>
                {{$t('articlesF')}}
              </h2>
              <div class="decoration">
                <div class="dark"></div>
                <div class="light"></div>
              </div>
              <div class="eachFeature" v-for="b in features" :key="b.id">
                <nuxt-link :to="localePath(`/articles/${b.attributes.slug}`)">
                  <a-row type="flex" :gutter="[{ xs: 10, sm: 15, md: 15, lg: 15, xl:15 },0]">
                    <a-col :lg="{span:9}" :md="{span:9}" :sm="{span:7}" :xs="{span:7}">
                      <div class="img">
                        <img v-if="b.attributes.thumbnail.data" :src="b.attributes.thumbnail.data.attributes.url" :alt="b.attributes.title">
                      </div>
                    </a-col>
                    <a-col :lg="{span:15}" :md="{span:15}" :sm="{span:17}" :xs="{span:17}">
                      <div class="text">
                        <h3 v-if="$i18n.locale === 'en'">{{b.attributes.title}}</h3>
                        <h3 v-if="$i18n.locale === 'zh'">{{b.attributes.title_zh}}</h3>
                        <span><a-icon type="clock-circle" />  {{b.attributes.date}}</span>
                      </div>
                    </a-col>
                  </a-row>
                </nuxt-link>
              </div>
            </div>
            <div class="promo">
              <div class="tag">
                <p>{{$t('promo')}}</p>
              </div>
              <img :src="promotion.attributes.promotion.data.attributes.url" alt="Landing Promotion">
            </div>
          </a-col>
        </a-row>
      </div>
    </section>
    <Subscription />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Articles | Landing Realty | A Toronto Real Estate Company"
    };
  },
  async asyncData({$axios}) {
    const allArticles = await $axios.$get('/blogs', {params:{populate: ['thumbnail'] }})
    const featuredArticles = await $axios.$get('/blogs', {params:{populate: ['thumbnail'], filters: {featured: { $eq:true}} }})
    const promo = await $axios.$get('/promo', {params:{populate:'*'}})

    return {
      promotion: promo.data,
      articles: allArticles.data,
      features: featuredArticles.data
    }
  },
  // created() {
  //   console.log(this.promotion)
  // }
}
</script>

<style lang="scss" scoped>
#articles {
  background-color: #fff;
  padding-top: 110px;

  @media(max-width:992px) {
    padding-top: 90px
  }

  .title {
    background-color: #f4f4f4;
    padding: 50px 0;
    h1 {
      text-transform: uppercase;
      color: $navy;
      font-size: 38px;
      font-weight: 900;
      margin-bottom: 0;
    }
  }

  .ant-row, .ant-row-flex {
    height: 100%;

    .ant-col {
      height: 100%;
    }
  }

  .articleList {
    padding: 30px 0;
  }

  .eachArticle {
    overflow: hidden;
    padding: 50px 0;

    &:hover {
      cursor: pointer;

      h3 {
        text-decoration: underline;
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid #D9D9D9;
    }

    .img {
      width: 100%;
      position: relative;
      padding-bottom: 65%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      h3 {
        font-weight: 700;
        font-size: 20px;
        text-transform: capitalize;
        color: $navy;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
      }

      span {
        font-size: 14px;
        color: #88765B;
        display: block;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        color: #212121;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        margin-bottom: 0;
      }
    }

    @media (max-width: 992px) {
      padding: 30px 0;
      .text {
        h3 {
          font-size: 14px;
          -webkit-line-clamp: 2;
        }
        span{
          font-size: 12px;
          -webkit-line-clamp: 1;
        }
        p {
          display: none;
        }
      }
    }
  }

  .featured {
    h2 {
      padding-top: 30px;
      font-size: 20px;
      font-weight: 500;
      color: $navy;
    }

    .decoration {
      display: flex;
      margin-bottom: 30px;

      .dark {
        height: 3px;
        background-color: $navy;
        width: 20%;
      }
      .light {
        height: 3px;
        width: 80%;
        background-color: #d9d9d9;
      }
    }

    .eachFeature {
      margin-bottom: 25px;

      &:hover {
        cursor: pointer;

        h3 {
          text-decoration: underline;
        }
      }

      .img {
        width: 100%;
        // height: 100%;
        position: relative;
        padding-bottom: 65%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h3 {
        color: $navy;
        font-weight: 700;
        font-size: 14px;
        text-transform: capitalize;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
      }
      span {
        font-size: 14px;
        color: #88765B;
        display: block;
      }

      @media (max-width: 768px) {
        .text {
          h3 {
            font-size: 14px;
            -webkit-line-clamp: 2;
          }
          span{
            font-size: 12px;
            -webkit-line-clamp: 1;
          }
          p {
            display: none;
          }
        }
      }
    }
  }

  .promo {
    margin-top: 50px;
    position: relative;

    .tag {
      position: absolute;
      background-color: rgba(black, 0.3);
      padding: 3px 5px 3px 8px;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      right: 0;
      top: 10%;
      
      p {
        color: white;
        margin-bottom: 0;
        font-size: 10px;
      }
    }

    img {
      max-width: 100%;
    }

    @media (max-width: 992px) {
      max-width: 300px;
    }
  }
}
</style>