<template>
  <nav :class="{ homeNav: homeLogo }">
    <NuxtLink to="/">
      <div class="logo-container">
        <img src="~/assets/img/nav-logo.png" alt="" />
      </div>
    </NuxtLink>

    <div class="nav-items">
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/projects">projects</NuxtLink>
      <NuxtLink to="/news">news</NuxtLink>
      <NuxtLink to="/contact">contact</NuxtLink>
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
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
        <NuxtLink to="/projects">projects</NuxtLink>
        <NuxtLink to="/news">news</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      homeLogo: false,
      mobileNavOpen: false,
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
    toggleNav() {
      this.mobileNavOpen = !this.mobileNavOpen
    },
  },
  beforeMount() {
    window.addEventListener('load', this.homeLogoListener)
    window.addEventListener('scroll', this.homeLogoListener)
  },
  beforeDestroy() {
    window.addEventListener('load', this.homeLogoListener)
    window.removeEventListener('scroll', this.homeLogoListener)
  },
}
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-transform: uppercase;
  padding: 20px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
}
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
  .nav-items {
    display: flex;
  }
  .logo-container {
    height: 50px;
  }
  .logo-container > img {
    width: auto;
    height: 100%;
  }
}

// for scrolled navbar
.homeNav {
  background: transparent;
  img {
    opacity: 0;
  }
}

// for mobile nav
.hamburger {
  display: none;
  position: relative;
  z-index: 101;

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
  display: none;
  min-width: 300px;
  padding: 10rem 10vw 0 0;
  z-index: 100;
}
.mobile-nav-items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  justify-items: end;
  a {
    padding: 2rem 0;
    font-size: 20px;
  }
}
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
        display: flex;
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
