
const vm = new Vue({
    el: '#app',
    data: {
        ifValue: true,
        showValue: true,
        message: 'Hello Vue'
    },
    methods: {

    },
    mounted() {
        const _this = this;
        setTimeout(function() {
            _this.ifValue = false;
            _this.showValue = false;
        }, 2000)
    }
})
