<template>
    <div>
        <Header :user="user"></Header>
        <MainBody></MainBody>
        <Footer></Footer>
    </div>
</template>


<script>
import Header from './header.vue';
import MainBody from './mainbody.vue';
import Footer from './footer.vue'

export default {
    props: [],
    components: {
        Header,
        MainBody,
        Footer
    },
    data() {
        return {
            user: {
                name: '',
                age: 0
            }
        }
    },
    created() {
        const _this = this;
        setTimeout(function() {
            _this.user.name = 'walter';
            _this.user.age = 18;
        }, 4000);
    },
    watch: {
        message(newValue, oldValue) {
            console.log('newValue: ');
            console.log(newValue);

            console.log('oldValue: ');
            console.log(oldValue);
        }
    }
}
</script>

<style>

</style>


