<template>
  <NuxtLayout name="default">
    <NuxtRouteAnnouncer />
    <Head>
      <Title>Fabian Marcus - Ich. Über mich.</Title>
      <Meta name="charset" content="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="description" content="Fabian Marcus - Tech Portrait. Website zu Skillset & Werdegang." />
      <Link rel="icon" type="image/x-icon" href="/fz-favicon.png" />
    </Head>
    <Intro />
    <Skills />
    <Impressum />
    <Fotos />
    <AboutMe />
  </NuxtLayout>
</template>

<script lang="jsx">
import Fotos from '~/components/Fotos.vue'
import Intro from '~/components/Intro.vue'
import Skills from '~/components/Skills.vue'
import AboutMe from '~/components/Ueber.vue'
import Impressum from '~/components/Impressum.vue'

export default {
  components: {
    Intro,
    Fotos,
    Skills,
    AboutMe,
    Impressum
  },
  metaInfo: {}
}
</script>
