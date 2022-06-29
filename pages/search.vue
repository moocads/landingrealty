<template>
  <div id="searchPage">
    <section class="searchbarWrapper">
      <div class="wrapper">
        <h1>Search</h1>
        <div class="searchbar">
          <a-input v-model="keywords"></a-input>
          <a class="main-btn" @click="handleSearch" style="width: 250px; height: 60px">
            <span>Search<a-spin size="small" v-if="loading" style="margin-left: 10px;" /></span>
          </a>
        </div>
      </div>
    </section>
    <section class="results">
      <div class="wrapper">
        <a-row :gutter="[36,36]">
          <a-col :xl="{span: 6}" :lg="{span: 8}" :md="{span: 12}" :sm="{span: 12}" :xs="{span: 24}" v-for="(rec, index) in results" :key="index">
            <a @click="handleFromSearch(rec.id)">
              <ItemCard
                :img="rec.attributes.images.data[0].attributes.url"
                :title="rec.attributes.type === 'precon' ? rec.attributes.title : rec.attributes.type === 'resell' ? 'MLS ' + rec.attributes.mls : ''"
                :tag="rec.attributes.location"
                :content="rec.attributes.price.toString()"
              />
            </a>
          </a-col>
        </a-row>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keywords: this.$store.state.searchWords || undefined,
      results: undefined,
      loading: false
    }
  },
  methods: {
    handleSearch() {
      this.loading = true
      this.$store.commit('setSearchWords', this.keywords)
      const keywordsArr = this.keywords.split(' ')
      // console.log(keywordsArr)
      this.$axios.$get('/assignments', {
        params: {
          populate: '*',
          filters: {
            $or: [
              {
                mls: {
                  $containsi: keywordsArr
                }
              },
              {
                title: {
                  $containsi: keywordsArr
                }
              },
              {
                location: {
                  $containsi: keywordsArr
                }
              },
              {
                address: {
                  $containsi: keywordsArr
                }
              },
            ]
            
          }
        }
      }).then(res => {
        // console.log(res.data)
        this.results = res.data
        this.loading = false
      })
    },
    handleFromSearch(id) {
      this.$store.commit('setFromSearchResult', true)
      this.$router.push(this.localePath(`/projects/${id}`))
    }
  },
  created() {
    if (this.$store.state.searchWords) {
      this.handleSearch()
    }
  }
}
</script>
<style lang="scss" scoped>
#searchPage {
  padding: 100px 0px;

  .searchbarWrapper {
    padding-top: 100px;

    .searchbar {
      display: flex;

      .main-btn {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ant-input {
        height: 60px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

  }

  .results {
    margin-top: 50px;
  }
}
</style>