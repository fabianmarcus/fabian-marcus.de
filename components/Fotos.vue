<template>
    <section class="fotos box" v-in-viewport.once="{ margin: '-20% 0%' }">
        <h2>#Ich.</h2>
        <hr />
        
        <div class="foto-liste">
            <a v-for="(image, imageIndex) in images" :key="imageIndex" class="foto" :class="`foto-${imageIndex+1}`">
                <img alt="Portrait imageIndex" :src="image" @click="index = imageIndex"/>
            </a>
        </div>

        <client-only>
            <gallery 
                :index="index" 
                :images="images" 
                @close="index = null">
            </gallery>
        </client-only>
    </section>
</template>

<script>
    export default {
        name: "Fotos",

        data() {
            return {
                images: [
                    '/bild-1.jpg',
                    '/bild-2.jpg',
                    '/bild-3.jpg',
                    '/bild-4.jpg'
                ],
                index: null
            };
        },
    };
</script>

<style lang="scss" scoped>
    .fotos {
        position: relative;
        overflow: hidden;
    }

    .foto-liste {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        > a {
            max-width: 49%;
            margin: 0 auto;
        }
        > a > img {
            max-width: 100%;
            border-radius: 10px;
            cursor: pointer;
        }
    }

    .foto {
        position: relative;
        
        img {
            opacity: 0;
        }
    }
    .fotos.in-viewport .foto {
        img {
            opacity: 1;
            transition: opacity 1s linear 250ms;
        }
    }

    /** Fotos aus Viewport herausschieben */
    .foto-1 { left: -200px; top: -200px; }
    .foto-3 { left: -200px; bottom: -200px; }
    .foto-2 { right: -200px; top: -200px; }
    .foto-4 { right: -200px; bottom: -200px;}

    /** Fotos einfliegen lassen */
    .fotos.in-viewport {
        .foto-1 {
            left: 0; top: 0;
            transition: left 1s ease-in, top 1s ease-in;
        }
        .foto-3 {
            left: 0; bottom: 0;
            transition: left 1s ease-in, bottom 1s ease-in;
        }
        .foto-2 {
            right: 0; top: 0;
            transition: right 1s ease-in, top 1s ease-in;
        }
        .foto-4 {
            right: 0; bottom: 0;
            transition: right 1s ease-in, bottom 1s ease-in;
        }
    }
</style>