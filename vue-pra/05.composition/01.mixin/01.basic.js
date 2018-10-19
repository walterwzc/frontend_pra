const mixin = {
    created () {
        this.hello();
    },
    methods: {
        hello() {
            console.log('Hello')
        }
    }
}

const Component = Vue.extend({
    mixins: [mixin]
})

const component = new Component();

component.hello();


const vm = new Vue({
    el: '#demo',
    data: {
        show: true
    }
})
