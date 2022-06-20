<i18n>
{
  "en": {
    "home":"Home",
    "about":"About",
    "projects":"Projects",
    "articles":"Articles",
    "contact":"Contact",
    "precon":"Pre-Construction",
    "resale":"Resale"
  },
  "zh":{
    "home":"主页",
    "about":"关于",
    "projects":"项目",
    "articles":"资讯",
    "contact":"联系",
    "precon":"楼花",
    "resale":"转售"
  }
}
</i18n>
<template>
  <div class="nav-container">
    <Infobar />
    <nav :class="{ homeNav: $nuxt.$route.path === '/', active: navActive }">
      <NuxtLink :to="localePath('/')">
        <div class="logo-container">
          <img src="~/assets/img/nav-logo.png" alt="" />
        </div>
      </NuxtLink>

      <div class="nav-items">
        <NuxtLink :to="localePath('/')">{{$t('home')}}</NuxtLink>
        <NuxtLink :to="localePath('/about')">{{$t('about')}}</NuxtLink>
        <div class="dropdown-wrapper">
          <a class="dropdown-link">{{$t('projects')}}  <a-icon type="caret-down" /></a>
          <div class="dropdown-content">
            <NuxtLink :to="localePath('/projects/pre-construction')"
              >{{$t('precon')}}</NuxtLink
            >
            <NuxtLink :to="localePath('/projects/resales')">{{$t('resale')}}</NuxtLink>
          </div>
        </div>
        <NuxtLink :to="localePath('/articles')">{{$t('articles')}}</NuxtLink>
        <NuxtLink :to="localePath('/contact')">{{$t('contact')}}</NuxtLink>
      </div>
      <!-- mobile -->
      <div class="hamburger" @click="toggleNav">
        <div class="hamburgerOne line"></div>
        <div class="hamburgerTwo line"></div>
        <div class="hamburgerThree line"></div>
      </div>
      <div class="mobile-nav-mask" :class="{ open: mobileNavOpen }"></div>
      <div class="mobile-nav-wrapper" :class="{ open: mobileNavOpen }">
        <div class="mobile-nav-items">
          <div @click="mobileNavOpen = false">
            <NuxtLink :to="localePath('/')">{{$t('home')}}</NuxtLink>
          </div>
          <div @click="mobileNavOpen = false">
            <NuxtLink :to="localePath('/about')">{{$t('about')}}</NuxtLink>
          </div>
          <div @click="mobileNavOpen = false">
            <NuxtLink :to="localePath('/projects/pre-construction')">{{$t('precon')}}</NuxtLink>
          </div>
          <div @click="mobileNavOpen = false">
            <NuxtLink :to="localePath('/projects/resales')">{{$t('resale')}}</NuxtLink>
          </div>
          <div @click="mobileNavOpen = false">
            <NuxtLink :to="localePath('/articles')">{{$t('articles')}}</NuxtLink>
          </div>
          <div @click="mobileNavOpen = false">
            <NuxtLink :to="localePath('/contact')">{{$t('contact')}}</NuxtLink>
          </div>
          <div @click="mobileNavOpen = false">
            <NuxtLink class="switchLocale" v-if="$i18n.locale=='en'" :to="switchLocalePath('zh')">中文</NuxtLink>
            <NuxtLink class="switchLocale" v-if="$i18n.locale=='zh'" :to="switchLocalePath('en')">EN</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
      projectHover: false,
      mobileProjectTab: false,
      navActive: false,
    }
  },
  methods: {
    toggleNav() {
      this.mobileNavOpen = !this.mobileNavOpen
    },
    closeNav() {
      this.mobileNavOpen = false
    },
  },
  mounted() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.navActive = true
      } else {
        this.navActive = false
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.nav-container {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
a {
  color: white;
  text-transform: uppercase;
  padding: 20px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  display: block;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(10vw - 20px);
  background-color: $navy;
  box-shadow: 0 5px 20px 10px rgb(97, 113, 127, 29%);

  .logo-container {
    height: 50px;
  }
  .logo-container > img {
    width: auto;
    height: 100%;
  }

  // @media (max-width: 576px) {
  //   padding: 0 10vw;
  // }

  &:not(.homeNav) {
    .nav-items .nuxt-link-exact-active {
      background-color: $navy !important;
      filter: brightness(1.3) !important;
    }
  }
}
.nav-items {
  display: flex;
  align-items: center;
  
  a {
    display: block;
    height: 90px;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
  }
}
.dropdown-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  height: 90px;

  .dropdown-link {
    i {
      margin-left: 5px;
      transform: translateY(-1px);
      transition: all 0.5s ease;
    }
  }

  .dropdown-content {
    background-color: rgba($navy, 0.8);
    position: absolute;
    top: 100%;
    // display: none;
    opacity: 0;
    pointer-events: none;
    width: 200px;
    transition: all 0.5s ease;

    a {
      transition: all 0.5s ease;
    }
  }

  &:hover {
    .dropdown-link {
      i {
        transform: translateY(-1px) rotateX(180deg);
      }
    }
    .dropdown-content {
      opacity: 1;
      pointer-events: all;

      a:hover {
        background-color: rgba( $navy, 0.5);
      }
    }
  }

}

// for scrolled navbar
.homeNav {
  background: transparent;
  transition: all 0.5s ease;
  box-shadow: none;

  img {
    opacity: 0;
    transition: all 0.5s ease;
  }

  &.active {
    background-color: $navy;
    box-shadow: 0 5px 20px 10px rgb(97, 113, 127, 29%);

    img {
      opacity: 1;
    }

    .nav-items .nuxt-link-exact-active {
      background-color: $navy !important;
      filter: brightness(1.3) !important;
    }
  }
}

// for mobile nav
.hamburger {
  display: none;
  position: relative;
  z-index: 101;
  padding-bottom: 10px ;
  margin-right: 20px;

  .line {
    background-color: white;
  }

  &.open .line {
    background-color: white;
  }

  &:hover,
  &:focus {
    cursor: pointer;
  }

  div {
    position: relative;
    width: 25px;
    height: 3px;
    transition: all 0.5s;

    &.hamburgerOne {
      top: 0px;
    }

    &.hamburgerTwo {
      top: 5px;
    }

    &.hamburgerThree {
      top: 10px;
    }
  }
}
.mobile-nav-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: black, $alpha: 0.4);
  z-index: 99;
  opacity: 0;
  transition: all 0.5s ease;
  pointer-events: none;
}
.mobile-nav-wrapper {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: $navy;
  height: 100%;
  flex-direction: column;
  display: flex;
  width: 100vw;
  justify-content: center;
  z-index: 100;
  opacity: 0;
  transition: all 0.5s ease;
  pointer-events: none;
}
.mobile-nav-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // justify-items: center;
  // display: grid;
  // grid-template-columns: 1fr;
  * {
    font-size: 20px;
    // margin: 1rem 0;
  }
}
// .mobile-dropdown-wrapper {
//   text-align: center;
// }
// .mobile-dropdown-content {
//   display: none;
//   div {
//     margin: 1rem 0;
//   }
//   &.open {
//     display: block;
//   }
// }

@media all and (max-width: $md) {
  nav {
    .nav-items {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .mobile-nav-wrapper {
      &.open {
        // display: flex;
        opacity: 1;
        pointer-events: all;
      }
    }
    .mobile-nav-mask {
      &.open {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
}
</style>
