
const vm = new Vue({
    el: '#app',
    data () {
        return {
            todoinput: '',
            todoList: []
        }
    },
    methods: {
        addTodo () {
            this.todoList.push(this.todoinput);
            this.todoinput = '';
        },
        deleteTodo(index) {
            this.todoList.splice(index, 1)
            console.log(index)
        }
    }
})