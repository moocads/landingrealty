<i18n>
{
  "en":{
    "promo":"AD",
    "articles":"REAL ESTATE ARTICLES",
    "articlesF":"Featured Articles",
    "home":"Home",
    "by":"By",
    "published":"Published"
  },
  "zh":{
    "promo":"广告",
    "articles":"房产资讯",
    "articlesF":"热点资讯",
    "home":"主页",
    "by":"作者",
    "published":"发布日期"
  }
}
</i18n>
<template>
  <div id="articleDetails" data-aos="fade-up">
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <nuxt-link :to="localePath('/')">
            {{$t('home')}}
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <nuxt-link :to="localePath('/articles')">
            {{$t('articles')}}
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-if="$i18n.locale==='en'">
            {{article.attributes.title}}
        </a-breadcrumb-item>
        <a-breadcrumb-item v-if="$i18n.locale==='zh'">
            {{article.attributes.title_zh}}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <section>
        <a-row type="flex" :gutter="[40,50]">
          <a-col :lg="{span:16}" :md="{span:15}" :sm="{span:24}" :xs="{span:24}">
            <div class="articleBody">
              <div class="title">
                <h1 v-if="$i18n.locale==='en'">{{article.attributes.title}}</h1>
                <h1 v-if="$i18n.locale==='zh'">{{article.attributes.title_zh}}</h1>
                <span v-if="$i18n.locale==='en'">{{$t('by')}}: {{article.attributes.author}}</span>
                <span v-if="$i18n.locale==='zh'">{{$t('by')}}: {{article.attributes.author_zh}}</span>
              </div>
              <img v-if="article.attributes.thumbnail.data" :src="article.attributes.thumbnail.data.attributes.url" :alt="article.attributes.title">
              <div v-if="$i18n.locale==='en'" class="htmlContent" v-html="article.attributes.content"></div>
              <div v-if="$i18n.locale==='zh'" class="htmlContent" v-html="article.attributes.content_zh"></div>
              <p class="date"><em>{{$t('published')}}: {{article.attributes.date}}</em></p>
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
                <nuxt-link :to="`/articles/${b.attributes.slug}`">
                  <a-row type="flex" :gutter="[{ xs: 10, sm: 15, md: 15, lg: 15, xl:15 },20]">
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
      </section>
    </div>
    <Subscription />
  </div>
</template>

<script>
export default {
  async asyncData({route, $axios}) {
    const slug = route.params.slug
    const res = await $axios.$get('/blogs', {
      params: {
        filters: {
          slug: {
            $eq: slug
          }
        },
        populate: ['thumbnail'],


      }
    })
    const featuredArticles = await $axios.$get('/blogs', {params:{populate: ['thumbnail'], filters: {featured: { $eq:true}} }})
    const promo = await $axios.$get('/promo', {params:{populate:'*'}})
    return {
      slug,
      article: res.data[0],
      features: featuredArticles.data,
      promotion: promo.data
    }
  },
  // created() {
  //   console.log(this.article)
  // }
}
</script>

<style lang="scss" scoped>
#articleDetails {
  padding-top: 160px;
  background-color: white;

  section {
    margin-top: 50px;
  }

  .articleBody {

    .title {
      border-bottom: 1px solid #d9d9d9;
      padding-bottom: 30px;

      h1 {
        font-weight: 900;
        font-size: 32px;
        line-height: 38px;
        text-transform: uppercase;
        color: $navy;
        margin-bottom: 20px;
      }

      span {
        font-size: 14px;
        line-height: 16px;
        color: #88765B;
        display: block;
        text-transform: uppercase;
      }
    }

    img {
      margin: 30px 0;
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }

    .date {
      text-align: right;
      margin-top: 50px;
      opacity: 0.5;
    }

    @media (min-width:767px) {
      padding-bottom: 50px;
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
      margin-bottom: 30px;

      &:hover {
        cursor: pointer;

        h3 {
          text-decoration: underline;
        }
      }

      img {
        width: 100%;
        height: 100px;
        object-fit: cover;
        margin-bottom: 10px;
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
        margin-bottom: 10px;
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

      @media (max-width: 767px) {
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
  }
}
</style>
<style lang="scss">
.htmlContent {
  img {
    width: 720px;
    max-width: 100%;
    height: 500px;
    object-fit: contain;
    
  };
}
</style>