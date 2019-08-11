<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <Todos />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Todos from "./components/Todos/Todos";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
    Todos
  }
};
</script>

<style scoped>
</style>
