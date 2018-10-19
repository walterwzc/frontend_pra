Vue.component('home-component', {
    template: '<div>Home Component</div>'
});

Vue.component('posts-component', {
    template: '<div>Posts Component</div>'
});

Vue.component('archieve-component', {
    template: '<div>Archieve Component</div>'
});

const vm = new Vue({
    el: '#app',
    data: function () {
        return {
            currentTab: 'Home',
            tabArr: ['Home', 'Posts', 'Archieve'],
            mybutton: 'mybutton'
        }
    },
    template: `
        <div>
            <button
                v-for="tab in tabArr"
                v-on:click="currentTab = tab"
                :class="['mybutton', {active: tab === currentTab}]"
            >{{tab}}</button>
            <component
                :is="getCurrComponent"
                class="component"
            ></component>
        </div>
    `,
    methods: {
        changeCurrTab(event) {
            this.currentTab = event.target.innerHTML
        }
    },
    computed: {
        getCurrComponent () {
            return this.currentTab.toLowerCase() + "-component"
        }
    }
})
