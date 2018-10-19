<template>
    <div class="mask-wrap" @click="hideMaskLayer">
        <div class="maskLayer"></div>
        <img :src="imgSrc">
    </div>
</template>
<script>
export default {
    props: ['imgSrc'],
    methods: {
        hideMaskLayer() {
            this.$emit('hideMaskLayer')
        }
    }
}
</script>
<style scoped>

.mask-wrap {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
}

.mask-wrap > .maskLayer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.mask-wrap > img {
    width: 100%;
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
</style>