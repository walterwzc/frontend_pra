
const vm = new Vue({
    el: '#app',
    data: {
        isShow: true,
        flag: false,
        list1: [],
        list2: [1,2,3,4],
        vtext: `
            <ul>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </ul>
        `,
        vhtml: `
            <ul>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
            </ul>
        `
    },
    methods: {

    },
    mounted() {
        const _this = this;
        setTimeout(function() {
            console.log('in mounted');
            _this.isShow = false;
        }, 4000);
    }
})
