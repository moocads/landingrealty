<template>
  <div id="news">
    <section class="title">
      <div class="wrapper">
        <h1>real estate blog</h1>
      </div>
    </section>
    <section class="articleList">
      <div class="wrapper">
        <a-row type="flex" :gutter="[30,40]">
          <a-col :lg="{span:16}" :md="{span:15}" :sm="{span:24}" :xs="{span:24}">
            <div v-for="b in blogs" :key="b.id" class="eachArticle">
              <nuxt-link :to="`/news/${b.attributes.slug}`">
                <a-row type="flex" :gutter="[20,25]">
                  <a-col :lg="{span:7}" :md="{span:7, offset: 0}" :sm="{span:7, offset: 0}" :xs="{span:7, offset: 0}">
                    <div class="img">
                      <img v-if="b.attributes.thumbnail.data" :src="b.attributes.thumbnail.data.attributes.url" :alt="b.attributes.title">
                    </div>
                  </a-col>
                  <a-col :lg="{span:17}" :md="{span:17, offset: 0}" :sm="{span:17, offset: 0}" :xs="{span:17, offset: 0}">
                    <div class="text">
                      <h3>{{b.attributes.title}}</h3>
                      <span><a-icon type="clock-circle" />  {{b.attributes.date}}</span>
                      <p>{{b.attributes.blurb}}</p>
                    </div>
                  </a-col>
                </a-row>
              </nuxt-link>
            </div>
          </a-col>
          <a-col :lg="{span:8}" :md="{span:9}" :sm="{span:24}" :xs="{span:24}">
            <div class="featured">
              <h2>
                Featured Blogs
              </h2>
              <div class="decoration">
                <div class="dark"></div>
                <div class="light"></div>
              </div>
              <div class="eachFeature" v-for="b in features" :key="b.id">
                <nuxt-link :to="`/news/${b.attributes.slug}`">
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const allBlogs = await $axios.$get('/blogs', {params:{populate: ['thumbnail'] }})
    const featuredBlogs = await $axios.$get('/blogs', {params:{populate: ['thumbnail'], filters: {featured: { $eq:true}} }})

    return {
      blogs: allBlogs.data,
      features: featuredBlogs.data
    }
  },
  created() {
    console.log(this.blogs)
  }
}
</script>

<style lang="scss" scoped>
#news {
  background-color: #fff;
  // background-color: #e5e5e5;
  padding-top: 110px;

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
      height: 150px;

      img {
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

      .img {
        height: 125px;
      }

      .text {
        h3 {
          font-size: 16px;
        }
        span, p {
          size: 13px;
        }
      }
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