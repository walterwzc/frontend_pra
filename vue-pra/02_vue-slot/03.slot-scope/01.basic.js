const todos = [
    {id: 1000, text: 'aaaaaaaaaaaaaaa', isComplete: true},
    {id: 1001, text: 'bbbbbbbbbbbbbbb', isComplete: false},
    {id: 1002, text: 'ccccccccccccccc', isComplete: true},
    {id: 1003, text: 'ddddddddddddddd', isComplete: false}
];

const TodoList = {
    template: `
        <div>
            <h4>todo list</h4>
            <ul>
                <li
                    v-for="(todo, index) in todos"  v-bind:key="todo.id"
                >
                    <slot :todo="todo"></slot>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            todos: todos
        }
    }
}

const vm = new Vue({
    el: '#app',
    components: {
        TodoList
    },
    template: `
        <todo-list>
            <template slot-scope="slotProps">
                <span v-if="slotProps.todo.isComplete">✓</span>
                {{slotProps.todo.text}}
            </template>
        </todo-list>
    `
});



