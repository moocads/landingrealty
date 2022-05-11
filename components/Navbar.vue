<template>
  <nav :class="{ homeNav: homeLogo }">
    <div class="logo-container">
      <img src="~/assets/img/nav-logo.png" alt="" />
    </div>
    <div class="nav-items">
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/">about</NuxtLink>
      <NuxtLink to="/">projects</NuxtLink>
      <NuxtLink to="/">news</NuxtLink>
      <NuxtLink to="/">contact</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      homeLogo: false,
    }
  },
  methods: {
    homeLogoListener() {
      if ($nuxt.$route.path === '/') {
        this.homeLogo = true
        if (window.scrollY >= 345) {
          this.homeLogo = false
        }
      } else {
        this.homeLogo = false
      }
    },
  },
  beforeMount() {
    window.addEventListener('load', this.homeLogoListener)
    window.addEventListener('scroll', this.homeLogoListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.homeLogoListener)
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10vw;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  min-height: 100px;
  background-color: $navy;
}
.nav-items {
  display: flex;
}
.nav-items > a {
  color: white;
  text-transform: uppercase;
  padding: 20px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
}
.logo-container {
  height: 50px;
}
.logo-container > img {
  width: auto;
  height: 100%;
}
// for scrolled navbar
.homeNav {
  background: transparent;
  img {
    opacity: 0;
  }
}
</style>
