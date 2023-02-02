export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'landing-realty',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=Noto+Sans+TC:wght@400;500;700;900&family=Roboto:wght@400;500;700;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper@8/swiper-bundle.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
      { src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css', '@/assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios',
    { src: '@/plugins/aos', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'EN',
          },
          {
            code: 'zh',
            iso: 'zh-CN',
            name: 'zh',
          },
          {
            code: 'tc',
            iso: 'zh-TW',
            name: 'tc',
          },
        ],
        defaultLocale: 'en',
        seo: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: false,
          fallbackLocale: 'en',
        },
      },
    ],
  ],

  styleResources: {
    scss: ['@/assets/scss/variable.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://landing-realty-cms-staging.herokuapp.com/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    timing: false,
  },
}
