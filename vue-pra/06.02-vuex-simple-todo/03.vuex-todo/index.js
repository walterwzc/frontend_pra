const mapState = Vuex.mapState;
const mapMutations = Vuex.mapMutations;


const store = new Vuex.Store({
    state: {
        xtodoList: []
    },
    mutations: {
        addTodo(state, payload) {
            console.log('in addTodo');
            state.xtodoList.push(payload.item);
            console.log(state.xtodoList)
        },
        deleteTodo(state, payload) {
            console.log('in deleteToto');
            state.xtodoList.splice(payload.index, 1);
            console.log(state.xtodoList)
        }
    }
});


const vm = new Vue({
    el: '#app',
    store,
    data() {
        return {
            todoinput: ''
        }
    },
    methods: {
        ...mapMutations([
            'addTodo',
            'deleteTodo'
        ]),
        addItem (payload) {
            this.addTodo(payload);
            this.todoinput = '';
        },
        deleteItem(payload) {
            this.deleteTodo(payload);
        }
    },
    computed: {
        ...mapState([
            'xtodoList'
        ])
    }
});