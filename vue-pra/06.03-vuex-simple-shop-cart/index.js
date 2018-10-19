const mapState = Vuex.mapState;
const mapMutations = Vuex.mapMutations;
const mapGetters = Vuex.mapGetters;
const mapActions = Vuex.mapActions;


const store = new Vuex.Store({
    state: {
        products: [
            {
                name: 'ipad 4 mini',
                inventory: 2,
                price: 500.01
            },
            {
                name: 'HT-T-Shirt',
                inventory: 10,
                price: 10.99
            },
            {
                name: 'Charli Xcc Sucker',
                inventory: 5,
                price: 19.99
            }
        ],
        buyList: []
    },
    mutations: {
        inventoryMinus(state, payload) {
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].name === payload.name) {
                    if (state.products[i].inventory > 0) {
                        state.products[i].inventory--;
                    }
                }
            }
        },
        buyListAdd(state, payload) {

            let existFlag = false;
            state.buyList.forEach((item, index) => {
                if (item.name === payload.productName) {
                    existFlag = true;
                }
            });

            if (existFlag) {
                state.buyList.forEach((item, index) => {
                    if (item.name === payload.productName) {
                        item.count++;
                    }
                })
            } else {
                const getPrice = state => {
                    for (let i = 0; i < state.products.length; i++) {
                        if (state.products[i].name === payload.productName) {
                            return state.products[i].price
                        }
                    }
                }
                state.buyList.push({name: payload.productName, count: 1, price: getPrice(state)});
            }
        }
    }
});



const vm = new Vue({
    el: '#app',
    store,
    data() {
        return {
            btnDisableValue: false
        }
    },
    methods: {
        ...mapMutations([
            'inventoryMinus',
            'buyListAdd'
        ]),
        addToCart(item) {
            this.inventoryMinus({name: item.name});
            this.buyListAdd({productName: item.name});
        },
        btnDisable(item) {
            for (let i = 0; i < this.products.length; i++) {
                // console.log(this.products[i]);
                if (this.products[i].name === item.name) {
                    const result =  this.products[i].inventory <= 0 ? true : false;
                    // console.log(this.products[i].inventory)
                    // console.log('result: ' + result)
                    return result;
                }
            }
        },
        changeBtnDisable() {
            const _this = this;
            setTimeout(function() {
                _this.btnDisableValue = true;
            }, 2000)
        }
    },
    computed: {
        ...mapState([
            'products',
            'buyList'
        ]),
        getTotalPrice () {
            let totalPrice = 0.0;
            for (let i = 0; i < this.buyList.length; i++) {
                totalPrice += this.buyList[i].price * this.buyList[i].count;
            }
            return Math.round(totalPrice * 100) / 100;
        }
    },
    created() {
        this.changeBtnDisable();
    }
});