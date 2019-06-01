<template>
  <section class="intro">
    <article class="box headliner">
      <h2>Fabian M. Marcus</h2>
      <p>Fachinformatiker für Anwendungsentwicklung</p>
      <p>Webentwickler,
        <span class="schwerpunkt">Schwerpunkt
          <strong>Frontend</strong>
        </span>
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: "Intro"
};
</script>

<style scoped>
.intro {
  position: relative;
  padding: 10rem 1rem;
  overflow: hidden;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background: url("/intro-bg.jpg") center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.headliner {
  color: white;
  border-radius: 8px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
}
.headliner h2 {
  margin-top: 0.3rem;
}
.headliner p {
  margin: 1rem 0;
  font-size: 1.3rem;
}
.schwerpunkt {
  white-space: nowrap;
}

</style>