<template>
    <section class="impressum" id="impressum">
        <div class="parallax" v-in-viewport="-400">
            <img src="/kontakt.jpg" class="background"/>
        </div>
        <div class="box">
            <article class="kontakt">
                <h2>#Impressum</h2>
                <p>
                    Sebastianstr. 76<br />
                    53115 Bonn
                </p>
                <p>
                    <a href="tel:0163 / 30 60 438">0163 30 60 438</a><br />
                    <a href="mailto:web@fabian-marcus.de">web@fabian-marcus.de</a>
                </p>
                <p>
                    <a href="https://www.fabian-marcus.de" target="_blank">www.fabian-marcus.de</a><br />
                    <a href="https://blog.fabian-marcus.de" target="_blank">blog.fabian-marcus.de</a><br />
                    <a href="https://twitter.com/FabeBN" target="_blank">Twitter</a><br />
                    <a href="https://www.xing.com/profile/Fabian_Marcus" target="_blank">Xing</a><br />
                    <a href="https://www.linkedin.com/in/fabian-marcus-19723ab0" target="_blank">LinkedIn</a><br />
                    <span class="deleted">Facebook (gelöscht)</span>
                </p>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Impressum',

    mounted() {
        this.parallax()
    },

    methods: {
        parallax() {
            const container = document.querySelector('#impressum')
            console.log(container.offsetTop)
        }
    }
}
</script>

<style scoped>
    .impressum {
        position: relative;
        overflow: hidden;
        padding: 4rem 1rem;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
    }

    .background {
        position: absolute;
        top: 50%;
        left: 55%;
        transform: translate(-55%, -50%);
        transition: width 500ms ease-in;
        z-index: -1;
    }

    .kontakt {
        display: block;
        padding: 2rem 2rem;
        color: white;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .kontakt a {
        display: inline-block;
        margin-bottom: 0.25rem;
        color: white;
    }
    @media all and (min-width: 675px) {
        .kontakt {
            display: inline-block;
        }
    }

    .deleted {
        text-decoration: line-through;
    }
</style>