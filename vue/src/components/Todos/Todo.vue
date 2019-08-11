<template>
  <li class="list-group-item mt-2 mb-2">
    <div class="row">
      <div class="col-9">
        <p :class="todo.status ? 'todo-text' : ''">{{ todo.description }}</p>
        <div
          :class="
          todo.status
            ? 'badge badge-pill badge-success'
            : 'badge  badge-pill badge-danger'
        "
        >{{ todo.status ? "Completed" : "Pending" }}</div>
      </div>
      <div class="col-3">
        <button class="btn btn-danger mr-2" @click="deleteTodo()">✕</button>
        <button class="btn btn-info" @click="completeTodo()" :disabled="todo.status">✓</button>
      </div>
    </div>
  </li>
</template>

<script>
import axios from "axios";
export default {
  props: { todo: Object },
  methods: {
    async deleteTodo() {
      let { data } = await axios.delete(
        "http://localhost:5000/todos?id=" + this.todo._id
      );
      this.$emit("onTodoDelete", {
        todo: this.todo,
        message: data.message,
        status: data.status
      });
    },
    async completeTodo() {
      let { data } = await axios.put(
        "http://localhost:5000/todos?id=" + this.todo._id,
        {}
      );
      this.$emit("onTodoUpdate", {
        todo: this.todo,
        message: data.message,
        status: data.status
      });
    }
  }
};
</script>

<style scoped>
.list-group-item {
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.todo-text {
  text-decoration: line-through;
}
</style>