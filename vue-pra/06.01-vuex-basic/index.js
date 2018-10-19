const mapState = Vuex.mapState;
const mapMutations = Vuex.mapMutations;
const mapGetters = Vuex.mapGetters;
const mapActions = Vuex.mapActions;


const store = new Vuex.Store({
    state: {
        count: [9,8,7],
        'message': 'Hello Vuex',
        stu: {'id': 1001, name: 'walter'},
        inputvuex: 'inputvuex'
    },
    mutations: {
        add: function (state) {
            state.count.push(Math.floor(Math.random() * 10) + 1);
        },
        remove: function (state) {
            state.count.pop();
        },
        setCount: function(state, payload) {
            state.count = state.count.concat(payload);
        },
        updateSubmodule: function(state, message) {
            state.submodule1.moduleName = message;
        }
    },
    getters: {
        countLength: function(state) {
            return state.count.length;
        },
        nowCountArray: function(state) {
            return state.count
        },
        sumCount: function(state) {
            return state.count.reduce((n1, n2) => n1 + n2, 0)
        },
        // 保留两位小数
        averageCount: function(state, getter) {
            return parseInt(getter.sumCount / getter.countLength * 100, 10) / 100
        }
    },
    actions: {
        getInitCount: function(context) {
            // console.log(context)
            axios('http://localhost:8080/api/data')
                .then(result => {
                    context.commit('setCount', result.data);
                })
        }
    },
    modules: {
        submodule1: {
            namespaced: true,
            state: {
                moduleName: 'SubModuleAAA'
            }
        }
    }
});


console.log(store)


const vm = new Vue({
    el: '#app',
    store: store,
    template: `
        <div>
            <div style="fontWeight: bold">The default state value in store cant get from mapState:</div>
            <div>{{count}}</div>
            <div>message</div>
            <div>stu</div>
            <hr/>
            <div style="fontWeight: bold">below value is from mapGetters</div>
            <div>The count in the array is {{countLength}}</div>
            <div>The total summary number is {{sumCount}}</div>
            <div>The averageCount is {{averageCount}}</div>
            <hr/>
            <div>Operations:</div>
            <button @click="add">Add</button>{{    }}
            <button @click="remove">Remove</button>
            <button @click="getInitCount">Get Data From Server</button>
            <hr/>
            <div style="fontWeight: bold">之下是一个input 和 vuex 的 submodule的双向绑定：</div>
            <input type="text" :value="subModuleName" @input="updateSubmodule"/>
        </div>
    `,
    computed: {
        ...mapState([
            'count',
            'message',
            'stu',
            'inputvuex'
        ]),
        // submodle
        ...mapState({
            subModuleName: state => state.submodule1.moduleName
        }),
        ...mapGetters([
            'countLength',
            'sumCount',
            'averageCount'
        ]),
    },
    methods: {
        ...mapMutations([
            'add',
            'remove'
        ]),
        ...mapActions([
            'getInitCount'
        ]),
        updateSubmodule: function(event) {
            this.$store.commit('updateSubmodule', event.target.value);
        }
    },
    created() {
        this.$store.dispatch('getInitCount');
    }
})