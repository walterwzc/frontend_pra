<template>
    <div>
        <img class="avatar" src="../pics/t1.jpg" @click="clickImg($event)">
        <ImgView v-if="showImg" @hideMaskLayer="hideMaskLayer" :imgSrc="imgSrc"></ImgView>
    </div>
</template>
<script>
import ImgView from './imgView.vue'
export default {
    components: {
        ImgView
    },
    data() {
        return {
            showImg: false
        }
    },
    methods: {
        clickImg(e) {
            this.showImg = true
            this.imgSrc = e.currentTarget.src
        },
        hideMaskLayer() {
            this.showImg = false
        }
    }
}
</script>
<style scoped>
.avatar {
    width: 200px;
}
</style>
