import Vue from 'vue'

import App from './components/app.vue'

new Vue({
    el: '#app',
    render: createElement => {
        return createElement(App);
    }
});