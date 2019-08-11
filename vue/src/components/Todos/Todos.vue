<template>
  <div class="mt-3">
    <div v-if="message" :class="success ? 'alert alert-success': 'alert alert-danger'">{{ message }}</div>
    <Add @newTodoAdd="addTodo" />
    <ul class="list-group" v-if="todos.length">
      <Todo
        v-for="todo in todos"
        :key="todo._id"
        :todo="todo"
        @onTodoDelete="deleteTodo"
        @onTodoUpdate="updateTodo"
      />
    </ul>
    <div class="mt-5 mb-5" v-else>
      <p class="text-secondary text-center">No Todos...</p>
    </div>
  </div>
</template>

<script>
const BASEURL = "http://localhost:5000";
import axios from "axios";
import Todo from "./Todo";
import Add from "./Add";

export default {
  components: {
    Todo,
    Add
  },
  data() {
    return {
      todos: [],
      message: "",
      success: false
    };
  },
  methods: {
    async getTodos() {
      let { data } = await axios.get(`${BASEURL}/todos`);
      let res = data;
      if (res.status) {
        this.todos = res.todos;
      } else {
        this.initNotification(res);
      }
    },

    deleteTodo(res) {
      if (res.status) {
        this.todos = this.todos.filter(todo => todo._id != res.todo._id);
      }
      this.initNotification(res);
    },

    async updateTodo(res) {
      if (res.status) {
        this.getTodos();
      }
      this.initNotification(res);
    },

    addTodo(res) {
      this.todos = [res.todo, ...this.todos];
      this.initNotification(res);
    },

    initNotification(res) {
      this.message = res.message;
      this.success = res.status;
      setTimeout(() => {
        this.message = "";
        this.success = false;
      }, 3000);
    }
  },
  created() {
    this.getTodos();
  }
};
</script>

<style scoped>
.alert {
  border-radius: 0;
  color: #fff;
}
.alert-success {
  background: rgba(30, 132, 73);
}

.alert-danger {
  background: rgba(203, 67, 53);
}
</style>