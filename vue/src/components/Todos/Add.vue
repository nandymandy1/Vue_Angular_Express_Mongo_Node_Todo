<template>
  <div class="card mt-2 mb-2">
    <div class="card-header">
      <h3 class="text-white">Add Todo</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="addNewTodo()">
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" placeholder="Description" v-model="description" />
        </div>
        <input type="submit" class="btn btn-add" value="Add Todo" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      description: ""
    };
  },
  methods: {
    async addNewTodo() {
      let { data } = await axios.post("http://localhost:5000/todos", {
        description: this.description
      });
      if (data.status) {
        this.description = "";
      }
      this.$emit("newTodoAdd", data);
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 0;
}
.card-header {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.4);
}
.form-control {
  border-radius: 0;
}
.btn-add {
  color: #fff;
  border-radius: 0;
  background: rgba(30, 132, 73, 0.9);
}
</style>