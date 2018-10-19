
const vm = new Vue({
    el: '#demo',
    data: {
        show: true
    },
    methods: {
        beforeEnter() {
            console.log('beforeEnter')
        },
        enter() {
            console.log('enter')
        },
        afterEnter() {
            console.log('afterEnter')
        },
        enterCancelled() {
            console.log('enterCancelled')
        },

        
        beforeLeave() {
            console.log('beforeLeave')
        },
        leave() {
            console.log('leave')
        },
        afterLeave() {
            console.log('afterLeave')
        },
        leaveCancelled() {
            console.log('leaveCancelled')
        }
    }
})
