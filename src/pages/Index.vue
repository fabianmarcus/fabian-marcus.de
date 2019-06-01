<template>
  <Layout>
    <Intro />
    <Skills />
    <Impressum />
    <Fotos />
    <AboutMe />
  </Layout>
</template>

<script>
import Fotos from "~/components/Fotos.vue"
import Intro from "~/components/Intro.vue"
import Skills from "~/components/Skills.vue"
import AboutMe from "~/components/UeberMich.vue"
import Impressum from "~/components/Impressum.vue"

export default {
  components: {
    Intro,
    Fotos,
    Skills,
    AboutMe,
    Impressum,
  },
  metaInfo: {}
}
</script>
