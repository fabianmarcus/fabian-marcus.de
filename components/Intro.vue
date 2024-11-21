<template>
    <section class="intro">
        <client-only>
            <article class="box headliner">
                <h2>Fabian M. Marcus</h2>
                <p>
                    Fachinformatiker AWE<br />
                    Webentwickler, <span class="nowrap">Schwerpunkt <strong>Frontend</strong></span>
                </p>
            </article>
        </client-only>
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
        border-bottom: 2px solid black;
        background: url('/intro-bg.S.jpg') center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media all and (min-width: 675px) {
        .intro {
            background: url('/intro-bg.jpg') center center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
    @media all and (min-width: 1280px) {
        .intro {
            background: url('/intro-bg.XL.jpg') center center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .headliner {
        color: black;
        border-radius: 8px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.7);
    }
    .headliner h2 {
        margin-top: 0.3rem;
    }
    .headliner p {
        margin: 1rem 0;
        font-size: 1.3rem;
    }
    .nowrap {
        white-space: nowrap;
    }
</style>
