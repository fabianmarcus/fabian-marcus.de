<template>
    <section class="box fotos">
        <h2>#Ich.</h2>
        <div class="foto-images">
            <a v-for="(image, imageIndex) in images" :key="imageIndex">
                <img alt="Portrait imageIndex" :src="image" @click="index = imageIndex" />
            </a>
        </div>

        <no-ssr>
            <gallery 
                :index="index" 
                :images="images" 
                @close="index = null">
            </gallery>
        </no-ssr>
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

<style scoped>
    .foto-images {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .foto-images > a {
        max-width: 49%;
        margin: auto;
    }
    .foto-images > a > img {
        max-width: 100%;
        border-radius: 10px;
        cursor: pointer;
    }
</style>