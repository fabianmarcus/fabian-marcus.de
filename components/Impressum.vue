<template>
    <section class="impressum">
        <client-only>
            <div class="box">
                <article class="kontakt">
                    <h2># Impressum</h2>
                    <p class="el-1">
                        Theresienau 11<br />
                        53227 Bonn<br />
                    </p>
                    <p class="el-2">
                        <a href="tel:0163 / 30 60 438">0163 30 60 438</a><br />
                        <a href="mailto:web@fabian-marcus.de">web@fabian-marcus.de</a>
                    </p>

                    <ul class="links">
                        <li><a class="el-3" href="https://www.fabian-marcus.de" target="_blank">https://fabian-marcus.de</a></li>
                        <li><a class="el-4" href="http://cv.fabian-marcus.de" target="_blank">http://cv.fabian-marcus.de</a></li>
                        <li><a class="el-11" href="https://www.linkedin.com/in/fabian-marcus-19723ab0" target="_blank">LinkedIn</a></li>
                        <li><a class="el-10" href="https://www.xing.com/profile/Fabian_Marcus" target="_blank">Xing</a></li>
                        <li><a class="el-7" href="https://github.com/fabianmarcus" target="_blank">Github</a></li>
                        <li><a class="el-8" href="https://stackoverflow.com/users/10191006/fabian" target="_blank">Stackoverflow</a></li>
                        <li><a class="el-9" href="https://stackshare.io/fabianmarcus" target="_blank">Stackshare</a></li>
                    </ul>
                </article>
            </div>
        </client-only>
    </section>
</template>

<script>
export default {
    name: 'Impressum',
}
</script>

<style lang="scss" scoped>
.impressum {
    overflow: hidden;
    position: relative;
    background-size: cover;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    background: url('/kontakt.jpg') center center no-repeat;
}

.box {
    padding: 0;
}

.kontakt {
    color: white;
    overflow: hidden;
    position: relative;
    display: table-cell;
    padding: 2rem 2rem;
    vertical-align: bottom;
    background-color: rgba(0, 0, 0, 0.8);
}

.kontakt ul.links {
    list-style: none;
    padding: 0;
    margin: 0;
}
.kontakt .links a {
    display: block;
    color: white;
    margin-bottom: 0.25rem;
}

/**
 * Kontaktinfos ausblenden bzw.
 * aus Viewport schieben
 **/
// .kontakt > a,
// .kontakt > p {
//     position: relative;
//     opacity: 0;
//     left: -250px;
// }

/** Element der Reihe nach einblenden lassen */
// @for $i from 1 through 15 {
//     .in-viewport .kontakt > .el-#{$i} {
//         left: 0;
//         opacity: 1;
//         transition:
//             left 0.3s ease-in 0.1s*$i,
//             opacity 0.3s ease-in 0.1s*$i;
//     }
// }
</style>
