<template>
  <div id="project-slider">
    <a-carousel arrows dots>
      <template #prevArrow>
        <div class="custom-slick-arrow">
          <a-icon type="left" />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow">
          <a-icon type="right" />
        </div>
      </template>
      <template #customPaging="props">
        <a class="slider-thumb">
          <!-- {{props}} -->
          <img :src="images[props.i].attributes.url" />
        </a>
      </template>
      <div class="slide" v-for="(img, index) in images" :key="index">
        <img :src="img.attributes.url" alt="">
      </div>
    </a-carousel>
  </div>
</template>
<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    // VueSlickCarousel
  },
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">
#project-slider {
  width: 100%;
  .slide {
    width: 100%;
    height: 600px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .custom-slick-arrow {
    font-size: 40px;
    color: $navy;
    top: calc(100% - 55px);

    &::before {
      opacity: 0;
    }
  }

  .slider-thumb {
    img {
      width: 50px;
      height: 50px;
    }
  }

  .ant-carousel .slick-dots {
    position: relative;
    // top: 100%;
    margin-top: 20px;
    bottom: auto;
    height: 70px;

    li {
      filter: grayscale(1);
      transition: all 0.5s ease;
      
      &.slick-active {
        filter: grayscale(0);
      }
    }

  }
}
</style>