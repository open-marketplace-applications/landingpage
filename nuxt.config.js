module.exports = {
  mode: "universal",
  router: {
    // base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/landingpage/' : '' # this was for github pages (without CNAME)
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Online Marketplace Applications",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A free and feeless marketplace for a smart city - Connect sellers, delivery services & consumers"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css", "leaflet-control-geocoder/dist/Control.Geocoder.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/vue-scrollto.js",
    "@/plugins/vue-gallery.client.js",
    { src: '~/plugins/solid', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "nuxt-i18n",
    "nuxt-leaflet"
  ],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English"
      },
      {
        code: "de",
        name: "Deutsch"
      }
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true
    },
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: require("./translations/en.js"),
        de: require("./translations/de.js")
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
};
