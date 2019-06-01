<template>
    <section class="impressum" id="impressum">
      <div class="parallax" v-in-viewport="-400">
        <g-image src="/kontakt.jpg" class="background" />
      </div>
      <div class="box">
        <article class="kontakt">
          <h2>Impressum</h2>
          <p>
            Sebastianstr. 76<br />
            53115 Bonn
          </p>
          <p>
            <a href="tel:0163 / 30 60 438">0163 30 60 438</a><br /> 
            <a href="mailto:web@fabian-marcus.de">web@fabian-marcus.de</a>
          </p>
          <p>
            <a href="https://www.fabian-marcus.de">www.fabian-marcus.de</a><br />
            <a href="https://blog.fabian-marcus.de">blog.fabian-marcus.de</a><br /> 
            <a href="https://twitter.com/FabeBN">Twitter</a><br />
            <a href="https://www.xing.com/profile/Fabian_Marcus">Xing</a><br />
            <a href="https://www.facebook.com/fabian.marcus.bonn">Facebook</a>
          </p>
        </article>
      </div>
    </section>
</template>

<script>
  export default {
    name: 'Impressum',

    mounted() {
      this.parallax();
    },

    methods: {
      parallax() {
        const container = document.querySelector('#impressum');
        console.log(container.offsetTop);
      }
    }
  }
</script>

<style scoped>
  .impressum {
    position: relative;
    overflow: hidden;
    padding: 4rem 1rem;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }

  .background {
    position: absolute;
    top: 50%; left: 55%;
    transform: translate(-55%, -50%);
    transition: width 500ms ease-in;
    z-index: -1;
  }

  .kontakt {
    display: block;
    padding: 2rem 2rem;
    color: white;
    border-radius: 8px;
    background-color: rgba(0,0,0,0.8);
  }
  .kontakt a {
    display: inline-block;
    margin-bottom: 0.25rem;
    color: white;
  }
  @media all and (min-width: 675px) {
    .kontakt {
      display: inline-block;
    }
  }
</style>