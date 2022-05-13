<template>
  <div id="blogDetails">
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <nuxt-link to="/news">
            News
          </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
            {{blog.attributes.title}}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <section>
        <a-row type="flex" :gutter="[40,50]">
          <a-col :lg="{span:18}" :md="{span:24}" :sm="{span:24}" :xs="{span:24}">
            <div class="blogBody">
              <div class="title">
                <h1>{{blog.attributes.title}}</h1>
                <span><a-icon type="clock-circle" />  {{blog.attributes.date}}</span>
              </div>
              <img v-if="blog.attributes.thumbnail.data" :src="blog.attributes.thumbnail.data.attributes.url" :alt="blog.attributes.title">
              <div v-html="blog.attributes.content"></div>
            </div>
          </a-col>
          <a-col :lg="{span:6, offset:0}" :md="{span:12, offset:6}" :sm="{span:18, offset:3}" :xs="{span:24, offset:0}">
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
                  <img v-if="b.attributes.thumbnail.data" :src="b.attributes.thumbnail.data.attributes.url" :alt="b.attributes.title">
                  <h4>{{b.attributes.title}}</h4>
                  <span><a-icon type="clock-circle" />  {{b.attributes.date}}</span>
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
    const featuredBlogs = await $axios.$get('/blogs', {params:{populate: ['thumbnail'], filters: {featured: { $eq:true}} }})
    return {
      slug,
      blog: res.data[0],
      features: featuredBlogs.data
    }
  },
  created() {
    console.log(this.blog)
  }
}
</script>

<style lang="scss" scoped>
#blogDetails {
  padding-top: 160px;

  section {
    margin-top: 50px;
  }

  .blogBody {
    padding-bottom: 50px;
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

        h4 {
          text-decoration: underline;
        }
      }

      img {
        // width: 120px;
        // height: 80px;
        width: 100%;
        height: 120px;
        object-fit: cover;
        margin-bottom: 10px;
      }

      h4 {
        color: $navy;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-transform: capitalize;
      }
      span {
        font-size: 14px;
        line-height: 16px;
        color: #88765B;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
}
</style>