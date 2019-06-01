<template>
    <section class="box fotos">
      <h2>Ich.</h2>
      <div class="foto-images">
        <div><g-image alt="Portrait 1" src="/bild-1.jpg" @click="openGallery(0)" /></div>
        <div><g-image alt="Portrait 2" src="/bild-2.jpg" @click="openGallery(1)" /></div>
        <div><g-image alt="Portrait 3" src="/bild-3.jpg" @click="openGallery(2)" /></div>
        <div><g-image alt="Portrait 4" src="/bild-4.jpg" @click="openGallery(3)" /></div>
        
        <LightBox 
          ref="lightbox"
          :images="images"
          :show-caption="false"
          :show-light-box="false">
        </LightBox>
      </div>
    </section>
</template>

<script>
  import LightBox from 'vue-image-lightbox'

  export default {
      name: 'Fotos',

      components: {
        LightBox,
      },
      
      data() {
        return {
          options: {
            showLightBox: false,
          },
          images: [{
            thumb: '/bild-1.jpg',
            src: '/bild-1.jpg',
          }, {
            thumb: '/bild-2.jpg',
            src: '/bild-2.jpg',
          }, {
            thumb: '/bild-3.jpg',
            src: '/bild-3.jpg',
          }, {
            thumb: '/bild-4.jpg',
            src: '/bild-4.jpg',
          }]
        }
      },

      methods: {
        openGallery(index) {
          this.$refs.lightbox.showImage(index)
        }
      }
  }
</script>

<style scoped>
  .foto-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .foto-images > div {
    max-width: 49%;
    margin: auto;
  }
  .foto-images > div > img {
    max-width: 100%;
    border-radius: 10px;
    cursor: pointer;
  }
</style>