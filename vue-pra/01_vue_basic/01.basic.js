
Vue.component('my-component', {
    props: ['content'],
    template: `<div>{{content}}</div>`
})


const vm = new Vue({
    el: '#app',
    data: function () {
        return {
            message: 'hello Vue',
            inputValue: 'default value',
            isShow: true,
            courses: ['HTML', 'CSS', 'Javascript'],
            num1: 123,
            num2: 456,
            stringInUrl: `urlurlinTheData`
        }
    },
    methods: {
        showMessage: function() {
            console.log(this.message);
        }
    },
    mounted() {
        const _this = this;
        setTimeout(function() {
            console.log('now mouted run!');
            _this.message = "changed value";
        }, 3000)
    },
    watch: {
        message(newVale, oldValue) {
            console.log('this.message changed');
            console.log('in the watch method, ' + newVale + " : " + oldValue);
        }
    }
})

vm.$watch('message', (newVale, oldValue) => {
    console.log('in vm.$watch');
    console.log(newVale + " : " + oldValue);
})