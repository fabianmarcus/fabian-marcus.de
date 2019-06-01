<template>
    <section class="skills" v-in-viewport.once="-450">
      <article>
        <g-image src="/skills/javascript.png" height="150" />
        <h3>Javascript</h3>
        <p>
          Javascript durchlebt viele Veränderungen. Beim gegebenen Tempo ist es schwer, immer auf dem
          Laufenden zu bleiben. Da Javascript aber gleichzeitig meine <strong>Lieblingsdisziplin</strong> bildet, macht es
          trotzdem Spaß! Egal ob React, Vue.js, Mithril oder Node.js: Sie kamen mir alle schon mal unter
          die Tastatur...
        </p>
      </article>
      <article>
        <g-image src="/skills/html_css.png" height="150" />
        <h3>HTML+SCSS</h3>
        <p>
          Zusammen mit Javascript bilden HTML und CSS den Dreiklang der Frontendentwicklung; SCSS rundet die Sache ab.
          Mit einem Auge für Abstände, Farben und einem gezielten Maß an Animationen macht es mir immer wieder Spaß,
          schöne, saubere & UX freundliche Designs zu entwickeln! Alles <strong>responsive & mobile first</strong> natürlich...
        </p>
      </article>
      <article>
        <g-image src="/skills/gcloud.png" height="150" />
        <h3>Cloud</h3>
        <p>
          Warum selbst hosten, wenn es andere besser können - z.B. Google. Cloud Computing mit <strong>Firestore</strong> &
          <strong>Cloud/Serverless Functions</strong> bringt das Backend as a Service und verkürzt die Entwicklungszeit. 
          Aber egal ob Google, AWS oder Azure: Es ist ein spannendes Thema!
        </p>
      </article>
      <article>
        <g-image src="/skills/sql.png" height="150" />
        <h3>SQL</h3>
        <p>
          Geht es nicht ohne Backend, sind relationale Datenbanken oft nicht verkehrt, um Daten zu speichern.
          Auch hiermit arbeite ich immer wieder gerne - z.B. um eine API zu entwickeln.
        </p>
      </article>
      <article>
        <g-image src="/skills/orm.jpg" height="150" />
        <h3>ORM</h3>
        <p>
          Queries immer selbst schreiben? Nicht immer notwendig. Ein objektrelationle Mapping erleichtert das
          Leben für Standardabfragen ungemein und verkürzt die Entwicklungszeit. In Node.js zum Beispiel Sequelize.
        </p>
      </article>
      <article>
        <g-image src="/skills/restapi.png" height="150" />
        <h3>REST</h3>
        <p>
          Da Frontend und Backend heutzutage meist getrennt werden, findet die Datenübergabe bei mir meist
          im <strong>JSON-Format</strong> als Teil einer REST-API statt. Gerade im Javascript-Umfeld bietet sich dadurch eine
          einfache Schnittestelle, Daten auszutauschen.
        </p>
      </article>
    </section>
</template>

<script>
  export default {
    name: 'Skills'
  } 
</script>

<style scoped>
  .skills {
    display: flex;
    max-width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .skills article {
    width: 30%;
    min-width: 8rem;
    margin: 2rem 0;
    text-align: center;
  }
  .skills article p {
    text-align: justify;
  }
  .skills article img {
    position: relative;
    top: 30rem;
    height: 0;
    width: 0;
    opacity: 0;
  }
  .skills.in-viewport article img {
    top: 0;
    width: auto;
    height: 150px;
    max-height: 150px;
    opacity: 1;
    transition: 
      top 600ms ease-in,
      opacity 600ms ease-in;
  }
</style>