<template>
  <div id="projects-swiper">
    <div
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class="swiper large"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide project-slide" v-for="(img, index) in images" :key="index">
          <img :src="img.attributes.url" />
        </div>
      </div>
      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
    </div>
    <div thumbsSlider="" class="swiper small">
      <div class="swiper-wrapper">
        <div class="swiper-slide project-thumbs" v-for="(img, index) in images" :key="index">
          <img :src="img.attributes.url" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    images: {
      type: Array
    }
  },
  mounted() {
    var swiper = new Swiper(".small", {
      // loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });
    var swiper2 = new Swiper(".large", {
      // loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: swiper,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
</script>
<style lang="scss">
#projects-swiper {
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  body {
    background: #000;
    color: #000;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .large {
    height: 80%;
    width: 100%;
  }

  .small {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
    // width: 70%;
  }

  .small .swiper-slide {
    width: 25%;
    height: 100%;
    filter: grayscale(1);
    opacity: 0.5;
    transition: all 0.5s ease;
  }

  .small .swiper-slide-thumb-active {
    opacity: 1;
    filter: grayscale(0);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-thumbs img {
    width: 100%;
    height: 100px;
    object-fit: cover;

    &:hover {
      cursor: pointer;
    }
  }

  .project-slide {
    background-color: #eaeaea;

    img {
      width: 100%;
      height: 600px;
      object-fit: contain;
    }
  }

  .swiper-button-prev, .swiper-button-next {
    transform: translateY(-28px);
    background-color: rgba($navy, 0.5);
    height: 100px;
    width: 40px;
    transition: all 0.5s ease;

    &:hover {
      background-color: rgba($navy, 0.8);
    }

    &::after {
      color: white;
      font-size: 25px
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }
}
</style>