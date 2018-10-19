const BasicLayout = {
    template: `
        <div>
            <header>
                <slot name="headerslot"></slot>
            </header>
            <main>
                <slot>Default main slot</slot>
            </main>
            <footer>
                <slot name="footerslot"></slot>
            </footer>
        </div>
    `
}

const vm = new Vue({
    el: '#app',
    components: {
        BasicLayout
    }
})
