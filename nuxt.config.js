export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // For Static deployment
  // router: { 
  //   base: '/Portfolio/',
  // },

  // Exlude route from static build
  // generate: {
  //   exclude: [
  //     /^\/projects/,
  //   ]
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Xavier Champoux\'s personal portfolio.' },
      { hid: 'author', name: 'author', content: 'Xavier Champoux' },
      { hid: 'keywords', name: 'keywords', content: 'portfolio, art, 3D, three.js' },
    ],
    script: [
      { src: '/CSSSupport.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ]
  },

  // Custom Loading (https://nuxtjs.org/docs/2.x/features/loading)
  loading: '~/components/Loading.vue',

  // Transitions
  pageTransition: {
    name: 'page',
    css: true,
    mode: 'out-in',
    appear: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/_reset.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/modules/Simplicity.js', mode: 'client'},
    {src: '~/plugins/modules/Three.js', mode: 'client'},
    {src: '~/plugins/modules/Anime.js', mode: 'client'},
    {src: '~/plugins/modules/Popmotion.js', mode: 'client'},
    {src: '~/plugins/Environments.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['~/assets/scss/_reset.scss',],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'three'
    ], 
  }
}
