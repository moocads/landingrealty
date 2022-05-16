<template>
  <div id="preload" scroll="no" :class="{preloaded:$store.state.preloaded}">
    <div class="allContainer">
      <!-- <div class="bgContainer">
        </div> -->
      <div class="elementContainer">
        <div class="skipContainer">
          <span class="skip" @click="skipPreload">
            SKIP >>
          </span>
        </div>
        <div class="logoContainer">
          <svg class="logoSVG" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.1 385.39"><defs><style>.cls-1{fill:#fff;}</style></defs><title>logo</title><path class="cls-1" d="M211,408.7l-84-84.06V169.06L211,23.3Zm94.05-94.05V162.39L222.11,306.08v91.51Z" transform="translate(-126.95 -23.3)"/></svg>
          <svg version="1.1" class="logoTxt" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 432 230" style="enable-background:new 0 0 432 230;" xml:space="preserve">
          <style type="text/css">
            .st0{display:none;}
            .st1{display:inline;fill:url(#SVGID_1_);}
            .st2{fill:#FFFFFF;}
          </style>
          <g id="Ref" class="st0">
          </g>
          <g id="Instruction">
          </g>
          <g id="Superceded" class="st0">
          </g>
          <g id="Background" class="st0">
            
              <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-9.094947e-13" y1="-58" x2="432" y2="-490" gradientTransform="matrix(1 0 0 1 0 288)">
              <stop  offset="0" style="stop-color:#0B2C42"/>
              <stop  offset="0.6667" style="stop-color:#005E76"/>
            </linearGradient>
            <rect y="-202" class="st1" width="432" height="432"/>
          </g>
          <path class="st2" d="M13,33.4h7v40.2h26.6v5.7H13V33.4z M172.3,33.4v46h-5.6L137.3,45v34.4h-7v-46h5.7l29.4,34.4V33.4H172.3z
            M199.3,33.4H220c5.2,0,9.7,1,13.8,2.9c4,1.9,7.1,4.7,9.3,8.1c2.2,3.4,3.3,7.5,3.3,12s-1.1,8.5-3.3,12c-2.2,3.4-5.3,6.2-9.3,8.1
            c-4,1.9-8.6,2.9-13.8,2.9h-20.7V33.4z M219.6,73.6c4,0,7.4-0.7,10.4-2.2c3-1.5,5.3-3.4,7-6c1.6-2.6,2.5-5.6,2.5-9
            c0-3.4-0.8-6.4-2.5-9c-1.6-2.6-4-4.7-7-6c-3-1.5-6.4-2.2-10.4-2.2h-13.3v34.5H219.6z M269.2,33.4h7v46h-7V33.4z M345.2,33.4v46h-5.7
            L310,45v34.4h-7v-46h5.7l29.4,34.4V33.4H345.2z M406,56.1h6.7v17.9c-2.5,1.9-5.2,3.3-8.5,4.4c-3.3,1.1-6.6,1.5-10.1,1.5
            c-4.9,0-9.4-1-13.4-3c-4-2.1-7.1-4.8-9.3-8.3c-2.3-3.6-3.4-7.5-3.4-12s1.1-8.5,3.4-12c2.3-3.6,5.3-6.4,9.3-8.3c4-2.1,8.5-3,13.4-3
            c4,0,7.5,0.5,10.7,1.8c3.1,1.2,5.9,3,8.2,5.3l-4.4,4.1c-4-3.6-8.6-5.3-14.2-5.3c-3.7,0-7.1,0.8-10,2.3c-3,1.5-5.3,3.6-7,6.3
            s-2.5,5.7-2.5,9s0.8,6.3,2.5,9c1.6,2.7,4,4.8,7,6.3c3,1.5,6.3,2.3,10,2.3c4.4,0,8.2-1,11.5-3V56.1L406,56.1L406,56.1z M45.7,159.6
            l-10.5-14.1c-1.4,0.1-2.3,0.1-3,0.1h-12v14h-7v-46h19c6.3,0,11.4,1.4,14.9,4.2c3.7,2.9,5.5,6.7,5.5,11.8c0,3.6-1,6.6-2.7,9
            c-1.9,2.5-4.5,4.4-7.9,5.5l11.6,15.5L45.7,159.6L45.7,159.6z M42,137.3c2.3-1.8,3.6-4.4,3.6-7.7c0-3.3-1.2-5.9-3.6-7.7
            c-2.3-1.8-5.7-2.6-10.1-2.6H20V140h11.9C36.3,140,39.7,139.1,42,137.3z M246.8,113.6h7v40.2h26.6v5.7h-33.5V113.6z M321.8,119.4H305
            v-5.7h40.5v5.7h-16.8v40.2h-7L321.8,119.4L321.8,119.4z M399.6,143.7v15.9h-7v-16l-19.4-30h7.5l15.6,24.2l15.7-24.2h7L399.6,143.7z
            M85.1,44.9l16.6,28.7H68.6L85.1,44.9 M85.1,33.4l-26.6,46h53.1L85.1,33.4L85.1,33.4z M185.5,125.1l16.6,28.7h-33.1L185.5,125.1
            M185.5,113.6l-26.6,46H212L185.5,113.6L185.5,113.6z M129.5,113.6H89.1v5.7h40.4V113.6z M129.5,153.9H89.1v5.7h40.4V153.9z
            M129.5,133.7H89.1v5.7h40.4V133.7z M157.8,187h-5.9v-2.2h14.2v2.2h-5.9V202h-2.5L157.8,187L157.8,187z M171.6,201.1
            c-1.4-0.8-2.5-1.8-3.3-3.1c-0.8-1.4-1.2-2.9-1.2-4.5s0.4-3.1,1.2-4.5c0.8-1.4,1.9-2.5,3.3-3.1c1.4-0.8,3-1.1,4.7-1.1
            c1.8,0,3.3,0.4,4.7,1.1c1.4,0.8,2.5,1.8,3.3,3.1c0.8,1.4,1.2,2.9,1.2,4.5c0,1.6-0.4,3.1-1.2,4.5c-0.8,1.4-1.9,2.3-3.3,3.1
            c-1.4,0.8-3,1.1-4.7,1.1S173,201.9,171.6,201.1z M179.7,199.2c1-0.5,1.8-1.4,2.3-2.3s0.8-2.2,0.8-3.4s-0.3-2.3-0.8-3.4
            c-0.5-1-1.4-1.8-2.3-2.3c-1-0.5-2.2-0.8-3.4-0.8c-1.2,0-2.5,0.3-3.4,0.8c-1.1,0.5-1.8,1.4-2.5,2.3c-0.5,1-0.8,2.2-0.8,3.4
            s0.3,2.3,0.8,3.4c0.5,1,1.4,1.8,2.5,2.3c1,0.5,2.2,0.8,3.4,0.8C177.5,200,178.8,199.7,179.7,199.2z M200.8,202l-3.7-5.3
            c-0.4,0-0.8,0-1.1,0h-4.2v5.2h-2.5v-17.2h6.7c2.2,0,4,0.5,5.3,1.6c1.2,1.1,1.9,2.6,1.9,4.4c0,1.4-0.3,2.5-1,3.4
            c-0.7,1-1.6,1.6-2.9,2.1l4.1,5.7L200.8,202L200.8,202z M199.6,193.7c0.8-0.7,1.2-1.6,1.2-2.9s-0.4-2.2-1.2-2.9c-0.8-0.7-2.1-1-3.6-1
            h-4.2v7.8h4.2C197.5,194.6,198.8,194.4,199.6,193.7z M210.3,201.1c-1.4-0.8-2.5-1.8-3.3-3.1c-0.8-1.4-1.2-2.9-1.2-4.5
            s0.4-3.1,1.2-4.5c0.8-1.4,1.9-2.5,3.3-3.1c1.4-0.8,3-1.1,4.7-1.1c1.8,0,3.3,0.4,4.7,1.1c1.4,0.8,2.5,1.8,3.3,3.1s1.2,2.9,1.2,4.5
            c0,1.6-0.4,3.1-1.2,4.5c-0.8,1.4-1.9,2.3-3.3,3.1c-1.4,0.8-3,1.1-4.7,1.1S211.6,201.9,210.3,201.1z M218.3,199.2
            c1-0.5,1.8-1.4,2.3-2.3s0.8-2.2,0.8-3.4s-0.3-2.3-0.8-3.4c-0.5-1-1.4-1.8-2.3-2.3c-1-0.5-2.2-0.8-3.4-0.8s-2.5,0.3-3.4,0.8
            c-1.1,0.5-1.8,1.4-2.5,2.3c-0.5,1-0.8,2.2-0.8,3.4s0.3,2.3,0.8,3.4c0.5,1,1.4,1.8,2.5,2.3c1,0.5,2.2,0.8,3.4,0.8
            S217.4,199.7,218.3,199.2z M242.7,184.8V202h-2.1l-10.4-12.9V202h-2.5v-17.2h2.1l10.4,12.9v-12.9H242.7z M251.3,187h-5.9v-2.2h14.2
            v2.2h-5.9V202h-2.5L251.3,187L251.3,187z M265.1,201.1c-1.4-0.8-2.5-1.8-3.3-3.1c-0.8-1.4-1.2-2.9-1.2-4.5s0.4-3.1,1.2-4.5
            c0.8-1.4,1.9-2.5,3.3-3.1c1.4-0.8,3-1.1,4.7-1.1c1.8,0,3.3,0.4,4.7,1.1c1.4,0.8,2.5,1.8,3.3,3.1c0.8,1.4,1.2,2.9,1.2,4.5
            c0,1.6-0.4,3.1-1.2,4.5c-0.8,1.4-1.9,2.3-3.3,3.1c-1.4,0.8-3,1.1-4.7,1.1C268.2,202.2,266.6,201.9,265.1,201.1z M273.4,199.2
            c1-0.5,1.8-1.4,2.3-2.3c0.5-1,0.8-2.2,0.8-3.4s-0.3-2.3-0.8-3.4c-0.5-1-1.4-1.8-2.3-2.3c-1-0.5-2.2-0.8-3.4-0.8
            c-1.2,0-2.5,0.3-3.4,0.8c-1.1,0.5-1.8,1.4-2.5,2.3c-0.5,1-0.8,2.2-0.8,3.4s0.3,2.3,0.8,3.4c0.5,1,1.4,1.8,2.5,2.3
            c1,0.5,2.2,0.8,3.4,0.8C271.2,200,272.3,199.7,273.4,199.2z"/>
          <g id="RAW_-_DO_NOT_CHANGE" class="st0">
          </g>
          </svg>
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
    background: linear-gradient(105.4deg, #0B2C42 21.18%, rgba(11, 44, 66, 0.48) 91.93%);
    position: relative;
    width: 100%;
    height: 100%;
  }

  .bgContainer {
    background: linear-gradient(105.4deg, #0B2C42 21.18%, rgba(11, 44, 66, 0.48) 91.93%);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    animation: fade 1s ease-in 9s forwards;
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
        opacity: 0;
        animation: fadeIn 2s ease-in 5.5s forwards;
        // max-height: 50vh;
        width: 200px;
      }
      
      .logoSVG {
        // animation: shrinkFade 2s ease-in 6s forwards;
        transform-origin: center;
        // max-height: 50vh;
        // width: 100%;
        width: 100px;
      }
      
      .logoSVG path {
        stroke: white;
        fill-opacity: 0;
        stroke-width: 0.5;
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