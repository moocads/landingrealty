<template>
  <nav :class="{ homeNav: $nuxt.$route.path === '/', active: navActive }">
    <NuxtLink to="/">
      <div class="logo-container">
        <img src="~/assets/img/nav-logo.png" alt="" />
      </div>
    </NuxtLink>

    <div class="nav-items">
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <div class="dropdown-wrapper">
        <a class="dropdown-link"> projects </a>
        <div class="dropdown-content">
          <NuxtLink to="/pre-construction">Pre-construction</NuxtLink>
          <NuxtLink to="/resales">Resales</NuxtLink>
        </div>
      </div>

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
        <div @click="mobileNavOpen = false">
          <NuxtLink to="/">home</NuxtLink>
        </div>
        <div @click="mobileNavOpen = false">
          <NuxtLink to="/about">about</NuxtLink>
        </div>

        <div class="mobile-dropdown-wrapper">
          <a @click="mobileProjectTab = !mobileProjectTab" class="dropdown-link">projects</a>
          <div class="mobile-dropdown-content" :class="{open: mobileProjectTab}">
            <div @click="mobileNavOpen = false">
              <NuxtLink to="/pre-construction">pre-construction</NuxtLink>
            </div>
            <div @click="mobileNavOpen = false">
              <NuxtLink to="/resales">resales</NuxtLink>
            </div>
          </div>
        </div>
        <div @click="mobileNavOpen = false">
          <NuxtLink to="/news">news</NuxtLink>
        </div>
        <div @click="mobileNavOpen = false">
          <NuxtLink to="/contact">contact</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
      projectHover: false,
      mobileProjectTab: false,
      navActive: false
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
  }
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
  .logo-container {
    height: 50px;
  }
  .logo-container > img {
    width: auto;
    height: 100%;
  }
}
.dropdown-wrapper {
  position: relative;
  display: inline-block;
}
.dropdown-link::after {
  content: '▼';
  font-size: 10px;
  padding-left: 0.5rem;
}
.dropdown-content {
  background-color: $navy;
  position: absolute;
  display: none;
  flex-direction: column;
  z-index: 1;
  padding-top: 30px;
}
.dropdown-wrapper:hover .dropdown-content {
  display: flex;
}
// for scrolled navbar
.homeNav {
  background: transparent;
  transition: all 0.5s ease;
  img {
    opacity: 0;
    transition: all 0.5s ease;
  }

  &.active {
    background-color: $navy;
    
    img {
      opacity: 1;
    }
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
  width: 100vw;
  justify-content: center;
  z-index: 100;
}
.mobile-nav-items {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  * {
    font-size: 20px;
    margin: 1rem 0;
  }
}
.mobile-dropdown-wrapper {
  text-align: center;
}
.mobile-dropdown-content {
  display: none;
  div{
    margin: 1rem 0;
  }
  &.open {
    display: block;
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
