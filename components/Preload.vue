<template>
  <div id="preload" scroll="no" :class="{preloaded:$store.state.preloaded}">
    <div class="allContainer">
      <div class="elementContainer">
        <div class="skipContainer">
          <span class="skip" @click="skipPreload">
            SKIP >>
          </span>
        </div>
        <div class="logoContainer">
          <svg class="logoSVG" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.1 385.39"><defs></defs><title>logo</title><path class="cls-1" d="M211,408.7l-84-84.06V169.06L211,23.3Zm94.05-94.05V162.39L222.11,306.08v91.51Z" transform="translate(-126.95 -23.3)"/></svg>
          <svg class="logoTxt" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406 168.9"><defs></defs><title>logo-textonly</title><path class="cls-1" d="M13,33.4h7V73.6H46.6v5.7H13Zm159.3,0v46h-5.6L137.3,45V79.4h-7v-46H136l29.4,34.4V33.4Zm27,0H220a32.13,32.13,0,0,1,13.8,2.9,22.34,22.34,0,0,1,9.3,8.1,21.83,21.83,0,0,1,3.3,12,22.07,22.07,0,0,1-3.3,12,22.34,22.34,0,0,1-9.3,8.1A31.81,31.81,0,0,1,220,79.4H199.3Zm20.3,40.2A22.76,22.76,0,0,0,230,71.4a17.16,17.16,0,0,0,7-6,16.88,16.88,0,0,0,2.5-9,16,16,0,0,0-2.5-9,15.28,15.28,0,0,0-7-6,22.76,22.76,0,0,0-10.4-2.2H206.3V73.7h13.3Zm49.6-40.2h7v46h-7Zm76,0v46h-5.7L310,45V79.4h-7v-46h5.7l29.4,34.4V33.4ZM406,56.1h6.7V74a28.5,28.5,0,0,1-8.5,4.4,31.31,31.31,0,0,1-10.1,1.5,29.64,29.64,0,0,1-13.4-3,23.5,23.5,0,0,1-9.3-8.3,21.55,21.55,0,0,1-3.4-12,21.32,21.32,0,0,1,3.4-12,22,22,0,0,1,9.3-8.3,28.39,28.39,0,0,1,13.4-3,28,28,0,0,1,10.7,1.8,23.65,23.65,0,0,1,8.2,5.3l-4.4,4.1a20.21,20.21,0,0,0-14.2-5.3,21.67,21.67,0,0,0-10,2.3,17.11,17.11,0,0,0-7,6.3,17.45,17.45,0,0,0,0,18,16.51,16.51,0,0,0,7,6.3,22,22,0,0,0,10,2.3,21.67,21.67,0,0,0,11.5-3V56.1ZM45.7,159.6,35.2,145.5c-1.4.1-2.3.1-3,.1h-12v14h-7v-46h19c6.3,0,11.4,1.4,14.9,4.2,3.7,2.9,5.5,6.7,5.5,11.8a15.25,15.25,0,0,1-2.7,9,15.76,15.76,0,0,1-7.9,5.5l11.6,15.5ZM42,137.3a9.36,9.36,0,0,0,3.6-7.7,9.09,9.09,0,0,0-3.6-7.7c-2.3-1.8-5.7-2.6-10.1-2.6H20V140H31.9C36.3,140,39.7,139.1,42,137.3Zm204.8-23.7h7v40.2h26.6v5.7H246.9V113.6Zm75,5.8H305v-5.7h40.5v5.7H328.7v40.2h-7l.1-40.2Zm77.8,24.3v15.9h-7v-16l-19.4-30h7.5l15.6,24.2L412,113.6h7ZM85.1,44.9l16.6,28.7H68.6L85.1,44.9m0-11.5-26.6,46h53.1l-26.5-46Zm100.4,91.7,16.6,28.7H169l16.5-28.7m0-11.5-26.6,46H212l-26.5-46Zm-56,0H89.1v5.7h40.4Zm0,40.3H89.1v5.7h40.4Zm0-20.2H89.1v5.7h40.4ZM157.8,187h-5.9v-2.2h14.2V187h-5.9v15h-2.5l.1-15Zm13.8,14.1a8.78,8.78,0,0,1-3.3-12.1,7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1,8.78,8.78,0,0,1,3.3,12.1,8.22,8.22,0,0,1-3.3,3.1,10.59,10.59,0,0,1-9.4,0Zm8.1-1.9a5.66,5.66,0,0,0,2.3-2.3,7.42,7.42,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A7.42,7.42,0,0,0,179.7,199.2Zm21.1,2.8-3.7-5.3h-5.3v5.2h-2.5V184.7H196a8,8,0,0,1,5.3,1.6,5.81,5.81,0,0,1,1.9,4.4,5.29,5.29,0,0,1-1,3.4,5.78,5.78,0,0,1-2.9,2.1l4.1,5.7-2.6.1Zm-1.2-8.3a4.1,4.1,0,0,0,0-5.8,5.51,5.51,0,0,0-3.6-1h-4.2v7.8H196A6.16,6.16,0,0,0,199.6,193.7Zm10.7,7.4A8.78,8.78,0,0,1,207,189a7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1A9,9,0,0,1,223,189a8.66,8.66,0,0,1,1.2,4.5A8.92,8.92,0,0,1,223,198a8.22,8.22,0,0,1-3.3,3.1,9.32,9.32,0,0,1-4.7,1.1A9.08,9.08,0,0,1,210.3,201.1Zm8-1.9a5.66,5.66,0,0,0,2.3-2.3,7.42,7.42,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A7.42,7.42,0,0,0,218.3,199.2Zm24.4-14.4V202h-2.1l-10.4-12.9V202h-2.5V184.8h2.1l10.4,12.9V184.8Zm8.6,2.2h-5.9v-2.2h14.2V187h-5.9v15h-2.5l.1-15Zm13.8,14.1a8.78,8.78,0,0,1-3.3-12.1,7.06,7.06,0,0,1,3.3-3.1,9.32,9.32,0,0,1,4.7-1.1,10.18,10.18,0,0,1,4.7,1.1,8.78,8.78,0,0,1,3.3,12.1,8.22,8.22,0,0,1-3.3,3.1,9.32,9.32,0,0,1-4.7,1.1A9.84,9.84,0,0,1,265.1,201.1Zm8.3-1.9a5.66,5.66,0,0,0,2.3-2.3,7.73,7.73,0,0,0,.8-3.4,8.08,8.08,0,0,0-.8-3.4,5.66,5.66,0,0,0-2.3-2.3,7.73,7.73,0,0,0-3.4-.8,7.42,7.42,0,0,0-3.4.8,6.91,6.91,0,0,0-2.5,2.3,7.73,7.73,0,0,0-.8,3.4,8.08,8.08,0,0,0,.8,3.4,5.11,5.11,0,0,0,2.5,2.3,7.73,7.73,0,0,0,3.4.8A8.08,8.08,0,0,0,273.4,199.2Z" transform="translate(-13 -33.3)"/></svg>
        </div>
        <p class="heroTxt">Client First, Client’s Need Is Our # 1 Priority</p>
        <NuxtLink class="heroBtn main-btn" to="/about">Learn More</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    setTimeout(() => {
      this.$store.commit('setPreload', true)
    }, 10000)
  },
  methods: {
    skipPreload () {
      this.$store.commit('setPreload', true)
    }
  }
}
</script>
<style lang="scss" scoped>
#preload {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background: #fff;
  animation: fade 1.5s ease-in 9s forwards;

  .skipContainer {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1001;
    opacity: 0;
    animation: fadeIn 0.5s ease-in 2s forwards, fade 0.5s ease-in 8.5s forwards;

    .skip {
      transition: all 0.3s ease;
      opacity: 0.3;
      font-weight: 700;
      color: white;
      font-size: 14px;
    
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  .allContainer {
    // background: linear-gradient(100deg, #0B2C42 10%, rgba(#0B2C42, 0.48) 30%,rgba(#0B2C42, 0.68) 50%, rgba(#0B2C42, 0.58) 80%), #163f5a 100%;
    background: linear-gradient(105.4deg, #0B2C42 21.18%, rgba(11, 44, 66, 0.48) 91.93%);
    position: relative;
    width: 100%;
    height: 100%;
    // animation: gradient 15s ease infinite;

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
    z-index: 1002;

    .heroTxt {
      font-size: 18px;
      color: white;
      margin-bottom: 30px;
    }

    .heroTxt, .heroBtn {
      opacity: 0;
      animation: fadeIn 1s ease-in 10s forwards;
    }

    .logoContainer {
      padding-top: 60px;
      margin-bottom: 30px;
      // position: absolute;
      // left: 50%;
      // top: 50%;
      // transform: translate(-50%, -50%);
      max-height: 100vh;
      max-width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      // animation: shrink 1s ease-in 8s forwards;
      transform-origin: center;
      transform: scale(1);
      
      .logoTxt {
        margin-top: 20px;
        opacity: 0;
        animation: fadeIn 2s ease-in 5.5s forwards;
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
        fill-opacity: 0;
        stroke-width: 1;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: strokeFade 4s ease-in 2s forwards;
        transform-origin: center;
        max-height: 50vh;
      }
    }
  }


  @keyframes strokeFade {
    0% {
      // transform: scale(1);
      stroke-dashoffset: 1000;
      opacity: 1;
    }
    60% {
      fill-opacity: 0;
      stroke-opacity: 1;
    }
    70% {
      stroke-dashoffset: 0;
    }
    100% {
      fill-opacity: 1;
      stroke-opacity: 0;
      // transform: scale(1);
    }
    // 90% {
    //   // transform: scale(0.3);
    //   opacity: 1;
    //   // width: 200px;
    // }
    // 100% {
    //   // fill-opacity: 0;
    //   // stroke-opacity: 1;
    //   // stroke-dashoffset: 0;
    //   // transform: scale(0.3);
    //   // opacity: 0;
    // }
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  // @keyframes shrink {
  //   0% {
  //     transform: scale(1)
  //   }
  //   100% {
  //     transform: scale(1)
  //   }
  // }

  &.preloaded {
    position: relative;
    z-index: 10;

    .elementContainer {
      z-index: 2;

      .logoContainer {
        animation: none;
        transform: scale(1);
  
        .logoTxt {
          opacity: 1;
          animation: none;
        }
  
        .logoSVG path {
          animation: none;
          fill-opacity: 1;
          stroke-opacity: 0;
          stroke-dashoffset: 0;
        }
  
      }

      .heroBtn, .heroTxt {
        opacity: 1;
        animation: none;
      }
    }
  }
}
</style>