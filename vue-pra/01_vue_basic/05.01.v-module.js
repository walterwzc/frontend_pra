
const vm = new Vue({
    el: '#app',
    data() {
        return {
            message: 'hello',
            uname: '',
            uname2: ''
        }
    },
    template: `
        <div className="register">
            <label for="username">使用 v-model 进行数据双向绑定</label>
            <input id="username" type="text" v-model="uname" />
            <div>绑定的结果是: {{uname}}</div>
            <br/>
            <hr/>
            <br/>
            <label for="username">不使用 v-model 数据双向绑定</label>
            <input id="username" type="text" @input="changeUserName" :value="uname2" />
            <div>绑定的结果是: {{uname2}}</div>
        </div>
        
    `,
    methods: {
        inputValue() {
            console.log('input');
        },
        changeUserName(e) {
            this.uname2 = e.target.value;
        }
    }
});