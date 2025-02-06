<template>
    <section class="ueber-mich">
        <article class="box ueber-mich-text">
            <h2># Über mich</h2>
            <hr />

            <a href="mailto:web@fabian-marcus.de">
                <img alt="Email" src="/at-kaffee.jpg" width="150" class="kaffee"/>
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
                Mit diesem Wissen als Basis fiel es von dort an nicht schwer, am Ball zu bleiben. 
                Meine Arbeitsweise ist pragmatisch und lösungsorientiert - natürlich nicht auf Kosten der Qualität.
            </p>
        </article>
        <article class="highlighted">
            <div class="box">
                Entwickelt mit <a href="https://vuejs.org/" target="_blank">Vue.js</a>/<a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
                und <a href="https://sass-lang.com/" target="_blank">SCSS</a>. Code auf <a href="https://github.com/fabianmarcus/fm.de" target="_blank">Github</a>.
                Bereitgestellt mit <a href="https://www.netlify.com/" target="_blank">Netlify</a>. Fotos by <a href="http://ilja-schlak.de" target="_blank">Ilja Schlak</a>.
            </div>
        </article>
    </section>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style lang="scss" scoped>
.ueber-mich {
    margin-top: 2rem;
    border-top: 2px solid black;
    background: url('/uebermich-bg.png') center center repeat;
    color: black;

    a {
        color: black;
    }
}

// Styles fuer deaktivierten In-Viewport-Effekt
// .ueber-mich-text {
//     opacity: 0;

//     &.in-viewport {
//         opacity: 1;
//         transition: opacity 1s linear;
//     }
// }

.kaffee {
    float: right;
    max-width: 150px;
    margin: 1rem 1.5rem;
    margin-top: 0;
    border-radius: 10px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
}

.highlighted {
    padding: 0.3rem;
    color: white;
    background-color: #243447;

    a {
        color: white;
        text-decoration: underline;
    }
    a:hover,
    a:active {
        text-decoration: none;
    }
}
</style>
