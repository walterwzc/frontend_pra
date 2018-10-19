import Vue from 'vue'
import Router from 'vue-router'

import App from './components/app.vue'

import collapse from './components/js-展开收起/collapse.vue';

Vue.use(Router);

new Vue({
    el: '#app',
    render: createElement => {
        return createElement(collapse);
    }
});