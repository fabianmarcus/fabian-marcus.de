<template>
    <section class="impressum" v-in-viewport.once="{ margin: '-20% 0%' }">
        <client-only>
            <div class="box">
                <article class="kontakt">
                    <h2>#Impressum</h2>
                    <p class="el-1">
                        Sebastianstr. 76<br />
                        53115 Bonn
                    </p>
                    <p class="el-2">
                        <a href="tel:0163 / 30 60 438">0163 30 60 438</a><br />
                        <a href="mailto:web@fabian-marcus.de">web@fabian-marcus.de</a>
                    </p>
                    <a class="el-3" href="https://www.fabian-marcus.de" target="_blank">www.fabian-marcus.de</a><br />
                    <a class="el-4" href="https://twitter.com/FabeBN" target="_blank">Twitter,</a>
                    <a class="el-5" href="https://dev.to/fabebn" target="_blank">dev.to,</a>
                    <a class="el-6" href="https://github.com/fabianmarcus" target="_blank">Github</a><br />

                    <a class="el-7" href="https://stackoverflow.com/users/10191006/fabian" target="_blank">Stackoverflow,</a>
                    <a class="el-8" href="https://stackshare.io/fabianmarcus" target="_blank">Stackshare</a><br />
                    
                    <a class="el-9" href="https://www.xing.com/profile/Fabian_Marcus" target="_blank">Xing,</a>
                    <a class="el-10" href="https://www.linkedin.com/in/fabian-marcus-19723ab0" target="_blank">LinkedIn</a><br />
                    
                    <a class="el-11 geloescht">Facebook (gelöscht)</a>
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
    position: relative;
    overflow: hidden;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    background: url('/kontakt.jpg') center center no-repeat;
    background-size: cover;
}

.box {
    padding: 0;
} 

.kontakt {
    position: relative;
    display: table-cell;
    vertical-align: bottom;
    overflow: hidden;
    padding: 2rem 2rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
}
.kontakt a {
    display: inline-block;
    margin-bottom: 0.25rem;
    color: white;
}

/** 
 * Kontaktinfos ausblenden bzw.
 * aus Viewport schieben
 **/
.kontakt > a,
.kontakt > p {
    position: relative;
    opacity: 0;
    left: -250px;
}

/** Element der Reihe nach einblenden lassen */
@for $i from 1 through 15 {
    .in-viewport .kontakt > .el-#{$i} {
        left: 0;
        opacity: 1;
        transition: 
            left 0.3s ease-in 0.1s*$i,
            opacity 0.3s ease-in 0.1s*$i;
    }
}

.geloescht {
    text-decoration: line-through;
}
</style>