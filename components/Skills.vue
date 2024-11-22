<template>
    <section>
        <div class="box">
            <h2># Skills</h2>
            <hr />
        </div>
        <div class="skills">
            <div class="skillset">
                <article>
                    <div class="skillimg">
                        <img src="/skills/javascript.png" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>
                        JavaScript durchlebt viele Veränderungen. Beim gegebenen Tempo ist es schwer, immer auf dem
                        Laufenden zu bleiben. Da JavaScript aber gleichzeitig meine <strong>Lieblingsdisziplin</strong> bildet,
                        macht es trotzdem Spaß! Egal ob React, Vue.js, Mithril oder Node.js: Sie kamen mir alle schon mal unter
                        die Tastatur...
                    </p>
                </article>
                <article>
                    <div class="skillimg">
                        <img src="/skills/html_css.png" />
                    </div>
                    <h3>HTML+SCSS</h3>
                    <p>
                        Zusammen mit JavaScript bilden HTML und CSS den Dreiklang der Frontendentwicklung; SCSS rundet die Sache ab.
                        Mit einem Auge für Abstände, Farben und einem gezielten Maß an Animationen macht es mir immer wieder Spaß,
                        schöne, saubere & UX freundliche Designs zu entwickeln! Alles
                        <strong>responsive & mobile first</strong> natürlich...
                    </p>
                </article>
                <article>
                    <div class="skillimg">
                        <img src="/skills/gcloud.png" />
                    </div>
                    <h3>Cloud</h3>
                    <p>
                        Warum selbst hosten, wenn es andere besser können - z.B. Google. Cloud Computing mit
                        <strong>Firestore</strong> & <strong>Cloud/Serverless Functions</strong> bringt das
                        Backend as a Service und verkürzt die Entwicklungszeit. Aber egal ob Google, AWS oder
                        Netlify: Es ist ein spannendes Thema!
                    </p>
                </article>
                <article>
                    <div class="skillimg">
                        <img src="/skills/sql.png" />
                    </div>
                    <h3>SQL | NoSQL</h3>
                    <p>
                        Geht es nicht ohne eigenes Backend, ist auch meist eine eigene Datenbank nicht weit.
                        Je nach Bewertung des Anwednungsfalls eine SQL- oder eben NoSQL-Datenbank.
                        Auch hiermit arbeite ich immer wieder gerne.
                    </p>
                </article>
                <article>
                    <div class="skillimg">
                        <img src="/skills/orm.jpg" />
                    </div>
                    <h3>ORM</h3>
                    <p>
                        Queries immer selbst schreiben? Oft nicht notwendig. Ein objektrelationles Mapping
                        erleichtert das Leben für Standardabfragen ungemein und erhöht die Sicherheit gegen SQL-Injections.
                        Zuletzt hatte mir <a href="https://prisma.io/" target="_blank">Prisma.js</a> in
                        einem <a href="https://nodejs.org/">Node.js</a> Backend mit <a href="https://fastify.dev/">Fastify.js</a> gute Dienste erwiesen.
                    </p>
                </article>
                <article>
                    <div class="skillimg">
                        <img src="/skills/restapi.png" />
                    </div>
                    <h3>REST</h3>
                    <p>
                        Da Frontend und Backend heutzutage meist getrennt werden, findet die Datenübergabe bei mir meist
                        im <strong>JSON-Format</strong> als Teil einer <strong>REST-API</strong> statt. Gerade im
                        JavaScript-Umfeld bietet sich dadurch eine einfache Schnittstelle, Daten auszutauschen.
                    </p>
                </article>
                <article>
                    <div class="skillimg">
                        <img src="/skills/testing.jpg" />
                    </div>
                    <h3>Testing</h3>
                    <p>
                        Ein Projekt ohne Tests ist wie ein Auto ohne TÜV. Ob <strong>Unit-Tests</strong> oder
                        <strong>Integrationstests</strong>: Sie sind ein wichtiger Bestandteil meiner Projekte.
                        Gerade in der Frontendentwicklung sind sie wichtig, um den Benutzer nicht in einer endlosen
                        UX-Frustration zurückzulassen. Deshalb überprüfe ich meine Projekte gerne
                        mit <a href="https://jestjs.io/" target="_blank">Jest</a> und <a href="https://www.cypress.io/" target="_blank">Cypress</a>,
                        um die Qualität des Codes zu sichern.
                    </p>
                </article>
                <article>
                    <div class="skillimg">
                        <img src="/skills/ci-cd.jpg" />
                    </div>
                    <h3>DevOps | CI/CD</h3>
                    <p>
                        Ein Projekt ist erst fertig, wenn es in der Produktion läuft. Wenn es also notwendig ist, schrecke
                        ich auch vor dem Schreiben von Bash Skripten nicht zurück. So habe ich zuletzt Deployment-, Backup-
                        und Rollback-Skripte geschrieben, um die Deployment-Pipeline meiner Projekte zu automatisieren. Mit
                        <a href="https://google.github.io/zx/" target="_blank" title="Google ZX Website">Google ZX</a> macht
                        es am Ende sogar noch mehr Spaß - JavaScript für die Shell!
                    </p>
                </article>
                <article>
                    <div class="skillimg">
                        <img src="/skills/openai-logo.jpg" />
                    </div>
                    <h3>KI / AI</h3>
                    <p>
                        Künstliche Intelligenz ist ein spannendes Thema, das ich gerne weiter vertiefen möchte.
                        Angefangen beim Prompting gegen die angebotenen APIs von Open AI, Google & Co. bis hin
                        zur Anreicherung der Models durch eigene Daten mittels RAG, möchte ich mein Wissen in
                        diesem Gebiet mit der Zeit stetig erweitern.
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Skills"
};
</script>

<style scoped>
.skills {
    width: 94%;
    margin: 1% 3%;
}
.skills article {
    display: block;
    margin: 1% auto;
    text-align: center;
}
.skills article a {
    text-decoration: underline;
}
.skills article a:hover,
.skills article a:active {
    text-decoration: none;
}
.skills article p {
    text-align: justify;
}
.skills article img {
    position: relative;
    /* top: 200px; */
    /* opacity: 0; */
    width: auto;
    height: 100px;
    max-height: 100px;
    border-radius: 5px;
}
/* In Viewport Slide */
/* .skills article img {
    top: 0;
    opacity: 1;
    transition:
        top 600ms ease-in,
        opacity 600ms ease-in;
} */

.skillset {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
@media all and (min-width: 486px) {
    .skillset article {
        max-width: 44%;
        margin: 1% 3%;
    }
}
@media all and (min-width: 1281px) {
    .skillset article {
        max-width: 29.3%;
        margin: 1% 2%;
    }
}

.skillimg {
    height: 100px;
}
</style>
