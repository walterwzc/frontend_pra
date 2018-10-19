Vue.component('error-data', {
    template: `
        <div class="error">
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `,
})

const vm = new Vue({
    el: '#app',
    data: function () {
        return {
        }
    }
})
