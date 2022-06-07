<template>
  <div id="articleDetails" data-aos="fade-up">
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <nuxt-link to="/articles">
            Articles
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
            {{article.attributes.title}}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <section>
        <a-row type="flex" :gutter="[40,50]">
          <a-col :lg="{span:16}" :md="{span:15}" :sm="{span:24}" :xs="{span:24}">
            <div class="articleBody">
              <div class="title">
                <h1>{{article.attributes.title}}</h1>
                <span><a-icon type="clock-circle" />  {{article.attributes.date}}</span>
              </div>
              <img v-if="article.attributes.thumbnail.data" :src="article.attributes.thumbnail.data.attributes.url" :alt="article.attributes.title">
              <div v-html="article.attributes.content"></div>
            </div>
          </a-col>
          <a-col :lg="{span:8}" :md="{span:9}" :sm="{span:24}" :xs="{span:24}">
            <div class="featured">
              <h2>
                Featured Articles
              </h2>
              <div class="decoration">
                <div class="dark"></div>
                <div class="light"></div>
              </div>
              <div class="eachFeature" v-for="b in features" :key="b.id">
                <nuxt-link :to="`/articles/${b.attributes.slug}`">
                  <a-row type="flex" :gutter="[15,20]">
                    <a-col :lg="{span:8}" :md="{span:9}" :sm="{span:7}" :xs="{span:7}">
                      <div class="img">
                        <img v-if="b.attributes.thumbnail.data" :src="b.attributes.thumbnail.data.attributes.url" :alt="b.attributes.title">
                      </div>
                    </a-col>
                    <a-col :lg="{span:16}" :md="{span:15}" :sm="{span:17}" :xs="{span:17}">
                      <div class="text">
                        <h3>{{b.attributes.title}}</h3>
                        <span><a-icon type="clock-circle" />  {{b.attributes.date}}</span>
                      </div>
                    </a-col>
                  </a-row>
                </nuxt-link>
              </div>
            </div>
          </a-col>
        </a-row>
      </section>
    </div>
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
        populate: ['thumbnail']
      }
    })
    const featuredArticles = await $axios.$get('/blogs', {params:{populate: ['thumbnail'], filters: {featured: { $eq:true}} }})
    return {
      slug,
      article: res.data[0],
      features: featuredArticles.data
    }
  },
  created() {
    console.log(this.article)
  }
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
        margin-bottom: 30px;
      }

      span {
        font-size: 14px;
        line-height: 16px;
        color: #88765B;
        display: block;
        margin-bottom: 10px;
      }
    }

    img {
      margin: 30px 0;
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }

    @media (min-width:766px) {
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

      @media (max-width: 765px) {
        .img {
          height: 100px;
        }

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
}
</style>