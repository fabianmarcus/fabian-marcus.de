import VueGallery from 'vue-gallery'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('gallery', VueGallery);
});
