<template>
    <section class="intro">
        <client-only>
            <article class="box headliner">
                <h2>Fabian M. Marcus</h2>
                <p>
                    <vue-typer 
                        :repeat="0"
                        :pre-type-delay="1000"
                        text="Fachinformatiker für Anwendungsentwicklung">
                    </vue-typer><br />
                    <vue-typer
                        :repeat="0"
                        :pre-type-delay="4000"
                        text="Webentwickler,">
                    </vue-typer>
                    <span class="schwerpunkt">
                        <vue-typer 
                            :repeat="0"
                            :pre-type-delay="5000"
                            text="Schwerpunkt">
                        </vue-typer> 
                        <strong>
                            <vue-typer
                                :repeat="2"
                                :pre-erase-delay="2000"
                                :pre-type-delay="7000"
                                :text='["Frontend", "Backend", "Frontend"]'
                                erase-style='backspace'>
                            </vue-typer>
                        </strong>
                    </span>
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
        background: url("/intro-bg.jpg") center center;
        background-repeat: no-repeat;
        background-size: cover;
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
    .schwerpunkt {
        white-space: nowrap;
    }
</style>