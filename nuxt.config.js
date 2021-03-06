
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Fabian Marcus - Ich. Über mich.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fz-favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'typeface-roboto',
    'typeface-titillium-web'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/view-in-viewport.js' },
    { src: '~/plugins/image-lightbox.js', ssr: false },
    { src: '~/plugins/typer.js', ssr: false },
    { src: '~/plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
