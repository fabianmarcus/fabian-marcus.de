<template>
  <NuxtLayout name="default">
    <NuxtRouteAnnouncer />
    <Head>
      <Title>Fabian Marcus - Ich. Über mich.</Title>

      <Meta name="charset" content="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="description" content="Fabian Marcus - Tech Portrait. Website zu Skillset & Werdegang." />
      <Link rel="icon" type="image/x-icon" href="/fz-favicon.png" />

      <!-- Open Graph Metatags -->
      <Meta property="og:title" content="Fabian Marcus - Ich. Über mich." />
      <Meta property="og:description" content="Fabian Marcus - Tech Portrait. Website zu Skillset & Werdegang." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.fabian-marcus.com" />
      <Meta property="og:image" content="https://www.fabian-marcus.de/bild-2.jpg" />
      <Meta property="og:image:alt" content="Fabian Marcus - Tech Portrait" />
      <Meta property="og:site_name" content="Fabian Marcus - Tech Portrait" />

      <!-- Twitter Card Metatags -->
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Fabian Marcus - Ich. Über mich." />
      <Meta name="twitter:description" content="Fabian Marcus - Tech Portrait. Website zu Skillset & Werdegang." />
      <Meta name="twitter:image" content="https://www.fabian-marcus.de/bild-2.jpg" />
      <Meta name="twitter:image:alt" content="Fabian Marcus - Tech Portrait" />
      <Meta name="twitter:site" content="@fabianmarcus" />
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
