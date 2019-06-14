<template>
    <section class="skills" v-in-viewport.once="{ margin: '-20% 0%' }">
        <div class="box">
            <h2>#Skills</h2>
            <hr />
        </div>
        <div class="skillset">
            <article>
                <div class="skillimg"><img src="/skills/javascript.png" /></div>
                <h3>Javascript</h3>
                <p>
                    Javascript durchlebt viele Veränderungen. Beim gegebenen Tempo ist es schwer, immer auf dem
                    Laufenden zu bleiben. Da Javascript aber gleichzeitig meine
                    <strong>Lieblingsdisziplin</strong> bildet, macht es
                    trotzdem Spaß! Egal ob React, Vue.js, Mithril oder Node.js: Sie kamen mir alle schon mal unter
                    die Tastatur...
                </p>
            </article>
            <article>
                <div class="skillimg"><img src="/skills/html_css.png" /></div>
                <h3>HTML+SCSS</h3>
                <p>
                    Zusammen mit Javascript bilden HTML und CSS den Dreiklang der Frontendentwicklung; SCSS rundet die Sache ab.
                    Mit einem Auge für Abstände, Farben und einem gezielten Maß an Animationen macht es mir immer wieder Spaß,
                    schöne, saubere & UX freundliche Designs zu entwickeln! Alles
                    <strong>responsive & mobile first</strong> natürlich...
                </p>
            </article>
            <article>
                <div class="skillimg"><img src="/skills/gcloud.png" /></div>
                <h3>Cloud</h3>
                <p>
                    Warum selbst hosten, wenn es andere besser können - z.B. Google. Cloud Computing mit
                    <strong>Firestore</strong> &
                    <strong>Cloud/Serverless Functions</strong> bringt das Backend as a Service und verkürzt die Entwicklungszeit.
                    Aber egal ob Google, AWS oder ein einfach Netlify: Es ist ein spannendes Thema!
                </p>
            </article>
            <article>
                <div class="skillimg"><img src="/skills/sql.png" /></div>
                <h3>SQL</h3>
                <p>
                    Geht es nicht ohne Backend, sind relationale Datenbanken oft nicht verkehrt, um Daten zu speichern.
                    Auch hiermit arbeite ich immer wieder gerne - z.B. um eine API zu entwickeln.
                </p>
            </article>
            <article>
                <div class="skillimg"><img src="/skills/orm.jpg" /></div>
                <h3>ORM</h3>
                <p>
                    Queries immer selbst schreiben? Nicht immer notwendig. Ein objektrelationle Mapping erleichtert das
                    Leben für Standardabfragen ungemein und verkürzt die Entwicklungszeit. In Node.js zum Beispiel Sequelize.
                </p>
            </article>
            <article>
                <div class="skillimg"><img src="/skills/restapi.png" /></div>
                <h3>REST</h3>
                <p>
                    Da Frontend und Backend heutzutage meist getrennt werden, findet die Datenübergabe bei mir meist
                    im <strong>JSON-Format</strong> als Teil einer REST-API statt. Gerade im Javascript-Umfeld bietet sich dadurch eine
                    einfache Schnittestelle, Daten auszutauschen.
                </p>
            </article>
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
.skills article p {
    text-align: justify;
}
.skills article img {
    position: relative;
    top: 200px;
    opacity: 0;
    width: auto;
    height: 100px;
    border-radius: 5px;
}
.skills.in-viewport article img {
    top: 0;
    opacity: 1;
    max-height: 100px;
    transition: 
        top 600ms ease-in, 
        opacity 600ms ease-in;
}

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