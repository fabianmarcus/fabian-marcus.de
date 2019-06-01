<template>
    <section class="ueber-mich">
      <article class="box ueber-mich-text">
        <h2>Über mich.</h2>
        
        <a href="mailto:web@fabian-marcus.de">
          <g-image alt="Email" src="/at-kaffee.jpg" width="150" class="kaffee" />
        </a>

        <p>
          Zur Schulzeit angefangen mit statischen Webseiten aus reinem HTML, ging es weiter mit Javascript und CSS. 
          Kurz darauf folgte die serverseitige Verarbeitung von Daten mit PHP.
        </p>
        <p>
          Während des Studiums an der Hochschule Bonn-Rhein-Sieg und einer dreijährigen dualen Ausbildung 
          zum Fachinformatiker für Anwendungsentwicklung kam der Kontakt zu Java. Dabei wurden sowohl diverse 
          theoretische Paradigmen, als auch der konkrete praktische Einsatz gelernt und vertieft.
        </p>
        <p>
          Mit diesem Wissen als Basis fiel es von dort an nicht schwer, am Ball zu bleiben. Heutige Trendthemen 
          wie Single Page Applications mittels <strong>reaktiver Javascript-Frameworks</strong> (z.B. React oder Vue.js), 
          <strong>Progressive Webapps</strong>, <strong>Responsive Design</strong>, Mobile Development, RESTfull APIs, usw. 
          sind keine Fremdwörter geblieben. <strong>Diese Seite ist zum Beispiel mit Vue.js entwickelt.</strong>
        </p>
        <p>
          <strong>Zurzeit</strong> bin ich als Frontend-Entwickler bei 
          der <a href="https://www.phoenixreisen.com" target="_blank">Phoenix Reisen GmbH</a> in Bonn angestellt 
          und arbeite dort hauptsächlich am Buchungssystem sowie an Schiff-Apps für Gäste an Bord. Die Entwicklung 
          neuer Features erfolgt in ES6+ mittels reaktiver Javascript-Frameworks sowie diversen npm-Modulen. 
          Styling in Sass bzw. SCSS. Bundling und Buildprozess mit Webpack. Die IT-Struktur unterteilt sich 
          in Microservices (auch in Mikro-Frontends).
        </p>
        <p>
          Meine Arbeitsweise ist pragmatisch und lösungsorientiert - allerdings nicht auf Kosten der Qualität.
        </p>
        <p>
          Zwar suche ich nicht aktiv, bin aber natürlich immer offen für spannende Angebote...
        </p>
        <p>
          Mit besten Grüßen<br /> 
          Fabian M. Marcus
        </p>
      </article>
    </section>
</template>

<script>
    export default {
        name: 'AboutMe'
    } 
</script>

<style scoped>
  .ueber-mich {
    margin-top: 2rem;
    border-top: 2px solid black;
    background: url('/uebermich-bg.png') center center repeat;
  }
  .ueber-mich a {
    color: black;
  }
  .kaffee {
    float: right;
    max-width: 150px;
    margin: 1rem 1.5rem;
    margin-top: 0;
    border-radius: 10px;
    box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, 0.2 );
  }
</style>