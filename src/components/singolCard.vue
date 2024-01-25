<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {

    },
    props: {
        card: Object
    }
}
</script>
<template>
<div class="col-2 text-black m-2  bg-warning text-center">
    <div class="img-container">
        <img :src="card.card_images[0].image_url" alt="">
    </div>
    <h3 class="text-center fs-5 ">
        {{ card.name }}
    </h3>
    <h6 class="text-center fs-6 ">
        {{ card.archetype }}
    </h6>
</div>
</template>
<style lang="scss" scoped>

.img-container{
    height: 200px;
    width: 100%;

    img{
        width: 100%;
        height: 100%;
    }
}
</style>
