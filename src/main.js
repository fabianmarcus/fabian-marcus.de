// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-roboto')
require('typeface-titillium-web')
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

import VueLazyLoad from 'vue-lazyload'
import inViewportDirective from 'vue-in-viewport-directive'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Lazyloading für Images
  Vue.use(VueLazyLoad)
  
  // Prüfung, ob sich ein Element im Viewport befindet
  Vue.directive('in-viewport', inViewportDirective)

  // Layout als globale Komponente definieren
  Vue.component('Layout', DefaultLayout)
}
